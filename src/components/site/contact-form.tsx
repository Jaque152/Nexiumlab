"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { toast } from "sonner";
import { ArrowRight, CheckCircle2, Loader2, Send } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { processContact } from "@/app/actions/contact";

// --- ANTI-SPAM UTILS (Se mantienen iguales por seguridad) ---
const INVALID_PHONE_PATTERNS = ["0000000000", "1111111111", "2222222222", "3333333333", "4444444444", "5555555555", "6666666666", "7777777777", "8888888888", "9999999999", "1234567890", "0987654321"];
function isGibberishText(text: string): boolean { const clean = text.trim(); if (clean.length < 2) return true; if (/https?:\/\//i.test(clean)) return true; const words = clean.split(/\s+/); return words.some((word) => word.length > 6 && !/[aeiouáéíóúy]/i.test(word)); }
function isValidPhone(phone: string): boolean { const digits = phone.replace(/\D/g, ""); if (digits.length !== 10) return false; if (INVALID_PHONE_PATTERNS.includes(digits)) return false; return true; }
// -----------------------

type Fields = "nombre" | "correo" | "telefono" | "asunto" | "mensaje" | "website_hp";
type FormState = Record<Fields, string>;

const EMPTY: FormState = { nombre: "", correo: "", telefono: "", asunto: "", mensaje: "", website_hp: "" };

export function ContactForm() {
  const { t, lang } = useLanguage();
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const mountTimeRef = useRef<number>(0);

  useEffect(() => { mountTimeRef.current = Date.now(); }, []);

  const update = (k: Fields, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, 10);
    update("telefono", digitsOnly);
  };

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.nombre.trim() || isGibberishText(form.nombre)) e.nombre = t.contact.errName;
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.correo)) e.correo = t.contact.errEmail;
    if (!isValidPhone(form.telefono)) e.telefono = lang === "es" ? "Teléfono inválido" : "Invalid phone";
    if (!form.mensaje.trim() || form.mensaje.trim().length < 5) e.mensaje = t.contact.errMsg;
    if (/https?:\/\//i.test(form.mensaje)) e.mensaje = lang === "es" ? "Sin enlaces" : "No links";
    
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (loading) return;

    if (form.website_hp || (Date.now() - mountTimeRef.current) / 1000 < 2.5) {
      setSent(true); setTimeout(() => setSent(false), 4000); return;
    }

    if (!validate()) { toast.error(t.contact.toastTitle, { description: t.contact.toastDesc }); return; }
    
    setLoading(true);
    const { website_hp, ...payload } = form;
    const result = await processContact({ form: payload, lang });
    setLoading(false);

    if (result.success) {
      setSent(true);
      toast.success(t.contact.sentToastTitle, { description: t.contact.sentToastDesc });
      mountTimeRef.current = Date.now();
    } else {
      toast.error("Error", { description: "Hubo un problema de conexión." });
    }
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-[2.5rem] bg-white p-12 text-center shadow-xl border border-slate-100 min-h-[500px]">
        <div className="h-24 w-24 rounded-full bg-green-50 flex items-center justify-center mb-8">
          <CheckCircle2 className="h-12 w-12 text-green-500" />
        </div>
        <h3 className="text-3xl font-extrabold text-slate-900 mb-4">{t.contact.successTitle}</h3>
        <p className="text-slate-600 leading-relaxed mb-8 max-w-sm">
          {t.contact.successDesc}
        </p>
        <button 
          onClick={() => { setForm(EMPTY); setSent(false); mountTimeRef.current = Date.now(); }}
          className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 px-8 rounded-full transition-colors"
        >
          {t.contact.sendAnother}
        </button>
      </div>
    );
  }

  // Clases compartidas para los inputs (Clean SaaS Look)
  const inputBaseClasses = "w-full rounded-2xl bg-slate-50 border border-slate-200 px-5 py-4 text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10";

  return (
    <form onSubmit={handleSubmit} noValidate className="bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-xl border border-slate-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-500 to-blue-500" />
      
      <div className="absolute -left-[9999px] top-0" aria-hidden="true" tabIndex={-1}>
        <input type="text" name="website_hp" autoComplete="off" value={form.website_hp} onChange={(e) => update("website_hp", e.target.value)} />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">{t.contact.fullName}</label>
          <input className={inputBaseClasses} value={form.nombre} onChange={(e) => update("nombre", e.target.value)} placeholder={t.contact.namePlaceholder} />
          {errors.nombre && <p className="mt-2 text-xs font-semibold text-red-500 ml-1">{errors.nombre}</p>}
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">{t.contact.email}</label>
          <input type="email" className={inputBaseClasses} value={form.correo} onChange={(e) => update("correo", e.target.value)} placeholder={t.contact.emailPlaceholder} />
          {errors.correo && <p className="mt-2 text-xs font-semibold text-red-500 ml-1">{errors.correo}</p>}
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">{t.contact.phone}</label>
          <input type="tel" className={inputBaseClasses} value={form.telefono} onChange={handlePhoneChange} placeholder={t.contact.phonePlaceholder} maxLength={10} />
          {errors.telefono && <p className="mt-2 text-xs font-semibold text-red-500 ml-1">{errors.telefono}</p>}
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">{t.contact.subject}</label>
          <input className={inputBaseClasses} value={form.asunto} onChange={(e) => update("asunto", e.target.value)} placeholder={t.contact.subjectPlaceholder} />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">{t.contact.message}</label>
          <textarea className={`${inputBaseClasses} resize-none min-h-[150px]`} value={form.mensaje} onChange={(e) => update("mensaje", e.target.value)} placeholder={t.contact.msgPlaceholder} />
          {errors.mensaje && <p className="mt-2 text-xs font-semibold text-red-500 ml-1">{errors.mensaje}</p>}
        </div>
      </div>

      <button 
        type="submit" 
        disabled={loading}
        className="mt-8 w-full flex items-center justify-center gap-2 bg-indigo-600 text-white hover:bg-indigo-700 font-bold rounded-2xl py-5 shadow-lg shadow-indigo-200 transition-all hover:scale-[1.01] hover:shadow-xl active:scale-[0.98]" 
      >
        {loading ? (
          <><Loader2 className="h-5 w-5 animate-spin" /> {t.contact.sending}</>
        ) : (
          <>{t.contact.submitBtn} <Send className="h-5 w-5 ml-1" /></>
        )}
      </button>
    </form>
  );
}