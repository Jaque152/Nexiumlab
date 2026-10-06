export type Language = "es" | "en";

export const dictionaries = {
  es: {
    header: {
      ticker: [
        "Diseño digital de calidad",
        "Servicio completamente en línea",
        "Agencia digital · CDMX",
        "Sitios · Ecommerce · Plataformas",
      ],
      nav: [
        { href: "/", label: "Principal" },
        { href: "/servicios", label: "Servicios" },
        { href: "/about", label: "Nosotros" },
        { href: "/contacto", label: "Hablemos" },
      ],
      cta: "Cuéntanos sobre tu proyecto",
      cartAria: "Mostrar carrito",
      menuAria: "Mostrar navegación",
      contactEmail: "hola@devion.com.mx",
      servicesMenuEyebrow: "Servicios base",
      servicesMenuTitle: "Elige una categoría y consulta los planes disponibles",
      servicesMenuAll: "Ver todos los servicios",
      servicesMenuPlans: "Ver planes",
    },

    footer: {
      legal: [
        "Política de privacidad",
        "Términos y condiciones de uso",
        "Lineamientos de cancelación y reembolso",
      ],
      contactEyebrow: "Escríbenos",
      addressEyebrow: "Nuestra ubicación",
      addressText:
        "Boulevard Adolfo López Mateos 2165, Interior 607A Oficina 607A-B Piso 6, Colonia Los Alpes, Alcaldía Álvaro Obregón, C.P. 01010, Ciudad de México",
      copyright:
        "© 2026 Devion.com.mx — Desarrollado con propósito desde México.",
      studio: "Agencia digital",
    },

    hero: {
      eyebrow: "Agencia digital — CDMX",
      est: "Desde 2026 — ©",
      weCreate: "Desarrollamos",
      rotatingWords: [
        "Páginas de aterrizaje",
        "Comercios electrónicos",
        "Sistemas web",
        "Marcas digitales",
        "Soluciones ecommerce",
      ],
      titlePart1: "Dev",
      titlePart2: "ion",
      deliveryText:
        "Soluciones profesionales,\ndesarrolladas 100% en línea.",
    },

    about: {
      eyebrow: "Quiénes somos",
      titlePart1: "Da forma a tu",
      titlePart2: "siguiente proyecto digital.",
      p1:
        "Somos un equipo digital enfocado en convertir ideas de negocio en experiencias web claras, funcionales y pensadas para generar una presencia profesional en línea.",
      p2:
        "Trabajamos desde la estrategia y el contenido hasta el desarrollo, la medición y la optimización, buscando que cada solución responda a objetivos concretos y pueda evolucionar junto con la empresa.",
      p3:
        "Nuestro enfoque combina atención cercana, ejecución completamente en línea y decisiones apoyadas en datos para construir proyectos sostenibles y fáciles de administrar.",
      pageTitlePart1: "Tus aliados para crecer en",
      pageTitlePart2: "digital.",
      statEyebrow: "Comportamiento multicanal",
      statText:
        "de los consumidores se relaciona con las marcas mediante varios canales antes de tomar una decisión de compra.",
      pillarsEyebrow: "Cómo aportamos valor",
      pillarsTitlePart1: "Estrategia, experiencia y mejora",
      pillarsTitlePart2: "continua.",
      pillars: [
        {
          title: "Estrategia a la medida",
          desc:
            "Diseñamos acciones alrededor de las necesidades reales de cada negocio, con objetivos claros y seguimiento de resultados para saber qué funciona y qué conviene ajustar.",
        },
        {
          title: "Equipo especializado",
          desc:
            "Acompañamos cada proyecto con experiencia en desarrollo, presencia digital y marketing, manteniendo comunicación continua durante la ejecución y después del lanzamiento.",
        },
        {
          title: "Optimización constante",
          desc:
            "Revisamos desempeño, comportamiento y oportunidades de mejora para realizar ajustes que ayuden a mantener la solución vigente y orientada a resultados.",
        },
      ],
      pricingEyebrow: "Planes y precios",
      pricingTitlePart1: "Soluciones claras para distintos",
      pricingTitlePart2: "presupuestos.",
      pricingDesc:
        "Contamos con alternativas definidas y servicios personalizables para que puedas elegir una base acorde con tu proyecto y después ajustar alcance, herramientas o acompañamiento cuando sea necesario.",
      pricingCta: "Consultar precios",
      servicesCta: "Nuestros servicios",
      contactCta: "Hablemos de tu proyecto",
      ctaBtn: "Descubrir más",
      servicesIncludedEyebrow: "Podemos ayudarte con",
      servicesList: [
        "Creación de sitios web",
        "Desarrollo de tiendas digitales",
        "Plataformas web a medida",
        "Creación de identidad digital",
        "Optimización y evolución de sitios",
      ],
      deliveredBadgeNum: "+200",
      deliveredBadgeText: "proyectos finalizados",
      onlineBadgeLine1: "100%",
      onlineBadgeLine2: "remoto",
    },

    services: {
      eyebrow: "Lo que hacemos",
      title: "Soluciones creadas para hacer crecer tu marca.",
      desc:
        "Desarrollamos cada proyecto equilibrando funcionalidad, estética contemporánea y una experiencia intuitiva para el usuario.",
      items: [
        {
          n: "01",
          title: "Sitios Web",
          desc:
            "Desarrollos profesionales alineados con tu negocio, con una imagen moderna y un proceso completamente digital.",
          fullDesc:
            "Creamos sitios web para emprendedores, profesionistas, restaurantes y empresas que necesitan una presencia digital sólida. Los planes pueden incluir landing pages, sitios corporativos, formularios, agendas, SEO inicial, integraciones y mejoras de rendimiento, dependiendo del alcance contratado.",
        },
        {
          n: "02",
          title: "Ecommerce",
          desc:
            "Tiendas digitales funcionales con carrito de compra, medios de pago y herramientas de administración.",
          fullDesc:
            "Desarrollamos tiendas en línea con distintos niveles de alcance, desde catálogos compactos hasta ecommerce más robustos con inventario, cupones, múltiples administradores, conexión con pasarelas de pago, logística y métricas comerciales.",
        },
        {
          n: "03",
          title: "Soluciones Web",
          desc:
            "Sistemas inmobiliarios, portales de empleo y plataformas educativas desarrollados según cada necesidad.",
          fullDesc:
            "Construimos plataformas y servicios digitales para necesidades específicas, incluyendo portales inmobiliarios, bolsas de empleo, entornos de cursos, soporte remoto, configuración de herramientas, diagnóstico y asesoría técnica. Esta categoría reúne soluciones que van más allá de un sitio informativo tradicional.",
        },
        {
          n: "04",
          title: "Identidad + Web",
          desc:
            "Construcción de marca y desarrollo web integrados en una solución para proyectos de distintos tamaños.",
          fullDesc:
            "Integramos identidad visual y presencia web en un mismo proyecto. Dependiendo del plan, se contemplan propuestas de logotipo, paleta de color, tipografías, recursos para redes sociales, favicon, landing pages o sitios empresariales con formularios y configuración inicial de SEO.",
        },
        {
          n: "05",
          title: "Digital + Marketing",
          desc:
            "Desarrollo web acompañado de SEO, herramientas publicitarias y medición digital desde su implementación.",
          fullDesc:
            "Combinamos desarrollo web con herramientas de posicionamiento, analítica y publicidad digital. Los planes disponibles pueden incluir SEO inicial, Google Search Console, Google Analytics, configuración de campañas y píxeles de seguimiento para medir y optimizar el desempeño.",
        },
      ],
    },

    process: {
      eyebrow: "Cómo lo hacemos",
      titlePart1: "Nuestro método de",
      titlePart2: "Trabajo",
      desc:
        "Seguimos una metodología ordenada que transforma una idea inicial en una solución digital funcional, manteniendo claridad y seguimiento durante cada fase.",
      steps: [
        {
          n: "01",
          title: "Descubrimiento",
          desc:
            "Analizamos tu empresa, sus objetivos y las necesidades de sus usuarios.",
        },
        {
          n: "02",
          title: "Propuesta visual",
          desc:
            "Diseñamos una experiencia coherente con la personalidad de tu marca.",
        },
        {
          n: "03",
          title: "Construcción",
          desc:
            "Desarrollamos una solución eficiente, optimizada y preparada para crecer.",
        },
        {
          n: "04",
          title: "Lanzamiento",
          desc:
            "Publicamos el proyecto, validamos su desempeño y continuamos acompañándote.",
        },
      ],
      ctaBtn: "Construyamos algo diferente",
      orbitCenterText: "Comenzar",
    },

    store: {
      allFilter: "Ver todos",
      plansCountLabel: "opciones",
      cardDetails: "Ver información",
      cardHire: "Consultar plan",
      cardIncludes: "Incluye",
      baseServicesEyebrow: "Servicios base",
      baseServicesTitle: "Elige el servicio que quieras conocer",
      baseServicesDesc:
        "Cada tarjeta muestra un resumen del servicio base. Puedes elegir cualquiera: todas abren el mismo catálogo completo de 18 productos disponibles.",
      serviceView: "Ver detalle y catálogo",
      serviceOpen: "Catálogo abierto",
      backToServices: "Volver a servicios",
      selectedServiceLabel: "Servicio base",
      planHelpText: "Los 18 productos están disponibles desde cualquiera de los servicios base.",
      cardTotalIva: "Importe + IVA",
      addedToastTitle: "Añadido correctamente",
      viewCartBtn: "Ir al carrito",
    },

    cart: {
      title: "Tu carrito",
      selection: "Productos seleccionados",
      emptyTitle: "Aún no tienes productos",
      emptyDesc:
        "Conoce nuestros planes y selecciona la solución adecuada para tu proyecto.",
      viewServices: "Explorar soluciones",
      subtotal: "Importe parcial",
      total: "Importe total",
      checkoutBtn: "Continuar al pago",
      clearBtn: "Eliminar todo",
      removeAria: "Quitar producto",
    },

    contact: {
      fullName: "Nombre y apellidos",
      namePlaceholder: "Escribe tu nombre",
      email: "Correo de contacto",
      emailPlaceholder: "nombre@correo.com",
      phone: "Número telefónico",
      phonePlaceholder: "+52 ...",
      subject: "Tema",
      subjectPlaceholder: "Indícanos el motivo de tu mensaje",
      message: "Cuéntanos más",
      msgPlaceholder: "Descríbenos brevemente lo que necesitas...",
      submitBtn: "Enviar mensaje",
      sending: "En proceso",
      errName: "Ingresa un nombre válido",
      errEmail: "Ingresa un correo válido",
      errMsg: "Agrega un poco más de información (mín. 5 caracteres)",
      toastTitle: "Verifica la información",
      toastDesc: "Hay datos del formulario que requieren corrección.",
      sentToastTitle: "Tu mensaje fue enviado",
      sentToastDesc: "Gracias. Nuestro equipo se comunicará contigo pronto.",
      successTitle: "¡Recibimos tu mensaje!",
      successDesc:
        "Gracias por contactarnos. Analizaremos la información de tu proyecto y nos comunicaremos contigo con una propuesta personalizada.",
      sendAnother: "Escribir otro mensaje",
    },

    checkout: {
      eyebrow: "Proceso de compra",
      title: "Completar pedido",
      contactSec: "Información de contacto",
      billingSec: "Datos fiscales",
      paymentSec: "Información de pago",
      name: "Nombre",
      lastName: "Apellido(s)",
      company: "Empresa (no obligatorio)",
      companyPlaceholder: "Escribe el nombre de tu empresa",
      rfc: "RFC (no obligatorio)",
      address: "Domicilio",
      addressPlaceholder: "Calle, número y referencias",
      city: "Municipio o ciudad",
      state: "Entidad",
      zip: "C.P.",
      country: "Nación",
      demoNotice:
        "Entorno seguro de pago demostrativo — no se generará ningún cargo real.",
      cardNumber: "Número de la tarjeta",
      cardName: "Titular de la tarjeta",
      cardNamePlaceholder: "Nombre impreso en la tarjeta",
      exp: "Fecha de expiración",
      cvc: "Código CVC",
      notes: "Comentarios del pedido (opcional)",
      notesPlaceholder:
        "Comparte alguna indicación adicional que debamos considerar...",
      summaryEyebrow: "Detalle de tu compra",
      processing: "Procesando solicitud",
      placeOrder: "Confirmar pedido",
      protected: "Transacción segura",
      requiredErr: "Campo obligatorio",
      invalidEmail: "Formato de correo incorrecto",
      digits5: "Debe contener 5 dígitos",
      incompleteNum: "Faltan números por ingresar",
      toastReview: "Comprueba tus datos",
      toastReviewDesc: "Aún existen campos obligatorios pendientes.",
      toastConfirmed: "Compra registrada",
      toastFolio: "Referencia",
      successThankYou: "¡Tu pedido fue recibido!",
      successDesc:
        "Hemos registrado correctamente tu solicitud. Nos pondremos en contacto contigo para comenzar el proyecto y acordar los siguientes pasos.",
      folioLabel: "Número de folio",
      totalPaid: "Importe pagado",
      exploreMore: "Explorar más opciones",
      backHome: "Regresar a principal",
      emptyTitle: "No hay productos en tu carrito",
      emptyDesc:
        "Selecciona alguno de nuestros planes para poder continuar con la compra.",
      viewServices: "Consultar soluciones",
    },

    contactPage: {
      eyebrow: "¿Tienes algo en mente?",
      titlePart1: "Conver",
      titlePart2: "semos",
      desc:
        "Ya sea que tengas una idea definida, un proyecto en marcha o quieras conocer mejor nuestras soluciones, queremos escucharte. Completa tus datos y prepararemos una propuesta acorde a tus necesidades.",
      payBtn: "Ir a pago personalizado",
      detailsLabelPhone: "Teléfono de contacto",
      detailsLabelEmail: "Correo electrónico",
      detailsLabelAddress: "Ubicación",
    },

    servicesPage: {
      eyebrow: "Nuestras soluciones",
      titlePart1: "Opciones pensadas para hacer crecer tu ",
      titlePart2: "empresa.",
      desc:
        "Selecciona la alternativa que corresponda mejor con el momento actual de tu proyecto. Todos nuestros paquetes contemplan desarrollo profesional, atención en línea y precios definidos en pesos mexicanos.",
    },

    customPayment: {
      title1: "Gestiona tu",
      title2: "Pago personalizado",
      desc:
        "Proporciona la información del proyecto junto con el importe previamente acordado para preparar tu orden de pago.",
      nameLabel: "Nombre del cliente",
      emailLabel: "Correo electrónico",
      refLabel: "# Referencia de pago",
      amountLabel: "Importe acordado",
      button: "Continuar con pago",
      note1: "Considera:",
      note2: "Los importes indicados se muestran antes de IVA.",
      errName: "Es necesario indicar tu nombre",
      errEmail: "Ingresa un correo válido",
      errRef: "Especifica la referencia o concepto",
      errAmount: "Especifica un importe correcto",
      toastAdded: "Pago incorporado al carrito",
    },
  },

  en: {
    header: {
      ticker: [
        "Professional Digital Design",
        "Fully Online Service",
        "Digital Agency · Mexico City",
        "Websites · Ecommerce · Platforms",
      ],
      nav: [
        { href: "/", label: "Main" },
        { href: "/servicios", label: "Services" },
        { href: "/about", label: "About" },
        { href: "/contacto", label: "Let's Talk" },
      ],
      cta: "Tell us about your project",
      cartAria: "Show shopping cart",
      menuAria: "Show navigation",
      contactEmail: "hola@devion.com.mx",
      servicesMenuEyebrow: "Core services",
      servicesMenuTitle: "Choose a category and browse the available plans",
      servicesMenuAll: "View all services",
      servicesMenuPlans: "View plans",
    },

    footer: {
      legal: [
        "Privacy Notice",
        "Terms and Conditions of Use",
        "Cancellation and Refund Guidelines",
      ],
      contactEyebrow: "Get in Touch",
      addressEyebrow: "Our Location",
      addressText:
        "Boulevard Adolfo López Mateos 2165, Interior 607A Oficina 607A-B Piso 6, Colonia Los Alpes, Alcaldía Álvaro Obregón, C.P. 01010, Ciudad de México",
      copyright:
        "© 2026 Devion.com.mx — Built with purpose in Mexico.",
      studio: "Digital Agency",
    },

    hero: {
      eyebrow: "Digital Agency — Mexico City",
      est: "Since 2026 — ©",
      weCreate: "We develop",
      rotatingWords: [
        "Landing experiences",
        "Ecommerce stores",
        "Web systems",
        "Digital brands",
        "Ecommerce solutions",
      ],
      titlePart1: "Dev",
      titlePart2: "ion",
      deliveryText:
        "Professional solutions,\ndelivered entirely online.",
      ctaBtn: "Start your project",
    },

    about: {
      eyebrow: "Who we are",
      titlePart1: "Bring your next",
      titlePart2: "digital project to life.",
      p1:
        "We are a digital team focused on turning business ideas into clear, functional web experiences designed to build a professional online presence.",
      p2:
        "We work across strategy, content, development, measurement, and optimization so every solution is tied to specific goals and can evolve as the business grows.",
      p3:
        "Our approach combines close support, a fully online workflow, and data-informed decisions to create sustainable projects that are simple to manage.",
      pageTitlePart1: "Your partners for",
      pageTitlePart2: "digital growth.",
      statEyebrow: "Multichannel behavior",
      statText:
        "of consumers interact with brands across multiple channels before making a purchase decision.",
      pillarsEyebrow: "How we create value",
      pillarsTitlePart1: "Strategy, expertise, and",
      pillarsTitlePart2: "continuous improvement.",
      pillars: [
        {
          title: "Tailored strategy",
          desc:
            "We build actions around the real needs of each business, using clear objectives and measurable follow-up to understand what works and what should be adjusted.",
        },
        {
          title: "Specialized team",
          desc:
            "We support each project with experience in development, digital presence, and marketing, maintaining ongoing communication during execution and after launch.",
        },
        {
          title: "Ongoing optimization",
          desc:
            "We review performance, behavior, and improvement opportunities to make adjustments that keep the solution relevant and focused on results.",
        },
      ],
      pricingEyebrow: "Plans and pricing",
      pricingTitlePart1: "Clear solutions for different",
      pricingTitlePart2: "budgets.",
      pricingDesc:
        "We offer defined plans and customizable services so you can start with an option that matches your project and adjust scope, tools, or support whenever needed.",
      pricingCta: "Browse pricing",
      servicesCta: "Our services",
      contactCta: "Tell us about your project",
      ctaBtn: "Discover more",
      servicesIncludedEyebrow: "We can help with",
      servicesList: [
        "Website creation",
        "Online store development",
        "Custom web platforms",
        "Digital identity creation",
        "Website optimization and evolution",
      ],
      deliveredBadgeNum: "+200",
      deliveredBadgeText: "completed projects",
      onlineBadgeLine1: "100%",
      onlineBadgeLine2: "remote",
    },

    services: {
      eyebrow: "What we do",
      title: "Solutions created to grow your brand.",
      desc:
        "Every project combines functionality, contemporary design, and an intuitive experience for the end user.",
      items: [
        {
          n: "01",
          title: "Web Solutions",
          desc:
            "Professional websites aligned with your business, featuring a modern visual approach and a completely digital workflow.",
          fullDesc:
            "We create websites for entrepreneurs, professionals, restaurants, and companies that need a solid digital presence. Available plans can include landing pages, corporate websites, forms, appointment tools, initial SEO, integrations, and performance improvements depending on the selected scope.",
        },
        {
          n: "02",
          title: "Ecommerce",
          desc:
            "Functional online stores with shopping carts, payment methods, and administration tools.",
          fullDesc:
            "We build online stores at different levels of complexity, from compact catalogs to more robust ecommerce experiences with inventory, coupons, multiple administrators, payment gateways, logistics connections, and commercial metrics.",
        },
        {
          n: "03",
          title: "Digital Platforms",
          desc:
            "Real estate systems, job portals, and educational platforms developed around your specific requirements.",
          fullDesc:
            "We build platforms and digital services for specific needs, including real estate portals, job boards, learning environments, remote support, tool setup, diagnostics, and technical guidance. This category brings together solutions that go beyond a traditional informational website.",
        },
        {
          n: "04",
          title: "Identity + Website",
          desc:
            "Brand development and website creation combined into one solution for projects of different sizes.",
          fullDesc:
            "We combine visual identity and web presence in a single project. Depending on the plan, the scope may include logo concepts, color systems, typography, social media assets, favicon, landing pages, or corporate websites with forms and initial SEO setup.",
        },
        {
          n: "05",
          title: "Digital + Marketing",
          desc:
            "Website development supported by SEO, advertising tools, and digital measurement from implementation.",
          fullDesc:
            "We combine web development with search, analytics, and digital advertising tools. Available plans may include initial SEO, Google Search Console, Google Analytics, campaign setup, and tracking pixels to measure and improve performance.",
        },
      ],
    },

    process: {
      eyebrow: "How we work",
      titlePart1: "Our Working",
      titlePart2: "Method",
      desc:
        "We follow a structured methodology that turns an initial concept into a functional digital solution while maintaining clarity and communication throughout every phase.",
      steps: [
        {
          n: "01",
          title: "Discovery",
          desc:
            "We analyze your business, its goals, and the needs of its users.",
        },
        {
          n: "02",
          title: "Visual Direction",
          desc:
            "We create an experience that reflects the personality of your brand.",
        },
        {
          n: "03",
          title: "Build",
          desc:
            "We develop an efficient and optimized solution prepared for future growth.",
        },
        {
          n: "04",
          title: "Go Live",
          desc:
            "We publish the project, validate performance, and continue supporting you.",
        },
      ],
      ctaBtn: "Let's create something different",
      orbitCenterText: "Begin",
    },

    store: {
      allFilter: "View all",
      plansCountLabel: "options",
      cardDetails: "View information",
      cardHire: "Consult plan",
      cardIncludes: "Includes",
      baseServicesEyebrow: "Core services",
      baseServicesTitle: "Choose the service you want to explore",
      baseServicesDesc:
        "Each card shows a summary of a core service. Choose any of them: every option opens the same complete catalog of 18 available products.",
      serviceView: "View details and catalog",
      serviceOpen: "Catalog open",
      backToServices: "Back to services",
      selectedServiceLabel: "Core service",
      planHelpText: "All 18 products are available from any core service.",
      cardTotalIva: "Amount + Tax",
      addedToastTitle: "Added successfully",
      viewCartBtn: "Go to cart",
    },

    cart: {
      title: "Your Cart",
      selection: "Selected Products",
      emptyTitle: "You haven't selected anything yet",
      emptyDesc:
        "Explore our plans and choose the right solution for your digital project.",
      viewServices: "Explore solutions",
      subtotal: "Partial amount",
      total: "Total amount",
      checkoutBtn: "Continue to payment",
      clearBtn: "Remove all",
      removeAria: "Remove product",
    },

    contact: {
      fullName: "Full name",
      namePlaceholder: "Enter your name",
      email: "Contact email",
      emailPlaceholder: "name@email.com",
      phone: "Phone number",
      phonePlaceholder: "+1 ...",
      subject: "Topic",
      subjectPlaceholder: "Tell us what you'd like to discuss",
      message: "Tell us more",
      msgPlaceholder: "Briefly describe what you need...",
      submitBtn: "Send message",
      sending: "Processing",
      errName: "Enter a valid name",
      errEmail: "Enter a valid email address",
      errMsg: "Please provide a little more information (min. 5 characters)",
      toastTitle: "Review your information",
      toastDesc: "Some form fields need to be corrected.",
      sentToastTitle: "Your message was sent",
      sentToastDesc: "Thank you. Our team will contact you soon.",
      successTitle: "We received your message!",
      successDesc:
        "Thank you for reaching out. We will review your project details and contact you with a proposal tailored to your needs.",
      sendAnother: "Write another message",
    },

    checkout: {
      eyebrow: "Purchase Process",
      title: "Complete Your Order",
      contactSec: "Contact Information",
      billingSec: "Billing Information",
      paymentSec: "Payment Information",
      name: "First name",
      lastName: "Last name",
      company: "Company (not required)",
      companyPlaceholder: "Enter your company name",
      rfc: "Tax ID / RFC (not required)",
      address: "Address",
      addressPlaceholder: "Street, number, and reference",
      city: "City",
      state: "State / Province",
      zip: "Postal Code",
      country: "Country",
      demoNotice:
        "Secure demonstration payment environment — no real charge will be generated.",
      cardNumber: "Card number",
      cardName: "Cardholder",
      cardNamePlaceholder: "Name printed on the card",
      exp: "Expiration date",
      cvc: "CVC code",
      notes: "Order comments (optional)",
      notesPlaceholder:
        "Share any additional information we should consider...",
      summaryEyebrow: "Purchase Details",
      processing: "Processing request",
      placeOrder: "Confirm order",
      protected: "Secure transaction",
      requiredErr: "Required field",
      invalidEmail: "Incorrect email format",
      digits5: "Must contain 5 digits",
      incompleteNum: "Card number is incomplete",
      toastReview: "Check your information",
      toastReviewDesc: "Some required fields still need to be completed.",
      toastConfirmed: "Order registered",
      toastFolio: "Reference",
      successThankYou: "Your order has been received!",
      successDesc:
        "We have successfully registered your request. Our team will contact you to begin the project and coordinate the next steps.",
      folioLabel: "Reference number",
      totalPaid: "Amount paid",
      exploreMore: "Explore more options",
      backHome: "Return to main page",
      emptyTitle: "There are no products in your cart",
      emptyDesc:
        "Choose one of our plans before continuing with the purchase process.",
      viewServices: "Browse solutions",
    },

    contactPage: {
      eyebrow: "Have something in mind?",
      titlePart1: "Let's ",
      titlePart2: "Connect",
      desc:
        "Whether you already have a defined idea, an active project, or simply want to learn more about our solutions, we'd like to hear from you. Complete the form and we'll prepare a proposal based on your needs.",
      payBtn: "Go to custom payment",
      detailsLabelPhone: "Contact phone",
      detailsLabelEmail: "Email address",
      detailsLabelAddress: "Location",
    },

    servicesPage: {
      eyebrow: "Our Solutions",
      titlePart1: "Options created to grow your ",
      titlePart2: "business.",
      desc:
        "Choose the alternative that best matches the current stage of your project. Every package includes professional development, online service, and transparent pricing.",
    },

    customPayment: {
      title1: "Manage your",
      title2: "Custom Payment",
      desc:
        "Enter your project information along with the previously agreed amount to prepare your payment order.",
      nameLabel: "Client name",
      emailLabel: "Email address",
      refLabel: "# Payment reference",
      amountLabel: "Agreed amount",
      button: "Continue to payment",
      note1: "Please note:",
      note2: "Displayed amounts are shown before applicable tax (IVA).",
      errName: "Your name is required",
      errEmail: "Enter a valid email",
      errRef: "Enter a reference or concept",
      errAmount: "Enter a valid amount",
      toastAdded: "Payment added to cart",
    },
  },
};
