export type Lang = "es" | "en";

export const DICTIONARIES = {
  es: {
    nav: {
      how: "Cómo funciona",
      investors: "Inversores",
      thesis: "Tesis",
      faq: "FAQ",
      app: "Llévame a la app",
    },
    home: {
      meta: {
        title: "Finnoba — Crédito productivo en USD para LATAM",
        description:
          "Conectamos capital con los negocios que los bancos no atienden. Inversores ganan 20–30% en USD; los negocios obtienen crédito en minutos — sin colateral, sin banco.",
      },
      hero: {
        tag: "Operando desde 2026 · v0.1 activa · Cupos limitados",
        h1: "Rendimiento real en USD. Negocios reales. Un solo marketplace.",
        sub: "Finnoba conecta a inversores con USD ocioso con los negocios que los bancos ignoran. Los inversores ganan 20–30% en USD; los negocios reciben crédito en minutos — sin colateral, sin banco.",
        primary: "Empezar a invertir",
        secondary: "Solicitar crédito USD",
        badges: ["Denominado en USD", "Decisiones en minutos", "Tasa de default <5%"],
      },
      preview: {
        url: "app.finnoba.com",
        search: "Buscar negocios",
        addFunds: "Añadir fondos",
        title: "Marketplace",
        sub: "Financia negocios verificados y gana rendimiento en USD.",
        headers: { business: "NEGOCIO", amount: "MONTO", term: "PLAZO", yield: "USD YIELD", grade: "GRADO" },
      },
      stats: [
        { label: "Capital desplegado", value: "$12.4M", sub: "en LATAM" },
        { label: "Préstamos financiados", value: "1,840", sub: "tickets de $1K–$10K" },
        { label: "Yield promedio", value: "24%", sub: "en USD", subColor: "#157A47" },
        { label: "Tasa de default", value: "< 5%", sub: "y bajando", subColor: "#157A47" },
      ],
      markets: {
        eyebrow: "Marketplace en vivo",
        title: "Financia negocios reales. Gana USD real.",
        sub: "Cada préstamo está verificado, calificado y respaldado por flujo de caja. Diversifica tu capital en decenas de negocios de la región.",
        browse: "Ver todos",
        yieldLabel: "Yield USD objetivo",
        fundedLabel: "financiado",
        termSuffix: "meses",
        gradeLabel: "Grado",
      },
      why: {
        eyebrow: "Por qué Finnoba",
        title: "Una forma más justa de prestar y de pedir prestado en USD.",
        items: [
          {
            eyebrow: "Sin colateral",
            title: "Crédito por flujo, no por activos",
            body: "Calificamos negocios por flujo de caja real y reputación — así un gran negocio sin propiedades o historial bancario también califica.",
            tint: "mint",
          },
          {
            eyebrow: "Minutos, no semanas",
            title: "100% digital, de la solicitud al pago",
            body: "Identidad, scoring y firma online. Decisión en minutos y USD en la cuenta — no una visita a la sucursal.",
            tint: "peach",
          },
          {
            eyebrow: "Yield real",
            title: "20–30% en USD, respaldado por préstamos",
            body: "Los retornos del inversor los pagan negocios reales devolviendo préstamos reales — no especulación, nunca cripto.",
            tint: "sky",
          },
          {
            eyebrow: "Hecho para LATAM",
            title: "Donde los bancos no llegan",
            body: "Finnoba sirve a las pymes, freelancers e independientes que el sistema formal ignora, a lo largo de la región.",
            tint: "lilac",
          },
        ],
      },
      how: {
        eyebrow: "Cómo funciona",
        title: "Dos lados, un solo flujo simple.",
        columns: [
          {
            tag: "Para inversores",
            color: "#6D54E8",
            steps: [
              { t: "Añade USD a tu cuenta", d: "Carga tu balance y define cuánto quieres poner a trabajar." },
              { t: "Elige préstamos o auto-diversifica", d: "Tú escoges los negocios, o Finnoba te diversifica entre muchos." },
              { t: "Gana mientras pagan", d: "Los negocios pagan mensualmente en USD — tú cobras 20–30% al año." },
            ],
          },
          {
            tag: "Para negocios",
            color: "#1FB36B",
            steps: [
              { t: "Aplica en minutos", d: "Cuéntanos de tu negocio y conecta tu historial de flujo." },
              { t: "Recibe una decisión rápida", d: "Te calificamos por performance real — sin colateral, sin banco." },
              { t: "Recibe USD, paga mensualmente", d: "Los fondos llegan a tu cuenta; pagas en cuotas mensuales fijas." },
            ],
          },
        ],
      },
      cta: {
        title: "Empieza en minutos.",
        sub: "Ya sea para poner a trabajar USD ocioso o para hacer crecer un negocio, Finnoba te lleva rápido — 100% digital.",
        primary: "Empezar",
      },
    },
    how: {
      meta: {
        title: "Cómo funciona",
        description:
          "Cómo funciona Finnoba en detalle: tres pasos, pool diversificado, originación, cobranza y pagos mensuales al inversor.",
      },
      h1: "Tres pasos. Una sola plataforma.",
      sub: "Conectamos capital con emprendedores que generan flujo real. Tú decides cuánto inviertes; el sistema diversifica y administra los pagos.",
      stepsTitle: "Los tres pasos en detalle",
      steps: [
        {
          k: "01",
          t: "Reservas tu cupo",
          b: "Aplicas al ciclo de inversión activo. Validamos perfil del inversor, firmamos términos y abrimos tu posición con el monto que decidas asignar. Onboarding completo en 24-48 horas.",
        },
        {
          k: "02",
          t: "El capital se diversifica automáticamente",
          b: "Tu inversión se reparte entre los préstamos activos del pool según el algoritmo de diversificación. Cada préstamo pasa previamente por nuestro proceso de originación y scoring antes de ser fondeado. Tiempo objetivo de fondeo de cada préstamo: <24h.",
        },
        {
          k: "03",
          t: "Cobras mensualmente",
          b: "Los emprendedores pagan en cuotas. Recibes tu parte proporcional cada mes con reporte detallado del estado de cada préstamo en tu portafolio.",
        },
      ],
      flowTitle: "El flujo, de extremo a extremo",
      flow: [
        { t: "Inversor", b: "Aporta capital al ciclo activo." },
        { t: "Pool diversificado", b: "Asignación automática entre 15–25 préstamos." },
        { t: "Originación", b: "Scoring y verificación previa al fondeo." },
        { t: "Borrowers", b: "Emprendedores y profesionales con flujo real." },
        { t: "Cobranza", b: "Pagos mensuales y escalamiento estructurado." },
        { t: "Pagos al inversor", b: "Distribución mensual proporcional." },
      ],
      tableTitle: "Frecuencia y plazos",
      table: [
        ["Plazo promedio de préstamo", "3-6 meses"],
        ["Frecuencia de pagos al inversor", "Mensual"],
        ["Tiempo de onboarding", "24-48h"],
        ["Tiempo de fondeo de un préstamo", "<24h"],
        ["Reporte mensual", "Día 5 del mes siguiente"],
      ],
      cta: "Ver términos para inversores",
    },
    investors: {
      meta: {
        title: "Para inversores",
        description:
          "Términos, tickets y onboarding del ciclo activo de Finnoba para inversores LATAM.",
      },
      h1: "Para inversores que buscan rendimiento productivo.",
      sub: "Términos, tickets y proceso de onboarding del ciclo activo.",
      termsTitle: "Términos del ciclo activo",
      terms: [
        ["Ticket mínimo", "$5,000 USD"],
        ["Ticket máximo recomendado", "$250,000 USD por ciclo"],
        ["Plazo de inversión", "3-6 meses (alineado a préstamos del portafolio)"],
        ["Frecuencia de pagos", "Mensual"],
        ["Liquidez anticipada", "Caso por caso"],
        ["Comisión de plataforma", "[POR DEFINIR]"],
        ["Diversificación mínima", "15 préstamos por inversor"],
      ],
      profileTitle: "Perfil del inversor que buscamos",
      profileBody:
        "El piloto privado está dirigido a inversores con capacidad de evaluar riesgo crediticio, horizonte de inversión alineado al plazo del producto y capital disponible para comprometer durante el ciclo completo.",
      profileFor: {
        title: "Para quién es esto",
        items: [
          "Profesionales con capital líquido buscando rendimiento superior al depósito a plazo",
          "Inversores con experiencia en productos de renta fija o crédito alternativo",
          "Family offices y patrimonios LATAM con asignación a private credit",
          "Operadores de fondos buscando diversificación regional",
        ],
      },
      profileNotFor: {
        title: "Para quién NO es esto",
        items: [
          "Personas que necesiten liquidez completa antes del plazo",
          "Inversores que busquen rendimientos garantizados",
          "Capital que no pueda asumir riesgo de pérdida parcial",
        ],
      },
      onboardingTitle: "Proceso de onboarding",
      onboarding: [
        "Reservas tu cupo en el formulario de aplicación",
        "Te contactamos para una llamada de 20 minutos donde validamos perfil y resolvemos preguntas",
        "Firmamos términos y enviamos instrucciones de transferencia",
        "Tu capital se asigna al pool del ciclo activo",
        "Recibes confirmación con tu portafolio diversificado y fecha del primer pago",
      ],
      cta: "Reservar mi lugar",
    },
    thesis: {
      meta: {
        title: "Tesis",
        description:
          "La tesis detrás de Finnoba: por qué el crédito productivo en LATAM es la oportunidad de inversión que más capital deja sobre la mesa.",
      },
      h1: "La tesis detrás de Finnoba.",
      sub: "Por qué el crédito productivo en LATAM es la oportunidad de inversión que más capital deja sobre la mesa.",
      problemTitle: "El problema en números",
      problemIntro:
        "El sistema financiero LATAM excluye al productor informal por diseño y obliga a buena parte de la economía real a operar con tasas usureras. La oportunidad es estructural.",
      stats: [
        { v: "[X]%", l: "Adultos LATAM sin acceso a crédito formal" },
        { v: "[X]%", l: "Pymes que reportan capital de trabajo como su mayor restricción" },
        { v: "$[X]B", l: "Demanda de crédito no atendida estimada en la región" },
        { v: "[X]%", l: "Spread entre depósito a plazo y tasa real del crédito informal" },
      ],
      statsFootnote:
        "Estadísticas a publicar con fuente verificable (BID, Banco Mundial, BCRP, Findexable).",
      whyFailTitle: "Por qué los modelos tradicionales fallan",
      whyFail: [
        "Los modelos de scoring bancario excluyen al productor informal por diseño. El historial de tarjeta no existe; el flujo real, sí.",
        "El microcrédito tradicional cobra tasas usureras (5–10% mensual) que el emprendedor sí paga pero ahogan su crecimiento y aumentan el riesgo sistémico.",
        "Las plataformas globales no entienden el contexto LATAM y exigen colateral que el target no tiene. Importan supuestos que no aplican.",
      ],
      whyFinnobaTitle: "Por qué Finnoba puede",
      whyFinnoba: [
        "Originación basada en flujo real y reputación de comunidades validadas. Vemos lo que un banco no mira.",
        "Tickets pequeños ($300–800) que reducen riesgo individual y permiten alta diversificación por inversor.",
        "Operación lean con tecnología propia que mantiene los costos bajos y permite tasas justas para ambos lados de la mesa.",
      ],
      stateTitle: "El estado actual",
      stateBody:
        "Finnoba opera desde 2026 con su versión v0.1 activa. Las primeras operaciones están colocadas, los flujos están en cobranza y los reportes mensuales se entregan al inversor inicial. El siguiente ciclo abre capacidad ampliada para inversores externos.",
      cta: "Reservar mi lugar en el próximo ciclo",
    },
    risk: {
      meta: {
        title: "Control de riesgo",
        description:
          "Cómo controlamos el riesgo en Finnoba: originación, diversificación, capital first-loss y cobranza estructurada.",
      },
      h1: "Cómo controlamos el riesgo.",
      sub: "Rendimiento alto no significa riesgo ciego. Estos son los mecanismos estructurales que protegen el capital invertido.",
      frameworkTitle: "Marco general",
      frameworkBody:
        "Toda inversión productiva implica riesgo. Nuestro trabajo no es esconderlo, sino estructurarlo, medirlo y reportarlo. Trabajamos en cuatro capas: originación, diversificación, capital first-loss y cobranza.",
      layersTitle: "Las cuatro capas",
      layers: [
        {
          k: "01",
          t: "Originación",
          b: "Cada préstamo pasa por evaluación de flujo de caja, propósito del crédito y referencias activas en comunidades productivas validadas. Rechazamos más solicitudes de las que aprobamos. Tasa de aprobación actual: [POR DEFINIR]%.",
        },
        {
          k: "02",
          t: "Diversificación",
          b: "Ningún inversor está expuesto a un solo préstamo. La asignación mínima es 15 préstamos por inversor; el promedio del v0.1 es [X] préstamos. Esto convierte un default individual en una pérdida marginal del portafolio.",
        },
        {
          k: "03",
          t: "Capital first-loss",
          b: "El equipo mantiene capital propio en cada pool que absorbe las primeras pérdidas antes de que afecten a los inversores. Porcentaje actual: 10% del pool.",
        },
        {
          k: "04",
          t: "Cobranza estructurada",
          b: "Escalamiento progresivo de cobranza con reportes transparentes de mora. La estructura está diseñada para recuperar capital sin destruir la relación con el borrower productivo, lo cual reduce defaults futuros.",
        },
      ],
      metricsTitle: "Métricas objetivo y reales",
      metricsHead: ["Métrica", "Objetivo", "v0.1 actual"],
      metrics: [
        ["Default rate", "<5%", "[X]%"],
        ["Tasa de aprobación", "15-25%", "[X]%"],
        ["Diversificación promedio", "15+ préstamos", "[X]"],
        ["Recovery rate post-mora", "60%+", "[X]%"],
        ["Plazo promedio", "3-6 meses", "[X] meses"],
      ],
      metricsNote:
        "Las métricas de v0.1 corresponden a un ciclo de operación inicial con muestra reducida. La consolidación estadística se alcanza con [X] préstamos colocados.",
      uncontrolledTitle: "Lo que NO controlamos",
      uncontrolledIntro:
        "Hay riesgos que están fuera de nuestro control y queremos ser explícitos sobre ellos:",
      uncontrolled: [
        "Crisis macroeconómicas regionales que afecten capacidad de pago generalizada",
        "Cambios regulatorios que modifiquen la operación",
        "Eventos de fraude individuales no detectados por los procesos de originación",
      ],
      uncontrolledFoot:
        "Mitigamos exposición operativa, no riesgo sistémico. Por eso ningún inversor debería asignar a Finnoba capital que no pueda permitirse perder en su totalidad.",
      cta: "Ver el FAQ completo",
    },
    team: {
      meta: {
        title: "Equipo",
        description:
          "Quiénes están detrás de Finnoba. Founders, partners operativos y filosofía de construcción.",
      },
      h1: "Quiénes están detrás.",
      sub: "Finnoba nace de la convicción de que el crédito productivo en LATAM necesita ser reconstruido por gente que ha vivido los dos lados de la mesa.",
      foundersTitle: "Founders",
      founders: [
        {
          name: "[POR DEFINIR]",
          role: "Co-founder · CEO",
          body: "Track record en originación crediticia y operaciones financieras LATAM.",
        },
        {
          name: "[POR DEFINIR]",
          role: "Co-founder · CTO",
          body: "Track record en construcción de plataformas financieras a escala.",
        },
        {
          name: "[POR DEFINIR]",
          role: "Co-founder · Head of Risk",
          body: "Track record en gestión de portafolios de crédito alternativo.",
        },
      ],
      ecosystemTitle: "Ecosistema operativo",
      ecosystemSub: "Partners operativos del ciclo actual.",
      ecosystem: [
        {
          name: "Indrox",
          body: "Equipo de desarrollo dedicado. Toda la tecnología de Finnoba se construye in-house, con ciclo de release semanal y control completo del stack.",
        },
        {
          name: "ThePrimeWay",
          body: "Red de validación de borrowers. Los emprendedores que acceden a Finnoba pasan por procesos de evaluación de reputación dentro de comunidades productivas verificadas.",
        },
        {
          name: "HiddenLayer Podcast",
          body: "Canal de distribución y comunidad. Acceso editorial al ecosistema fintech y de inversión LATAM.",
        },
        {
          name: "La Punta del Iceberg",
          body: "Red de operadores B2B en LATAM para originación curada del lado solicitante.",
        },
      ],
      philosophyTitle: "Filosofía operativa",
      philosophy: [
        "Operamos lean por diseño. Tecnología propia, equipo pequeño, foco en producto y originación. No quemamos capital de inversionistas en marketing ni en oficinas.",
        "Creemos que el crédito productivo en LATAM se gana con paciencia, no con escala. Preferimos crecer 20% mensual con default rate bajo control que 200% con un portafolio que se quiebra al primer ciclo malo.",
        "Nuestra ambición es construir el estándar de inversión productiva regional. La velocidad correcta es la que permite hacerlo bien.",
      ],
      cta: "Conocer la tesis completa",
    },
    faq: {
      meta: {
        title: "Preguntas frecuentes",
        description:
          "Lo que todo inversor pregunta antes de entrar a Finnoba: inversión, operación y regulación.",
      },
      h1: "Preguntas frecuentes.",
      sub: "Lo que todo inversor pregunta antes de entrar.",
      groups: [
        {
          title: "Sobre la inversión",
          items: [
            {
              q: "¿Cuál es el ticket mínimo y cómo recibo los rendimientos?",
              a: "El ticket mínimo del ciclo activo es $5,000 USD. Los rendimientos se acreditan mensualmente, proporcionales a los pagos recibidos de los préstamos en tu portafolio.",
            },
            {
              q: "¿Qué pasa si un emprendedor no paga su préstamo?",
              a: "La diversificación entre 15+ préstamos absorbe defaults individuales. Adicionalmente, mantenemos capital first-loss del equipo que cubre las primeras pérdidas del pool antes de que afecten a los inversores. La tasa de default objetivo es <5%.",
            },
            {
              q: "¿Puedo retirar mi capital antes del plazo?",
              a: "El capital invertido está comprometido con los plazos de los préstamos individuales (3-6 meses promedio). Los pagos mensuales sí son líquidos y pueden retirarse o reinvertirse. Para liquidez total anticipada, evaluamos caso por caso.",
            },
            {
              q: "¿Cómo se gravan los rendimientos?",
              a: "Los rendimientos son ingresos sujetos a las regulaciones tributarias del país de residencia del inversor. Entregamos reportes anuales con la información necesaria para declaración. Recomendamos consultar con un asesor fiscal local.",
            },
            {
              q: "¿Hay rendimiento garantizado?",
              a: "No. Los rendimientos son objetivo, no garantizados. La estructura de diversificación y capital first-loss reduce significativamente el riesgo, pero ninguna inversión productiva está libre de pérdida potencial.",
            },
          ],
        },
        {
          title: "Sobre la operación",
          items: [
            {
              q: "¿Cómo eligen a los emprendedores que reciben crédito?",
              a: "Combinamos un scoring propio con verificación de reputación en comunidades productivas validadas. Cada solicitante pasa por evaluación de flujo de caja, propósito del crédito y referencias activas. No replicamos los criterios bancarios tradicionales porque excluyen al perfil que queremos servir.",
            },
            {
              q: "¿Cómo está custodiado el capital?",
              a: "El capital de los inversores se mantiene en cuentas segregadas con custodia institucional. Los flujos de pago son auditados y los reportes se entregan a cada inversor con detalle préstamo por préstamo.",
            },
            {
              q: "¿En qué países operan?",
              a: "El ciclo actual cubre [POR DEFINIR: lista de países]. Estamos expandiendo cobertura a medida que validamos capacidad de originación y cobranza local.",
            },
            {
              q: "¿En qué tecnología está construida la plataforma?",
              a: "La infraestructura combina rieles tradicionales con tecnología blockchain para liquidación y trazabilidad. Esto nos permite reducir costos operativos y entregar reportes con auditoría granular. La complejidad técnica es nuestra; la experiencia del inversor es la de un producto financiero tradicional.",
            },
          ],
        },
        {
          title: "Sobre la regulación",
          items: [
            {
              q: "¿Hay regulación?",
              a: "Operamos como Proveedor de Servicios de Activos Virtuales registrado ante la UIF Perú, con políticas KYC/AML alineadas a estándares SBS. La estructura completa de compliance se detalla en la documentación del ciclo, disponible bajo NDA.",
            },
            {
              q: "¿Esto es una oferta pública de valores?",
              a: "No. Finnoba opera como plataforma privada de inversión alternativa. La participación está sujeta a evaluación de perfil del inversor y firma de términos individuales. Esto no constituye oferta pública conforme la regulación local.",
            },
            {
              q: "¿Necesito ser inversionista acreditado?",
              a: "El ciclo actual está dirigido a inversores con capacidad de evaluar riesgo crediticio y comprometer capital durante el plazo del producto. Validamos perfil en la entrevista de onboarding.",
            },
          ],
        },
      ],
      cta: "Reservar mi lugar",
    },
    transparency: {
      meta: {
        title: "Transparencia",
        description:
          "Métricas reales del v0.1 de Finnoba actualizadas mensualmente: portafolio, distribución, reportes y auditoría.",
      },
      h1: "Transparencia operativa.",
      sub: "Métricas reales del v0.1 actualizadas mensualmente.",
      portfolioTitle: "Métricas del portafolio",
      portfolio: [
        ["Capital colocado total", "$[X]"],
        ["Préstamos activos", "[X]"],
        ["Préstamos pagados completamente", "[X]"],
        ["Default rate actual", "[X]%"],
        ["APR neto promedio", "[X]%"],
        ["Geografías cubiertas", "[LISTA]"],
      ],
      distributionTitle: "Distribución del portafolio",
      distribution: [
        ["Por país", "[POR DEFINIR]"],
        ["Por sector productivo del borrower", "[POR DEFINIR]"],
        ["Por tamaño de préstamo", "[POR DEFINIR]"],
        ["Por plazo", "[POR DEFINIR]"],
      ],
      reportsTitle: "Reporte mensual",
      reportsBody:
        "Próximamente. Los reportes mensuales en PDF se publicarán a partir del cierre del primer trimestre de operación ampliada.",
      auditTitle: "Auditoría",
      auditBody:
        "La operación es auditada por [POR DEFINIR]. Los reportes trimestrales están disponibles para inversores activos.",
      cta: "Reservar mi lugar",
    },
    legal: {
      termsTitle: "Términos y condiciones",
      privacyTitle: "Política de privacidad",
      placeholderTitle: "Documento legal en preparación",
      placeholderBody:
        "Este documento está siendo preparado por nuestro equipo legal. Contacta a hola@finnoba.xyz para recibir la versión vigente del contrato del ciclo activo.",
    },
    footer: {
      tagline:
        "Construyendo el próximo estándar de inversión productiva en LATAM.",
      productTitle: "Producto",
      product: [
        { l: "Cómo funciona", h: "/how-it-works" },
        { l: "Para inversores", h: "/investors" },
        { l: "Tesis", h: "/thesis" },
        { l: "Control de riesgo", h: "/risk" },
      ],
      resourcesTitle: "Recursos",
      resources: [
        { l: "FAQ", h: "/faq" },
        { l: "Transparencia", h: "/transparency" },
        { l: "Documentación", h: "https://www.notion.so", e: true },
        { l: "Equipo", h: "/team" },
      ],
      communityTitle: "Comunidad",
      community: [
        { l: "LinkedIn", h: "https://www.linkedin.com", e: true },
        { l: "X / Twitter", h: "https://x.com", e: true },
        { l: "Newsletter", h: "https://substack.com", e: true },
        { l: "Contacto", h: "mailto:hola@finnoba.xyz", e: true },
      ],
      legalTitle: "Legal",
      legalLinks: [
        { l: "Términos", h: "/terms" },
        { l: "Privacidad", h: "/privacy" },
      ],
      legalBase:
        "© 2026 Finnoba. Esto no constituye una oferta pública de valores ni asesoría financiera. Toda inversión conlleva riesgos, incluyendo la posible pérdida del capital invertido.",
      lang: "Idioma",
    },
  },

  en: {
    nav: {
      how: "How it works",
      investors: "Investors",
      thesis: "Thesis",
      faq: "FAQ",
      app: "Take me to the app",
    },
    home: {
      meta: {
        title: "Finnoba — USD productive credit for LATAM",
        description:
          "We connect capital to the businesses banks overlook. Investors earn 20–30% in USD; businesses get credit in minutes — no collateral, no bank.",
      },
      hero: {
        tag: "Operating since 2026 · v0.1 active · Limited seats",
        h1: "Real USD yield. Real businesses. One marketplace.",
        sub: "Finnoba connects investors with idle USD to the businesses banks overlook. Investors earn 20–30% in USD; businesses get credit in minutes — no collateral, no bank.",
        primary: "Start investing",
        secondary: "Get USD credit",
        badges: ["USD-denominated", "Decisions in minutes", "Default rate under 5%"],
      },
      preview: {
        url: "app.finnoba.com",
        search: "Search businesses",
        addFunds: "Add funds",
        title: "Marketplace",
        sub: "Fund vetted businesses and earn USD yield.",
        headers: { business: "BUSINESS", amount: "AMOUNT", term: "TERM", yield: "USD YIELD", grade: "GRADE" },
      },
      stats: [
        { label: "Capital deployed", value: "$12.4M", sub: "across LATAM" },
        { label: "Loans funded", value: "1,840", sub: "$1K–$10K tickets" },
        { label: "Avg. investor yield", value: "24%", sub: "in USD", subColor: "#157A47" },
        { label: "Default rate", value: "< 5%", sub: "and falling", subColor: "#157A47" },
      ],
      markets: {
        eyebrow: "Live marketplace",
        title: "Fund real businesses. Earn real USD.",
        sub: "Every loan is vetted, scored and backed by cash flow. Spread your capital across dozens of businesses around the region.",
        browse: "Browse all",
        yieldLabel: "Target USD yield",
        fundedLabel: "funded",
        termSuffix: "mo term",
        gradeLabel: "Grade",
      },
      why: {
        eyebrow: "Why Finnoba",
        title: "A fairer way to lend and to borrow in USD.",
        items: [
          {
            eyebrow: "No collateral",
            title: "Credit on cash flow, not assets",
            body: "We score businesses on real cash flow and reputation — so a great business with no property or bank history still qualifies.",
            tint: "mint",
          },
          {
            eyebrow: "Minutes, not weeks",
            title: "Fully digital, apply to payout",
            body: "Identity, scoring and signature happen online. A decision in minutes and USD in the account — not a branch visit.",
            tint: "peach",
          },
          {
            eyebrow: "Real yield",
            title: "20–30% in USD, backed by loans",
            body: "Investor returns are paid by real businesses repaying real loans — not speculation, and never crypto.",
            tint: "sky",
          },
          {
            eyebrow: "Built for LATAM",
            title: "Where banks won't go",
            body: "Finnoba serves the SMEs, freelancers and independents the formal system overlooks, across the region.",
            tint: "lilac",
          },
        ],
      },
      how: {
        eyebrow: "How it works",
        title: "Two sides, one simple flow.",
        columns: [
          {
            tag: "For investors",
            color: "#6D54E8",
            steps: [
              { t: "Add USD to your account", d: "Fund your balance and set how much you want to put to work." },
              { t: "Pick loans or auto-diversify", d: "Choose businesses yourself, or let Finnoba spread you across many." },
              { t: "Earn as they repay", d: "Businesses repay monthly in USD — you collect 20–30% a year." },
            ],
          },
          {
            tag: "For businesses",
            color: "#1FB36B",
            steps: [
              { t: "Apply in minutes", d: "Tell us about your business and connect your cash-flow history." },
              { t: "Get a decision fast", d: "We score you on real performance — no collateral, no bank required." },
              { t: "Receive USD, repay monthly", d: "Funds land in your account; you repay in fixed monthly installments." },
            ],
          },
        ],
      },
      cta: {
        title: "Start in minutes.",
        sub: "Whether you're putting idle USD to work or growing a business, Finnoba gets you there fast — fully digital.",
        primary: "Get started",
      },
    },
    how: {
      meta: {
        title: "How it works",
        description:
          "How Finnoba works in detail: three steps, diversified pool, origination, collections and monthly investor payouts.",
      },
      h1: "Three steps. One platform.",
      sub: "We connect capital with entrepreneurs that generate real cash flow. You decide how much to invest; the system diversifies and manages payments.",
      stepsTitle: "The three steps in detail",
      steps: [
        {
          k: "01",
          t: "You reserve your seat",
          b: "You apply to the active investment cycle. We validate investor profile, sign terms and open your position with the amount you decide. Full onboarding in 24-48 hours.",
        },
        {
          k: "02",
          t: "Capital diversifies automatically",
          b: "Your investment is split across active pool loans according to the diversification algorithm. Every loan goes through our origination and scoring process before being funded. Target loan funding time: <24h.",
        },
        {
          k: "03",
          t: "You collect monthly",
          b: "Entrepreneurs pay in installments. You receive your pro-rata share each month with a detailed report on every loan in your portfolio.",
        },
      ],
      flowTitle: "The flow, end to end",
      flow: [
        { t: "Investor", b: "Allocates capital to the active cycle." },
        { t: "Diversified pool", b: "Automatic allocation across 15–25 loans." },
        { t: "Origination", b: "Scoring and verification before funding." },
        { t: "Borrowers", b: "Entrepreneurs and professionals with real cash flow." },
        { t: "Collections", b: "Monthly payments and structured escalation." },
        { t: "Investor payouts", b: "Pro-rata monthly distribution." },
      ],
      tableTitle: "Frequency and terms",
      table: [
        ["Average loan term", "3-6 months"],
        ["Investor payment frequency", "Monthly"],
        ["Onboarding time", "24-48h"],
        ["Loan funding time", "<24h"],
        ["Monthly report", "5th of the following month"],
      ],
      cta: "See investor terms",
    },
    investors: {
      meta: {
        title: "For investors",
        description:
          "Active cycle terms, tickets and onboarding for Finnoba LATAM investors.",
      },
      h1: "For investors looking for productive returns.",
      sub: "Terms, tickets and onboarding process for the active cycle.",
      termsTitle: "Active cycle terms",
      terms: [
        ["Minimum ticket", "$5,000 USD"],
        ["Recommended max ticket", "$250,000 USD per cycle"],
        ["Investment term", "3-6 months (aligned to portfolio loans)"],
        ["Payment frequency", "Monthly"],
        ["Early liquidity", "Case by case"],
        ["Platform fee", "[TBD]"],
        ["Minimum diversification", "15 loans per investor"],
      ],
      profileTitle: "Investor profile we look for",
      profileBody:
        "The private pilot is for investors with the ability to evaluate credit risk, an investment horizon aligned to the product term, and capital available to commit during the full cycle.",
      profileFor: {
        title: "Who this is for",
        items: [
          "Professionals with liquid capital seeking returns above term deposits",
          "Investors with experience in fixed income or alternative credit products",
          "LATAM family offices and private wealth with private credit allocation",
          "Fund operators looking for regional diversification",
        ],
      },
      profileNotFor: {
        title: "Who this is NOT for",
        items: [
          "People who need full liquidity before the term",
          "Investors looking for guaranteed returns",
          "Capital that cannot bear risk of partial loss",
        ],
      },
      onboardingTitle: "Onboarding process",
      onboarding: [
        "Reserve your seat in the application form",
        "We contact you for a 20-minute call to validate profile and answer questions",
        "We sign terms and send transfer instructions",
        "Your capital is allocated to the active cycle pool",
        "You get confirmation with your diversified portfolio and first payment date",
      ],
      cta: "Reserve my spot",
    },
    thesis: {
      meta: {
        title: "Thesis",
        description:
          "The thesis behind Finnoba: why productive credit in LATAM is the investment opportunity that leaves the most capital on the table.",
      },
      h1: "The thesis behind Finnoba.",
      sub: "Why productive credit in LATAM is the investment opportunity that leaves the most capital on the table.",
      problemTitle: "The problem in numbers",
      problemIntro:
        "LATAM's financial system excludes the informal producer by design and forces a large share of the real economy to operate at usurious rates. The opportunity is structural.",
      stats: [
        { v: "[X]%", l: "LATAM adults with no formal credit access" },
        { v: "[X]%", l: "SMEs that report working capital as their largest constraint" },
        { v: "$[X]B", l: "Estimated unmet credit demand in the region" },
        { v: "[X]%", l: "Spread between term deposits and real informal credit rates" },
      ],
      statsFootnote:
        "Statistics to be published with verifiable source (IDB, World Bank, BCRP, Findexable).",
      whyFailTitle: "Why traditional models fail",
      whyFail: [
        "Bank scoring models exclude informal producers by design. The card history doesn't exist; the cash flow does.",
        "Traditional microcredit charges usurious rates (5–10% monthly) that the entrepreneur does pay but that strangle growth and increase systemic risk.",
        "Global platforms don't understand LATAM context and require collateral the target doesn't have. They import assumptions that don't apply.",
      ],
      whyFinnobaTitle: "Why Finnoba can",
      whyFinnoba: [
        "Origination based on real cash flow and reputation in validated communities. We see what a bank doesn't look at.",
        "Small tickets ($300–800) that reduce individual risk and allow high diversification per investor.",
        "Lean operation with proprietary technology that keeps costs low and enables fair rates on both sides of the table.",
      ],
      stateTitle: "Current state",
      stateBody:
        "Finnoba operates since 2026 with v0.1 active. The first operations are deployed, cash flows are in collection and monthly reports are delivered to the initial investor. The next cycle opens expanded capacity to external investors.",
      cta: "Reserve my spot in the next cycle",
    },
    risk: {
      meta: {
        title: "Risk control",
        description:
          "How we control risk at Finnoba: origination, diversification, first-loss capital and structured collections.",
      },
      h1: "How we control risk.",
      sub: "High returns don't mean blind risk. These are the structural mechanisms that protect invested capital.",
      frameworkTitle: "General framework",
      frameworkBody:
        "Every productive investment carries risk. Our job is not to hide it but to structure, measure and report it. We work in four layers: origination, diversification, first-loss capital and collections.",
      layersTitle: "The four layers",
      layers: [
        {
          k: "01",
          t: "Origination",
          b: "Every loan goes through evaluation of cash flow, credit purpose and active references in validated productive communities. We reject more requests than we approve. Current approval rate: [TBD]%.",
        },
        {
          k: "02",
          t: "Diversification",
          b: "No investor is exposed to a single loan. Minimum allocation is 15 loans per investor; v0.1 average is [X] loans. This turns an individual default into a marginal portfolio loss.",
        },
        {
          k: "03",
          t: "First-loss capital",
          b: "The team keeps proprietary capital in every pool that absorbs first losses before they affect investors. Current percentage: 10% of pool.",
        },
        {
          k: "04",
          t: "Structured collections",
          b: "Progressive collections escalation with transparent delinquency reporting. The structure is designed to recover capital without destroying the relationship with the productive borrower, which reduces future defaults.",
        },
      ],
      metricsTitle: "Target and actual metrics",
      metricsHead: ["Metric", "Target", "v0.1 actual"],
      metrics: [
        ["Default rate", "<5%", "[X]%"],
        ["Approval rate", "15-25%", "[X]%"],
        ["Avg diversification", "15+ loans", "[X]"],
        ["Post-delinquency recovery", "60%+", "[X]%"],
        ["Average term", "3-6 months", "[X] months"],
      ],
      metricsNote:
        "v0.1 metrics correspond to an initial operating cycle with reduced sample size. Statistical consolidation is reached at [X] loans deployed.",
      uncontrolledTitle: "What we do NOT control",
      uncontrolledIntro:
        "There are risks outside our control and we want to be explicit about them:",
      uncontrolled: [
        "Regional macroeconomic crises affecting widespread payment capacity",
        "Regulatory changes that modify operations",
        "Individual fraud events undetected by origination processes",
      ],
      uncontrolledFoot:
        "We mitigate operational exposure, not systemic risk. That's why no investor should allocate capital to Finnoba that they cannot afford to lose entirely.",
      cta: "See the full FAQ",
    },
    team: {
      meta: {
        title: "Team",
        description:
          "Who's behind Finnoba. Founders, operating partners and building philosophy.",
      },
      h1: "Who's behind it.",
      sub: "Finnoba is born from the conviction that productive credit in LATAM needs to be rebuilt by people who have lived both sides of the table.",
      foundersTitle: "Founders",
      founders: [
        {
          name: "[TBD]",
          role: "Co-founder · CEO",
          body: "Track record in credit origination and LATAM financial operations.",
        },
        {
          name: "[TBD]",
          role: "Co-founder · CTO",
          body: "Track record building financial platforms at scale.",
        },
        {
          name: "[TBD]",
          role: "Co-founder · Head of Risk",
          body: "Track record managing alternative credit portfolios.",
        },
      ],
      ecosystemTitle: "Operating ecosystem",
      ecosystemSub: "Operating partners of the current cycle.",
      ecosystem: [
        {
          name: "Indrox",
          body: "Dedicated dev team. All Finnoba technology is built in-house with weekly release cycles and full stack control.",
        },
        {
          name: "ThePrimeWay",
          body: "Borrower validation network. Entrepreneurs accessing Finnoba go through reputation evaluation in verified productive communities.",
        },
        {
          name: "HiddenLayer Podcast",
          body: "Distribution and community channel. Editorial access to the LATAM fintech and investment ecosystem.",
        },
        {
          name: "La Punta del Iceberg",
          body: "B2B operator network in LATAM for curated origination on the borrower side.",
        },
      ],
      philosophyTitle: "Operating philosophy",
      philosophy: [
        "We operate lean by design. Proprietary technology, small team, focus on product and origination. We don't burn investor capital on marketing or offices.",
        "We believe productive credit in LATAM is earned with patience, not scale. We'd rather grow 20% monthly with default rate under control than 200% with a portfolio that breaks at the first bad cycle.",
        "Our ambition is to build the regional standard of productive investment. The right speed is the one that allows it to be done well.",
      ],
      cta: "Read the full thesis",
    },
    faq: {
      meta: {
        title: "FAQ",
        description:
          "What every investor asks before joining Finnoba: investment, operations and regulation.",
      },
      h1: "Frequently asked questions.",
      sub: "What every investor asks before joining.",
      groups: [
        {
          title: "About the investment",
          items: [
            {
              q: "What is the minimum ticket and how do I receive returns?",
              a: "The minimum ticket of the active cycle is $5,000 USD. Returns are credited monthly, pro-rata to payments received from loans in your portfolio.",
            },
            {
              q: "What happens if an entrepreneur doesn't pay their loan?",
              a: "Diversification across 15+ loans absorbs individual defaults. Additionally, we keep team first-loss capital that covers initial pool losses before they affect investors. Target default rate is <5%.",
            },
            {
              q: "Can I withdraw my capital before the term?",
              a: "Invested capital is committed to individual loan terms (3-6 months average). Monthly payments are liquid and can be withdrawn or reinvested. For full early liquidity, we evaluate case by case.",
            },
            {
              q: "How are returns taxed?",
              a: "Returns are income subject to tax regulations of the investor's country of residence. We deliver annual reports with the necessary information for filing. We recommend consulting a local tax advisor.",
            },
            {
              q: "Are returns guaranteed?",
              a: "No. Returns are target, not guaranteed. The diversification structure and first-loss capital significantly reduce risk, but no productive investment is free of potential loss.",
            },
          ],
        },
        {
          title: "About operations",
          items: [
            {
              q: "How are entrepreneurs selected for credit?",
              a: "We combine proprietary scoring with reputation verification in validated productive communities. Each applicant goes through cash flow evaluation, credit purpose and active references. We don't replicate traditional banking criteria because they exclude the profile we want to serve.",
            },
            {
              q: "How is capital custodied?",
              a: "Investor capital is held in segregated accounts with institutional custody. Payment flows are audited and reports are delivered to each investor with loan-by-loan detail.",
            },
            {
              q: "Which countries do you operate in?",
              a: "The current cycle covers [TBD: country list]. We're expanding coverage as we validate origination and local collection capacity.",
            },
            {
              q: "What technology is the platform built on?",
              a: "The infrastructure combines traditional rails with blockchain technology for settlement and traceability. This lets us reduce operating costs and deliver granular audit reporting. Technical complexity is ours; the investor experience is that of a traditional financial product.",
            },
          ],
        },
        {
          title: "About regulation",
          items: [
            {
              q: "Is there regulation?",
              a: "We operate as a Virtual Asset Service Provider registered with UIF Peru, with KYC/AML policies aligned to SBS standards. The full compliance structure is detailed in cycle documentation, available under NDA.",
            },
            {
              q: "Is this a public securities offering?",
              a: "No. Finnoba operates as a private alternative investment platform. Participation is subject to investor profile evaluation and signing individual terms. This does not constitute a public offering under local regulation.",
            },
            {
              q: "Do I need to be an accredited investor?",
              a: "The current cycle is for investors with capacity to evaluate credit risk and commit capital during the product term. We validate profile in the onboarding interview.",
            },
          ],
        },
      ],
      cta: "Reserve my spot",
    },
    transparency: {
      meta: {
        title: "Transparency",
        description:
          "Real v0.1 metrics from Finnoba updated monthly: portfolio, distribution, reports and audit.",
      },
      h1: "Operating transparency.",
      sub: "Real v0.1 metrics updated monthly.",
      portfolioTitle: "Portfolio metrics",
      portfolio: [
        ["Total capital deployed", "$[X]"],
        ["Active loans", "[X]"],
        ["Loans fully repaid", "[X]"],
        ["Current default rate", "[X]%"],
        ["Average net APR", "[X]%"],
        ["Geographies covered", "[LIST]"],
      ],
      distributionTitle: "Portfolio distribution",
      distribution: [
        ["By country", "[TBD]"],
        ["By borrower productive sector", "[TBD]"],
        ["By loan size", "[TBD]"],
        ["By term", "[TBD]"],
      ],
      reportsTitle: "Monthly report",
      reportsBody:
        "Coming soon. PDF monthly reports will be published from the close of the first expanded operating quarter.",
      auditTitle: "Audit",
      auditBody:
        "Operations are audited by [TBD]. Quarterly reports are available to active investors.",
      cta: "Reserve my spot",
    },
    legal: {
      termsTitle: "Terms and conditions",
      privacyTitle: "Privacy policy",
      placeholderTitle: "Legal document in preparation",
      placeholderBody:
        "This document is being prepared by our legal team. Contact hola@finnoba.xyz to receive the current version of the active cycle agreement.",
    },
    footer: {
      tagline:
        "Building the next standard of productive investment in LATAM.",
      productTitle: "Product",
      product: [
        { l: "How it works", h: "/how-it-works" },
        { l: "For investors", h: "/investors" },
        { l: "Thesis", h: "/thesis" },
        { l: "Risk control", h: "/risk" },
      ],
      resourcesTitle: "Resources",
      resources: [
        { l: "FAQ", h: "/faq" },
        { l: "Transparency", h: "/transparency" },
        { l: "Documentation", h: "https://www.notion.so", e: true },
        { l: "Team", h: "/team" },
      ],
      communityTitle: "Community",
      community: [
        { l: "LinkedIn", h: "https://www.linkedin.com", e: true },
        { l: "X / Twitter", h: "https://x.com", e: true },
        { l: "Newsletter", h: "https://substack.com", e: true },
        { l: "Contact", h: "mailto:hola@finnoba.xyz", e: true },
      ],
      legalTitle: "Legal",
      legalLinks: [
        { l: "Terms", h: "/terms" },
        { l: "Privacy", h: "/privacy" },
      ],
      legalBase:
        "© 2026 Finnoba. This does not constitute a public securities offering or financial advice. Every investment carries risk, including the potential loss of invested capital.",
      lang: "Language",
    },
  },
} as const;

export type Dictionary = (typeof DICTIONARIES)["es"];
