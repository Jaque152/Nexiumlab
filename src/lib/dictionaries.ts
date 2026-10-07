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
      contactEmail: "consulta@nexiumlab.com.mx",
      servicesMenuEyebrow: "Servicios base",
      servicesMenuTitle: "Elige una categoría y consulta los planes disponibles",
      servicesMenuAll: "Ver todos los servicios",
      servicesMenuPlans: "Ver planes",
    },

    footer: {
      legalTitle: "Legal",
      legal: [
        "Aviso de privacidad",
        "Términos y condiciones",
        "Política de Devoluciones, Reembolsos y Cancelación",
      ],
      contactEyebrow: "Contacto",
      description:
        "Elevando marcas a través del diseño estratégico, la tecnología y el marketing digital de alto rendimiento.",
      addressEyebrow: "Nuestra ubicación",
      addressText:
        "José María Ibarrarán 47, col. San José Insurgentes, Benito Juárez, C.P. 03900, Ciudad de México",
      copyright:
        "© 2026 NexiumLab — Desarrollado con propósito desde México.",
      studio: "Agencia digital",
      rights: "Todos los derechos reservados.",
      madeIn: "Diseñado en México.",
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


    legal: {
      eyebrow: "Información legal",
      privacy: {
        title: "Aviso de privacidad",
        sections: [
          {
            title: "",
            body: [
              "En cumplimiento con lo previsto en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (la “Ley”), su reglamento y los lineamientos aplicables, le informamos lo siguiente:",
              "SUMIMAX MASTER COMMERCE, S.A. de C.V. (en adelante, “NexiumLab”), con domicilio en la Ciudad de México, será responsable de recabar sus datos personales, así como del uso y protección de los mismos y de aquellos datos recabados por sus controladoras, subsidiarias o filiales, o por terceros contratados para prestar servicios en nombre de NexiumLab, de conformidad con el presente aviso de privacidad (el “Aviso de Privacidad”).",
            ],
          },
          {
            title: "Datos Personales Recabados",
            body: [
              "En virtud de su relación comercial existente o futura con NexiumLab, usted podría proporcionarnos algunos de los siguientes datos personales:",
              "Datos de identificación y contacto: Nombre completo y correo electrónico.",
              "NexiumLab NO recaba datos considerados sensibles, los cuales requieren un nivel de protección especial debido al riesgo que su tratamiento indebido puede representar para la privacidad y los derechos de las personas.",
            ],
          },
          {
            title: "Finalidades del Tratamiento de Datos Personales",
            body: [
              "Los datos personales serán utilizados para las siguientes finalidades principales:",
              "Verificación de identidad: Confirmar la identidad de los usuarios para prevenir fraudes y asegurar que las transacciones se realicen de manera segura.",
              "Cumplimiento normativo: Asegurarnos de cumplir con las regulaciones locales e internacionales, como las leyes contra el lavado de dinero (AML) y conocer a tu cliente (KYC).",
              "Transacciones: Facilitar la compra, venta y transferencia de los Servicios que ofrece NexiumLab, asegurando que las transacciones se procesen de manera eficiente y segura.",
              "Servicio al cliente: Proporcionar soporte a los usuarios, resolver problemas y responder a consultas.",
              "Marketing y comunicación: Enviar información relevante sobre actualizaciones del servicio, promociones y otras comunicaciones relacionadas, siempre que se cuente con el consentimiento del usuario.",
              "Análisis y mejoras: Analizar el comportamiento de los usuarios y el uso del sitio para mejorar los servicios ofrecidos, identificar áreas de mejora y desarrollar nuevas funcionalidades.",
              "Prevención de actividades ilícitas: Monitorear las transacciones y actividades de los usuarios para detectar y prevenir actividades sospechosas o ilegales.",
              "Además, NexiumLab podrá utilizar sus datos personales para las siguientes finalidades secundarias:",
              "Fines estadísticos.",
              "Invitarle a participar en eventos, capacitaciones y promociones de NexiumLab.",
              "Fines publicitarios.",
            ],
          },
          {
            title: "Recopilación de Datos Personales",
            body: [
              "Podemos recabar sus datos personales de distintas formas: cuando usted nos los proporciona directamente o cuando obtenemos información a través de otras fuentes permitidas por la Ley, cumpliendo en todo momento con las finalidades señaladas en el Aviso de Privacidad.",
            ],
          },
          {
            title: "Protección de Datos de Menores",
            body: [
              "NexiumLab NO recabará datos personales directamente de menores de 18 años. Solo podrán dar consentimiento de los datos recabados personas mayores de 18 años. Se recomienda que los padres/tutores revisen y monitoreen regularmente el uso del correo electrónico y otras actividades en línea de sus hijos(as) para que no compartan información personal identificable sin su consentimiento previo. En cualquier momento, usted puede solicitar que eliminemos cualquier dato personal de sus hijos enviándonos una solicitud a la siguiente dirección de correo electrónico: consulta@nexiumlab.com.mx.",
            ],
          },
          {
            title: "Transferencia de Datos Personales",
            body: [
              "Sus datos personales podrán ser transferidos a empresas controladoras, subsidiarias, afiliadas o cualquier otra perteneciente a NexiumLab, en México o en el extranjero; a terceros, nacionales o extranjeros, para el cumplimiento de las finalidades antes mencionadas, o cuando dicha comunicación de datos esté prevista en una Ley o Tratado, o bien, cuando sea requerido por la autoridad competente.",
              "Procuraremos que dichos terceros mantengan medidas de seguridad adecuadas para resguardar sus datos personales y que los utilicen exclusivamente para las finalidades para las cuales fueron recabados y de conformidad con el presente Aviso de Privacidad. No cederemos ni transferiremos sus datos a terceros no relacionados con la empresa, salvo en los casos antes citados y los previstos en la Ley.",
            ],
          },
          {
            title: "Medidas de Seguridad",
            body: [
              "Implementaremos las medidas de seguridad técnicas, administrativas y físicas necesarias para procurar la integridad de sus datos personales y evitar su daño, pérdida, alteración, destrucción o uso, acceso o tratamiento no autorizado. Solo el personal autorizado, que ha cumplido con los requisitos de confidencialidad, podrá participar en su tratamiento.",
              "El personal autorizado tiene prohibido permitir el acceso de personas no autorizadas y utilizar sus datos personales para fines distintos a los establecidos en el presente Aviso de Privacidad. La obligación de confidencialidad subsiste aún después de terminada la relación con NexiumLab.",
            ],
          },
          {
            title: "",
            body: [
              "Claro, aquí tienes un resumen de una política de cookies:",
            ],
          },
          {
            title: "¿Qué son las cookies?",
            body: [
              "Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. Se utilizan para mejorar su experiencia en el sitio web, recordar sus preferencias y proporcionar datos analíticos sobre su comportamiento en el sitio.",
            ],
          },
          {
            title: "Tipos de cookies que utilizamos:",
            body: [
              "Cookies esenciales: Necesarias para el funcionamiento básico del sitio web. Sin estas cookies, algunas partes del sitio no funcionarían correctamente.",
              "Cookies de rendimiento: Recopilan información sobre cómo los visitantes usan el sitio, como las páginas que visitan con más frecuencia. Estos datos ayudan a mejorar la funcionalidad y rendimiento del sitio.",
              "Cookies de funcionalidad: Permiten al sitio web recordar las elecciones que usted hace (como su nombre de usuario, idioma o región) y proporcionar características mejoradas y más personales.",
              "Cookies de publicidad: Se utilizan para mostrar anuncios que son relevantes para usted según sus intereses. También limitan el número de veces que ve un anuncio y ayudan a medir la eficacia de las campañas publicitarias.",
              "Usted puede controlar y gestionar las cookies de diversas maneras:",
              "Configuración del navegador: Puede configurar su navegador para aceptar o rechazar cookies, o para que le avise cuando se envíe una cookie. Consulte las instrucciones de su navegador para obtener más detalles.",
              "Herramientas de gestión de cookies: Algunos sitios web proporcionan herramientas específicas para gestionar las cookies directamente desde el sitio.",
              "Si decide desactivar las cookies, algunas funcionalidades del sitio pueden verse afectadas, lo que puede resultar en una experiencia menos optimizada. Por ejemplo, es posible que no pueda acceder a ciertas áreas del sitio o que algunas de las preferencias que ha guardado anteriormente no se recuerden.",
            ],
          },
          {
            title: "Derechos del Titular",
            body: [
              "Usted tiene derecho a acceder a sus datos personales que poseemos y a los detalles del tratamiento de estos, así como a rectificarlos en caso de ser inexactos o incompletos, cancelarlos cuando considere que no se requieren para alguna de las finalidades señaladas en el presente Aviso de Privacidad o estén siendo utilizados para finalidades no consentidas, y oponerse al tratamiento de los mismos para fines específicos o limitar su uso o divulgación.",
              "Para ejercitar estos derechos, es necesario presentar una solicitud dirigida al Departamento de Datos Personales al siguiente correo electrónico: consulta@nexiumlab.com.mx, incluyendo:",
              "Nombre del Titular y medio para comunicarle la respuesta a su solicitud.",
              "Documentos que acrediten la identidad (credencial para votar con fotografía, pasaporte, cartilla militar o licencia de conducir), escaneada, y en caso de ser persona moral, los documentos que acrediten la representación legal del Titular (mediante Escritura Pública que muestre las facultades para llevar a cabo el acto).",
              "Descripción clara y precisa de los datos personales respecto de los que se busca ejercer alguno de los derechos.",
              "Cualquier otro elemento o documento que facilite la localización de los datos personales.",
              "La respuesta a su solicitud se dará, a su elección, por medio de correo electrónico. NexiumLab tendrá un plazo de veinte días hábiles, contados desde la fecha en que se recibió la solicitud o a partir de que el Titular solventó el requerimiento de información, para comunicarle si la misma es procedente. En caso afirmativo, se hará efectiva dentro de los quince días siguientes a la fecha en que se comunique la respuesta. Los plazos podrán ser ampliados una sola vez por un periodo igual cuando esté justificado.",
              "Para conocer más a fondo los requisitos de las solicitudes, procedencia de estas o formularios, puede contactar al Departamento de Datos Personales directamente en el domicilio de la empresa o a la dirección de correo: consulta@nexiumlab.com.mx.",
            ],
          },
          {
            title: "Revocación del Consentimiento",
            body: [
              "En cualquier momento, usted tiene derecho a revocar el consentimiento para el tratamiento de sus datos personales, para lo cual deberá presentar su solicitud conforme al procedimiento y requisitos señalados en los párrafos anteriores.",
            ],
          },
          {
            title: "Modificaciones al Aviso de Privacidad",
            body: [
              "NexiumLab se reserva el derecho de modificar en cualquier momento el presente Aviso de Privacidad para cumplir con actualizaciones legislativas, jurisprudenciales, políticas internas, nuevos requisitos para la prestación de servicios o cualquier otra causa. Cualquier modificación, así como el documento actualizado, estará disponible en las plataformas o instalaciones en que sea utilizado.",
            ],
          },
          {
            title: "Legislación Aplicable",
            body: [
              "El presente Aviso de Privacidad y el manejo que haga NexiumLab de sus datos personales se rigen por la legislación vigente y aplicable en los Estados Unidos Mexicanos, por lo que cualquier controversia que se suscite con motivo de su aplicación deberá ventilarse ante los órganos jurisdiccionales competentes en la Ciudad de México.",
            ],
          },
        ],
      },
      terms: {
        title: "Términos y condiciones",
        sections: [
          {
            title: "",
            body: [
              "SUMIMAX MASTER COMMERCE, S.A. de C.V. (en lo sucesivo “NexiumLab”), es una persona moral debidamente constituida conforme a las leyes mercantiles mexicanas, con domicilio en la Ciudad de México. Pone a su disposición los presentes Términos y Condiciones (en lo sucesivo los “Términos”) del Sitio Web con dominio https://only￾digital.com/ (en lo sucesivo el “Sitio”).",
            ],
          },
          {
            title: "Aceptación de Términos",
            body: [
              "Para utilizar el presente Sitio es requerida la aceptación expresa por parte del Usuario de todas y cada una de las cláusulas de los presentes Términos y Condiciones.",
              "NexiumLab se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas, pudiendo cambiar, suprimir o añadir tanto los contenidos, productos y servicios que se presten a través de este, como la forma en la que éstos aparezcan presentados o localizados en dicho Sitio.",
            ],
          },
          {
            title: "Objeto de los Términos",
            body: [
              "NexiumLab tiene como actividad principal proveer todo tipo de servicios relacionados con el desarrollo de estrategias personalizadas que generen resultados medibles y sostenibles, impulsando la visibilidad y el éxito de tu marca en un entorno altamente competitivo (los “Servicio”). A través del Sitio, los Usuarios acceden y pueden hacer uso de los diversos Servicios y contenidos puestos a su disposición. Las cláusulas de los presentes Términos y Condiciones se aplicarán a todos los servicios en el Sitio, cuyas características específicas vienen determinadas en el Sitio.",
            ],
          },
          {
            title: "Pago de los Servicios",
            body: [
              "Formas de Pago Aceptadas:",
              "Los servicios de NexiumLab solo pueden ser pagados mediante tarjeta de crédito o débito.",
              "No se aceptan pagos en efectivo, cheques, transferencias bancarias, o cualquier otra forma de pago que no sea una tarjeta de crédito o débito.",
              "Proveedor de Servicios de Pago:",
              "Los pagos serán procesados por un proveedor de servicios de pago autorizado, que será designado por NexiumLab.",
              "La empresa no tiene control sobre el proveedor de servicios de pago, pero se compromete a trabajar con proveedores confiables y seguros.",
              "Información de Pago:",
              "Para realizar un pago, los usuarios deben proporcionar la información de su tarjeta de crédito o débito, incluyendo el número de la tarjeta, el nombre del titular, la fecha de vencimiento y el código de seguridad (CVV).",
              "NexiumLab no almacena ni guarda la información de pago de los usuarios. Esta información es transmitida directamente al proveedor de servicios de pago para su procesamiento.",
              "Verificación de Pagos:",
              "NexiumLab se reserva el derecho de verificar la información de pago proporcionada por los usuarios antes de procesar el pago.",
              "Si la información de pago no es verificada correctamente, el pago puede ser rechazado y el usuario será notificado.",
            ],
          },
          {
            title: "Responsabilidades",
            body: [
              "Del portal: NexiumLab NO se hará responsable, directa ni subsidiariamente, de:",
              "Resultados No Garantizados: NexiumLab no se hace responsable por la falta de resultados específicos en las campañas de marketing, ya que los resultados pueden variar según múltiples factores externos, como el comportamiento del mercado y la competencia.",
              "Errores en la Información Proporcionada: La empresa no asume responsabilidad por errores o inexactitudes en la información proporcionada por el cliente o terceros que puedan afectar las campañas de marketing.",
              "Interrupciones del Servicio: No se responsabiliza por interrupciones en los servicios de internet o plataformas de terceros que puedan afectar la ejecución de las campañas.",
              "Cambios en Algoritmos: NexiumLab no es responsable por cambios en los algoritmos de plataformas de publicidad o redes sociales que puedan impactar el rendimiento de las campañas.",
              "Fuerza Mayor: La empresa no se hace responsable por daños o pérdidas resultantes de eventos fuera de su control, como desastres naturales, guerras, o pandemias.",
              "Dependencia de Terceros: No se asume responsabilidad por la calidad o disponibilidad de servicios proporcionados por terceros, como proveedores de software o plataformas publicitarias.",
              "Si NexiumLab llevara a cabo un cambio en las presentes cláusulas que aún no hubieran sido informadas en el Sitio, se notificará a los Usuarios en el plazo más breve posible por comunicación personal o a través de la actualización de los contenidos del Sitio.",
              "Del Usuario: El Usuario será responsable:",
              "Información Proporcionada: Los usuarios deben asegurarse de proporcionar información precisa y completa a NexiumLab para el desarrollo efectivo de las campañas de marketing. Son responsables de cualquier error u omisión en los datos que suministren.",
              "Uso Apropiado de los Servicios: Los usuarios deben utilizar los servicios de marketing de manera apropiada, cumpliendo con las leyes aplicables y sin infringir derechos de terceros. No pueden emplear los servicios para actividades ilegales o dañinas.",
              "Pago Oportuno: Los usuarios son responsables de realizar los pagos acordados por los servicios de marketing en las fechas estipuladas. El incumplimiento de los términos de pago puede conllevar la suspensión o terminación de los servicios.",
              "Protección de Datos: Los usuarios deben proteger adecuadamente los datos personales y confidenciales a los que tengan acceso a través de los servicios de NexiumLab. No pueden hacer un uso indebido o no autorizado de dicha información.",
              "Cooperación con NexiumLab: Los usuarios tienen la responsabilidad de cooperar con NexiumLab, proporcionando oportunamente la información y el apoyo necesarios para la ejecución exitosa de las campañas de marketing contratadas..",
            ],
          },
          {
            title: "Propiedad Intelectual e Industrial",
            body: [
              "La totalidad del Sitio, que incluye texto, imágenes, marcas, gráficos, logotipos, botones, archivos de software, combinaciones de colores, así como la estructura, selección, ordenación y presentación de sus contenidos, se encuentra protegida por las leyes sobre Propiedad Intelectual e Industrial de México, quedando prohibida su reproducción, distribución, comunicación pública y transformación, salvo para uso personal y privado.",
              "NexiumLab no garantiza que los contenidos sean precisos o libres de error o que el uso de estos por el usuario no infrinja los derechos de terceras partes. El buen o mal uso de esta Web y de sus contenidos está bajo la responsabilidad del usuario.",
              "Queda prohibida la reproducción, retransmisión, copia, cesión o redifusión, total o parcial, de la información contenida en estas páginas, cualquiera que fuera su finalidad y el medio utilizado para ello, así como de los productos adquiridos a través del Sitio.",
            ],
          },
          {
            title: "Protección de Datos Personales",
            body: [
              "NexiumLab se compromete a proteger la privacidad y los datos personales de todos los usuarios que visiten y utilicen su sitio web, de acuerdo a lo establecido en la Política de Privacidad de la empresa.",
              "La Política de Privacidad, accesible en la sección correspondiente del sitio web, detalla:",
              "Qué información personal recopilamos de los usuarios y cómo la obtenemos",
              "Cómo utilizamos y procesamos los datos personales",
              "Con quién compartimos la información personal, si fuera necesario",
              "Cómo almacenamos y protegemos los datos personales",
              "Los derechos de los usuarios sobre sus datos personales",
              "Cómo pueden los usuarios contactarnos para ejercer sus derechos o hacer consultas",
              "NexiumLab cumple con las leyes y regulaciones aplicables en materia de protección de datos personales dentro de México. Los usuarios pueden acceder a la Política de Privacidad en cualquier momento a través del enlace disponible en el sitio web. Al utilizar los servicios de NexiumLab, los usuarios aceptan los términos de la Política de Privacidad.",
            ],
          },
          {
            title: "Uso de Tecnologías Cookies",
            body: [
              "NexiumLab se reserva el derecho de utilización de las denominadas “cookies” en cualquier tipo de utilización del Sitio. No obstante, se informa a los Usuarios de la posibilidad de gestionar sus preferencias de cookies en su navegador y rechazar la utilización de cookies si así lo desean. Para más información, consulte nuestra Política de Cookies disponible en el Sitio.",
            ],
          },
          {
            title: "Enlaces o Links",
            body: [
              "El Sitio puede incluir enlaces o links a sitios de terceros. Las antedichas webs no han sido revisadas ni son objeto de controles sobre los mismos por el Sitio. NexiumLab no podrá ser considerada en ningún caso responsable de los contenidos de estos sitios Web ni de las medidas que se adopten relativas a su privacidad o al tratamiento de sus datos de carácter personal. NexiumLab recomienda la lectura detenida de las condiciones de uso y la política de privacidad de estos sitios.",
              "En caso de estar interesado en activar un enlace al Sitio, deberá comunicarlo a NexiumLab, obteniendo el consentimiento expreso para crear el enlace. NexiumLab se reserva el derecho de oposición a la activación de enlaces con su sitio Web.",
            ],
          },
          {
            title: "Jurisdicción y Ley Aplicable",
            body: [
              "Las cláusulas de los presentes Términos y Condiciones se encuentran sometidas a la legislación mexicana vigente. Para cualquier tipo de controversia derivada de la utilización de los servicios ofrecidos o productos ofertados en el Sitio, las partes, con la aceptación de estos Términos y Condiciones, se someterán a los Tribunales y Juzgados competentes de la Ciudad de México, salvo que una Ley establezca un fuero diferente, en atención a la naturaleza de la relación.",
            ],
          },
          {
            title: "Contacto",
            body: [
              "Para cualquier consulta, solicitud de información, reportar problemas técnicos o cualquier otro asunto relacionado con nuestros servicios, puede contactarnos por correo electrónico a consulta@nexiumlab.com.mx.",
            ],
          },
        ],
      },
      refunds: {
        title: "Política de Devoluciones, Reembolsos y Cancelación",
        sections: [
          {
            title: "",
            body: [
              "SUMIMAX MASTER COMMERCE, S.A. de C.V. (en adelante, “NexiumLab”), pone a su disposición la presente Política de Devoluciones, Reembolsos y Cancelación, en caso de no estar completamente satisfecho con su compra, estamos aquí para asistirle.",
              "***Al realizar una compra con nosotros, aceptas estar sujeto a nuestra Política de Devoluciones y Reembolsos, diseñada para garantizar que su experiencia sea justa y transparente.",
              "Esta política puede ser modificada o actualizada en función de nuevos requisitos legales, nuestras necesidades de productos o servicios, cambios en nuestras prácticas de privacidad, o por otras razones. Cualquier cambio a esta política se comunicará a los clientes a través de nuestro sitio web.",
            ],
          },
          {
            title: "DE LAS DEVOLUCIONES",
            body: [
              "Aceptamos devoluciones dentro de los 10 días naturales siguientes a la recepción del servicio, en caso de que esté presente defectos o no cumpla con lo solicitado.",
              "Para comenzar con el proceso, favor de contactar con nuestro servicio de atención al cliente a través de los datos proporcionados en nuestro sitio web para iniciar el proceso de devolución",
              "Para procesar su devolución, necesitamos un recibo o comprobante de compra. Todas las devoluciones deben incluir una declaración escrita que detalle los motivos de la devolución.",
              "Las devoluciones se aceptan únicamente para servicios que presenten defectos de ejecución. Es fundamental que nos informes sobre cualquier defecto en el servicio para ofrecerte una solución adecuada.",
              "Las devoluciones de productos digitales solo se aceptarán en casos de entrega incorrecta o dañada. Si experimenta algún problema con un producto digital, notifíquenos de inmediato para que podamos resolverlo lo antes posible.",
            ],
          },
          {
            title: "REEMBOLSOS",
            body: [
              "Los reembolsos se procesarán una vez que recibamos y verifiquemos la elegibilidad del servicio para el reembolso. Nos reservamos el derecho de rechazar un reembolso si los servicios devueltos no cumplen con las condiciones mencionadas.",
              "Una vez que recibamos e inspeccionamos su devolución, te enviaremos un correo electrónico notificando que hemos recibido el artículo devuelto. En el correo, te informaremos si su devolución ha sido aprobada o rechazada.",
              "Si su devolución es aprobada, procederemos el reembolso a su método de pago original. El tiempo para recibir el reembolso dependerá de la política de la entidad emisora de su",
              "Los reembolsos están sujetos a evaluación y pueden variar según el tipo de servicio o producto adquirido. Para servicios que requieran pagos parciales o en etapas, los reembolsos estarán sujetos a las etapas completadas y aprobadas.",
              "Exclusiones de reembolsos:",
              "No se otorgarán reembolsos si el cliente ha incumplido los Términos y Condiciones de NexiumLab.",
              "No se otorgarán reembolsos si el cliente ha proporcionado información incorrecta o insuficiente que haya afectado la prestación del servicio.",
              "Los servicios o productos que hayan sido utilizados, modificados o alterados después de la entrega no serán elegibles para reembolso, a menos que exista un defecto inherente que lo haga inadecuado para el propósito previsto.",
            ],
          },
          {
            title: "DE LOS SERVICIOS Y SU CANCELACIÓN",
            body: [
              "Es importante considerar lo siguiente en caso de querer cancelar algún servicio con nosotros:",
              "No aplicamos cargos automáticos, preautorizados o recurrentes. Esto significa que deberás realizar el pago correspondiente para cada periodo en el que desees utilizar nuestros servicios, lo que te otorga control total sobre sus pagos.",
              "Al finalizar el periodo contratado, mantendremos su servicio activo durante 5 (cinco) días adicionales. Este tiempo extra te ofrece la oportunidad de renovar el servicio para un nuevo periodo sin interrupciones. Si no renuevas el servicio al finalizar estos 5 (cinco) días, el servicio será suspendido hasta que se realice el pago correspondiente.",
              "Esto proporciona flexibilidad y control sobre su suscripción, asegurando que solo pagues por los periodos en los que realmente necesitas el servicio.",
            ],
          },
          {
            title: "CONTACTO",
            body: [
              "Si tienes alguna duda o inquietud respecto a esta política o cualquier otro aspecto de nuestros servicios, no dudes en ponerte en contacto con nuestro equipo de atención al cliente. Puede comunicarse con nosotros a través de correo electrónico enviando un correo a consulta@nexiumlab.com.mx.",
            ],
          },
        ],
      },
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
      contactEmail: "consulta@nexiumlab.com.mx",
      servicesMenuEyebrow: "Core services",
      servicesMenuTitle: "Choose a category and browse the available plans",
      servicesMenuAll: "View all services",
      servicesMenuPlans: "View plans",
    },

    footer: {
      legalTitle: "Legal",
      legal: [
        "Privacy Notice",
        "Terms and Conditions",
        "Returns, Refunds and Cancellation Policy",
      ],
      contactEyebrow: "Contact",
      description:
        "Elevating brands through strategic design, technology, and high-performance digital marketing.",
      addressEyebrow: "Our Location",
      addressText:
        "José María Ibarrarán 47, San José Insurgentes, Benito Juárez, C.P. 03900, Mexico City",
      copyright:
        "© 2026 NexiumLab — Built with purpose in Mexico.",
      studio: "Digital Agency",
      rights: "All rights reserved.",
      madeIn: "Designed in Mexico.",
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


    legal: {
      eyebrow: "Legal information",
      privacy: {
        title: "Privacy Notice",
        sections: [
          {
            title: "",
            body: [
              "In compliance with the Federal Law on Protection of Personal Data Held by Private Parties (the “Law”), its regulations, and the applicable guidelines, we inform you of the following:",
              "SUMIMAX MASTER COMMERCE, S.A. de C.V. (hereinafter, “NexiumLab”), with domicile in Mexico City, will be responsible for collecting your personal data, as well as for its use and protection and for data collected by its controlling companies, subsidiaries or affiliates, or by third parties hired to provide services on behalf of NexiumLab, in accordance with this privacy notice (the “Privacy Notice”).",
            ],
          },
          {
            title: "Personal Data Collected",
            body: [
              "By virtue of your existing or future commercial relationship with NexiumLab, you may provide us with some of the following personal data:",
              "Identification and contact data: Full name and email address.",
              "NexiumLab DOES NOT collect data considered sensitive, which requires a special level of protection due to the risk that improper processing may represent to the privacy and rights of individuals.",
            ],
          },
          {
            title: "Purposes of Personal Data Processing",
            body: [
              "Personal data will be used for the following primary purposes:",
              "Identity verification: Confirm users' identity to prevent fraud and ensure that transactions are carried out securely.",
              "Regulatory compliance: Ensure compliance with local and international regulations, such as anti-money laundering (AML) and know your customer (KYC) laws.",
              "Transactions: Facilitate the purchase, sale, and transfer of the Services offered by NexiumLab, ensuring that transactions are processed efficiently and securely.",
              "Customer service: Provide support to users, resolve issues, and respond to inquiries.",
              "Marketing and communication: Send relevant information about service updates, promotions, and other related communications, provided that the user's consent has been obtained.",
              "Analysis and improvements: Analyze user behavior and site usage to improve the services offered, identify areas for improvement, and develop new functionality.",
              "Prevention of unlawful activities: Monitor user transactions and activities to detect and prevent suspicious or illegal activities.",
              "In addition, NexiumLab may use your personal data for the following secondary purposes:",
              "Statistical purposes.",
              "Invite you to participate in NexiumLab events, training, and promotions.",
              "Advertising purposes.",
            ],
          },
          {
            title: "Collection of Personal Data",
            body: [
              "We may collect your personal data in different ways: when you provide it to us directly or when we obtain information through other sources permitted by the Law, at all times complying with the purposes stated in the Privacy Notice.",
            ],
          },
          {
            title: "Protection of Minors' Data",
            body: [
              "NexiumLab WILL NOT directly collect personal data from persons under 18 years of age. Only persons over 18 years of age may provide consent regarding collected data. Parents/guardians are advised to regularly review and monitor their children's use of email and other online activities so that they do not share personally identifiable information without prior consent. At any time, you may request that we delete any personal data of your children by sending a request to the following email address: consulta@nexiumlab.com.mx.",
            ],
          },
          {
            title: "Transfer of Personal Data",
            body: [
              "Your personal data may be transferred to controlling companies, subsidiaries, affiliates, or any other company belonging to NexiumLab, in Mexico or abroad; to national or foreign third parties for compliance with the purposes mentioned above, or when such communication of data is provided for in a Law or Treaty, or when required by the competent authority.",
              "We will seek to ensure that such third parties maintain adequate security measures to safeguard your personal data and use it exclusively for the purposes for which it was collected and in accordance with this Privacy Notice. We will not assign or transfer your data to third parties unrelated to the company, except in the cases mentioned above and those provided for by the Law.",
            ],
          },
          {
            title: "Security Measures",
            body: [
              "We will implement the technical, administrative, and physical security measures necessary to seek to preserve the integrity of your personal data and prevent damage, loss, alteration, destruction, or unauthorized use, access, or processing. Only authorized personnel who have complied with confidentiality requirements may participate in its processing.",
              "Authorized personnel are prohibited from allowing access to unauthorized persons and from using your personal data for purposes other than those established in this Privacy Notice. The confidentiality obligation remains in effect even after the relationship with NexiumLab has ended.",
            ],
          },
          {
            title: "",
            body: [
              "Of course, here is a summary of a cookie policy:",
            ],
          },
          {
            title: "What are cookies?",
            body: [
              "Cookies are small text files stored on your device when you visit a website. They are used to improve your experience on the website, remember your preferences, and provide analytical data about your behavior on the site.",
            ],
          },
          {
            title: "Types of cookies we use:",
            body: [
              "Essential cookies: Necessary for the basic operation of the website. Without these cookies, some parts of the site would not function properly.",
              "Performance cookies: Collect information about how visitors use the site, such as the pages they visit most often. This data helps improve site functionality and performance.",
              "Functionality cookies: Allow the website to remember choices you make (such as your username, language, or region) and provide enhanced and more personalized features.",
              "Advertising cookies: Used to display ads that are relevant to you based on your interests. They also limit the number of times you see an ad and help measure the effectiveness of advertising campaigns.",
              "You can control and manage cookies in several ways:",
              "Browser settings: You can configure your browser to accept or reject cookies, or to notify you when a cookie is sent. Consult your browser instructions for more details.",
              "Cookie management tools: Some websites provide specific tools to manage cookies directly from the site.",
              "If you decide to disable cookies, some site functionality may be affected, which may result in a less optimized experience. For example, you may not be able to access certain areas of the site or some previously saved preferences may not be remembered.",
            ],
          },
          {
            title: "Data Subject Rights",
            body: [
              "You have the right to access the personal data we hold and the details of its processing, as well as to rectify it if it is inaccurate or incomplete, cancel it when you consider that it is not required for any of the purposes stated in this Privacy Notice or is being used for purposes not consented to, and object to its processing for specific purposes or limit its use or disclosure.",
              "To exercise these rights, you must submit a request addressed to the Personal Data Department at the following email address: consulta@nexiumlab.com.mx, including:",
              "Name of the Data Subject and a means to communicate the response to the request.",
              "Documents proving identity (photo voter ID, passport, military service card, or driver's license), scanned, and in the case of a legal entity, documents proving the Data Subject's legal representation (through a Public Deed showing the powers to carry out the act).",
              "Clear and precise description of the personal data with respect to which any of the rights are sought to be exercised.",
              "Any other element or document that facilitates the location of the personal data.",
              "The response to your request will be provided, at your choice, by email. NexiumLab will have a period of twenty business days, counted from the date the request was received or from the date the Data Subject satisfied the information request, to inform you whether it is admissible. If so, it will be made effective within the following fifteen days from the date the response is communicated. The periods may be extended once for an equal period when justified.",
              "To learn more about request requirements, admissibility, or forms, you may contact the Personal Data Department directly at the company's address or at the email address: consulta@nexiumlab.com.mx.",
            ],
          },
          {
            title: "Revocation of Consent",
            body: [
              "At any time, you have the right to revoke consent for the processing of your personal data, for which you must submit your request in accordance with the procedure and requirements stated in the preceding paragraphs.",
            ],
          },
          {
            title: "Modifications to the Privacy Notice",
            body: [
              "NexiumLab reserves the right to modify this Privacy Notice at any time to comply with legislative or judicial updates, internal policies, new requirements for the provision of services, or any other cause. Any modification, as well as the updated document, will be available on the platforms or facilities where it is used.",
            ],
          },
          {
            title: "Applicable Law",
            body: [
              "This Privacy Notice and NexiumLab's handling of your personal data are governed by the current and applicable legislation of the United Mexican States; therefore, any dispute arising from its application must be heard before the competent jurisdictional bodies in Mexico City.",
            ],
          },
        ],
      },
      terms: {
        title: "Terms and Conditions",
        sections: [
          {
            title: "",
            body: [
              "SUMIMAX MASTER COMMERCE, S.A. de C.V. (hereinafter “NexiumLab”), is a legal entity duly incorporated under Mexican commercial laws, with domicile in Mexico City. It makes available to you these Terms and Conditions (hereinafter the “Terms”) of the Website with domain https://only￾digital.com/ (hereinafter the “Site”).",
            ],
          },
          {
            title: "Acceptance of Terms",
            body: [
              "To use this Site, the User's express acceptance of each and every clause of these Terms and Conditions is required.",
              "NexiumLab reserves the right to make, without prior notice, any modifications it deems appropriate, and may change, remove, or add both the content, products, and services provided through it, as well as the way in which they appear presented or located on the Site.",
            ],
          },
          {
            title: "Purpose of the Terms",
            body: [
              "NexiumLab's main activity is to provide all types of services related to the development of customized strategies that generate measurable and sustainable results, boosting the visibility and success of your brand in a highly competitive environment (the “Service”). Through the Site, Users access and may use the various Services and content made available to them. The clauses of these Terms and Conditions shall apply to all services on the Site, whose specific characteristics are determined on the Site.",
            ],
          },
          {
            title: "Payment for Services",
            body: [
              "Accepted Payment Methods:",
              "NexiumLab services may only be paid by credit or debit card.",
              "Cash payments, checks, bank transfers, or any other form of payment other than a credit or debit card are not accepted.",
              "Payment Service Provider:",
              "Payments will be processed by an authorized payment service provider designated by NexiumLab.",
              "The company has no control over the payment service provider, but is committed to working with reliable and secure providers.",
              "Payment Information:",
              "To make a payment, users must provide their credit or debit card information, including the card number, cardholder name, expiration date, and security code (CVV).",
              "NexiumLab does not store or retain users' payment information. This information is transmitted directly to the payment service provider for processing.",
              "Payment Verification:",
              "NexiumLab reserves the right to verify payment information provided by users before processing payment.",
              "If the payment information cannot be properly verified, payment may be rejected and the user will be notified.",
            ],
          },
          {
            title: "Responsibilities",
            body: [
              "Of the portal: NexiumLab SHALL NOT be directly or subsidiarily responsible for:",
              "Results Not Guaranteed: NexiumLab is not responsible for the lack of specific results in marketing campaigns, as results may vary according to multiple external factors, such as market behavior and competition.",
              "Errors in Information Provided: The company assumes no responsibility for errors or inaccuracies in information provided by the client or third parties that may affect marketing campaigns.",
              "Service Interruptions: It is not responsible for interruptions in internet services or third-party platforms that may affect campaign execution.",
              "Algorithm Changes: NexiumLab is not responsible for changes to advertising platform or social media algorithms that may impact campaign performance.",
              "Force Majeure: The company is not responsible for damages or losses resulting from events beyond its control, such as natural disasters, wars, or pandemics.",
              "Third-Party Dependency: No responsibility is assumed for the quality or availability of services provided by third parties, such as software providers or advertising platforms.",
              "If NexiumLab makes a change to these clauses that has not yet been reported on the Site, Users will be notified as soon as possible by personal communication or through an update to the Site content.",
              "Of the User: The User shall be responsible for:",
              "Information Provided: Users must ensure that they provide accurate and complete information to NexiumLab for the effective development of marketing campaigns. They are responsible for any error or omission in the data they provide.",
              "Proper Use of Services: Users must use marketing services appropriately, complying with applicable laws and without infringing third-party rights. They may not use the services for illegal or harmful activities.",
              "Timely Payment: Users are responsible for making agreed payments for marketing services on the stipulated dates. Failure to comply with payment terms may result in suspension or termination of services.",
              "Data Protection: Users must adequately protect personal and confidential data to which they have access through NexiumLab services. They may not make improper or unauthorized use of such information.",
              "Cooperation with NexiumLab: Users have the responsibility to cooperate with NexiumLab, timely providing the information and support necessary for the successful execution of contracted marketing campaigns..",
            ],
          },
          {
            title: "Intellectual and Industrial Property",
            body: [
              "The entirety of the Site, including text, images, trademarks, graphics, logos, buttons, software files, color combinations, as well as the structure, selection, arrangement, and presentation of its content, is protected by the Intellectual and Industrial Property laws of Mexico, and its reproduction, distribution, public communication, and transformation are prohibited except for personal and private use.",
              "NexiumLab does not guarantee that the content is accurate or error-free or that its use by the user does not infringe the rights of third parties. Proper or improper use of this Website and its content is the user's responsibility.",
              "The reproduction, retransmission, copying, assignment, or redistribution, in whole or in part, of the information contained on these pages, regardless of its purpose and the means used, as well as of products acquired through the Site, is prohibited.",
            ],
          },
          {
            title: "Personal Data Protection",
            body: [
              "NexiumLab is committed to protecting the privacy and personal data of all users who visit and use its website, in accordance with the company's Privacy Policy.",
              "The Privacy Policy, accessible in the corresponding section of the website, details:",
              "What personal information we collect from users and how we obtain it",
              "How we use and process personal data",
              "With whom we share personal information, if necessary",
              "How we store and protect personal data",
              "Users' rights regarding their personal data",
              "How users can contact us to exercise their rights or make inquiries",
              "NexiumLab complies with applicable laws and regulations regarding personal data protection in Mexico. Users may access the Privacy Policy at any time through the link available on the website. By using NexiumLab services, users accept the terms of the Privacy Policy.",
            ],
          },
          {
            title: "Use of Cookie Technologies",
            body: [
              "NexiumLab reserves the right to use so-called “cookies” in any type of use of the Site. However, Users are informed of the possibility of managing their cookie preferences in their browser and rejecting the use of cookies if they so wish. For more information, consult our Cookie Policy available on the Site.",
            ],
          },
          {
            title: "Links",
            body: [
              "The Site may include links to third-party sites. The aforementioned websites have not been reviewed and are not subject to controls by the Site. NexiumLab shall under no circumstances be considered responsible for the content of these websites or for measures adopted regarding their privacy or the processing of their personal data. NexiumLab recommends carefully reading the terms of use and privacy policy of these sites.",
              "If you are interested in activating a link to the Site, you must notify NexiumLab and obtain express consent to create the link. NexiumLab reserves the right to object to the activation of links to its Website.",
            ],
          },
          {
            title: "Jurisdiction and Applicable Law",
            body: [
              "The clauses of these Terms and Conditions are subject to current Mexican legislation. For any dispute arising from the use of services offered or products offered on the Site, the parties, by accepting these Terms and Conditions, will submit to the competent Courts and Tribunals of Mexico City, unless a Law establishes a different jurisdiction due to the nature of the relationship.",
            ],
          },
          {
            title: "Contact",
            body: [
              "For any inquiry, request for information, report of technical problems, or any other matter related to our services, you may contact us by email at consulta@nexiumlab.com.mx.",
            ],
          },
        ],
      },
      refunds: {
        title: "Returns, Refunds and Cancellation Policy",
        sections: [
          {
            title: "",
            body: [
              "SUMIMAX MASTER COMMERCE, S.A. de C.V. (hereinafter, “NexiumLab”), makes this Returns, Refunds and Cancellation Policy available to you; if you are not completely satisfied with your purchase, we are here to assist you.",
              "***By making a purchase with us, you agree to be subject to our Returns and Refunds Policy, designed to ensure that your experience is fair and transparent.",
              "This policy may be modified or updated based on new legal requirements, our product or service needs, changes in our privacy practices, or for other reasons. Any change to this policy will be communicated to customers through our website.",
            ],
          },
          {
            title: "RETURNS",
            body: [
              "We accept returns within 10 calendar days following receipt of the service, in the event that it presents defects or does not comply with what was requested.",
              "To begin the process, please contact our customer service using the information provided on our website to initiate the return process",
              "To process your return, we need a receipt or proof of purchase. All returns must include a written statement detailing the reasons for the return.",
              "Returns are accepted only for services that present execution defects. It is essential that you inform us of any defect in the service so that we can offer you an appropriate solution.",
              "Returns of digital products will only be accepted in cases of incorrect or damaged delivery. If you experience any problem with a digital product, notify us immediately so that we can resolve it as soon as possible.",
            ],
          },
          {
            title: "REFUNDS",
            body: [
              "Refunds will be processed once we receive and verify the service's eligibility for a refund. We reserve the right to reject a refund if the returned services do not meet the stated conditions.",
              "Once we receive and inspect your return, we will send you an email notifying you that we have received the returned item. In the email, we will inform you whether your return has been approved or rejected.",
              "If your return is approved, we will issue the refund to your original payment method. The time to receive the refund will depend on the policy of the issuing entity of your",
              "Refunds are subject to evaluation and may vary depending on the type of service or product purchased. For services requiring partial or staged payments, refunds will be subject to the stages completed and approved.",
              "Refund exclusions:",
              "No refunds will be granted if the customer has breached NexiumLab's Terms and Conditions.",
              "No refunds will be granted if the customer has provided incorrect or insufficient information that affected the provision of the service.",
              "Services or products that have been used, modified, or altered after delivery will not be eligible for a refund, unless there is an inherent defect that makes them unsuitable for the intended purpose.",
            ],
          },
          {
            title: "SERVICES AND THEIR CANCELLATION",
            body: [
              "It is important to consider the following if you wish to cancel any service with us:",
              "We do not apply automatic, preauthorized, or recurring charges. This means that you must make the corresponding payment for each period in which you wish to use our services, giving you full control over your payments.",
              "At the end of the contracted period, we will keep your service active for an additional 5 (five) days. This extra time gives you the opportunity to renew the service for a new period without interruptions. If you do not renew the service at the end of these 5 (five) days, the service will be suspended until the corresponding payment is made.",
              "This provides flexibility and control over your subscription, ensuring that you only pay for the periods in which you really need the service.",
            ],
          },
          {
            title: "CONTACT",
            body: [
              "If you have any questions or concerns regarding this policy or any other aspect of our services, please feel free to contact our customer service team. You can contact us by email by sending a message to consulta@nexiumlab.com.mx.",
            ],
          },
        ],
      },
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
