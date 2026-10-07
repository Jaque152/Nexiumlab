export interface ProductPlan {
  id: string;
  priceMXN: number;
  taxIncluded: boolean;
  currency: string;
  imageUrl: string;

  es: {
    name: string;
    description: string;
    features: string[];
  };

  en: {
    name: string;
    description: string;
    features: string[];
  };
}

export const webPlans: ProductPlan[] = [
  {
    id: "pulso-expres",
    priceMXN: 320.0,
    taxIncluded: false,
    currency: "MXN + IVA",
    imageUrl:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
    es: {
      name: "Pulso expres",
      description:
        "Análisis de alcance e interacciones en una red social, con entrega de un reporte breve en PDF.",
      features: [
        "Análisis de datos (alcance e interacciones en 1 red)",
        "Reporte breve en PDF",
      ],
    },
    en: {
      name: "Pulse expres",
      description:
        "Reach and interaction analysis for one social network, with a brief PDF report.",
      features: [
        "Data analysis (reach and interactions on 1 network)",
        "Brief PDF report",
      ],
    },
  },
  {
    id: "impulso-inicial",
    priceMXN: 698.0,
    taxIncluded: false,
    currency: "MXN + IVA",
    imageUrl:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=85",
    es: {
      name: "Impulso inicial",
      description:
        "Email marketing básico por 15 días, revisión rápida de un perfil en red social y recomendaciones express.",
      features: [
        "Email marketing básico por 15 días",
        "Revisión rápida de perfil en red social (1)",
        "Entrega de recomendaciones express",
      ],
    },
    en: {
      name: "Initial impulse",
      description:
        "Basic email marketing for 15 days, a quick review of one social media profile, and express recommendations.",
      features: [
        "Basic email marketing for 15 days",
        "Quick review of 1 social media profile",
        "Delivery of express recommendations",
      ],
    },
  },
  {
    id: "alcance-inicial",
    priceMXN: 926.0,
    taxIncluded: false,
    currency: "MXN + IVA",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
    es: {
      name: "Alcance inicial",
      description: "Servicio de email marketing durante un mes.",
      features: ["Email marketing por un mes"],
    },
    en: {
      name: "Initial scope",
      description: "Email marketing service for one month.",
      features: ["Email marketing for one month"],
    },
  },
  {
    id: "impulso-en-red",
    priceMXN: 1350.0,
    taxIncluded: false,
    currency: "MXN + IVA",
    imageUrl:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85",
    es: {
      name: "Impulso en red",
      description: "Análisis de información y entrega de reporte de datos.",
      features: ["Análisis y reporte de datos"],
    },
    en: {
      name: "Network boost",
      description: "Data analysis with report delivery.",
      features: ["Data analysis and reporting"],
    },
  },
  {
    id: "pulso-digital",
    priceMXN: 2022.0,
    taxIncluded: false,
    currency: "MXN + IVA",
    imageUrl:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85",
    es: {
      name: "Pulso digital",
      description:
        "Gestión de una a dos redes sociales acompañada de optimización básica de CEO.",
      features: [
        "Gestión de redes sociales (1-2 redes sociales)",
        "Optimización Básica de CEO",
      ],
    },
    en: {
      name: "Digital Pulse",
      description:
        "Management of one to two social networks together with basic CEO optimization.",
      features: [
        "Social media management (1-2 social networks)",
        "Basic CEO optimization",
      ],
    },
  },
  {
    id: "conexion-viral",
    priceMXN: 2850.0,
    taxIncluded: false,
    currency: "MXN + IVA",
    imageUrl:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1200&q=85",
    es: {
      name: "Conexión Viral",
      description:
        "Gestión de una a dos redes sociales con optimización básica de SEO y una campaña de email marketing.",
      features: [
        "Gestión de redes sociales (1-2 redes sociales)",
        "Optimización básica de SEO",
        "Campaña de email marketing",
      ],
    },
    en: {
      name: "Viral conexion",
      description:
        "Management of one to two social networks with basic SEO optimization and an email marketing campaign.",
      features: [
        "Social media management (1-2 social networks)",
        "Basic SEO optimization",
        "Email marketing campaign",
      ],
    },
  },
  {
    id: "impacto-digital",
    priceMXN: 3420.0,
    taxIncluded: false,
    currency: "MXN + IVA",
    imageUrl:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=85",
    es: {
      name: "Impacto Digital",
      description:
        "Gestión de redes sociales, SEO básico, email marketing y análisis con reporte de datos.",
      features: [
        "Gestión de redes sociales (1-2 redes sociales)",
        "Optimización básica de SEO",
        "Campaña de email marketing",
        "Análisis y reporte de datos",
      ],
    },
    en: {
      name: "Digital Impact",
      description:
        "Social media management, basic SEO, email marketing, and data analysis with reporting.",
      features: [
        "Social media management (1-2 social networks)",
        "Basic SEO optimization",
        "Email marketing campaign",
        "Data analysis and reporting",
      ],
    },
  },
  {
    id: "ecosistema-social",
    priceMXN: 5690.0,
    taxIncluded: false,
    currency: "MXN + IVA",
    imageUrl:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=85",
    es: {
      name: "Ecosistema Social",
      description:
        "Integra redes sociales, SEO, email marketing, análisis de datos y una página web de aterrizaje básica.",
      features: [
        "Gestión de redes sociales (1-2 redes sociales)",
        "Optimización básica de SEO",
        "Campaña de email marketing",
        "Análisis y reporte de datos",
        "Desarrollo de una página web de aterrizaje básica",
      ],
    },
    en: {
      name: "Social ecosysstem",
      description:
        "Combines social media, SEO, email marketing, data analysis, and a basic landing page.",
      features: [
        "Social media management (1-2 social networks)",
        "Basic SEO optimization",
        "Email marketing campaign",
        "Data analysis and reporting",
        "Development of a basic landing page",
      ],
    },
  },
  {
    id: "redes-al-maximo",
    priceMXN: 6745.0,
    taxIncluded: false,
    currency: "MXN + IVA",
    imageUrl:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=85",
    es: {
      name: "Redes al Máximo",
      description:
        "Gestión de dos a tres redes sociales con SEO básico, email marketing, análisis de datos y landing page básica.",
      features: [
        "Gestión de redes sociales (2-3 redes sociales)",
        "Optimización básica de SEO",
        "Campaña de email marketing",
        "Análisis y reporte de datos",
        "Desarrollo de una página web de aterrizaje básica",
      ],
    },
    en: {
      name: "Maximizing Networks",
      description:
        "Management of two to three social networks with basic SEO, email marketing, data analysis, and a basic landing page.",
      features: [
        "Social media management (2-3 social networks)",
        "Basic SEO optimization",
        "Email marketing campaign",
        "Data analysis and reporting",
        "Development of a basic landing page",
      ],
    },
  },
  {
    id: "buzz-creativo",
    priceMXN: 8170.0,
    taxIncluded: false,
    currency: "MXN + IVA",
    imageUrl:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85",
    es: {
      name: "Buzz Creativo",
      description:
        "Combina redes sociales, SEO, email marketing, datos, landing page y una campaña publicitaria básica.",
      features: [
        "Gestión de redes sociales (2-3 redes sociales)",
        "Optimización básica de SEO",
        "Campaña de email marketing",
        "Análisis y reporte de datos",
        "Desarrollo de una página web de aterrizaje básica",
        "Una campaña publicitaria básica",
      ],
    },
    en: {
      name: "Creative Buzz",
      description:
        "Combines social media, SEO, email marketing, data reporting, a landing page, and one basic advertising campaign.",
      features: [
        "Social media management (2-3 social networks)",
        "Basic SEO optimization",
        "Email marketing campaign",
        "Data analysis and reporting",
        "Development of a basic landing page",
        "One basic advertising campaign",
      ],
    },
  },
  {
    id: "alto-impacto-social",
    priceMXN: 10325.0,
    taxIncluded: false,
    currency: "MXN + IVA",
    imageUrl:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85",
    es: {
      name: "Alto Impacto Social",
      description:
        "Paquete con redes sociales, SEO, email marketing, datos, landing page y una campaña publicitaria media.",
      features: [
        "Gestión de redes sociales (2-3 redes sociales)",
        "Optimización básica de SEO",
        "Campaña de email marketing",
        "Análisis y reporte de datos",
        "Desarrollo de una página web de aterrizaje básica",
        "Una campaña publicitaria media",
      ],
    },
    en: {
      name: "High Social Impact",
      description:
        "Package with social media, SEO, email marketing, data reporting, a landing page, and one medium advertising campaign.",
      features: [
        "Social media management (2-3 social networks)",
        "Basic SEO optimization",
        "Email marketing campaign",
        "Data analysis and reporting",
        "Development of a basic landing page",
        "One medium advertising campaign",
      ],
    },
  },
  {
    id: "conexion-total",
    priceMXN: 12940.0,
    taxIncluded: false,
    currency: "MXN + IVA",
    imageUrl:
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1200&q=85",
    es: {
      name: "Conexión Total",
      description:
        "Incluye gestión social, SEO, email marketing, datos, landing page, campaña publicitaria media y desarrollo de blog.",
      features: [
        "Gestión de redes sociales (2-3 redes sociales)",
        "Optimización básica de SEO",
        "Campaña de email marketing",
        "Análisis y reporte de datos",
        "Desarrollo de una página web de aterrizaje básica",
        "Una campaña publicitaria media",
        "Desarrollo y gestión de blog",
      ],
    },
    en: {
      name: "Total Conexion",
      description:
        "Includes social media management, SEO, email marketing, data reporting, a landing page, a medium advertising campaign, and blog development.",
      features: [
        "Social media management (2-3 social networks)",
        "Basic SEO optimization",
        "Email marketing campaign",
        "Data analysis and reporting",
        "Development of a basic landing page",
        "One medium advertising campaign",
        "Blog development and management",
      ],
    },
  },
  {
    id: "estrategia-viral",
    priceMXN: 14165.0,
    taxIncluded: false,
    currency: "MXN + IVA",
    imageUrl:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=85",
    es: {
      name: "Estrategia Viral",
      description:
        "Gestión de tres a cuatro redes sociales con SEO, email marketing, datos, landing page, publicidad media y blog.",
      features: [
        "Gestión de redes sociales (3-4 redes sociales)",
        "Optimización básica de SEO",
        "Campaña de email marketing",
        "Análisis y reporte de datos",
        "Desarrollo de una página web de aterrizaje básica",
        "Una campaña publicitaria media",
        "Desarrollo y gestión de blog",
      ],
    },
    en: {
      name: "Viral Strategy",
      description:
        "Management of three to four social networks with SEO, email marketing, data reporting, a landing page, medium advertising, and a blog.",
      features: [
        "Social media management (3-4 social networks)",
        "Basic SEO optimization",
        "Email marketing campaign",
        "Data analysis and reporting",
        "Development of a basic landing page",
        "One medium advertising campaign",
        "Blog development and management",
      ],
    },
  },
  {
    id: "sintonia-social",
    priceMXN: 17845.0,
    taxIncluded: false,
    currency: "MXN + IVA",
    imageUrl:
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1200&q=85",
    es: {
      name: "Sintonía Social",
      description:
        "Integra redes sociales, SEO, email marketing, analítica, landing page, publicidad, blog y estrategia básica de contenido.",
      features: [
        "Gestión de redes sociales (3-4 redes sociales)",
        "Optimización básica de SEO",
        "Campaña de email marketing",
        "Análisis y reporte de datos",
        "Desarrollo de una página web de aterrizaje básica",
        "Una campaña publicitaria media",
        "Desarrollo y gestión de blog",
        "Estrategia básica de contenido",
      ],
    },
    en: {
      name: "social alignment",
      description:
        "Combines social media, SEO, email marketing, analytics, a landing page, advertising, a blog, and a basic content strategy.",
      features: [
        "Social media management (3-4 social networks)",
        "Basic SEO optimization",
        "Email marketing campaign",
        "Data analysis and reporting",
        "Development of a basic landing page",
        "One medium advertising campaign",
        "Blog development and management",
        "Basic content strategy",
      ],
    },
  },
  {
    id: "visibilidad-maxima",
    priceMXN: 21910.0,
    taxIncluded: false,
    currency: "MXN + IVA",
    imageUrl:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=85",
    es: {
      name: "Visibilidad Máxima",
      description:
        "Solución con redes sociales, SEO, email marketing, datos, landing page, publicidad, blog y estrategia avanzada de contenido.",
      features: [
        "Gestión de redes sociales (3-4 redes sociales)",
        "Optimización básica de SEO",
        "Campaña de email marketing",
        "Análisis y reporte de datos",
        "Desarrollo de una página web de aterrizaje básica",
        "Una campaña publicitaria media",
        "Desarrollo y gestión de blog",
        "Estrategia avanzada de contenido",
      ],
    },
    en: {
      name: "Maximium visibility ",
      description:
        "Solution with social media, SEO, email marketing, data reporting, a landing page, advertising, a blog, and an advanced content strategy.",
      features: [
        "Social media management (3-4 social networks)",
        "Basic SEO optimization",
        "Email marketing campaign",
        "Data analysis and reporting",
        "Development of a basic landing page",
        "One medium advertising campaign",
        "Blog development and management",
        "Advanced content strategy",
      ],
    },
  },
  {
    id: "presencia-plus",
    priceMXN: 24850.0,
    taxIncluded: false,
    currency: "MXN + IVA",
    imageUrl:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=85",
    es: {
      name: "Presencia Plus",
      description:
        "Paquete de presencia digital con hasta cinco redes, SEO, email marketing, analítica, landing page, publicidad, blog, contenido avanzado y automatización.",
      features: [
        "Gestión de redes sociales (4-5 redes sociales)",
        "Optimización básica de SEO",
        "Campaña de email marketing",
        "Análisis y reporte de datos",
        "Desarrollo de una página web de aterrizaje básica",
        "Una campaña publicitaria media",
        "Desarrollo y gestión de blog",
        "Estrategia avanzada de contenido",
        "Automatización de marketing",
      ],
    },
    en: {
      name: "Presence Plus",
      description:
        "Digital presence package with up to five social networks, SEO, email marketing, analytics, a landing page, advertising, a blog, advanced content, and automation.",
      features: [
        "Social media management (4-5 social networks)",
        "Basic SEO optimization",
        "Email marketing campaign",
        "Data analysis and reporting",
        "Development of a basic landing page",
        "One medium advertising campaign",
        "Blog development and management",
        "Advanced content strategy",
        "Marketing automation",
      ],
    },
  },
  {
    id: "expansion-online",
    priceMXN: 28210.0,
    taxIncluded: false,
    currency: "MXN + IVA",
    imageUrl:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=85",
    es: {
      name: "Expansión Online",
      description:
        "Amplía la estrategia con redes sociales, SEO, email marketing, analítica, landing page, publicidad, blog, contenido avanzado, automatización y consultoría personalizada.",
      features: [
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
      ],
    },
    en: {
      name: "Online expansion",
      description:
        "Extends the strategy with social media, SEO, email marketing, analytics, a landing page, advertising, a blog, advanced content, automation, and personalized consulting.",
      features: [
        "Social media management (4-5 social networks)",
        "Basic SEO optimization",
        "Email marketing campaign",
        "Data analysis and reporting",
        "Development of a basic landing page",
        "One medium advertising campaign",
        "Blog development and management",
        "Advanced content strategy",
        "Marketing automation",
        "Personalized consulting",
      ],
    },
  },
  {
    id: "aterrizaje-estrategico",
    priceMXN: 35670.0,
    taxIncluded: false,
    currency: "MXN + IVA",
    imageUrl:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
    es: {
      name: "Aterrizaje Estratégico",
      description:
        "Propuesta integral con gestión social, SEO, email marketing, datos, landing page, publicidad, blog, contenido avanzado, automatización, consultoría y estrategia de marketing integrada.",
      features: [
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
        "Estrategia de marketing integrada",
      ],
    },
    en: {
      name: "Strategic landing",
      description:
        "Integrated proposal with social media management, SEO, email marketing, data reporting, a landing page, advertising, a blog, advanced content, automation, consulting, and an integrated marketing strategy.",
      features: [
        "Social media management (4-5 social networks)",
        "Basic SEO optimization",
        "Email marketing campaign",
        "Data analysis and reporting",
        "Development of a basic landing page",
        "One medium advertising campaign",
        "Blog development and management",
        "Advanced content strategy",
        "Marketing automation",
        "Personalized consulting",
        "Integrated marketing strategy",
      ],
    },
  },
];

export function formatMXN(amount: number) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  }).format(amount);
}
