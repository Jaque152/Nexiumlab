// =============== INTERFACES ====================

export interface ServiceFeature {
  titulo: string;
  descripcion: string;
}

export interface Service {
  servicio: string;
  descripcion_corta: string;
  beneficios: string[];
  descripcion_detallada: string;
  caracteristicas: ServiceFeature[];
}

export interface PricePlan {
  nombre: string;
  moneda: string;
  precio: number;
  precio_formato: string;
  impuesto: string;
  caracteristicas: string[];
}

// =============== CATALOGO DE SERVICIOS ====================

export const servicios: Service[] = [
  {
    servicio: "Marketing en Redes Sociales",
    descripcion_corta: "Gestionamos y optimizamos tus perfiles en redes sociales.",
    beneficios: [
      "Aumento de seguidores",
      "Mayor interacción",
      "Promoción de tu marca"
    ],
    descripcion_detallada: "Analizamos tu audiencia, creamos contenido atractivo y monitorizamos el rendimiento.",
    caracteristicas: [
      {
        titulo: "Estrategia de contenidos",
        descripcion: "Publicamos regularmente contenido relevante y de calidad."
      },
      {
        titulo: "Análisis y reportes",
        descripcion: "Proporcionamos informes detallados sobre el rendimiento de tus redes sociales."
      },
      {
        titulo: "Optimización continua",
        descripcion: "Ajustamos nuestras estrategias basándonos en los datos recopilados para maximizar el impacto."
      }
    ]
  },
  {
    servicio: "SEO (Optimización en Motores de Búsqueda)",
    descripcion_corta: "Mejoramos tu posicionamiento en buscadores.",
    beneficios: [
      "Mayor visibilidad",
      "Aumento de tráfico",
      "Más conversiones"
    ],
    descripcion_detallada: "Realizamos una auditoría SEO, optimizamos tu sitio web y creamos contenido relevante.",
    caracteristicas: [
      {
        titulo: "Investigación de palabras clave",
        descripcion: "Identificamos las palabras clave más efectivas para tu negocio."
      },
      {
        titulo: "Optimización On-Page y Off-Page",
        descripcion: "Mejoramos tanto la estructura de tu sitio como los enlaces externos."
      },
      {
        titulo: "Monitoreo y reportes",
        descripcion: "Seguimos el rendimiento y ajustamos nuestras tácticas para mejorar los resultados."
      }
    ]
  },
  {
    servicio: "Publicidad Digital",
    descripcion_corta: "Diseñamos y gestionamos campañas publicitarias en Google Ads, Facebook Ads y más.",
    beneficios: [
      "Aumento de visibilidad",
      "Generación de leads",
      "Mejor ROI"
    ],
    descripcion_detallada: "Creamos anuncios atractivos, definimos audiencias objetivo y monitorizamos campañas.",
    caracteristicas: [
      {
        titulo: "Estrategia de anuncios",
        descripcion: "Desarrollamos una estrategia basada en tus objetivos y presupuesto."
      },
      {
        titulo: "Segmentación de audiencias",
        descripcion: "Utilizamos datos demográficos y de comportamiento para llegar a tu público ideal."
      },
      {
        titulo: "Optimización de campañas",
        descripcion: "Ajustamos los anuncios y las pujas para maximizar el rendimiento y reducir costos."
      }
    ]
  },
  {
    servicio: "Email Marketing",
    descripcion_corta: "Creamos campañas de email marketing efectivas.",
    beneficios: [
      "Fidelización de clientes",
      "Aumento de ventas",
      "Mejora de la comunicación"
    ],
    descripcion_detallada: "Diseñamos correos atractivos, segmentamos tu lista de contactos y analizamos el rendimiento.",
    caracteristicas: [
      {
        titulo: "Automatización de correos",
        descripcion: "Implementamos secuencias automáticas para ahorrar tiempo y mejorar la eficiencia."
      },
      {
        titulo: "Pruebas A/B",
        descripcion: "Realizamos pruebas para determinar qué correos funcionan mejor."
      },
      {
        titulo: "Informes detallados",
        descripcion: "Proporcionamos análisis sobre la tasa de apertura, clics y conversiones."
      }
    ]
  },
  {
    servicio: "Desarrollo Web",
    descripcion_corta: "Diseñamos y desarrollamos sitios web atractivos y funcionales.",
    beneficios: [
      "Mejor experiencia de usuario",
      "Mayor velocidad de carga",
      "Diseño responsivo"
    ],
    descripcion_detallada: "Utilizamos las últimas tecnologías y mejores prácticas de diseño web.",
    caracteristicas: [
      {
        titulo: "Diseño personalizado",
        descripcion: "Creamos un diseño que refleje la identidad de tu marca."
      },
      {
        titulo: "Optimización para SEO",
        descripcion: "Aseguramos que tu sitio esté optimizado para los motores de búsqueda."
      },
      {
        titulo: "Mantenimiento y soporte",
        descripcion: "Ofrecemos servicios de mantenimiento para garantizar que tu sitio siempre funcione correctamente."
      }
    ]
  },
  {
    servicio: "Content Marketing",
    descripcion_corta: "Generamos contenido relevante y de calidad para atraer y retener a tu audiencia.",
    beneficios: [
      "Mejora del SEO",
      "Aumento de tráfico",
      "Mejor engagement"
    ],
    descripcion_detallada: "Desarrollamos una estrategia de contenidos basada en tu audiencia y objetivos.",
    caracteristicas: [
      {
        titulo: "Creación de contenido",
        descripcion: "Producimos artículos, blogs, videos y otros formatos de contenido."
      },
      {
        titulo: "Distribución de contenidos",
        descripcion: "Difundimos el contenido a través de múltiples canales para maximizar el alcance."
      },
      {
        titulo: "Análisis y ajuste",
        descripcion: "Evaluamos el rendimiento del contenido y ajustamos la estrategia para obtener mejores resultados."
      }
    ]
  }
];

// =============== PAQUETES Y PRECIOS ====================

export const paquetesPrecios: PricePlan[] = [
  {
    nombre: "Pulso expres",
    moneda: "MXN",
    precio: 320.00,
    precio_formato: "MXN $320.00",
    impuesto: "+ IVA",
    caracteristicas: [
      "Análisis de datos (alcance e interacciones en 1 red)",
      "Reporte breve en PDF"
    ]
  },
  {
    nombre: "Impulso inicial",
    moneda: "MXN",
    precio: 698.00,
    precio_formato: "MXN $698.00",
    impuesto: "+ IVA",
    caracteristicas: [
      "Email marketing básico por 15 días",
      "Revisión rápida de perfil en red social (1)",
      "Entrega de recomendaciones express"
    ]
  },
  {
    nombre: "Alcance inicial",
    moneda: "MXN",
    precio: 926.00,
    precio_formato: "MXN $926.00",
    impuesto: "+ IVA",
    caracteristicas: [
      "Email marketing por un mes"
    ]
  },
  {
    nombre: "Impulso en red",
    moneda: "MXN",
    precio: 1350.00,
    precio_formato: "MXN $1,350.00",
    impuesto: "+ IVA",
    caracteristicas: [
      "Análisis y reporte de datos"
    ]
  },
  {
    nombre: "Pulso digital",
    moneda: "MXN",
    precio: 2022.00,
    precio_formato: "MXN $2,022.00",
    impuesto: "+ IVA",
    caracteristicas: [
      "Gestión de redes sociales (1-2 redes sociales)",
      "Optimización Básica de CEO" // Nota: ¿Quizás quisiste decir SEO?
    ]
  },
  {
    nombre: "Conexión Viral",
    moneda: "MXN",
    precio: 2850.00,
    precio_formato: "MXN $2,850.00",
    impuesto: "+ IVA",
    caracteristicas: [
      "Gestión de redes sociales (1-2 redes sociales)",
      "Optimización básica de SEO",
      "Campaña de email marketing"
    ]
  },
  {
    nombre: "Impacto Digital",
    moneda: "MXN",
    precio: 3420.00,
    precio_formato: "MXN $3,420.00",
    impuesto: "+ IVA",
    caracteristicas: [
      "Gestión de redes sociales (1-2 redes sociales)",
      "Optimización básica de SEO",
      "Campaña de email marketing",
      "Análisis y reporte de datos"
    ]
  },
  {
    nombre: "Ecosistema Social",
    moneda: "MXN",
    precio: 5690.00,
    precio_formato: "MXN $5,690.00",
    impuesto: "+ IVA",
    caracteristicas: [
      "Gestión de redes sociales (1-2 redes sociales)",
      "Optimización básica de SEO",
      "Campaña de email marketing",
      "Análisis y reporte de datos",
      "Desarrollo de una página web de aterrizaje básica"
    ]
  },
  {
    nombre: "Redes al Máximo",
    moneda: "MXN",
    precio: 6745.00,
    precio_formato: "MXN $6,745.00",
    impuesto: "+ IVA",
    caracteristicas: [
      "Gestión de redes sociales (2-3 redes sociales)",
      "Optimización básica de SEO",
      "Campaña de email marketing",
      "Análisis y reporte de datos",
      "Desarrollo de una página web de aterrizaje básica"
    ]
  },
  {
    nombre: "Buzz Creativo",
    moneda: "MXN",
    precio: 8170.00,
    precio_formato: "MXN $8,170.00",
    impuesto: "+ IVA",
    caracteristicas: [
      "Gestión de redes sociales (2-3 redes sociales)",
      "Optimización básica de SEO",
      "Campaña de email marketing",
      "Análisis y reporte de datos",
      "Desarrollo de una página web de aterrizaje básica",
      "Una campaña publicitaria básica"
    ]
  },
  {
    nombre: "Alto Impacto Social",
    moneda: "MXN",
    precio: 10325.00,
    precio_formato: "MXN $10,325.00",
    impuesto: "+ IVA",
    caracteristicas: [
      "Gestión de redes sociales (2-3 redes sociales)",
      "Optimización básica de SEO",
      "Campaña de email marketing",
      "Análisis y reporte de datos",
      "Desarrollo de una página web de aterrizaje básica",
      "Una campaña publicitaria media"
    ]
  },
  {
    nombre: "Conexión Total",
    moneda: "MXN",
    precio: 12940.00,
    precio_formato: "MXN $12,940.00",
    impuesto: "+ IVA",
    caracteristicas: [
      "Gestión de redes sociales (2-3 redes sociales)",
      "Optimización básica de SEO",
      "Campaña de email marketing",
      "Análisis y reporte de datos",
      "Desarrollo de una página web de aterrizaje básica",
      "Una campaña publicitaria media",
      "Desarrollo y gestión de blog"
    ]
  },
  {
    nombre: "Estrategia Viral",
    moneda: "MXN",
    precio: 14165.00,
    precio_formato: "MXN $14,165.00",
    impuesto: "+ IVA",
    caracteristicas: [
      "Gestión de redes sociales (3-4 redes sociales)",
      "Optimización básica de SEO",
      "Campaña de email marketing",
      "Análisis y reporte de datos",
      "Desarrollo de una página web de aterrizaje básica",
      "Una campaña publicitaria media",
      "Desarrollo y gestión de blog"
    ]
  },
  {
    nombre: "Sintonía Social",
    moneda: "MXN",
    precio: 17845.00,
    precio_formato: "MXN $17,845.00",
    impuesto: "+ IVA",
    caracteristicas: [
      "Gestión de redes sociales (3-4 redes sociales)",
      "Optimización básica de SEO",
      "Campaña de email marketing",
      "Análisis y reporte de datos",
      "Desarrollo de una página web de aterrizaje básica",
      "Una campaña publicitaria media",
      "Desarrollo y gestión de blog",
      "Estrategia básica de contenido"
    ]
  },
  {
    nombre: "Visibilidad Máxima",
    moneda: "MXN",
    precio: 21910.00,
    precio_formato: "MXN $21,910.00",
    impuesto: "+ IVA",
    caracteristicas: [
      "Gestión de redes sociales (3-4 redes sociales)",
      "Optimización básica de SEO",
      "Campaña de email marketing",
      "Análisis y reporte de datos",
      "Desarrollo de una página web de aterrizaje básica",
      "Una campaña publicitaria media",
      "Desarrollo y gestión de blog",
      "Estrategia avanzada de contenido"
    ]
  },
  {
    nombre: "Presencia Plus",
    moneda: "MXN",
    precio: 24850.00,
    precio_formato: "MXN $24,850.00",
    impuesto: "+ IVA",
    caracteristicas: [
      "Gestión de redes sociales (4-5 redes sociales)",
      "Optimización básica de SEO",
      "Campaña de email marketing",
      "Análisis y reporte de datos",
      "Desarrollo de una página web de aterrizaje básica",
      "Una campaña publicitaria media",
      "Desarrollo y gestión de blog",
      "Estrategia avanzada de contenido",
      "Automatización de marketing"
    ]
  },
  {
    nombre: "Expansión Online",
    moneda: "MXN",
    precio: 28210.00,
    precio_formato: "MXN $28,210.00",
    impuesto: "+ IVA",
    caracteristicas: [
      "Gestión de redes sociales (4-5 redes sociales)",
      "Optimización básica de SEO",
      "Campaña de email marketing",
      "Análisis y reporte de datos",
      "Desarrollo de una página web de aterrizaje básica",
      "Una campaña publicitaria media",
      "Desarrollo y gestión de blog",
      "Estrategia avanzada de contenido",
      "Automatización de marketing",
      "Consultoría personalizada"
    ]
  },
  {
    nombre: "Aterrizaje Estratégico",
    moneda: "MXN",
    precio: 35670.00,
    precio_formato: "MXN $35,670.00",
    impuesto: "+ IVA",
    caracteristicas: [
      "Gestión de redes sociales (4-5 redes sociales)",
      "Optimización básica de SEO",
      "Campaña de email marketing",
      "Análisis y reporte de datos",
      "Desarrollo de una página web de aterrizaje básica",
      "Una campaña publicitaria media",
      "Desarrollo y gestión de blog",
      "Estrategia avanzada de contenido",
      "Automatización de marketing",
      "Consultoría personalizada",
      "Estrategia de marketing integrada"
    ]
  }
];