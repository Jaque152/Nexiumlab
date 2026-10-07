"use client";

import {
  useState,
  useRef,
  useEffect,
  FormEvent,
} from "react";

import { toast } from "sonner";
import {
  CheckCircle2,
  Loader2,
  Send,
} from "lucide-react";

import { useLanguage } from "@/lib/language-context";
import { processContact } from "@/app/actions/contact";

// ======================================================
// ANTI-SPAM
// ======================================================

const INVALID_PHONE_PATTERNS = [
  "0000000000",
  "1111111111",
  "2222222222",
  "3333333333",
  "4444444444",
  "5555555555",
  "6666666666",
  "7777777777",
  "8888888888",
  "9999999999",
  "1234567890",
  "0987654321",
];

function isGibberishText(text: string): boolean {
  const clean = text.trim();

  if (clean.length < 2) return true;

  if (/https?:\/\//i.test(clean)) {
    return true;
  }

  const words = clean.split(/\s+/);

  return words.some(
    (word) =>
      word.length > 6 &&
      !/[aeiouáéíóúy]/i.test(word)
  );
}

function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");

  if (digits.length !== 10) {
    return false;
  }

  if (INVALID_PHONE_PATTERNS.includes(digits)) {
    return false;
  }

  return true;
}

// ======================================================
// TIPOS
// ======================================================

type Fields =
  | "nombre"
  | "correo"
  | "telefono"
  | "asunto"
  | "mensaje"
  | "website_hp";

type FormState = Record<Fields, string>;

const EMPTY: FormState = {
  nombre: "",
  correo: "",
  telefono: "",
  asunto: "",
  mensaje: "",
  website_hp: "",
};

// ======================================================
// COMPONENTE
// ======================================================

export function ContactForm() {
  const { t, lang } = useLanguage();

  const [form, setForm] =
    useState<FormState>(EMPTY);

  const [errors, setErrors] =
    useState<Partial<FormState>>({});

  const [loading, setLoading] =
    useState(false);

  const [sent, setSent] =
    useState(false);

  const mountTimeRef =
    useRef<number>(0);

  useEffect(() => {
    mountTimeRef.current = Date.now();
  }, []);

  // ======================================================
  // ACTUALIZAR CAMPOS
  // ======================================================

  const update = (
    k: Fields,
    v: string
  ) => {
    setForm((f) => ({
      ...f,
      [k]: v,
    }));

    if (errors[k]) {
      setErrors((e) => ({
        ...e,
        [k]: undefined,
      }));
    }
  };

  // ======================================================
  // TELÉFONO
  // ======================================================

  const handlePhoneChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const digitsOnly =
      e.target.value
        .replace(/\D/g, "")
        .slice(0, 10);

    update(
      "telefono",
      digitsOnly
    );
  };

  // ======================================================
  // VALIDAR
  // ======================================================

  const validate = () => {
    const e: Partial<FormState> = {};

    if (
      !form.nombre.trim() ||
      isGibberishText(form.nombre)
    ) {
      e.nombre =
        t.contact.errName;
    }

    if (
      !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(
        form.correo.trim()
      )
    ) {
      e.correo =
        t.contact.errEmail;
    }

    if (
      !isValidPhone(
        form.telefono
      )
    ) {
      e.telefono =
        lang === "es"
          ? "Teléfono inválido"
          : "Invalid phone";
    }

    if (
      !form.mensaje.trim() ||
      form.mensaje.trim().length < 5
    ) {
      e.mensaje =
        t.contact.errMsg;
    }

    if (
      /https?:\/\//i.test(
        form.mensaje
      )
    ) {
      e.mensaje =
        lang === "es"
          ? "No se permiten enlaces"
          : "Links are not allowed";
    }

    setErrors(e);

    return (
      Object.keys(e).length === 0
    );
  };

  // ======================================================
  // ENVIAR
  // ======================================================

  const handleSubmit = async (
    ev: FormEvent
  ) => {
    ev.preventDefault();

    if (loading) {
      return;
    }

    // ====================================================
    // HONEYPOT
    // ====================================================

    if (
      form.website_hp
    ) {
      console.warn(
        "[Contact] Honeypot activado."
      );

      return;
    }

    // ====================================================
    // PROTECCIÓN ENVÍO DEMASIADO RÁPIDO
    // ====================================================

    const elapsedSeconds =
      (
        Date.now() -
        mountTimeRef.current
      ) / 1000;

    if (
      elapsedSeconds < 2.5
    ) {
      console.warn(
        `[Contact] Formulario enviado demasiado rápido: ${elapsedSeconds.toFixed(
          2
        )} segundos`
      );

      toast.error(
        lang === "es"
          ? "Espera un momento"
          : "Please wait",
        {
          description:
            lang === "es"
              ? "El formulario fue enviado demasiado rápido. Intenta nuevamente."
              : "The form was submitted too quickly. Please try again.",
        }
      );

      return;
    }

    // ====================================================
    // VALIDACIÓN
    // ====================================================

    if (!validate()) {
      toast.error(
        t.contact.toastTitle,
        {
          description:
            t.contact.toastDesc,
        }
      );

      return;
    }

    setLoading(true);

    try {
      const {
        website_hp,
        ...payload
      } = form;

      console.log(
        "[Contact] Enviando formulario..."
      );

      const result =
        await processContact({
          form: payload,
          lang,
        });

      console.log(
        "[Contact] Resultado processContact:",
        result
      );

      if (
        result.success
      ) {
        console.log(
          "[Contact] ✅ Envío completado:",
          {
            clientEmailId:
              result.clientEmailId,
            adminEmailId:
              result.adminEmailId,
          }
        );

        setSent(true);

        toast.success(
          t.contact.sentToastTitle,
          {
            description:
              t.contact.sentToastDesc,
          }
        );

        mountTimeRef.current =
          Date.now();
      } else {
        console.error(
          "[Contact] ❌ Error:",
          result.error
        );

        toast.error(
          lang === "es"
            ? "Error al enviar"
            : "Send error",
          {
            description:
              result.error ||
              (
                lang === "es"
                  ? "No fue posible enviar el mensaje."
                  : "The message could not be sent."
              ),
          }
        );
      }
    } catch (
      error
    ) {
      console.error(
        "[Contact] Error inesperado:",
        error
      );

      toast.error(
        lang === "es"
          ? "Error al enviar"
          : "Send error",
        {
          description:
            lang === "es"
              ? "Ocurrió un error inesperado al enviar el formulario."
              : "An unexpected error occurred while sending the form.",
        }
      );
    } finally {
      setLoading(false);
    }
  };

  // ======================================================
  // ESTADO ENVIADO
  // ======================================================

  if (sent) {
    return (
      <div className="flex min-h-[500px] flex-col items-center justify-center rounded-[2.5rem] border border-slate-100 bg-white p-12 text-center shadow-xl">
        <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-green-50">
          <CheckCircle2 className="h-12 w-12 text-green-500" />
        </div>

        <h3 className="mb-4 text-3xl font-extrabold text-slate-900">
          {t.contact.successTitle}
        </h3>

        <p className="mb-8 max-w-sm leading-relaxed text-slate-600">
          {t.contact.successDesc}
        </p>

        <button
          type="button"
          onClick={() => {
            setForm(EMPTY);
            setErrors({});
            setSent(false);

            mountTimeRef.current =
              Date.now();
          }}
          className="rounded-full bg-slate-100 px-8 py-3 font-bold text-slate-700 transition-colors hover:bg-slate-200"
        >
          {t.contact.sendAnother}
        </button>
      </div>
    );
  }

  // ======================================================
  // ESTILOS
  // ======================================================

  const inputBaseClasses =
    "w-full rounded-2xl bg-slate-50 border border-slate-200 px-5 py-4 text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10";

  // ======================================================
  // FORMULARIO
  // ======================================================

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="relative overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-xl sm:p-12"
    >
      <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-indigo-500 to-blue-500" />

      {/* HONEYPOT */}
      <div
        className="absolute -left-[9999px] top-0"
        aria-hidden="true"
      >
        <input
          type="text"
          name="website_hp"
          autoComplete="off"
          tabIndex={-1}
          value={
            form.website_hp
          }
          onChange={(e) =>
            update(
              "website_hp",
              e.target.value
            )
          }
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">

        {/* NOMBRE */}
        <div className="sm:col-span-2">
          <label className="mb-2 ml-1 block text-sm font-bold text-slate-700">
            {t.contact.fullName}
          </label>

          <input
            type="text"
            className={
              inputBaseClasses
            }
            value={
              form.nombre
            }
            onChange={(e) =>
              update(
                "nombre",
                e.target.value
              )
            }
            placeholder={
              t.contact
                .namePlaceholder
            }
          />

          {errors.nombre && (
            <p className="ml-1 mt-2 text-xs font-semibold text-red-500">
              {
                errors.nombre
              }
            </p>
          )}
        </div>

        {/* CORREO */}
        <div>
          <label className="mb-2 ml-1 block text-sm font-bold text-slate-700">
            {t.contact.email}
          </label>

          <input
            type="email"
            className={
              inputBaseClasses
            }
            value={
              form.correo
            }
            onChange={(e) =>
              update(
                "correo",
                e.target.value
              )
            }
            placeholder={
              t.contact
                .emailPlaceholder
            }
          />

          {errors.correo && (
            <p className="ml-1 mt-2 text-xs font-semibold text-red-500">
              {
                errors.correo
              }
            </p>
          )}
        </div>

        {/* TELÉFONO */}
        <div>
          <label className="mb-2 ml-1 block text-sm font-bold text-slate-700">
            {t.contact.phone}
          </label>

          <input
            type="tel"
            className={
              inputBaseClasses
            }
            value={
              form.telefono
            }
            onChange={
              handlePhoneChange
            }
            placeholder={
              t.contact
                .phonePlaceholder
            }
            maxLength={10}
          />

          {errors.telefono && (
            <p className="ml-1 mt-2 text-xs font-semibold text-red-500">
              {
                errors.telefono
              }
            </p>
          )}
        </div>

        {/* ASUNTO */}
        <div className="sm:col-span-2">
          <label className="mb-2 ml-1 block text-sm font-bold text-slate-700">
            {t.contact.subject}
          </label>

          <input
            type="text"
            className={
              inputBaseClasses
            }
            value={
              form.asunto
            }
            onChange={(e) =>
              update(
                "asunto",
                e.target.value
              )
            }
            placeholder={
              t.contact
                .subjectPlaceholder
            }
          />
        </div>

        {/* MENSAJE */}
        <div className="sm:col-span-2">
          <label className="mb-2 ml-1 block text-sm font-bold text-slate-700">
            {t.contact.message}
          </label>

          <textarea
            className={`${inputBaseClasses} min-h-[150px] resize-none`}
            value={
              form.mensaje
            }
            onChange={(e) =>
              update(
                "mensaje",
                e.target.value
              )
            }
            placeholder={
              t.contact
                .msgPlaceholder
            }
          />

          {errors.mensaje && (
            <p className="ml-1 mt-2 text-xs font-semibold text-red-500">
              {
                errors.mensaje
              }
            </p>
          )}
        </div>
      </div>

      {/* BOTÓN */}
      <button
        type="submit"
        disabled={loading}
        className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-indigo-600 py-5 font-bold text-white shadow-lg shadow-indigo-200 transition-all hover:scale-[1.01] hover:bg-indigo-700 hover:shadow-xl active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
      >
        {loading ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            {t.contact.sending}
          </>
        ) : (
          <>
            {t.contact.submitBtn}
            <Send className="ml-1 h-5 w-5" />
          </>
        )}
      </button>
    </form>
  );
}
