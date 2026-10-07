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
        { href: "/precios", label: "Precios" },
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
        "© 2026 Nexiumlab — Desarrollado con propósito desde México.",
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
      titlePart1: "Nexium",
      titlePart2: "lab",
      deliveryText:
        "Soluciones profesionales,\ndesarrolladas 100% en línea.",
      ctaBtn: "Ver servicios",
    },

    about: {
      eyebrow: "¿Por qué elegirnos?",
      titlePart1: "Datos del",
      titlePart2: "Marketing Digital",
      p1:
        "Somos un equipo digital enfocado en convertir ideas de negocio en experiencias web claras, funcionales y pensadas para generar una presencia profesional en línea.",
      p2:
        "Trabajamos desde la estrategia y el contenido hasta el desarrollo, la medición y la optimización, buscando que cada solución responda a objetivos concretos y pueda evolucionar junto con la empresa.",
      p3:
        "Nuestro enfoque combina atención cercana, ejecución completamente en línea y decisiones apoyadas en datos para construir proyectos sostenibles y fáciles de administrar.",
      pageTitlePart1: "Tus aliados para crecer en",
      pageTitlePart2: "digital.",
      stat1Num: "72%",
      stat1Text: "usuarios que interactúan con marcas",
      stat2Num: "40",
      stat2Text: "veces más compartido el contenido visual",
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
      eyebrow: "Servicios digitales",
      title: "Seis áreas para impulsar tu presencia digital.",
      desc:
        "Explora nuestras especialidades. Cada servicio puede trabajarse de forma independiente o combinarse con otros según los objetivos de tu proyecto.",
      items: [
        {
          n: "01",
          title: "Marketing en Redes Sociales",
          desc:
            "Gestionamos y optimizamos tus perfiles en redes sociales.",
          benefits: [
            "Aumento de seguidores",
            "Mayor interacción",
            "Promoción de tu marca",
          ],
          fullDesc:
            "Analizamos tu audiencia, desarrollamos contenido atractivo y damos seguimiento al rendimiento de tus perfiles para fortalecer la presencia de tu marca en redes sociales.",
          features: [
            {
              title: "Estrategia de contenidos",
              description:
                "Publicamos de forma constante contenido relevante, útil y alineado con la identidad de tu marca.",
            },
            {
              title: "Análisis y reportes",
              description:
                "Preparamos informes claros sobre alcance, interacción y comportamiento de tus redes sociales.",
            },
            {
              title: "Optimización continua",
              description:
                "Ajustamos la estrategia con base en los datos recopilados para mejorar el impacto de cada acción.",
            },
          ],
        },
        {
          n: "02",
          title: "SEO (Optimización en Motores de Búsqueda)",
          desc:
            "Mejoramos tu posicionamiento en buscadores.",
          benefits: [
            "Mayor visibilidad",
            "Aumento de tráfico",
            "Más conversiones",
          ],
          fullDesc:
            "Realizamos una revisión SEO de tu sitio, optimizamos aspectos técnicos y de contenido, y trabajamos oportunidades de posicionamiento para mejorar tu presencia en buscadores.",
          features: [
            {
              title: "Investigación de palabras clave",
              description:
                "Identificamos términos de búsqueda relevantes y con potencial para conectar con tu público objetivo.",
            },
            {
              title: "Optimización On-Page y Off-Page",
              description:
                "Mejoramos la estructura y el contenido del sitio, además de trabajar señales externas que favorecen su autoridad.",
            },
            {
              title: "Monitoreo y reportes",
              description:
                "Damos seguimiento al rendimiento y ajustamos las acciones para sostener y mejorar los resultados.",
            },
          ],
        },
        {
          n: "03",
          title: "Publicidad Digital",
          desc:
            "Diseñamos y gestionamos campañas publicitarias en Google Ads, Facebook Ads y más.",
          benefits: [
            "Aumento de visibilidad",
            "Generación de leads",
            "Mejor ROI",
          ],
          fullDesc:
            "Creamos anuncios orientados a objetivos, definimos audiencias específicas y supervisamos el desempeño de las campañas para aprovechar mejor el presupuesto publicitario.",
          features: [
            {
              title: "Estrategia de anuncios",
              description:
                "Definimos una estructura de campaña basada en tus objetivos comerciales, audiencia y presupuesto disponible.",
            },
            {
              title: "Segmentación de audiencias",
              description:
                "Utilizamos criterios demográficos, intereses y comportamiento para acercar los anuncios al público adecuado.",
            },
            {
              title: "Optimización de campañas",
              description:
                "Ajustamos anuncios, audiencias y pujas para mejorar el rendimiento y reducir costos innecesarios.",
            },
          ],
        },
        {
          n: "04",
          title: "Email Marketing",
          desc:
            "Creamos campañas de email marketing efectivas.",
          benefits: [
            "Fidelización de clientes",
            "Aumento de ventas",
            "Mejora de la comunicación",
          ],
          fullDesc:
            "Diseñamos correos claros y atractivos, segmentamos contactos y analizamos el comportamiento de cada campaña para mejorar la comunicación con tu audiencia.",
          features: [
            {
              title: "Automatización de correos",
              description:
                "Configuramos secuencias automáticas para mantener el contacto con clientes y prospectos de forma eficiente.",
            },
            {
              title: "Pruebas A/B",
              description:
                "Comparamos asuntos, contenidos o llamadas a la acción para identificar qué variantes generan mejores resultados.",
            },
            {
              title: "Informes detallados",
              description:
                "Analizamos aperturas, clics y conversiones para conocer el desempeño real de cada envío.",
            },
          ],
        },
        {
          n: "05",
          title: "Desarrollo Web",
          desc:
            "Diseñamos y desarrollamos sitios web atractivos y funcionales.",
          benefits: [
            "Mejor experiencia de usuario",
            "Mayor velocidad de carga",
            "Diseño responsivo",
          ],
          fullDesc:
            "Desarrollamos experiencias web modernas utilizando tecnologías actuales y buenas prácticas de diseño, rendimiento, accesibilidad y adaptación a distintos dispositivos.",
          features: [
            {
              title: "Diseño personalizado",
              description:
                "Creamos una propuesta visual alineada con la identidad, necesidades y objetivos de tu marca.",
            },
            {
              title: "Optimización para SEO",
              description:
                "Preparamos la estructura del sitio para facilitar su indexación y mejorar su base técnica para buscadores.",
            },
            {
              title: "Mantenimiento y soporte",
              description:
                "Ofrecemos acompañamiento para conservar el sitio actualizado, estable y funcionando correctamente.",
            },
          ],
        },
        {
          n: "06",
          title: "Content Marketing",
          desc:
            "Generamos contenido relevante y de calidad para atraer y retener a tu audiencia.",
          benefits: [
            "Mejora del SEO",
            "Aumento de tráfico",
            "Mejor engagement",
          ],
          fullDesc:
            "Construimos una estrategia de contenidos a partir de tu audiencia, objetivos y canales para generar piezas útiles que ayuden a atraer, informar y mantener el interés de tus usuarios.",
          features: [
            {
              title: "Creación de contenido",
              description:
                "Desarrollamos artículos, publicaciones, videos y otros formatos adaptados a las necesidades de tu estrategia.",
            },
            {
              title: "Distribución de contenidos",
              description:
                "Publicamos y difundimos el contenido en distintos canales para ampliar su alcance y aprovechar mejor cada pieza.",
            },
            {
              title: "Análisis y ajuste",
              description:
                "Evaluamos el rendimiento del contenido y refinamos la estrategia para mejorar sus resultados con el tiempo.",
            },
          ],
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
      eyebrow: "Servicios",
      titlePart1: "Una estrategia digital con",
      titlePart2: "más posibilidades.",
      desc:
        "Conoce las seis áreas principales en las que podemos apoyar a tu marca. Selecciona cualquier tarjeta para revisar beneficios, enfoque y características del servicio.",
      cardAction: "Ver información",
      detailEyebrow: "Detalle del servicio",
      benefitsTitle: "Beneficios",
      featuresTitle: "Qué trabajamos",
      pricingEyebrow: "Planes disponibles",
      pricingTitle: "¿Listo para revisar opciones y costos?",
      pricingDesc:
        "Consulta nuestros 18 paquetes disponibles, compara alcances y agrega al carrito la alternativa que mejor se adapte a tu proyecto.",
      pricingButton: "Ver precios y paquetes",
    },

    pricingPage: {
      eyebrow: "Precios",
      titlePart1: "Paquetes listos para",
      titlePart2: "contratar.",
      desc:
        "Revisa nuestras opciones disponibles, compara características y consulta el detalle de cada plan antes de agregarlo al carrito.",
      catalogTitle: "Explora los paquetes de Nexiumlab",
      catalogDesc:
        "Todos los importes se muestran en pesos mexicanos antes de IVA. Abre cualquier tarjeta para consultar el alcance completo del plan.",
      backToServices: "Volver a servicios",
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
        { href: "/precios", label: "Pricing" },
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
        "© 2026 Nexiumlab — Built with purpose in Mexico.",
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
      titlePart1: "Nexium",
      titlePart2: "lab",
      deliveryText:
        "Professional solutions,\ndelivered entirely online.",
      ctaBtn: "Start your project",
    },

    about: {
      eyebrow: "Why choose us?",
      titlePart1: "Digital Marketing",
      titlePart2: "Data",
      p1:
        "We are a digital team focused on turning business ideas into clear, functional web experiences designed to build a professional online presence.",
      p2:
        "We work across strategy, content, development, measurement, and optimization so every solution is tied to specific goals and can evolve as the business grows.",
      p3:
        "Our approach combines close support, a fully online workflow, and data-informed decisions to create sustainable projects that are simple to manage.",
      pageTitlePart1: "Your partners for",
      pageTitlePart2: "digital growth.",
      stat1Num: "72%",
      stat1Text: "users interact with brands",
      stat2Num: "40",
      stat2Text: "times more shares for visual content",
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
      eyebrow: "Digital services",
      title: "Six areas designed to strengthen your digital presence.",
      desc:
        "Explore our specialties. Each service can be used independently or combined with others according to your project's goals.",
      items: [
        {
          n: "01",
          title: "Social Media Marketing",
          desc:
            "We manage and optimize your social media profiles.",
          benefits: [
            "Follower growth",
            "Higher engagement",
            "Brand promotion",
          ],
          fullDesc:
            "We analyze your audience, develop engaging content, and monitor profile performance to strengthen your brand's presence across social media.",
          features: [
            {
              title: "Content strategy",
              description:
                "We publish relevant, useful, high-quality content on a consistent basis and align it with your brand identity.",
            },
            {
              title: "Analysis and reporting",
              description:
                "We provide clear reports on reach, engagement, and audience behavior across your social channels.",
            },
            {
              title: "Continuous optimization",
              description:
                "We refine the strategy using collected data to improve the impact of each action over time.",
            },
          ],
        },
        {
          n: "02",
          title: "SEO (Search Engine Optimization)",
          desc:
            "We improve your visibility and positioning in search engines.",
          benefits: [
            "Greater visibility",
            "More website traffic",
            "More conversions",
          ],
          fullDesc:
            "We review your site's SEO, improve technical and content elements, and work on ranking opportunities to strengthen your presence in search engines.",
          features: [
            {
              title: "Keyword research",
              description:
                "We identify relevant search terms with strong potential to connect your business with the right audience.",
            },
            {
              title: "On-Page and Off-Page optimization",
              description:
                "We improve site structure and content while also working on external signals that support authority and visibility.",
            },
            {
              title: "Monitoring and reporting",
              description:
                "We track performance and refine our actions to maintain and improve results over time.",
            },
          ],
        },
        {
          n: "03",
          title: "Digital Advertising",
          desc:
            "We design and manage campaigns on Google Ads, Facebook Ads, and other platforms.",
          benefits: [
            "Greater visibility",
            "Lead generation",
            "Better ROI",
          ],
          fullDesc:
            "We create goal-oriented ads, define specific audiences, and monitor campaign performance to make better use of your advertising budget.",
          features: [
            {
              title: "Advertising strategy",
              description:
                "We build a campaign structure around your business goals, target audience, and available budget.",
            },
            {
              title: "Audience segmentation",
              description:
                "We use demographic, interest, and behavioral criteria to connect your ads with the right people.",
            },
            {
              title: "Campaign optimization",
              description:
                "We adjust ads, audiences, and bids to improve performance and reduce unnecessary costs.",
            },
          ],
        },
        {
          n: "04",
          title: "Email Marketing",
          desc:
            "We create effective email marketing campaigns.",
          benefits: [
            "Customer loyalty",
            "Higher sales",
            "Better communication",
          ],
          fullDesc:
            "We design clear and engaging emails, segment your contacts, and analyze campaign behavior to improve communication with your audience.",
          features: [
            {
              title: "Email automation",
              description:
                "We set up automated sequences to keep in touch with customers and prospects more efficiently.",
            },
            {
              title: "A/B testing",
              description:
                "We compare subject lines, content, or calls to action to determine which variations perform best.",
            },
            {
              title: "Detailed reports",
              description:
                "We analyze opens, clicks, and conversions to understand the real performance of each campaign.",
            },
          ],
        },
        {
          n: "05",
          title: "Web Development",
          desc:
            "We design and develop attractive, functional websites.",
          benefits: [
            "Better user experience",
            "Faster loading speed",
            "Responsive design",
          ],
          fullDesc:
            "We build modern web experiences using current technologies and strong practices for design, performance, accessibility, and responsive behavior.",
          features: [
            {
              title: "Custom design",
              description:
                "We create a visual direction aligned with your brand identity, requirements, and business objectives.",
            },
            {
              title: "SEO-ready development",
              description:
                "We prepare the site's structure to support indexing and provide a stronger technical foundation for search engines.",
            },
            {
              title: "Maintenance and support",
              description:
                "We provide ongoing support to keep your website updated, stable, and working correctly.",
            },
          ],
        },
        {
          n: "06",
          title: "Content Marketing",
          desc:
            "We create relevant, high-quality content to attract and retain your audience.",
          benefits: [
            "Improved SEO",
            "More traffic",
            "Better engagement",
          ],
          fullDesc:
            "We build a content strategy around your audience, objectives, and channels to create useful pieces that attract, inform, and maintain user interest.",
          features: [
            {
              title: "Content creation",
              description:
                "We produce articles, posts, videos, and other formats tailored to your strategy and communication needs.",
            },
            {
              title: "Content distribution",
              description:
                "We publish and distribute content across multiple channels to extend reach and maximize the value of each piece.",
            },
            {
              title: "Analysis and refinement",
              description:
                "We evaluate content performance and refine the strategy over time to improve results.",
            },
          ],
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
      eyebrow: "Services",
      titlePart1: "A digital strategy with",
      titlePart2: "more possibilities.",
      desc:
        "Explore the six core areas where we can support your brand. Select any card to review the service benefits, approach, and key features.",
      cardAction: "View information",
      detailEyebrow: "Service details",
      benefitsTitle: "Benefits",
      featuresTitle: "What we work on",
      pricingEyebrow: "Available plans",
      pricingTitle: "Ready to compare options and pricing?",
      pricingDesc:
        "Browse our 18 available packages, compare scopes, and add the option that best fits your project to the cart.",
      pricingButton: "View pricing and packages",
    },

    pricingPage: {
      eyebrow: "Pricing",
      titlePart1: "Packages ready to",
      titlePart2: "hire.",
      desc:
        "Review the available options, compare features, and open each plan to see its full scope before adding it to your cart.",
      catalogTitle: "Explore Nexiumlab packages",
      catalogDesc:
        "All amounts are shown in Mexican pesos before applicable tax (IVA). Open any card to review the complete plan details.",
      backToServices: "Back to services",
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
