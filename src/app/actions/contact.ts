"use server";

import { Resend } from "resend";

export interface ContactFormState {
  nombre: string;
  correo: string;
  telefono: string;
  asunto: string;
  mensaje: string;
}

export interface ContactPayload {
  form: ContactFormState;
  lang: "es" | "en";
}

export async function processContact(payload: ContactPayload) {
  try {
    // ======================================================
    // VALIDAR RESEND API KEY
    // ======================================================

    if (!process.env.RESEND_API_KEY) {
      console.error("❌ RESEND_API_KEY no está configurada.");

      return {
        success: false,
        error: "RESEND_API_KEY no está configurada en el servidor.",
      };
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { form, lang } = payload;

    const adminEmail = "consulta@nexiumlab.com.mx";
    const senderEmail = "NexiumLab <consulta@nexiumlab.com.mx>";

    // ======================================================
    // VALIDACIONES DE SERVIDOR
    // ======================================================

    if (!form.nombre?.trim()) {
      return {
        success: false,
        error: "El nombre es obligatorio.",
      };
    }

    if (!form.correo?.trim()) {
      return {
        success: false,
        error: "El correo electrónico es obligatorio.",
      };
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo.trim())) {
      return {
        success: false,
        error: "El correo electrónico no es válido.",
      };
    }

    if (!form.mensaje?.trim()) {
      return {
        success: false,
        error: "El mensaje es obligatorio.",
      };
    }

    console.log("==========================================");
    console.log("📨 NUEVO FORMULARIO DE CONTACTO");
    console.log("Nombre:", form.nombre);
    console.log("Correo:", form.correo);
    console.log("Teléfono:", form.telefono);
    console.log("Asunto:", form.asunto);
    console.log("==========================================");

    // ======================================================
    // TEXTOS
    // ======================================================

    const texts = {
      es: {
        subjectClient: "Hemos recibido tu mensaje - NexiumLab",
        subjectAdmin: `Nuevo mensaje de contacto: ${form.nombre}`,
        title: "¡Gracias por contactarnos!",
        hello: "Hola",
        intro:
          "Hemos recibido tu mensaje. Revisaremos los detalles de tu proyecto y nos pondremos en contacto contigo lo antes posible para enviarte una propuesta personalizada.",
        details: "Detalles de tu mensaje:",
        name: "Nombre:",
        email: "Email:",
        phone: "Teléfono:",
        subject: "Asunto:",
        message: "Mensaje:",
        footer: "NexiumLab.",
      },

      en: {
        subjectClient: "We have received your message - NexiumLab",
        subjectAdmin: `New contact message: ${form.nombre}`,
        title: "Thank you for reaching out!",
        hello: "Hello",
        intro:
          "We have received your message. We will review your project details and get back to you as soon as possible with a custom proposal.",
        details: "Your message details:",
        name: "Name:",
        email: "Email:",
        phone: "Phone:",
        subject: "Subject:",
        message: "Message:",
        footer: "NexiumLab — Digital Studio CDMX.",
      },
    };

    const t = texts[lang] || texts.es;

    // ======================================================
    // ESCAPAR HTML BÁSICO
    // ======================================================

    const escapeHtml = (value: string) =>
      value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

    const safeNombre = escapeHtml(form.nombre.trim());
    const safeCorreo = escapeHtml(form.correo.trim());
    const safeTelefono = escapeHtml(form.telefono?.trim() || "N/A");
    const safeAsunto = escapeHtml(form.asunto?.trim() || "N/A");
    const safeMensaje = escapeHtml(form.mensaje.trim());

    // ======================================================
    // CUERPO DEL CORREO
    // ======================================================

    const emailBody = `
      <div
        style="
          font-family: 'Courier New', Courier, monospace;
          max-width: 600px;
          margin: 0 auto;
          background-color: #0A0A0A;
          color: #FAFAFA;
          border: 1px solid #00E5FF33;
          border-radius: 12px;
          overflow: hidden;
        "
      >
        <div
          style="
            background: linear-gradient(
              90deg,
              #00E5FF 0%,
              #B026FF 100%
            );
            height: 4px;
            width: 100%;
          "
        ></div>

        <div style="padding: 35px 30px;">
          <h2
            style="
              color: #00E5FF;
              margin-top: 0;
              font-size: 20px;
              text-transform: uppercase;
              letter-spacing: 1px;
            "
          >
            ${t.title}
          </h2>

          <p
            style="
              font-size: 15px;
              line-height: 1.6;
              color: #EAEAEA;
            "
          >
            ${t.hello}
            <strong style="color: #00E5FF;">
              ${safeNombre}
            </strong>,
          </p>

          <p
            style="
              font-size: 14px;
              line-height: 1.6;
              color: #A1A1AA;
            "
          >
            ${t.intro}
          </p>

          <h3
            style="
              margin-top: 35px;
              color: #FAFAFA;
              font-size: 14px;
              text-transform: uppercase;
              letter-spacing: 2px;
            "
          >
            ${t.details}
          </h3>

          <div
            style="
              font-size: 13px;
              color: #A1A1AA;
              line-height: 1.8;
              background-color: #161616;
              padding: 20px;
              border-radius: 8px;
              border: 1px solid #27272A;
            "
          >
            <strong style="color: #71717A;">
              ${t.name}
            </strong>

            <span style="color: #FAFAFA;">
              ${safeNombre}
            </span>

            <br />

            <strong style="color: #71717A;">
              ${t.email}
            </strong>

            <span style="color: #FAFAFA;">
              ${safeCorreo}
            </span>

            <br />

            <strong style="color: #71717A;">
              ${t.phone}
            </strong>

            <span style="color: #FAFAFA;">
              ${safeTelefono}
            </span>

            <br />

            <strong style="color: #71717A;">
              ${t.subject}
            </strong>

            <span style="color: #FAFAFA;">
              ${safeAsunto}
            </span>

            <br />

            <strong
              style="
                color: #71717A;
                display: block;
                margin-top: 15px;
              "
            >
              ${t.message}
            </strong>

            <div
              style="
                margin-top: 8px;
                padding-top: 12px;
                border-top: 1px dashed #3F3F46;
                color: #EAEAEA;
                white-space: pre-wrap;
                font-family: sans-serif;
                font-size: 14px;
                line-height: 1.6;
              "
            >
              ${safeMensaje}
            </div>
          </div>

          <div
            style="
              margin-top: 45px;
              padding-top: 25px;
              border-top: 1px solid #27272A;
              text-align: center;
            "
          >
            <p
              style="
                margin: 0;
                font-size: 10px;
                color: #71717A;
                text-transform: uppercase;
                letter-spacing: 2px;
              "
            >
              ${t.footer}
            </p>
          </div>
        </div>
      </div>
    `;

    // ======================================================
    // ENVIAR CORREO AL CLIENTE
    // ======================================================

    console.log(
      `[Contact] 📤 Enviando confirmación al cliente: ${form.correo}`
    );

    const clientRes = await resend.emails.send({
      from: senderEmail,
      to: [form.correo.trim()],
      subject: t.subjectClient,
      html: emailBody,
      replyTo: adminEmail,
    });

    console.log(
      "[Contact] Respuesta Resend cliente:",
      JSON.stringify(clientRes, null, 2)
    );

    if (clientRes.error) {
      console.error(
        "❌ Error Resend (Cliente):",
        clientRes.error
      );

      return {
        success: false,
        error:
          clientRes.error.message ||
          "No fue posible enviar el correo de confirmación al cliente.",
      };
    }

    console.log(
      "✅ Correo al cliente aceptado por Resend.",
      clientRes.data?.id
    );

    // ======================================================
    // ENVIAR CORREO A NEXIUMLAB
    // ======================================================

    console.log(
      `[Contact] 📤 Enviando alerta al administrador: ${adminEmail}`
    );

    const adminRes = await resend.emails.send({
      from: senderEmail,
      to: [adminEmail],
      subject: t.subjectAdmin,
      html: `
        <div
          style="
            background-color: #000000;
            padding: 30px;
          "
        >
          ${emailBody}
        </div>
      `,
      replyTo: form.correo.trim(),
    });

    console.log(
      "[Contact] Respuesta Resend admin:",
      JSON.stringify(adminRes, null, 2)
    );

    if (adminRes.error) {
      console.error(
        "❌ Error Resend (Admin):",
        adminRes.error
      );

      return {
        success: false,
        error:
          adminRes.error.message ||
          "No fue posible enviar el correo al administrador.",
      };
    }

    console.log(
      "✅ Correo al administrador aceptado por Resend.",
      adminRes.data?.id
    );

    // ======================================================
    // RESULTADO
    // ======================================================

    return {
      success: true,
      clientEmailId: clientRes.data?.id || null,
      adminEmailId: adminRes.data?.id || null,
    };
  } catch (error: unknown) {
    console.error(
      "❌ Error general en processContact:",
      error
    );

    const errorMessage =
      error instanceof Error
        ? error.message
        : "Ocurrió un error desconocido";

    return {
      success: false,
      error: errorMessage,
    };
  }
}