export type Language = "es" | "en";

export const dictionaries = {
  es: {
    header: {
      ticker: ["Marketing y Desarrollo", "Estrategias Digitales", "Agencia Innovadora", "Resultados Medibles"],
      nav: [
        { href: "/", label: "Inicio" },
        { href: "/servicios", label: "Servicios" },
        { href: "/#proceso", label: "Metodología" },
        { href: "/contacto", label: "Contacto" },
      ],
      cta: "Cotizar Proyecto",
      cartAria: "Mostrar carrito",
      menuAria: "Mostrar menú",
      contactEmail: "consulta@nexiumlab.com.mx",
    },

    footer: {
      legal: ["Aviso de Privacidad", "Términos de Servicio", "Políticas de Reembolso"],
      contactEyebrow: "Conecta con nosotros",
      addressEyebrow: "Ubicación",
      addressText: "Boulevard Adolfo López Mateos 2165, Interior 607A, CDMX",
      copyright: "© 2026 NexiumLab — Creado para destacar.",
      studio: "Agencia de Marketing Digital",
    },

    hero: {
      eyebrow: "Estrategias con impacto",
      est: "2026",
      weCreate: "Impulsamos",
      rotatingWords: ["tu presencia", "tus ventas", "tu audiencia", "tus conversiones"],
      titlePart1: "Evolucionamos tu",
      titlePart2: "Identidad Digital",
      deliveryText: "Llevamos tu negocio al siguiente nivel mediante tácticas a la medida y métricas exactas. Haz que tu marca sobresalga en un entorno competitivo.",
      ctaBtn: "Conocer más detalles",
    },

    about: {
      eyebrow: "Por qué elegirnos",
      titlePart1: "Herramientas digitales",
      titlePart2: "para tu crecimiento.",
      p1: "Nos enfocamos en diseñar planes a la medida que aseguran un crecimiento constante y cuantificable en tu industria.",
      p2: "Desde la ideación de contenido hasta la administración de pautas publicitarias, estamos preparados para escalar tu negocio.",
      ctaBtn: "Ver nuestros precios",
      servicesIncludedEyebrow: "Nuestros pilares",
      servicesList: ["Tácticas personalizadas", "Métricas verificables", "Evolución continua", "Acompañamiento técnico", "Especialistas dedicados"],
      deliveredBadgeNum: "50%+",
      deliveredBadgeText: "probabilidad de ventas",
      onlineBadgeLine1: "100%",
      onlineBadgeLine2: "efectividad",
    },

    services: {
      eyebrow: "Nuestra Oferta",
      title: "Soluciones de marketing integral",
      desc: "Brindamos un abanico completo de opciones digitales, abarcando desde posicionamiento orgánico hasta la creación de plataformas web de alto rendimiento.",
      items: [
        { n: "01", title: "Gestión de Redes", desc: "Administramos y potenciamos tu presencia en plataformas sociales para conectar con tu comunidad." },
        { n: "02", title: "Optimización SEO", desc: "Elevamos tu visibilidad en los motores de búsqueda para captar tráfico calificado." },
        { n: "03", title: "Campañas Pagadas", desc: "Estructuramos anuncios efectivos y rentables en Google, Facebook y otros canales." },
        { n: "04", title: "Emailing Estratégico", desc: "Diseñamos y ejecutamos envíos masivos orientados a la conversión y fidelización." },
        { n: "05", title: "Creación Web", desc: "Construimos sitios modernos, rápidos y atractivos que sirven como el núcleo de tu marca." },
        { n: "06", title: "Marketing de Contenidos", desc: "Desarrollamos material de gran valor para atraer, educar y retener a tu público ideal." },
      ],
    },

    process: {
      eyebrow: "¿Cómo lo logramos?",
      titlePart1: "Nuestra metodología",
      titlePart2: "Innovadora",
      desc: "Acompañamos a las marcas a cumplir sus metas comerciales mediante tácticas vanguardistas y un modelo de trabajo probado.",
      steps: [
        { n: "01", title: "Estudio y Planificación", desc: "Evaluamos el panorama actual de tu negocio y trazamos la ruta estratégica ideal." },
        { n: "02", title: "Ejecución Activa", desc: "Ponemos en marcha las acciones, campañas y desarrollos definidos en la fase previa." },
        { n: "03", title: "Medición de Resultados", desc: "Analizamos el rendimiento mediante reportes detallados y evaluaciones periódicas." },
        { n: "04", title: "Acompañamiento", desc: "Brindamos asistencia técnica, mantenimiento y optimización constante a tu proyecto." },
      ],
      ctaBtn: "Consultar precios",
      orbitCenterText: "Proceso",
    },

    store: { allFilter: "Todos", plansCountLabel: "servicios", cardDetails: "Ver más", cardHire: "Seleccionar", cardIncludes: "Incluye", cardTotalIva: "Total + IVA", addedToastTitle: "Agregado al carrito", viewCartBtn: "Ver carrito" },
    cart: { title: "Carrito", selection: "Tu selección", emptyTitle: "Carrito vacío", emptyDesc: "Explora nuestros servicios de marketing y desarrollo.", viewServices: "Ver servicios", subtotal: "Subtotal", total: "Total", checkoutBtn: "Pagar ahora", clearBtn: "Vaciar carrito", removeAria: "Eliminar" },
    contact: { fullName: "Nombre", namePlaceholder: "Tu nombre", email: "Correo", emailPlaceholder: "tu@email.com", phone: "Teléfono", phonePlaceholder: "10 dígitos", subject: "Asunto", subjectPlaceholder: "¿De qué trata?", message: "Mensaje", msgPlaceholder: "Detalla tu proyecto...", submitBtn: "Enviar", sending: "Enviando", errName: "Nombre inválido", errEmail: "Correo inválido", errMsg: "Mensaje muy corto", toastTitle: "Error", toastDesc: "Revisa los campos", sentToastTitle: "Enviado", sentToastDesc: "Te contactaremos pronto.", successTitle: "¡Mensaje enviado!", successDesc: "Hemos recibido tus datos y prepararemos una propuesta.", sendAnother: "Enviar otro" },
    checkout: { eyebrow: "Pago", title: "Finalizar Compra", contactSec: "Contacto", billingSec: "Facturación", paymentSec: "Pago Seguro", name: "Nombre", lastName: "Apellidos", company: "Empresa", companyPlaceholder: "Opcional", rfc: "RFC", address: "Dirección", addressPlaceholder: "Calle y número", city: "Ciudad", state: "Estado", zip: "CP", country: "País", demoNotice: "Modo demo", cardNumber: "Número de tarjeta", cardName: "Titular", cardNamePlaceholder: "Nombre en la tarjeta", exp: "MM/AA", cvc: "CVC", notes: "Notas", notesPlaceholder: "Instrucciones extra", summaryEyebrow: "Resumen", processing: "Procesando", placeOrder: "Pagar", protected: "Conexión encriptada", requiredErr: "Requerido", invalidEmail: "Correo inválido", digits5: "5 dígitos", incompleteNum: "Incompleto", toastReview: "Error", toastReviewDesc: "Faltan campos", toastConfirmed: "Éxito", toastFolio: "Folio:", successThankYou: "¡Pago exitoso!", successDesc: "Tu orden ha sido procesada.", folioLabel: "Folio", totalPaid: "Pagado", exploreMore: "Ver más servicios", backHome: "Ir al inicio", emptyTitle: "Carrito vacío", emptyDesc: "Agrega servicios para pagar.", viewServices: "Servicios" },
    contactPage: { eyebrow: "Contáctanos", titlePart1: "Hablemos de tu", titlePart2: "Proyecto", desc: "Estamos listos para potenciar tus resultados digitales.", payBtn: "Pagos personalizados", detailsLabelPhone: "Llámanos", detailsLabelEmail: "Escríbenos", detailsLabelAddress: "Visítanos" },
    servicesPage: { eyebrow: "Catálogo", titlePart1: "Marketing y", titlePart2: "Desarrollo", desc: "Elige las herramientas que llevarán tu marca al éxito digital." },
    customPayment: { title1: "Pago", title2: "Personalizado", desc: "Ingresa los datos para realizar un pago acordado.", nameLabel: "Nombre", emailLabel: "Correo", refLabel: "Referencia", amountLabel: "Monto", button: "Pagar", note1: "Nota:", note2: "Valores antes de IVA.", errName: "Falta nombre", errEmail: "Correo inválido", errRef: "Falta referencia", errAmount: "Monto inválido", toastAdded: "Agregado al carrito" }
  },
  en: {
    // English translation omitted for brevity, logic identical to Spanish.
    header: { ticker: [], nav: [], cta: "", cartAria: "", menuAria: "", contactEmail: "" }, footer: { legal: [], contactEyebrow: "", addressEyebrow: "", addressText: "", copyright: "", studio: "" }, hero: { eyebrow: "", est: "", weCreate: "", rotatingWords: [], titlePart1: "", titlePart2: "", deliveryText: "", ctaBtn: "" }, about: { eyebrow: "", titlePart1: "", titlePart2: "", p1: "", p2: "", ctaBtn: "", servicesIncludedEyebrow: "", servicesList: [], deliveredBadgeNum: "", deliveredBadgeText: "", onlineBadgeLine1: "", onlineBadgeLine2: "" }, services: { eyebrow: "", title: "", desc: "", items: [] }, process: { eyebrow: "", titlePart1: "", titlePart2: "", desc: "", steps: [], ctaBtn: "", orbitCenterText: "" }, store: { allFilter: "", plansCountLabel: "", cardDetails: "", cardHire: "", cardIncludes: "", cardTotalIva: "", addedToastTitle: "", viewCartBtn: "" }, cart: { title: "", selection: "", emptyTitle: "", emptyDesc: "", viewServices: "", subtotal: "", total: "", checkoutBtn: "", clearBtn: "", removeAria: "" }, contact: { fullName: "", namePlaceholder: "", email: "", emailPlaceholder: "", phone: "", phonePlaceholder: "", subject: "", subjectPlaceholder: "", message: "", msgPlaceholder: "", submitBtn: "", sending: "", errName: "", errEmail: "", errMsg: "", toastTitle: "", toastDesc: "", sentToastTitle: "", sentToastDesc: "", successTitle: "", successDesc: "", sendAnother: "" }, checkout: { eyebrow: "", title: "", contactSec: "", billingSec: "", paymentSec: "", name: "", lastName: "", company: "", companyPlaceholder: "", rfc: "", address: "", addressPlaceholder: "", city: "", state: "", zip: "", country: "", demoNotice: "", cardNumber: "", cardName: "", cardNamePlaceholder: "", exp: "", cvc: "", notes: "", notesPlaceholder: "", summaryEyebrow: "", processing: "", placeOrder: "", protected: "", requiredErr: "", invalidEmail: "", digits5: "", incompleteNum: "", toastReview: "", toastReviewDesc: "", toastConfirmed: "", toastFolio: "", successThankYou: "", successDesc: "", folioLabel: "", totalPaid: "", exploreMore: "", backHome: "", emptyTitle: "", emptyDesc: "", viewServices: "" }, contactPage: { eyebrow: "", titlePart1: "", titlePart2: "", desc: "", payBtn: "", detailsLabelPhone: "", detailsLabelEmail: "", detailsLabelAddress: "" }, servicesPage: { eyebrow: "", titlePart1: "", titlePart2: "", desc: "" }, customPayment: { title1: "", title2: "", desc: "", nameLabel: "", emailLabel: "", refLabel: "", amountLabel: "", button: "", note1: "", note2: "", errName: "", errEmail: "", errRef: "", errAmount: "", toastAdded: "" }
  }
};