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
          "Conectamos capital con los exportadores que los bancos no atienden. Yield objetivo de 12–14% en USD; evaluación ágil basada en flujo de caja — sin colateral, sin banco.",
      },
      hero: {
        tag: "Piloto 2026 · Perú · Cupos limitados",
        h1: "Rendimiento real en USD. Negocios reales. Un solo marketplace.",
        sub: "Finnoba conecta a inversores con USD ocioso con exportadores que facturan en dólares y los bancos ignoran. Yield objetivo de 12–14% en USD; evaluación ágil basada en flujo de caja — sin colateral, sin banco.",
        primary: "Empezar a invertir",
        secondary: "Solicitar crédito USD",
        badges: ["Denominado en USD", "Evaluación por flujo de caja", "Default objetivo <5%"],
      },
      preview: {
        url: "app.finnoba.xyz",
        search: "Buscar negocios",
        addFunds: "Añadir fondos",
        title: "Marketplace",
        sub: "Financia negocios verificados y gana rendimiento en USD.",
        headers: { business: "NEGOCIO", amount: "MONTO", term: "PLAZO", yield: "USD YIELD", grade: "GRADO" },
      },
      stats: [
        { label: "Etapa", value: "Piloto 2026", sub: "pre-lanzamiento" },
        { label: "Yield objetivo", value: "12–14%", sub: "en USD · no garantizado", subColor: "#157A47" },
        { label: "Primer mercado", value: "Perú", sub: "exportadores que facturan en USD" },
      ],
      markets: {
        eyebrow: "Vista previa del marketplace",
        title: "Financia exportadores reales. Cobra en USD.",
        sub: "Así se verá el marketplace: cada préstamo verificado, calificado y respaldado por flujo de caja en dólares.",
        browse: "Ver términos",
        yieldLabel: "Yield USD objetivo",
        exampleLabel: "Ejemplo ilustrativo",
        disclaimer:
          "Ejemplos ilustrativos: negocios ficticios, no son ofertas vigentes. Finnoba aún no ha desembolsado préstamos.",
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
            eyebrow: "Ágil, no burocrático",
            title: "100% digital, de la solicitud al pago",
            body: "Identidad, scoring y firma online. Evaluación ágil basada en flujo de caja real — sin visita a la sucursal.",
            tint: "peach",
          },
          {
            eyebrow: "Yield objetivo",
            title: "12–14% objetivo en USD, respaldado por préstamos",
            body: "Los retornos del inversor los pagan negocios reales devolviendo préstamos reales — no especulación, nunca cripto. El rendimiento es objetivo, no garantizado.",
            tint: "sky",
          },
          {
            eyebrow: "Regla de hierro",
            title: "Solo prestamos USD a quien gana USD",
            body: "Financiamos exportadores que facturan en dólares: café, cacao, arándano, palta, pesca, textil, software y BPO. Préstamo e ingreso en la misma moneda, sin riesgo cambiario importado. Empezamos por Perú; LATAM es el horizonte.",
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
              { t: "Gana mientras pagan", d: "Los negocios pagan mensualmente en USD — el yield objetivo es 12–14% anual." },
            ],
          },
          {
            tag: "Para negocios",
            color: "#1FB36B",
            steps: [
              { t: "Aplica online", d: "Cuéntanos de tu negocio exportador y conecta tu historial de facturación en USD." },
              { t: "Recibe una decisión rápida", d: "Te calificamos por performance real — sin colateral, sin banco." },
              { t: "Recibe USD, paga mensualmente", d: "Los fondos llegan a tu cuenta; pagas en cuotas mensuales fijas." },
            ],
          },
        ],
      },
      cta: {
        title: "Empieza hoy.",
        sub: "Ya sea para poner a trabajar USD ocioso o para financiar tu próximo embarque de exportación, el proceso es 100% digital.",
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
      sub: "Conectamos capital con exportadores que facturan en dólares. Tú decides cuánto inviertes; el sistema diversifica y administra los pagos.",
      stepsTitle: "Los tres pasos en detalle",
      steps: [
        {
          k: "01",
          t: "Reservas tu cupo",
          b: "Aplicas al primer ciclo de inversión. Validamos perfil del inversor, firmamos términos y abrimos tu posición con el monto que decidas asignar.",
        },
        {
          k: "02",
          t: "El capital se diversifica automáticamente",
          b: "Tu inversión se reparte entre los préstamos del pool según el criterio de diversificación. Cada préstamo pasa previamente por nuestro proceso de originación y scoring antes de ser fondeado.",
        },
        {
          k: "03",
          t: "Cobras mensualmente",
          b: "Los exportadores pagan en cuotas. Recibes tu parte proporcional cada mes con reporte detallado del estado de cada préstamo en tu portafolio.",
        },
      ],
      flowTitle: "El flujo, de extremo a extremo",
      flow: [
        { t: "Inversor", b: "Aporta capital al primer ciclo." },
        { t: "Pool diversificado", b: "Asignación automática entre 15–25 préstamos." },
        { t: "Originación", b: "Scoring y verificación previa al fondeo." },
        { t: "Borrowers", b: "Exportadores peruanos que facturan en USD." },
        { t: "Cobranza", b: "Pagos mensuales y escalamiento estructurado." },
        { t: "Pagos al inversor", b: "Distribución mensual proporcional." },
      ],
      tableTitle: "Frecuencia y plazos objetivo",
      table: [
        ["Plazo promedio de préstamo", "3-6 meses"],
        ["Frecuencia de pagos al inversor", "Mensual"],
        ["Tiempo de onboarding (objetivo)", "24-48h"],
        ["Tiempo de fondeo de un préstamo (objetivo)", "<24h"],
        ["Reporte mensual", "Día 5 del mes siguiente"],
      ],
      cta: "Ver términos para inversores",
    },
    investors: {
      meta: {
        title: "Para inversores",
        description:
          "Términos, tickets y onboarding del primer ciclo de Finnoba para inversores LATAM.",
      },
      h1: "Para inversores que buscan rendimiento productivo.",
      sub: "Términos, tickets y proceso de onboarding del primer ciclo.",
      termsTitle: "Términos del primer ciclo",
      terms: [
        ["Ticket mínimo", "$5,000 USD"],
        ["Ticket máximo recomendado", "$250,000 USD por ciclo"],
        ["Yield objetivo", "12–14% anual en USD (no garantizado)"],
        ["Perfil del borrower", "Exportadores peruanos que facturan en USD"],
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
        "Tu capital se asigna al pool del primer ciclo",
        "Recibes confirmación con tu portafolio diversificado y fecha del primer pago",
      ],
      cta: "Reservar mi lugar",
    },
    thesis: {
      meta: {
        title: "Tesis",
        description:
          "La tesis detrás de Finnoba: por qué el exportador peruano que factura en dólares es el mejor riesgo crediticio que nadie está financiando.",
      },
      h1: "La tesis detrás de Finnoba.",
      sub: "Por qué el exportador que factura en dólares es el mejor riesgo crediticio que nadie está financiando.",
      problemTitle: "El problema en números",
      problemIntro:
        "El pequeño exportador latinoamericano gana en dólares, vende a compradores del exterior y aun así financia su capital de trabajo con crédito caro o con recursos propios. El banco le pide colateral inmobiliario y años de estados financieros auditados; el ciclo de exportación no espera. La oportunidad es estructural.",
      stats: [
        { v: "[X]%", l: "Pymes exportadoras que reportan capital de trabajo como su mayor restricción" },
        { v: "[X]", l: "Días promedio entre embarque y cobro del comprador extranjero" },
        { v: "$[X]B", l: "Brecha de financiamiento estimada para pymes exportadoras en la región" },
        { v: "[X]%", l: "Costo del crédito alternativo frente al bancario para este segmento" },
      ],
      statsFootnote:
        "Estadísticas a publicar con fuente verificable (BID, Banco Mundial, BCRP, PROMPERÚ).",
      whyFailTitle: "Por qué los modelos tradicionales fallan",
      whyFail: [
        "El scoring bancario evalúa colateral y balance histórico, no el contrato de exportación ni el flujo de cobro en dólares. Un exportador con órdenes firmes y sin propiedades no califica.",
        "Los tiempos no calzan: entre el embarque y el pago del comprador extranjero pasan semanas, pero el productor necesita el capital antes de la campaña. Cuando el crédito llega, la ventana comercial ya se cerró.",
        "El crédito alternativo local presta en soles a tasas altas. El exportador termina con deuda en una moneda y con ingresos en otra, sumando riesgo cambiario a un problema que era solo de liquidez.",
      ],
      whyFinnobaTitle: "Por qué Finnoba puede",
      whyFinnoba: [
        "Originación basada en flujo real de exportación: contratos, órdenes de compra e historial de facturación en dólares. Vemos lo que un banco no mira.",
        "Prestamos en la misma moneda en la que el negocio cobra. Sin descalce cambiario, el riesgo que queda es crediticio y comercial — medible y diversificable.",
        "Tickets acotados ($1K–$10K) que reducen riesgo individual y permiten alta diversificación por inversor.",
        "Operación lean con tecnología propia que mantiene los costos bajos y permite tasas justas para ambos lados de la mesa.",
      ],
      stateTitle: "El estado actual",
      stateBody:
        "Finnoba está en etapa pre-lanzamiento. Aún no hemos desembolsado préstamos: estamos cerrando el piloto en Perú, construyendo el pipeline de originación con exportadores que facturan en USD y estructurando el primer ciclo de inversión. Las métricas de esta web se publicarán con data real desde el primer desembolso.",
      cta: "Reservar mi lugar en el primer ciclo",
    },
    risk: {
      meta: {
        title: "Control de riesgo",
        description:
          "Cómo controlamos el riesgo en Finnoba: originación, diversificación, capital first-loss y cobranza estructurada.",
      },
      h1: "Cómo controlamos el riesgo.",
      sub: "Un rendimiento objetivo sostenible no significa riesgo ciego. Estos son los mecanismos estructurales diseñados para proteger el capital invertido.",
      frameworkTitle: "Marco general",
      frameworkBody:
        "Toda inversión productiva implica riesgo. Nuestro trabajo no es esconderlo, sino estructurarlo, medirlo y reportarlo. Trabajamos en cinco capas: calce de moneda, originación, diversificación, capital first-loss y cobranza.",
      layersTitle: "Las cinco capas",
      layers: [
        {
          k: "01",
          t: "Calce de moneda (regla de hierro)",
          b: "Solo prestamos USD a negocios que GANAN USD: agroexportadores de café, cacao, arándano y palta, pesca de exportación, manufactura textil de exportación y software/BPO con clientes en el extranjero. El préstamo y el ingreso del borrower están en la misma moneda, así una devaluación del sol no convierte una cuota manejable en una impagable. Un negocio local que factura en soles no califica, aunque su flujo sea excelente.",
        },
        {
          k: "02",
          t: "Originación",
          b: "Cada préstamo pasa por evaluación de flujo de caja, verificación de facturación de exportación, propósito del crédito y referencias activas en comunidades productivas validadas. Esperamos rechazar más solicitudes de las que aprobamos; la tasa de aprobación objetivo es 15-25%.",
        },
        {
          k: "03",
          t: "Diversificación",
          b: "Ningún inversor estará expuesto a un solo préstamo. La asignación mínima es 15 préstamos por inversor. Esto convierte un default individual en una pérdida marginal del portafolio.",
        },
        {
          k: "04",
          t: "Capital first-loss",
          b: "El equipo mantendrá capital propio en cada pool para absorber las primeras pérdidas antes de que afecten a los inversores. Porcentaje objetivo: 10% del pool.",
        },
        {
          k: "05",
          t: "Cobranza estructurada",
          b: "Escalamiento progresivo de cobranza con reportes transparentes de mora. La estructura está diseñada para recuperar capital sin destruir la relación con el borrower productivo, lo cual reduce defaults futuros.",
        },
      ],
      metricsTitle: "Métricas objetivo",
      metricsHead: ["Métrica", "Objetivo", "Real"],
      metrics: [
        ["Default rate", "<5%", "Sin data"],
        ["Tasa de aprobación", "15-25%", "Sin data"],
        ["Diversificación promedio", "15+ préstamos", "Sin data"],
        ["Recovery rate post-mora", "60%+", "Sin data"],
        ["Plazo promedio", "3-6 meses", "Sin data"],
      ],
      metricsNote:
        "Finnoba aún no ha desembolsado préstamos, por lo que no existe data real que reportar. Estas son las métricas objetivo del modelo; publicaremos las reales en esta tabla desde el primer ciclo y actualizaremos mensualmente.",
      uncontrolledTitle: "Lo que NO controlamos",
      uncontrolledIntro:
        "Hay riesgos que están fuera de nuestro control y queremos ser explícitos sobre ellos:",
      uncontrolled: [
        "Crisis macroeconómicas regionales que afecten capacidad de pago generalizada",
        "Caídas de precio internacional o cierres de mercado que golpeen los ingresos de exportación del borrower",
        "Cambios regulatorios que modifiquen la operación",
        "Eventos de fraude individuales no detectados por los procesos de originación",
        "Riesgo de ejecución propio de una operación en etapa pre-lanzamiento, sin historial de desempeño",
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
      ecosystemSub: "Partners operativos del piloto.",
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
              a: "El ticket mínimo del primer ciclo es $5,000 USD. Los rendimientos se acreditarán mensualmente, proporcionales a los pagos recibidos de los préstamos en tu portafolio. El yield objetivo es 12–14% anual en USD, no garantizado.",
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
              q: "¿Cómo eligen a los negocios que reciben crédito?",
              a: "Primero aplicamos nuestra regla de hierro: solo prestamos USD a negocios que ganan USD, es decir exportadores con facturación en dólares. Sobre ese universo combinamos scoring propio con verificación de reputación en comunidades productivas validadas, evaluación de flujo de caja, propósito del crédito y referencias activas. No replicamos los criterios bancarios tradicionales porque excluyen al perfil que queremos servir.",
            },
            {
              q: "¿Por qué solo exportadores?",
              a: "Porque prestar dólares a un negocio que factura en soles importa riesgo cambiario que puede quebrar el libro: si el sol se devalúa, la cuota en USD se vuelve impagable aunque el negocio siga sano. Financiando exportadores de café, cacao, arándano, palta, pesca, textil y software/BPO, el ingreso del borrower y su deuda están en la misma moneda.",
            },
            {
              q: "¿Cómo estará custodiado el capital?",
              a: "El capital de los inversores se mantendrá en cuentas segregadas, con reportes préstamo por préstamo para cada inversor. La estructura de custodia definitiva se está cerrando junto con la asesoría legal y se detallará en la documentación del primer ciclo.",
            },
            {
              q: "¿En qué países operan?",
              a: "El piloto corre en Perú y ahí se coloca el primer ciclo. LATAM es el horizonte de largo plazo: expandiremos a medida que validemos capacidad de originación y cobranza local en cada mercado.",
            },
            {
              q: "¿En qué tecnología está construida la plataforma?",
              a: "La plataforma se está construyendo in-house sobre rieles financieros tradicionales. Hoy la operación es manual y asistida por nuestro equipo; automatizamos originación y reportería a medida que el piloto valida el proceso. Finnoba no es un producto cripto ni ofrece exposición a activos digitales.",
            },
          ],
        },
        {
          title: "Sobre la regulación",
          items: [
            {
              q: "¿Cuál es su situación regulatoria?",
              a: "Estamos trabajando con asesoría legal especializada para definir la clasificación regulatoria aplicable en Perú y las políticas KYC/AML correspondientes antes de abrir el primer ciclo. No afirmamos contar hoy con licencias ni registros que aún no estén emitidos; publicaremos el detalle en cuanto esté confirmado.",
            },
            {
              q: "¿Esto es una oferta pública de valores?",
              a: "No. Finnoba opera como plataforma privada de inversión alternativa. La participación está sujeta a evaluación de perfil del inversor y firma de términos individuales. Esto no constituye oferta pública conforme la regulación local.",
            },
            {
              q: "¿Necesito ser inversionista acreditado?",
              a: "El primer ciclo está dirigido a inversores con capacidad de evaluar riesgo crediticio y comprometer capital durante el plazo del producto. Validamos perfil en la entrevista de onboarding.",
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
          "El estado real de Finnoba: etapa pre-lanzamiento, sin préstamos desembolsados. Métricas de portafolio y reportes desde el primer ciclo.",
      },
      h1: "Transparencia operativa.",
      sub: "Finnoba está en pre-lanzamiento y aún no ha desembolsado préstamos. Esta página no muestra data inventada: cada métrica se publicará cuando exista, y se actualizará mensualmente desde el primer ciclo.",
      portfolioTitle: "Métricas del portafolio",
      portfolio: [
        ["Capital colocado total", "$0 — sin desembolsos"],
        ["Préstamos activos", "0"],
        ["Préstamos pagados completamente", "0"],
        ["Default rate actual", "Sin data"],
        ["APR neto promedio", "Sin data"],
        ["Geografías cubiertas", "Perú (piloto)"],
      ],
      distributionTitle: "Distribución del portafolio",
      distribution: [
        ["Por país", "Disponible desde el primer ciclo"],
        ["Por sector productivo del borrower", "Disponible desde el primer ciclo"],
        ["Por tamaño de préstamo", "Disponible desde el primer ciclo"],
        ["Por plazo", "Disponible desde el primer ciclo"],
      ],
      reportsTitle: "Reporte mensual",
      reportsBody:
        "Aún no hay reportes que publicar. Los reportes mensuales en PDF se publicarán a partir del cierre del primer trimestre de operación.",
      auditTitle: "Auditoría",
      auditBody:
        "Todavía no hay operación auditada. Definiremos auditor externo antes de abrir el primer ciclo y publicaremos aquí los reportes trimestrales.",
      cta: "Reservar mi lugar",
    },
    legal: {
      termsTitle: "Términos y condiciones",
      privacyTitle: "Política de privacidad",
      placeholderTitle: "Documento legal en preparación",
      placeholderBody:
        "Este documento está siendo preparado por nuestro equipo legal. Contacta a info@finnoba.xyz para recibir la versión vigente del contrato del primer ciclo.",
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
        { l: "Contacto", h: "mailto:info@finnoba.xyz", e: true },
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
          "We connect capital to the exporters banks overlook. Target yield of 12–14% in USD; fast, cash-flow based evaluation — no collateral, no bank.",
      },
      hero: {
        tag: "2026 pilot · Peru · Limited seats",
        h1: "Real USD yield. Real businesses. One marketplace.",
        sub: "Finnoba connects investors with idle USD to the exporters who invoice in dollars and banks overlook. Target yield of 12–14% in USD; fast, cash-flow based evaluation — no collateral, no bank.",
        primary: "Start investing",
        secondary: "Get USD credit",
        badges: ["USD-denominated", "Cash-flow based evaluation", "Target default under 5%"],
      },
      preview: {
        url: "app.finnoba.xyz",
        search: "Search businesses",
        addFunds: "Add funds",
        title: "Marketplace",
        sub: "Fund vetted businesses and earn USD yield.",
        headers: { business: "BUSINESS", amount: "AMOUNT", term: "TERM", yield: "USD YIELD", grade: "GRADE" },
      },
      stats: [
        { label: "Stage", value: "2026 pilot", sub: "pre-launch" },
        { label: "Target yield", value: "12–14%", sub: "in USD · not guaranteed", subColor: "#157A47" },
        { label: "First market", value: "Peru", sub: "exporters that invoice in USD" },
      ],
      markets: {
        eyebrow: "Marketplace preview",
        title: "Fund real exporters. Get paid in USD.",
        sub: "This is what the marketplace will look like: every loan vetted, scored and backed by cash flow in dollars.",
        browse: "See terms",
        yieldLabel: "Target USD yield",
        exampleLabel: "Illustrative example",
        disclaimer:
          "Illustrative examples: fictional businesses, not live offerings. Finnoba has not disbursed any loans yet.",
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
            eyebrow: "Agile, not bureaucratic",
            title: "Fully digital, apply to payout",
            body: "Identity, scoring and signature happen online. Fast evaluation based on real cash flow — not a branch visit.",
            tint: "peach",
          },
          {
            eyebrow: "Target yield",
            title: "12–14% target in USD, backed by loans",
            body: "Investor returns are paid by real businesses repaying real loans — not speculation, and never crypto. The yield is a target, not a guarantee.",
            tint: "sky",
          },
          {
            eyebrow: "Iron rule",
            title: "We only lend USD to businesses that earn USD",
            body: "We finance exporters that invoice in dollars: coffee, cacao, blueberry, avocado, fishing, textiles, software and BPO. Loan and income in the same currency, no imported FX risk. We start in Peru; LATAM is the horizon.",
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
              { t: "Earn as they repay", d: "Businesses repay monthly in USD — the target yield is 12–14% a year." },
            ],
          },
          {
            tag: "For businesses",
            color: "#1FB36B",
            steps: [
              { t: "Apply online", d: "Tell us about your export business and connect your USD invoicing history." },
              { t: "Get a decision fast", d: "We score you on real performance — no collateral, no bank required." },
              { t: "Receive USD, repay monthly", d: "Funds land in your account; you repay in fixed monthly installments." },
            ],
          },
        ],
      },
      cta: {
        title: "Get started today.",
        sub: "Whether you're putting idle USD to work or financing your next export shipment, the process is fully digital.",
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
      sub: "We connect capital with exporters that invoice in dollars. You decide how much to invest; the system diversifies and manages payments.",
      stepsTitle: "The three steps in detail",
      steps: [
        {
          k: "01",
          t: "You reserve your seat",
          b: "You apply to the first investment cycle. We validate investor profile, sign terms and open your position with the amount you decide.",
        },
        {
          k: "02",
          t: "Capital diversifies automatically",
          b: "Your investment is split across pool loans according to the diversification criteria. Every loan goes through our origination and scoring process before being funded.",
        },
        {
          k: "03",
          t: "You collect monthly",
          b: "Exporters pay in installments. You receive your pro-rata share each month with a detailed report on every loan in your portfolio.",
        },
      ],
      flowTitle: "The flow, end to end",
      flow: [
        { t: "Investor", b: "Allocates capital to the first cycle." },
        { t: "Diversified pool", b: "Automatic allocation across 15–25 loans." },
        { t: "Origination", b: "Scoring and verification before funding." },
        { t: "Borrowers", b: "Peruvian exporters that invoice in USD." },
        { t: "Collections", b: "Monthly payments and structured escalation." },
        { t: "Investor payouts", b: "Pro-rata monthly distribution." },
      ],
      tableTitle: "Target frequency and terms",
      table: [
        ["Average loan term", "3-6 months"],
        ["Investor payment frequency", "Monthly"],
        ["Onboarding time (target)", "24-48h"],
        ["Loan funding time (target)", "<24h"],
        ["Monthly report", "5th of the following month"],
      ],
      cta: "See investor terms",
    },
    investors: {
      meta: {
        title: "For investors",
        description:
          "First cycle terms, tickets and onboarding for Finnoba LATAM investors.",
      },
      h1: "For investors looking for productive returns.",
      sub: "Terms, tickets and onboarding process for the first cycle.",
      termsTitle: "First cycle terms",
      terms: [
        ["Minimum ticket", "$5,000 USD"],
        ["Recommended max ticket", "$250,000 USD per cycle"],
        ["Target yield", "12–14% a year in USD (not guaranteed)"],
        ["Borrower profile", "Peruvian exporters that invoice in USD"],
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
        "Your capital is allocated to the first cycle pool",
        "You get confirmation with your diversified portfolio and first payment date",
      ],
      cta: "Reserve my spot",
    },
    thesis: {
      meta: {
        title: "Thesis",
        description:
          "The thesis behind Finnoba: why the Peruvian exporter that invoices in dollars is the best credit risk nobody is financing.",
      },
      h1: "The thesis behind Finnoba.",
      sub: "Why the exporter that invoices in dollars is the best credit risk nobody is financing.",
      problemTitle: "The problem in numbers",
      problemIntro:
        "The small Latin American exporter earns in dollars, sells to foreign buyers, and still funds working capital with expensive credit or out of pocket. The bank asks for real-estate collateral and years of audited statements; the export cycle doesn't wait. The opportunity is structural.",
      stats: [
        { v: "[X]%", l: "Exporting SMEs that report working capital as their largest constraint" },
        { v: "[X]", l: "Average days between shipment and payment from the foreign buyer" },
        { v: "$[X]B", l: "Estimated financing gap for exporting SMEs in the region" },
        { v: "[X]%", l: "Cost of alternative credit versus bank credit for this segment" },
      ],
      statsFootnote:
        "Statistics to be published with verifiable source (IDB, World Bank, BCRP, PROMPERÚ).",
      whyFailTitle: "Why traditional models fail",
      whyFail: [
        "Bank scoring evaluates collateral and historical balance sheets, not the export contract or the dollar collection flow. An exporter with firm orders and no property doesn't qualify.",
        "The timing doesn't match: weeks pass between shipment and payment from the foreign buyer, but the producer needs capital before the season. By the time credit arrives, the commercial window has closed.",
        "Local alternative credit lends in soles at high rates. The exporter ends up with debt in one currency and income in another, adding FX risk to what was only a liquidity problem.",
      ],
      whyFinnobaTitle: "Why Finnoba can",
      whyFinnoba: [
        "Origination based on real export cash flow: contracts, purchase orders and dollar invoicing history. We see what a bank doesn't look at.",
        "We lend in the same currency the business collects in. With no currency mismatch, the remaining risk is credit and commercial — measurable and diversifiable.",
        "Contained tickets ($1K–$10K) that reduce individual risk and allow high diversification per investor.",
        "Lean operation with proprietary technology that keeps costs low and enables fair rates on both sides of the table.",
      ],
      stateTitle: "Current state",
      stateBody:
        "Finnoba is pre-launch. We have not disbursed any loans yet: we are closing the pilot in Peru, building the origination pipeline with exporters that invoice in USD, and structuring the first investment cycle. The metrics on this site will be published with real data from the first disbursement onward.",
      cta: "Reserve my spot in the first cycle",
    },
    risk: {
      meta: {
        title: "Risk control",
        description:
          "How we control risk at Finnoba: origination, diversification, first-loss capital and structured collections.",
      },
      h1: "How we control risk.",
      sub: "A sustainable target return doesn't mean blind risk. These are the structural mechanisms designed to protect invested capital.",
      frameworkTitle: "General framework",
      frameworkBody:
        "Every productive investment carries risk. Our job is not to hide it but to structure, measure and report it. We work in five layers: currency match, origination, diversification, first-loss capital and collections.",
      layersTitle: "The five layers",
      layers: [
        {
          k: "01",
          t: "Currency match (iron rule)",
          b: "We only lend USD to businesses that EARN USD: coffee, cacao, blueberry and avocado agro-exporters, export fishing, export textile manufacturing, and software/BPO with foreign clients. The loan and the borrower's income sit in the same currency, so a devaluation of the sol doesn't turn a manageable installment into an impossible one. A local business invoicing in soles does not qualify, however good its cash flow.",
        },
        {
          k: "02",
          t: "Origination",
          b: "Every loan goes through evaluation of cash flow, verification of export invoicing, credit purpose and active references in validated productive communities. We expect to reject more requests than we approve; the target approval rate is 15-25%.",
        },
        {
          k: "03",
          t: "Diversification",
          b: "No investor will be exposed to a single loan. Minimum allocation is 15 loans per investor. This turns an individual default into a marginal portfolio loss.",
        },
        {
          k: "04",
          t: "First-loss capital",
          b: "The team will keep proprietary capital in every pool to absorb first losses before they affect investors. Target percentage: 10% of pool.",
        },
        {
          k: "05",
          t: "Structured collections",
          b: "Progressive collections escalation with transparent delinquency reporting. The structure is designed to recover capital without destroying the relationship with the productive borrower, which reduces future defaults.",
        },
      ],
      metricsTitle: "Target metrics",
      metricsHead: ["Metric", "Target", "Actual"],
      metrics: [
        ["Default rate", "<5%", "No data"],
        ["Approval rate", "15-25%", "No data"],
        ["Avg diversification", "15+ loans", "No data"],
        ["Post-delinquency recovery", "60%+", "No data"],
        ["Average term", "3-6 months", "No data"],
      ],
      metricsNote:
        "Finnoba has not disbursed any loans yet, so there is no actual data to report. These are the model's target metrics; we will publish the real ones in this table from the first cycle onward and update monthly.",
      uncontrolledTitle: "What we do NOT control",
      uncontrolledIntro:
        "There are risks outside our control and we want to be explicit about them:",
      uncontrolled: [
        "Regional macroeconomic crises affecting widespread payment capacity",
        "International price drops or market closures that hit the borrower's export revenue",
        "Regulatory changes that modify operations",
        "Individual fraud events undetected by origination processes",
        "Execution risk inherent to a pre-launch operation with no performance track record",
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
      ecosystemSub: "Operating partners of the pilot.",
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
              a: "The minimum ticket of the first cycle is $5,000 USD. Returns will be credited monthly, pro-rata to payments received from loans in your portfolio. The target yield is 12–14% a year in USD, not guaranteed.",
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
              q: "How are businesses selected for credit?",
              a: "First we apply our iron rule: we only lend USD to businesses that earn USD, meaning exporters with dollar invoicing. Within that universe we combine proprietary scoring with reputation verification in validated productive communities, cash flow evaluation, credit purpose and active references. We don't replicate traditional banking criteria because they exclude the profile we want to serve.",
            },
            {
              q: "Why exporters only?",
              a: "Because lending dollars to a business that invoices in soles imports FX risk that can break the book: if the sol devalues, the USD installment becomes unpayable even if the business is healthy. By financing exporters of coffee, cacao, blueberry, avocado, fish, textiles and software/BPO, the borrower's income and their debt sit in the same currency.",
            },
            {
              q: "How will capital be custodied?",
              a: "Investor capital will be held in segregated accounts, with loan-by-loan reporting for each investor. The definitive custody structure is being finalized together with legal counsel and will be detailed in the first cycle documentation.",
            },
            {
              q: "Which countries do you operate in?",
              a: "The pilot runs in Peru and that is where the first cycle is deployed. LATAM is the long-term horizon: we will expand as we validate origination and local collection capacity in each market.",
            },
            {
              q: "What technology is the platform built on?",
              a: "The platform is being built in-house on traditional financial rails. Today the operation is manual and assisted by our team; we automate origination and reporting as the pilot validates the process. Finnoba is not a crypto product and does not offer exposure to digital assets.",
            },
          ],
        },
        {
          title: "About regulation",
          items: [
            {
              q: "What is your regulatory situation?",
              a: "We are working with specialized legal counsel to determine the applicable regulatory classification in Peru and the corresponding KYC/AML policies before opening the first cycle. We do not claim to currently hold licenses or registrations that have not yet been issued; we will publish the detail as soon as it is confirmed.",
            },
            {
              q: "Is this a public securities offering?",
              a: "No. Finnoba operates as a private alternative investment platform. Participation is subject to investor profile evaluation and signing individual terms. This does not constitute a public offering under local regulation.",
            },
            {
              q: "Do I need to be an accredited investor?",
              a: "The first cycle is for investors with capacity to evaluate credit risk and commit capital during the product term. We validate profile in the onboarding interview.",
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
          "Finnoba's real state: pre-launch, no loans disbursed. Portfolio metrics and reports from the first cycle onward.",
      },
      h1: "Operating transparency.",
      sub: "Finnoba is pre-launch and has not disbursed any loans yet. This page shows no invented data: every metric will be published once it exists, and updated monthly from the first cycle onward.",
      portfolioTitle: "Portfolio metrics",
      portfolio: [
        ["Total capital deployed", "$0 — no disbursements"],
        ["Active loans", "0"],
        ["Loans fully repaid", "0"],
        ["Current default rate", "No data"],
        ["Average net APR", "No data"],
        ["Geographies covered", "Peru (pilot)"],
      ],
      distributionTitle: "Portfolio distribution",
      distribution: [
        ["By country", "Available from the first cycle"],
        ["By borrower productive sector", "Available from the first cycle"],
        ["By loan size", "Available from the first cycle"],
        ["By term", "Available from the first cycle"],
      ],
      reportsTitle: "Monthly report",
      reportsBody:
        "There are no reports to publish yet. PDF monthly reports will be published from the close of the first operating quarter.",
      auditTitle: "Audit",
      auditBody:
        "There is no audited operation yet. We will appoint an external auditor before opening the first cycle and publish the quarterly reports here.",
      cta: "Reserve my spot",
    },
    legal: {
      termsTitle: "Terms and conditions",
      privacyTitle: "Privacy policy",
      placeholderTitle: "Legal document in preparation",
      placeholderBody:
        "This document is being prepared by our legal team. Contact info@finnoba.xyz to receive the current version of the first cycle agreement.",
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
        { l: "Contact", h: "mailto:info@finnoba.xyz", e: true },
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
