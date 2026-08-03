export type Lang = "es" | "en";

export const DICTIONARIES = {
  es: {
    nav: {
      how: "Cómo funciona",
      investors: "Inversores",
      thesis: "Por qué Finnoba",
      faq: "Preguntas",
      app: "Llévame a la app",
    },
    home: {
      meta: {
        title: "Finnoba — Préstamos en dólares a exportadores peruanos",
        description:
          "Prestamos dólares a exportadores peruanos que ya cobran en dólares. Entras desde $100 por préstamo y cobras capital y rendimiento al vencimiento.",
      },
      hero: {
        tag: "Piloto 2026 · Perú · Cupos limitados",
        h1: "Tus dólares, prestados a quien ya gana dólares.",
        sub: "Finnoba conecta a quien tiene dólares parados con exportadores peruanos que los bancos no atienden. Entras desde $100 por préstamo y recuperas capital y rendimiento cuando el préstamo vence.",
        primary: "Quiero prestar",
        secondary: "Necesito financiamiento",
        badges: ["Todo en dólares", "Prestas desde $100", "Perú, primer mercado"],
      },
      preview: {
        url: "app.finnoba.xyz",
        addFunds: "Añadir fondos",
        title: "Tu portafolio",
        sub: "Tu dinero repartido entre exportadores verificados que cobran en dólares.",
        headers: { business: "NEGOCIO", amount: "MONTO", term: "PLAZO", grade: "NIVEL" },
      },
      stats: [
        { label: "Etapa", value: "Piloto 2026", sub: "aún no hemos prestado" },
        { label: "Entras desde", value: "$100", sub: "por préstamo", subColor: "#157A47" },
        { label: "Primer mercado", value: "Perú", sub: "exportadores que cobran en dólares" },
      ],
      markets: {
        eyebrow: "Así se verá",
        title: "Presta a exportadores reales. Cobra en dólares.",
        sub: "Cada negocio se verifica antes de publicarse: que exista, que exporte y que le paguen en dólares.",
        browse: "Ver condiciones",
        amountLabel: "Monto del préstamo",
        exampleLabel: "Ejemplo ilustrativo",
        disclaimer:
          "Ejemplos ilustrativos: negocios ficticios, no son ofertas vigentes. Finnoba aún no ha prestado dinero.",
        termSuffix: "meses",
        levelLabel: "Nivel",
      },
      why: {
        eyebrow: "Por qué Finnoba",
        title: "Una forma más justa de prestar y de pedir prestado en dólares.",
        items: [
          {
            eyebrow: "Sin garantías",
            title: "Miramos tus ventas, no tus propiedades",
            body: "Un banco pide un inmueble en garantía y años de balances auditados. Nosotros miramos lo que de verdad importa: que factures, que exportes y que te paguen.",
            tint: "mint",
          },
          {
            eyebrow: "Empiezas pequeño",
            title: "Tu primer préstamo son $500",
            body: "Arrancas con un monto chico y un plazo corto. Si pagas bien, subes de nivel: más monto, más plazo y una tasa más baja. No la eliges, te la ganas.",
            tint: "peach",
          },
          {
            eyebrow: "De dónde sale el rendimiento",
            title: "Lo paga un negocio que vendió, no un mercado que subió",
            body: "Lo que ganas viene de exportadores devolviendo préstamos en dólares. No hay especulación de por medio. De los intereses que paga la empresa, el 60% es tu rendimiento y el 40% es la comisión de Finnoba. Te lo confirmamos por escrito antes de que pongas nada, y no es una garantía: un préstamo puede no devolverse y nosotros no lo reponemos.",
            tint: "sky",
          },
          {
            eyebrow: "Nuestra regla de oro",
            title: "Solo prestamos dólares a quien ya gana dólares",
            body: "Financiamos exportadores que cobran en dólares: café, cacao, arándano, palta, pesca, textil y software. Así la deuda y los ingresos están en la misma moneda, y una subida del dólar no convierte una cuota manejable en una impagable. Empezamos por Perú.",
            tint: "lilac",
          },
        ],
      },
      how: {
        eyebrow: "Cómo funciona",
        title: "Dos lados, un solo camino simple.",
        columns: [
          {
            tag: "Si tienes dólares parados",
            color: "#6D54E8",
            steps: [
              { t: "Pones tu dinero", d: "Defines cuánto quieres prestar y firmamos las condiciones." },
              { t: "Tu dinero se reparte solo", d: "Tu dinero se reparte entre varios préstamos, para que no dependas de uno solo. Cada tramo es de $100 y ninguno se lleva más del 10% de lo que pusiste." },
              { t: "Cobras al vencimiento", d: "Cuando el préstamo termina recuperas tu capital más lo que rindió, en dólares." },
            ],
          },
          {
            tag: "Si necesitas financiamiento",
            color: "#1FB36B",
            steps: [
              { t: "Nos cuentas de tu negocio", d: "Tu RUC, tus ventas de los últimos meses y una factura o contrato que muestre que te pagan en dólares." },
              { t: "Revisamos y te respondemos", d: "Verificamos que el negocio exista, que exporte y que pueda pagar. Sin garantías ni visitas a una sucursal." },
              { t: "Recibes el dinero y subes de nivel", d: "El desembolso va únicamente a una cuenta bancaria a nombre del mismo RUC. Empiezas en $500. Cada préstamo bien pagado te sube de nivel: más monto, más plazo y una tasa más baja." },
            ],
          },
        ],
      },
      cta: {
        title: "Empieza hoy.",
        sub: "Tanto si tienes dólares parados como si necesitas financiar tu próximo embarque, esto empieza con una conversación.",
        primary: "Empezar",
      },
    },
    how: {
      meta: {
        title: "Cómo funciona",
        description:
          "Cómo funciona Finnoba: tres pasos para quien presta, la escalera de niveles para quien pide, y qué pedimos para aprobar un préstamo.",
      },
      h1: "Tres pasos. Un solo camino.",
      sub: "Conectamos a quien tiene dólares parados con exportadores peruanos que ya cobran en dólares.",
      stepsTitle: "Si vas a prestar",
      steps: [
        {
          k: "01",
          t: "Reservas tu cupo",
          b: "Nos escribes, revisamos tu perfil y firmamos las condiciones. Antes de recibir tu dinero verificamos tu identidad y el origen de los fondos: es obligatorio y nos protege a los dos.",
        },
        {
          k: "02",
          t: "Tu dinero se reparte entre varios préstamos",
          b: "La asignación es automática y por orden de llegada: tú no eliges préstamo. Cada tramo es de $100, un préstamo de $500 se arma entre varias personas, y ningún préstamo se lleva más del 10% de lo que pusiste. Todos los tramos de un mismo préstamo cobran y pierden en la misma proporción. Cada negocio pasa antes por nuestra revisión.",
        },
        {
          k: "03",
          t: "Cobras cuando el préstamo termina",
          b: "Al vencimiento recuperas tu capital junto con lo que rindió. Mientras tanto te mandamos un reporte de cómo va cada préstamo.",
        },
      ],
      levelsTitle: "Si vas a pedir: la escalera",
      levelsIntro:
        "Nadie empieza pidiendo mucho. Tu primer préstamo son $500 a 2 meses. Cuando lo pagas completo, subes de nivel: te prestamos más, por más tiempo y a una tasa más baja. La tasa no la eliges, te la ganas pagando.",
      levelsFoot:
        "La tasa baja en cada nivel. El Nivel 1 está publicado completo aquí abajo, con montos exactos y sin necesidad de agendar una llamada. Los niveles siguientes te los confirmamos por escrito antes de que aceptes nada.",
      scheduleTitle: "Cuánto cuesta el Nivel 1",
      scheduleLead:
        "$500 a 2 meses, 5% mensual sobre el saldo que aún debes. Estos son los montos exactos.",
      scheduleHead: ["Cuota", "Capital", "Interés", "Total a pagar"],
      scheduleTotalLabel: "Total devuelto",
      scheduleCta: "Solicitar financiamiento",
      scheduleFoot:
        "TCEA 79,59%. El interés se calcula siempre sobre el saldo insoluto —lo que todavía debes— y nunca sobre el monto original: por eso la segunda cuota es más barata que la primera. El tope legal que fija el Banco Central para moneda extranjera es 99,84% anual, vigente de mayo a octubre de 2026.",
      requirementsTitle: "Qué te pedimos",
      requirements: [
        "RUC activo y habido en SUNAT",
        "Tus ventas de los últimos 6 a 12 meses",
        "Una factura o contrato que muestre que un cliente del exterior te paga en dólares",
        "Una cuenta bancaria en dólares a nombre del mismo RUC: el desembolso no va a ninguna otra",
        "Para qué vas a usar el dinero",
        "Si tienes otras deudas en curso",
      ],
      flowTitle: "El recorrido completo",
      flow: [
        { t: "Tú prestas", b: "Pones dólares en el primer ciclo." },
        { t: "Se arma el préstamo", b: "Varias personas juntan el monto de cada préstamo." },
        { t: "Revisamos", b: "Verificamos cada negocio antes de darle el dinero." },
        { t: "Exportadores", b: "Negocios peruanos que cobran en dólares." },
        { t: "Cobramos", b: "Seguimiento mensual de cada cuota." },
        { t: "Te pagamos", b: "Capital y rendimiento al vencer el préstamo." },
      ],
      tableTitle: "Plazos y frecuencias",
      table: [
        ["Plazo de los préstamos", "2 a 6 meses"],
        ["Cuándo cobras", "Al vencimiento de cada préstamo"],
        ["Monto mínimo por préstamo", "$100"],
        ["Reporte", "Mensual, día 5"],
      ],
      cta: "Ver condiciones para inversores",
    },
    investors: {
      meta: {
        title: "Para inversores",
        description:
          "Condiciones del primer ciclo de Finnoba: montos, plazos, comisiones y cómo entrar.",
      },
      h1: "Para quien tiene dólares parados.",
      sub: "Estas son las condiciones del primer ciclo y cómo se entra.",
      disclosureTitle: "Antes de nada, tres cosas",
      disclosures: [
        {
          t: "De cada cuota, el 40% del interés es nuestro",
          b: "De los intereses que paga la empresa, el 60% es tu rendimiento y el 40% es la comisión de Finnoba por originar, verificar y administrar el crédito. Lo ves desglosado en cada cuota, no solo en el total.",
        },
        {
          t: "El acreedor eres tú, no Finnoba",
          b: "El contrato de préstamo se celebra entre el lender y la empresa. Finnoba actúa como mandatario: origina, verifica, administra y cobra, pero no es parte del crédito ni acreedor de la deuda.",
        },
        {
          t: "No ponemos capital propio para cubrir impagos",
          b: "Finnoba no aporta capital propio para cubrir incumplimientos ni garantiza el capital ni el rendimiento. El riesgo de crédito lo asume el lender, y es la razón por la que el rendimiento es el que es.",
        },
      ],
      termsTitle: "Condiciones del primer ciclo",
      terms: [
        ["Monto mínimo por préstamo", "$100"],
        ["Monto máximo sugerido", "$10,000 por ciclo"],
        ["A quién se le presta", "Exportadores peruanos que cobran en dólares"],
        ["Cuánto dura", "2 a 6 meses, según los préstamos en los que entres"],
        ["Cómo se asigna", "Automático y por orden de llegada. Tú no eliges préstamo"],
        ["Cuánto entra en un solo préstamo", "Como máximo el 10% de tu depósito"],
        ["Cuándo cobras", "Capital y rendimiento al vencimiento de cada préstamo"],
        ["Salir antes", "No. El capital queda comprometido hasta el vencimiento"],
        ["Comisión de Finnoba", "40% del interés de cada cuota. El 60% restante es tuyo"],
        ["Quién es el acreedor", "Tú. Finnoba administra, pero no es parte del crédito"],
        ["Efectivo sin colocar", "No rinde. Solo rinde el capital efectivamente prestado"],
      ],
      feeTitle: "Cómo se reparte una cuota",
      feeLead:
        "Ejemplo de un préstamo de Nivel 1: $500 a 2 meses. Así se reparte el interés de cada cuota entre tu rendimiento y nuestra comisión.",
      feeHead: ["Cuota", "Interés que paga la empresa", "Comisión Finnoba (40%)", "Tu parte (60%)"],
      feeTotalLabel: "Total",
      feeFoot:
        "El capital ($500) se devuelve entero además de esa cifra. El interés se calcula sobre el saldo que la empresa aún debe, no sobre el monto original. El ejemplo asume que paga completo: si no paga, no hay interés que repartir y el capital tampoco vuelve.",
      ladderTitle: "Qué financia tu dinero",
      ladderBody:
        "Préstamos pequeños y cortos a exportadores peruanos. Nadie entra pidiendo el máximo: todos empiezan en $500 y solo suben de monto cuando devolvieron lo anterior completo. Eso mantiene acotado lo que puede costarte cada negocio, y hace que para cuando alguien llega a $15.000 ya tenga cuatro préstamos pagados detrás.",
      profileTitle: "Para quién es y para quién no",
      profileBody:
        "El piloto es privado y está pensado para gente que entiende que prestar dinero implica riesgo, que puede dejarlo trabajando el ciclo completo y que no necesita ese dinero antes.",
      profileFor: {
        title: "Para quién es esto",
        items: [
          "Tienes dólares parados que no vas a necesitar en los próximos meses",
          "Buscas un rendimiento mejor que el de un depósito a plazo y aceptas más riesgo a cambio",
          "Entiendes que un préstamo puede no devolverse",
          "Te interesa que tu dinero financie negocios reales y no un instrumento abstracto",
        ],
      },
      profileNotFor: {
        title: "Para quién NO es esto",
        items: [
          "Necesitas poder retirar todo antes del plazo",
          "Buscas un rendimiento garantizado",
          "Es dinero que no puedes permitirte perder",
        ],
      },
      onboardingTitle: "Cómo se entra",
      onboarding: [
        "Nos escribes y reservas tu cupo",
        "Hablamos 20 minutos: te contamos el detalle y resolvemos tus dudas",
        "Verificamos tu identidad y el origen de los fondos, y revisamos las listas internacionales de sanciones. Es obligatorio y no lo saltamos con nadie",
        "Firmamos las condiciones y te enviamos los datos para transferir",
        "Tu dinero se reparte automáticamente entre los préstamos del primer ciclo, por orden de llegada, y te confirmamos la fecha de tu primer cobro",
      ],
      cta: "Reservar mi lugar",
    },
    thesis: {
      meta: {
        title: "Tesis",
        description:
          "Por qué el exportador peruano que ya cobra en dólares es el mejor pagador que nadie está financiando.",
      },
      h1: "Por qué hacemos esto.",
      sub: "El exportador que ya cobra en dólares es el mejor pagador que nadie está financiando.",
      problemTitle: "El problema, en números",
      problemIntro:
        "En Perú el precio del crédito depende del tamaño de quien lo pide, no de si puede pagarlo. Estas son las tasas que cobran los bancos, según el propio Banco Central. Un exportador pequeño que vende afuera y cobra en dólares paga varias veces lo que paga una corporación por el mismo dinero.",
      stats: [
        { v: "5,34%", l: "Paga al año una gran corporación peruana por un crédito bancario" },
        { v: "20,01%", l: "Paga una pequeña empresa por ese mismo crédito" },
        { v: "69,59%", l: "Paga una microempresa. Trece veces la tasa corporativa" },
        { v: "+514", l: "Puntos básicos que subió la tasa de microempresa en 12 meses. A todos los demás segmentos les bajó" },
      ],
      statsFootnote:
        "Tasas activas anuales en moneda nacional de las empresas bancarias al 27 de febrero de 2026. Fuente: Banco Central de Reserva del Perú, nota informativa de marzo de 2026.",
      whyFailTitle: "Por qué nadie los atiende",
      whyFail: [
        "El banco mira las garantías y el pasado contable, no el pedido que el exportador tiene firmado ni los dólares que va a cobrar por él. Un negocio con pedidos en firme pero sin propiedades no pasa el filtro. Por eso la tasa depende del tamaño: 5,34% si eres corporación, 69,59% si eres microempresa.",
        "Los tiempos no cuadran. Entre que se embarca y que el comprador paga pasan semanas, pero el dinero se necesita antes de producir. Cuando el crédito llega, la campaña ya pasó.",
        "Las alternativas locales prestan en soles. El exportador acaba debiendo en una moneda y cobrando en otra, y a un problema de liquidez se le suma el riesgo de que el dólar se mueva.",
      ],
      whyFinnobaTitle: "Por qué nosotros sí podemos",
      whyFinnoba: [
        "Miramos lo que un banco no mira: los pedidos, los contratos y el historial de facturas cobradas en dólares.",
        "Prestamos en la misma moneda en la que el negocio cobra. Sin ese desajuste, lo que queda es el riesgo normal de que un negocio no pague — que sí se puede medir y repartir.",
        "Empezamos con montos pequeños ($500) y subimos solo cuando el negocio demuestra que paga. Eso limita cuánto se puede perder con cada uno.",
        "Equipo chico y tecnología propia. Menos costos fijos, tasas más razonables para ambos lados.",
      ],
      stateTitle: "Dónde estamos hoy",
      stateBody:
        "Finnoba todavía no ha prestado dinero. Estamos cerrando el piloto en Perú, armando la lista de exportadores que cumplen los requisitos y preparando el primer ciclo. Las cifras de esta web se van a llenar con datos reales desde el primer préstamo, no antes.",
      cta: "Reservar mi lugar en el primer ciclo",
    },
    risk: {
      meta: {
        title: "Control de riesgo",
        description:
          "Cómo cuidamos el dinero prestado: misma moneda, montos pequeños al inicio, reparto forzado entre varios préstamos y controles antifraude antes de desembolsar.",
      },
      h1: "Cómo cuidamos tu dinero.",
      sub: "Prestar siempre tiene riesgo. Lo que sí podemos hacer es reducirlo, medirlo y contarlo sin adornos.",
      noLossTitle: "Lo primero: no cubrimos las pérdidas",
      noLossBody:
        "Finnoba no aporta capital propio para cubrir incumplimientos ni garantiza el capital ni el rendimiento. El riesgo de crédito lo asume el lender, y es la razón por la que el rendimiento es el que es. Todo lo que viene abajo reduce la probabilidad de que algo salga mal; ninguna de esas defensas te devuelve el dinero si sale mal igual.",
      frameworkTitle: "La idea general",
      frameworkBody:
        "No vamos a decirte que esto no tiene riesgo, porque lo tiene. Lo que hacemos es atacarlo por cinco lados: prestar en la misma moneda que el negocio cobra, revisar bien a quién le prestamos, empezar con montos pequeños, repartir tu dinero a la fuerza entre varios préstamos y frenar el fraude antes de que el dinero salga.",
      layersTitle: "Las cinco defensas",
      layers: [
        {
          k: "01",
          t: "Misma moneda (nuestra regla de oro)",
          b: "Solo prestamos dólares a negocios que ya cobran en dólares: café, cacao, arándano, palta, pesca, textil de exportación y software con clientes fuera del país. Así la deuda y los ingresos van en la misma moneda: si el dólar sube, la cuota sigue siendo pagable. Un negocio que factura en soles no califica, por muy bien que le vaya.",
        },
        {
          k: "02",
          t: "Revisamos antes de prestar",
          b: "Verificamos que el negocio exista y esté al día en SUNAT, que tenga ventas de los últimos meses, que un cliente del exterior le pague en dólares y para qué necesita el dinero. Esperamos rechazar más solicitudes de las que aprobamos.",
        },
        {
          k: "03",
          t: "Empezamos pequeño",
          b: "El primer préstamo de cualquier negocio son $500 a pocos meses. Solo sube de monto cuando ya demostró que paga. Nadie entra pidiendo $15.000.",
        },
        {
          k: "04",
          t: "Repartimos tu dinero a la fuerza",
          b: "Un préstamo de $500 se arma entre varias personas, así que cada tramo cuesta $100. No es opcional: el motor no deja que un solo préstamo se lleve más del 10% de lo que depositaste, aunque quieras. La asignación es automática y por orden de llegada, y todos los tramos de un mismo préstamo cobran y pierden en la misma proporción.",
        },
        {
          k: "05",
          t: "Frenamos el fraude antes de desembolsar",
          b: "Validamos el RUC en SUNAT, exigimos 24 meses de operación formal, cruzamos al representante legal contra su DNI, verificamos documento con prueba de vida y —el control más fuerte— solo desembolsamos a una cuenta bancaria a nombre del mismo RUC. Antes de que salga el dinero hay además consulta a central de riesgo, verificación de facturación electrónica, huella de dispositivo, 24 horas de enfriamiento y una llamada de verificación.",
        },
      ],
      collectionsTitle: "Qué pasa cuando alguien no paga",
      collectionsIntro:
        "Es la primera pregunta que hace todo el mundo, así que va escrita y no en una llamada:",
      collections: [
        "Hay días de gracia acordados en el contrato. Dentro de ese plazo no hay penalidad, solo recordatorios.",
        "Pasados los días de gracia arranca la gestión de cobranza: contacto directo, acuerdo de pago cuando el negocio sigue siendo viable, y escalamiento cuando no.",
        "La mora genera un interés moratorio adicional al compensatorio, y como máximo el 15% de la tasa máxima que fija el Banco Central. No inventamos cargos por encima de eso.",
        "La escalera se congela con mora abierta. Nadie sube de nivel debiendo una cuota, por buen historial que tenga antes.",
        "El atraso se reporta a centrales de riesgo y puede derivar en acciones judiciales, según lo pactado en el contrato individual.",
        "Lo que se recupere se reparte a prorrata entre todos los que pusieron dinero en ese préstamo, en la misma proporción en la que habrían cobrado.",
      ],
      metricsTitle: "A qué apuntamos",
      metricsHead: ["Indicador", "Objetivo", "Real"],
      metrics: [
        ["Préstamos que no se pagan", "Menos del 5%", "Sin datos"],
        ["Solicitudes que aprobamos", "15-25%", "Sin datos"],
        ["Dinero recuperado tras un atraso", "25% o más", "Sin datos"],
        ["Plazo de los préstamos", "2 a 6 meses", "Sin datos"],
      ],
      metricsNote:
        "Todavía no hemos prestado dinero, así que no hay nada real que reportar. Estos son los números a los que apuntamos. Los reales van a aparecer en esta misma tabla desde el primer ciclo, actualizados cada mes.",
      uncontrolledTitle: "Lo que NO controlamos",
      uncontrolledIntro:
        "Hay cosas que se nos escapan, y preferimos decirlas antes que después:",
      uncontrolled: [
        "Una crisis económica que deje a mucha gente sin poder pagar a la vez",
        "Que se caiga el precio internacional de un producto o se cierre un mercado, y el negocio deje de cobrar",
        "Cambios en las reglas que nos obliguen a operar distinto",
        "Que alguien nos engañe y no lo detectemos al revisar",
        "Que nos equivoquemos nosotros: somos nuevos y todavía no tenemos historial que lo demuestre",
      ],
      uncontrolledFoot:
        "Podemos reducir el riesgo de nuestra operación, no el del mundo. Por eso nadie debería poner en Finnoba dinero que no pueda permitirse perder por completo.",
      cta: "Ver el FAQ completo",
    },
    team: {
      meta: {
        title: "Equipo",
        description:
          "Quiénes están detrás de Finnoba: fundadores, aliados y cómo trabajamos.",
      },
      h1: "Quiénes están detrás.",
      sub: "Finnoba la construye gente que ha estado en los dos lados: pidiendo prestado y prestando.",
      foundersTitle: "Fundadores",
      founders: [
        {
          name: "[POR DEFINIR]",
          role: "Cofundador · Dirección",
          body: "Años evaluando y colocando créditos, y operando en finanzas en la región.",
        },
        {
          name: "[POR DEFINIR]",
          role: "Cofundador · Tecnología",
          body: "Años construyendo plataformas financieras que mueven dinero de verdad.",
        },
        {
          name: "[POR DEFINIR]",
          role: "Cofundador · Riesgo",
          body: "Años gestionando carteras de préstamos fuera de la banca tradicional.",
        },
      ],
      ecosystemTitle: "Con quién trabajamos",
      ecosystemSub: "Los aliados que nos acompañan en el piloto.",
      ecosystem: [
        {
          name: "Indrox",
          body: "Nuestro equipo de desarrollo. Toda la tecnología de Finnoba se construye en casa, sin depender de terceros.",
        },
        {
          name: "ThePrimeWay",
          body: "Red que nos ayuda a validar negocios: quién tiene buena reputación en su comunidad y quién no.",
        },
        {
          name: "HiddenLayer Podcast",
          body: "Canal de difusión y comunidad dentro del ecosistema de tecnología e inversión de la región.",
        },
        {
          name: "La Punta del Iceberg",
          body: "Red de empresas en la región que nos acerca negocios que podrían calificar.",
        },
      ],
      philosophyTitle: "Cómo trabajamos",
      philosophy: [
        "Equipo chico y tecnología propia. No quemamos el dinero de nadie en publicidad ni en oficinas.",
        "Preferimos crecer despacio con los impagos bajo control que crecer rápido y romper la cartera al primer año malo.",
        "Queremos que esto se convierta en la forma normal de prestar en la región. Para eso hay que hacerlo bien, no rápido.",
      ],
      cta: "Leer por qué hacemos esto",
    },
    faq: {
      meta: {
        title: "Preguntas frecuentes",
        description:
          "Lo que todo el mundo pregunta antes de entrar a Finnoba: el dinero, cómo operamos y las reglas.",
      },
      h1: "Preguntas frecuentes.",
      sub: "Lo que todo el mundo pregunta antes de entrar.",
      groups: [
        {
          title: "Sobre tu dinero",
          items: [
            {
              q: "¿Cuánto es lo mínimo y cuándo cobro?",
              a: "Entras desde $100 por préstamo. Un préstamo de $500 se arma entre varias personas, por eso el mínimo es bajo. Tú no eliges en qué préstamos entrar: la asignación es automática y por orden de llegada, y ningún préstamo se lleva más del 10% de lo que pusiste. Cobras al vencimiento: cuando el negocio termina de pagar recuperas tu capital junto con lo que rindió.",
            },
            {
              q: "¿Cuánto cobra Finnoba?",
              a: "El 40% del interés de cada cuota. El 60% restante es tu rendimiento. Cobramos por originar, verificar y administrar el crédito, y lo ves desglosado cuota por cuota en el detalle de cada préstamo, no solo en el total. Cualquier otro cargo tendría que estar en el contrato individual antes de que firmes; hoy no hay ninguno.",
            },
            {
              q: "¿Quién es el acreedor de mi préstamo?",
              a: "Tú. El contrato de préstamo se celebra entre el lender y la empresa. Finnoba actúa como mandatario: origina, verifica, administra y cobra en tu nombre, pero no es parte del crédito ni acreedor de la deuda. La redacción definitiva del contrato la estamos cerrando con asesoría legal.",
            },
            {
              q: "¿Qué pasa si un negocio no paga?",
              a: "Lo pierdes tú. Finnoba no aporta capital propio para cubrir incumplimientos: gestionamos la cobranza, aplicamos el interés moratorio y reportamos a centrales de riesgo, pero no reponemos lo que no vuelve. Lo que sí hacemos es que ningún préstamo se lleve más del 10% de tu dinero, así que un impago te toca en parte y no entero. Apuntamos a que falle menos del 5%, pero es un objetivo sin historial detrás.",
            },
            {
              q: "¿Puedo sacar mi dinero antes?",
              a: "No. Tu capital queda comprometido hasta el vencimiento del préstamo, entre 2 y 6 meses. En el piloto no hay retiros parciales, no hay mercado secundario y no puedes revenderle tu posición a otra persona. Si puedes necesitar ese dinero antes, este no es el sitio.",
            },
            {
              q: "¿Y los impuestos?",
              a: "Lo que ganas es un ingreso y tributa según las reglas del país donde vives. Te damos un reporte anual con la información para declararlo. Consulta con tu contador, nosotros no damos asesoría fiscal.",
            },
            {
              q: "¿Cuánto voy a ganar y está garantizado?",
              a: "De los intereses que paga la empresa, el 60% es tuyo y el 40% es la comisión de Finnoba. Cuánto sale de ahí depende del nivel de los negocios en los que entres, y te lo confirmamos por escrito antes de que comprometas nada. Garantizado no está: prestar dinero nunca lo está, y nosotros no reponemos lo que no vuelve.",
            },
          ],
        },
        {
          title: "Sobre cómo operamos",
          items: [
            {
              q: "¿Cómo eligen a los negocios?",
              a: "Primero aplicamos la regla de oro: solo prestamos dólares a negocios que ya cobran en dólares. De ahí revisamos que el RUC esté activo y habido en SUNAT, sus ventas de los últimos meses, una factura o contrato con un cliente del exterior, para qué necesita el dinero y si tiene otras deudas. Un banco miraría garantías; nosotros miramos si el negocio vende y cobra.",
            },
            {
              q: "¿Por qué solo exportadores?",
              a: "Porque prestarle dólares a un negocio que cobra en soles es meterle un problema que no tenía. Si el dólar sube, la cuota se le vuelve impagable aunque el negocio esté sano. Financiando a quien ya cobra en dólares —café, cacao, arándano, palta, pesca, textil, software— la deuda y los ingresos van en la misma moneda.",
            },
            {
              q: "¿Cuánto le cuesta el préstamo a la empresa?",
              a: "El Nivel 1 son $500 a 2 meses, al 5% mensual sobre saldo insoluto: cuota 1 de $275.00, cuota 2 de $262.50, total devuelto $537.50. Eso es una TCEA de 79,59%, por debajo del tope de 99,84% que fija el Banco Central para moneda extranjera. Está publicado entero en Cómo funciona, sin necesidad de agendar una llamada.",
            },
            {
              q: "¿Por qué empiezan con $500 y no con más?",
              a: "Porque nadie ha demostrado nada todavía. Un primer préstamo chico y corto nos deja ver cómo paga el negocio arriesgando poco. Si cumple, sube de nivel: $1.200, luego $3.000, y así hasta $15.000. La tasa le baja en cada escalón. No la elige, se la gana.",
            },
            {
              q: "¿Dónde está el dinero mientras tanto?",
              a: "En cuentas separadas de las nuestras, con un reporte préstamo por préstamo para cada persona. La estructura definitiva la estamos cerrando con los abogados y se detallará en el contrato del primer ciclo.",
            },
            {
              q: "¿En qué países operan?",
              a: "El piloto es en Perú y ahí va el primer ciclo. LATAM es el plan a largo plazo, pero solo vamos a otro país cuando sepamos evaluar y cobrar bien allí.",
            },
            {
              q: "¿Esto es cripto?",
              a: "No. Lo que ganas viene de negocios devolviendo préstamos en dólares, no de especular con nada. Para mover el dinero entre países usamos una mezcla de transferencias bancarias y rieles de activos digitales, porque es más rápido y barato que la banca corresponsal, pero eso es fontanería nuestra: tú no compras cripto, no la tocas y no tienes exposición a su precio.",
            },
            {
              q: "¿Cómo está hecha la plataforma?",
              a: "La construimos nosotros. Hoy buena parte de la operación es manual y asistida por el equipo; vamos automatizando conforme el piloto valida cada paso. Preferimos decirlo así antes que prometer una automatización que todavía no existe.",
            },
          ],
        },
        {
          title: "Sobre las reglas",
          items: [
            {
              q: "¿Están regulados?",
              a: "Estamos trabajando con abogados para definir bajo qué figura opera Finnoba en Perú y qué controles nos corresponden, antes de abrir el primer ciclo. No decimos tener licencias ni registros que todavía no existen. Cuando esté confirmado, lo publicamos aquí.",
            },
            {
              q: "¿Me van a pedir papeles?",
              a: "Sí. Antes de recibir tu dinero verificamos tu identidad, de dónde viene el dinero y te revisamos en las listas internacionales de sanciones. Si vives fuera de Perú también te pediremos tu residencia fiscal. Es obligatorio, no lo saltamos con nadie y te protege a ti tanto como a nosotros.",
            },
            {
              q: "¿Esto es una oferta pública de valores?",
              a: "No. Finnoba es una plataforma privada. Para entrar hay que pasar por una revisión de perfil y firmar un contrato individual. Esto no es una oferta pública según la regulación local.",
            },
            {
              q: "¿Tengo que ser inversionista profesional?",
              a: "No hace falta un título, pero sí que entiendas lo que estás haciendo: que puedes perder dinero y que no vas a poder retirarlo de un día para otro. Eso lo conversamos en la llamada antes de que entres.",
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
          "El estado real de Finnoba: todavía no hemos prestado dinero. Las cifras se publican aquí desde el primer ciclo.",
      },
      h1: "Las cuentas claras.",
      sub: "Finnoba todavía no ha prestado dinero. En esta página no vas a encontrar cifras inventadas: cada número aparece cuando existe de verdad, y se actualiza cada mes desde el primer ciclo.",
      portfolioTitle: "Cuánto hemos prestado",
      portfolio: [
        ["Dinero prestado en total", "$0 — todavía nada"],
        ["Préstamos activos", "0"],
        ["Préstamos ya devueltos", "0"],
        ["Préstamos que no se pagaron", "Sin datos"],
        ["Rendimiento real pagado", "Sin datos"],
        ["Dónde operamos", "Perú (piloto)"],
      ],
      distributionTitle: "Cómo se reparte",
      distribution: [
        ["Por país", "Desde el primer ciclo"],
        ["Por tipo de negocio", "Desde el primer ciclo"],
        ["Por tamaño de préstamo", "Desde el primer ciclo"],
        ["Por plazo", "Desde el primer ciclo"],
      ],
      reportsTitle: "Reporte mensual",
      reportsBody:
        "Todavía no hay nada que reportar. Publicaremos un reporte mensual en PDF desde que cierre el primer trimestre de operación.",
      auditTitle: "Auditoría",
      auditBody:
        "Todavía no hay operación que auditar. Elegiremos un auditor externo antes de abrir el primer ciclo y publicaremos aquí sus reportes.",
      cta: "Reservar mi lugar",
    },
    apply: {
      meta: {
        title: "Solicita financiamiento",
        description:
          "Cuéntanos de tu negocio exportador. Estamos armando el primer grupo de empresas del piloto de Finnoba en Perú.",
      },
      h1: "Cuéntanos de tu negocio.",
      sub: "Estamos armando el primer grupo de empresas del piloto. Toma tres minutos, todavía no te pedimos documentos y no afecta tu historial crediticio.",
      priceTitle: "Antes de llenar nada: lo que cuesta",
      priceLead:
        "No queremos que descubras el precio después de una llamada. Este es el Nivel 1 completo, $500 a 2 meses.",
      stageNote:
        "Finnoba está en fase de estructuración y todavía no ha desembolsado ningún préstamo. Este formulario no es una solicitud de crédito ni una preaprobación: sirve para saber si lo que estamos armando resuelve un problema real, y para invitarte al primer grupo cuando abramos.",
      formTitle: "El formulario",
      legends: {
        business: "Tu empresa",
        contact: "Cómo te contactamos",
        operation: "Cómo opera",
        need: "Qué necesitas",
      },
      f: {
        razonSocial: "Razón social",
        ruc: "RUC",
        rucHint: "11 dígitos, empieza en 10 o en 20",
        contacto: "Nombre del contacto",
        cargo: "Cargo",
        email: "Email",
        whatsapp: "WhatsApp",
        whatsappHint: "Con código de país",
        cobraUsd: "¿Tu cliente final te paga en dólares?",
        sector: "Sector",
        mercados: "Mercados de destino",
        mercadosHint: "Puedes marcar varios",
        facturacion: "Facturación mensual en USD",
        antiguedad: "Meses de operación formal",
        monto: "¿Cuánto necesitas?",
        destino: "¿Para qué lo necesitas?",
        urgencia: "¿Para cuándo lo necesitas?",
        ocSinFactura:
          "¿Tienes una orden de compra o contrato firmado, pero todavía no has emitido la factura?",
        alternativa: "¿Cuál es tu alternativa hoy?",
        choose: "Elige una opción",
      },
      options: {
        cobraUsd: { si: "Sí", no: "No", parcial: "Parcialmente" },
        sector: {
          agro: "Agroexportación",
          pesca: "Pesca",
          textil: "Textil",
          software: "Software o BPO",
          turismo: "Turismo receptivo",
          otro: "Otro",
        },
        mercados: {
          eeuu: "EE.UU.",
          europa: "Europa",
          asia: "Asia",
          latam: "LatAm",
          otro: "Otro",
        },
        facturacion: {
          "<3k": "Menos de $3K",
          "3-10k": "$3K - $10K",
          "10-30k": "$10K - $30K",
          "30-100k": "$30K - $100K",
          ">100k": "Más de $100K",
        },
        antiguedad: {
          "<12": "Menos de 12",
          "12-24": "12 a 24",
          "24-48": "24 a 48",
          ">48": "Más de 48",
        },
        monto: {
          "500-1.5k": "$500 - $1.5K",
          "1.5-3k": "$1.5K - $3K",
          "3-7k": "$3K - $7K",
          "7-15k": "$7K - $15K",
          ">15k": "Más de $15K",
        },
        destino: {
          insumos: "Compra de insumos",
          proveedores: "Pago a proveedores",
          flete: "Flete y logística",
          cosecha: "Campaña de cosecha",
          planilla: "Planilla",
          otro: "Otro",
        },
        urgencia: {
          semana: "Esta semana",
          mes: "Este mes",
          "3meses": "Próximos 3 meses",
          explorando: "Solo explorando",
        },
        ocSinFactura: { si: "Sí", no: "No", nose: "No estoy seguro" },
        alternativa: {
          banco: "Banco",
          caja: "Caja municipal",
          factoring: "Factoring",
          informal: "Prestamista informal",
          familiares: "Familiares",
          ninguna: "Ninguna",
        },
      },
      submit: "Enviar",
      optional: "opcional",
      consent:
        "Autorizo a Finnoba a tratar estos datos con la finalidad de evaluar la demanda de su piloto de financiamiento y contactarme al respecto, conforme a la Ley N.º 29733. Puedo revocar esta autorización escribiendo a info@finnoba.xyz. He leído la",
      consentLink: "política de privacidad",
      errorTitle: "No pudimos enviar el formulario",
      errors: {
        ruc: "Ese RUC no es válido. Son 11 dígitos y empieza en 10 o en 20; revisa que no falte ninguno.",
        invalid: "Faltan campos por responder o alguno quedó incompleto. Revisa y vuelve a enviar.",
        rate: "Recibimos varios envíos desde tu conexión hace poco. Espera un rato y vuelve a intentarlo.",
        server: "Algo falló de nuestro lado. Escríbenos a info@finnoba.xyz y lo resolvemos.",
      },
      okTitle: "Recibido.",
      okBody:
        "Gracias. Vamos a revisar tu caso y te escribimos a los datos que dejaste. Todavía no estamos desembolsando: cuando abramos el primer grupo, te contactamos.",
      okUrgentTitle: "Recibido, pero seamos claros con los tiempos.",
      okUrgentBody:
        "No vamos a poder ayudarte esta semana, pero si tu necesidad se repite o puedes esperar unas semanas, quiero tenerte en el primer batch.",
      back: "Volver al inicio",
    },
    legal: {
      termsTitle: "Términos y condiciones",
      privacyTitle: "Política de privacidad",
      privacyStatus: "Versión piloto 2026 · Última actualización: 30 de julio de 2026",
      privacyMeta:
        "Cómo Finnoba trata tus datos personales: qué recogemos, para qué, con quién lo compartimos, cuánto lo guardamos y cómo ejerces tus derechos en Perú.",
      privacy: [
        {
          h: "1. Quién trata tus datos",
          p: [
            "El responsable del tratamiento es [POR DEFINIR] (“Finnoba”, “nosotros”), sociedad constituida en Perú, con domicilio en Lima. Puedes escribirnos a info@finnoba.xyz para cualquier tema relacionado con tus datos.",
            "Esta política aplica al sitio finnoba.xyz, a la aplicación app.finnoba.xyz y a los formularios y canales de contacto que ofrecemos.",
          ],
        },
        {
          h: "2. Qué datos recogemos",
          p: ["Según cómo uses la plataforma, tratamos:"],
          ul: [
            "Identificación y contacto: nombre, documento de identidad, fecha de nacimiento, nacionalidad, país de residencia, correo, teléfono y dirección.",
            "Datos de verificación: copia de tu documento, selfie o prueba de vida cuando corresponda, residencia fiscal, origen de los fondos y resultado de la revisión en listas internacionales de sanciones.",
            "Datos financieros: cuentas bancarias para enviar o recibir dinero, montos prestados o solicitados, pagos y su historial.",
            "Si pides financiamiento para tu negocio: RUC, ventas de los últimos meses, facturas o contratos de exportación, deudas vigentes y destino de los fondos.",
            "Si completas el formulario de solicitud: razón social, RUC, nombre y cargo del contacto, correo, WhatsApp, sector, mercados de destino, rango de facturación mensual, meses de operación formal, monto y destino del financiamiento que necesitas, urgencia, si tienes una orden de compra pendiente de facturar y qué alternativa de financiamiento usas hoy.",
            "Datos de uso: correos y mensajes que intercambiamos contigo, y registros técnicos del servidor como tu dirección IP, navegador y fecha de acceso.",
          ],
        },
        {
          h: "3. Para qué los usamos y con qué base legal",
          ul: [
            "Para atender tu registro, evaluar tu perfil y ejecutar los contratos que firmemos contigo: base legal, la ejecución del contrato y las gestiones previas que pides.",
            "Para verificar tu identidad, el origen de los fondos y cumplir la normativa de prevención de lavado de activos y financiamiento del terrorismo, además de las obligaciones tributarias y contables: base legal, el cumplimiento de obligaciones legales.",
            "Para evaluar el riesgo crediticio de un negocio y hacer seguimiento a los pagos: base legal, la ejecución del contrato y nuestro interés legítimo en cobrar lo prestado.",
            "Para medir la demanda de nuestro piloto y contactarte sobre él, cuando completas el formulario de solicitud: base legal, tu consentimiento expreso. El formulario no evalúa ni preaprueba nada; solo recoge información.",
            "Para enviarte novedades del piloto y comunicaciones comerciales: base legal, tu consentimiento. Puedes retirarlo cuando quieras.",
            "Para operar, mantener y proteger la plataforma frente a fraude y abusos: base legal, nuestro interés legítimo.",
          ],
          after: [
            "No tomamos decisiones automatizadas que produzcan efectos jurídicos sobre ti sin revisión humana: hoy la evaluación de cada solicitud la hace el equipo.",
          ],
        },
        {
          h: "4. Qué pasa si no nos das tus datos",
          p: [
            "Los datos de identificación, verificación y financieros son necesarios para operar: sin ellos no podemos abrirte una cuenta, recibir tu dinero ni desembolsar un préstamo, porque la ley nos obliga a verificarlos. Los datos que pedimos para enviarte novedades son opcionales y negarlos no afecta el resto.",
          ],
        },
        {
          h: "5. Con quién los compartimos",
          p: ["No vendemos tus datos. Los compartimos solo con:"],
          ul: [
            "Proveedores que trabajan por encargo nuestro y bajo contrato: hosting e infraestructura, verificación de identidad, correo electrónico, procesamiento de pagos y contabilidad. Solo acceden a lo necesario para prestar su servicio.",
            "Autoridades competentes, cuando la ley nos obliga a informar o responder un requerimiento.",
            "Centrales de riesgo y empresas de cobranza, en el caso de negocios prestatarios con pagos atrasados, según lo pactado en el contrato individual.",
            "Auditores externos y asesores legales, sujetos a deber de confidencialidad.",
          ],
        },
        {
          h: "6. Datos que salen del Perú",
          p: [
            "Parte de nuestros proveedores tiene servidores fuera del Perú, principalmente en Estados Unidos y la Unión Europea. Eso implica un flujo transfronterizo de tus datos. Cuando ocurre, exigimos a esos proveedores garantías contractuales de protección equivalentes a las que manda la ley peruana. Al aceptar esta política consientes ese flujo.",
          ],
        },
        {
          h: "7. Cuánto tiempo los guardamos",
          p: [
            "Mantenemos tus datos mientras dure la relación y, después, durante los plazos que exige la normativa de prevención de lavado de activos, la tributaria y la comercial, que en general no bajan de cinco años desde el cierre de la operación.",
            "Si solo te registraste para recibir novedades y nunca operaste, borramos tus datos a los dos años del último contacto o antes si lo pides.",
          ],
        },
        {
          h: "8. Cómo los protegemos",
          p: [
            "Aplicamos medidas técnicas y organizativas razonables: cifrado en tránsito, acceso restringido por rol, registro de accesos y proveedores que cumplen estándares de seguridad reconocidos.",
            "Ningún sistema es infalible. Si ocurre un incidente que afecte tus datos, te avisamos y notificamos a la autoridad cuando corresponda.",
          ],
        },
        {
          h: "9. Tus derechos",
          p: [
            "Puedes pedirnos acceso a tus datos, su rectificación, su cancelación o supresión, oponerte a determinados tratamientos, pedir que se limite el uso de tus datos y retirar tu consentimiento cuando el tratamiento se base en él.",
            "Escríbenos a info@finnoba.xyz desde el correo que registraste, indicando qué derecho quieres ejercer. Podemos pedirte que acredites tu identidad. Respondemos dentro de los plazos que fija la ley: veinte días hábiles para el acceso y diez días hábiles para los demás derechos.",
            "Hay solicitudes que no podemos atender del todo mientras exista una obligación legal de conservar la información, como la de prevención de lavado de activos. Cuando pase, te lo explicamos por escrito.",
          ],
        },
        {
          h: "10. Cookies y registros técnicos",
          p: [
            "Este sitio no usa cookies de analítica, de perfilado ni de publicidad. Nuestro proveedor de hosting guarda registros técnicos —dirección IP, navegador, fecha— por motivos de seguridad y funcionamiento.",
            "En la página del formulario de solicitud llevamos una cuenta diaria de visitas: un solo número por día, sin cookie y sin ningún dato que te identifique. Nos sirve para saber qué proporción de quienes abren el formulario llega a enviarlo. De tu dirección IP guardamos únicamente un hash con sal, que solo permite limitar envíos repetidos desde una misma conexión y no permite recuperar la dirección.",
            "La aplicación usa cookies estrictamente necesarias para mantener tu sesión iniciada. Si en el futuro añadimos herramientas de analítica, lo anunciamos en esta página y pedimos tu consentimiento antes de activarlas.",
          ],
        },
        {
          h: "11. Menores de edad",
          p: [
            "La plataforma no está dirigida a menores de 18 años y no recogemos sus datos a sabiendas. Si detectamos una cuenta de un menor, la cerramos y eliminamos la información.",
          ],
        },
        {
          h: "12. Cambios en esta política",
          p: [
            "Podemos actualizar esta política. La versión vigente es siempre la publicada en esta página, con su fecha de actualización. Si el cambio es relevante, te avisamos por correo antes de que entre en vigor.",
          ],
        },
        {
          h: "13. Reclamos",
          p: [
            "Si crees que no tratamos bien tus datos, escríbenos primero a info@finnoba.xyz: queremos resolverlo. También puedes presentar un reclamo ante la Autoridad Nacional de Protección de Datos Personales del Ministerio de Justicia y Derechos Humanos del Perú.",
          ],
        },
      ],
      termsStatus: "Versión piloto 2026 · Última actualización: 30 de julio de 2026",
      termsMeta:
        "Términos y condiciones de uso de Finnoba: qué es la plataforma, quién puede usarla, qué implica prestar o pedir prestado en dólares, y las reglas que aplican en Perú.",
      terms: [
        {
          h: "1. Quién opera Finnoba",
          p: [
            "Finnoba es una plataforma operada por [POR DEFINIR] (“Finnoba”, “nosotros”), sociedad constituida en Perú. Estos términos regulan el uso del sitio finnoba.xyz, de la aplicación app.finnoba.xyz y de los formularios y canales de contacto que ofrecemos (en conjunto, “la plataforma”).",
            "La razón social, el RUC y el domicilio fiscal definitivos se publican en esta misma página antes de abrir el primer ciclo.",
          ],
        },
        {
          h: "2. Al usar la plataforma aceptas estos términos",
          p: [
            "Si usas la plataforma, aceptas estos términos. Si no estás de acuerdo, no la uses.",
            "Estos términos regulan el uso de la plataforma. Cada préstamo se rige además por el contrato individual que firmas para ese préstamo. Si algo del contrato individual contradice estos términos, manda el contrato.",
          ],
        },
        {
          h: "3. Qué es Finnoba y qué no es",
          ul: [
            "Finnoba conecta a personas que quieren prestar dólares con negocios peruanos que exportan y ya cobran en dólares.",
            "Finnoba no es un banco ni una entidad financiera: no recibimos depósitos, no pagamos intereses por saldos y no garantizamos ningún rendimiento.",
            "Esto no es una oferta pública de valores. El acceso es privado, sujeto a revisión de perfil y a la firma de un contrato individual.",
            "Nada de lo que publicamos es asesoría financiera, legal ni tributaria. La decisión de prestar o de endeudarte es tuya.",
            "Estamos en piloto: a la fecha de esta versión, Finnoba no ha desembolsado ningún préstamo. Los negocios, montos, tasas y plazos que aparecen como ejemplo en el sitio son ficticios y no son ofertas vigentes.",
          ],
          after: [
            "Estamos definiendo con asesoría legal bajo qué figura opera Finnoba en Perú y qué autorizaciones le corresponden. No afirmamos contar con licencias, registros ni supervisión que hoy no tenemos. Cuando existan, se publican aquí.",
          ],
        },
        {
          h: "4. Quién puede usar Finnoba",
          p: ["Para operar con nosotros necesitas:"],
          ul: [
            "Tener 18 años o más y capacidad legal para obligarte.",
            "Actuar por cuenta propia y con fondos de origen lícito.",
            "Completar la verificación de identidad y, si vives fuera de Perú, acreditar tu residencia fiscal.",
            "No figurar en listas internacionales de sanciones ni en listas vinculadas a lavado de activos o financiamiento del terrorismo.",
            "Si eres un negocio que solicita financiamiento: RUC activo y habido en SUNAT.",
          ],
        },
        {
          h: "5. Si vas a prestar",
          ul: [
            "El contrato de préstamo se celebra entre ti y la empresa financiada. Finnoba actúa como mandatario —origina, verifica, administra y cobra por tu cuenta— y no es parte del crédito ni acreedor de la deuda.",
            "El monto mínimo es de US$ 100 por préstamo. Tu participación se documenta en un contrato individual que detalla monto, plazo, tasa y forma de pago antes de que pongas dinero.",
            "La asignación a préstamos es automática y por orden de llegada: no seleccionas préstamo. Ningún préstamo recibe más del 10% de tu depósito, y todos los participantes de un mismo préstamo cobran y soportan pérdidas a prorrata, en la misma proporción.",
            "El rendimiento no está garantizado. Depende de que los negocios financiados paguen. Un préstamo puede pagarse tarde, pagarse en parte o no pagarse.",
            "Puedes perder todo el capital. No pongas en Finnoba dinero que no puedas permitirte perder por completo.",
            "Tu dinero no es líquido: queda comprometido hasta el vencimiento del préstamo. No hay mercado secundario, ni retiro anticipado, ni cesión de tu posición a terceros.",
            "El efectivo que no llegue a colocarse no genera rendimiento. Solo rinde el capital efectivamente prestado.",
            "Finnoba no aporta capital propio para cubrir incumplimientos ni garantiza el capital ni el rendimiento. El riesgo de crédito lo asume íntegramente el lender.",
            "Repartir tu dinero entre varios préstamos reduce el impacto de un impago, pero no elimina el riesgo.",
          ],
        },
        {
          h: "6. Si vas a pedir prestado",
          ul: [
            "Prestamos solo en dólares y solo a negocios que ya cobran en dólares. Un negocio que factura únicamente en soles no califica.",
            "El primer préstamo de cualquier negocio es de US$ 500 a 2 meses. El monto, el plazo y la tasa mejoran con el historial de pago, según la escalera de niveles publicada en el sitio.",
            "El interés se calcula sobre el saldo insoluto, nunca sobre el monto original. El cronograma completo del Nivel 1 está publicado en el sitio; el de los niveles siguientes se te informa por escrito antes de que aceptes. En todos los casos por debajo del tope que fija el Banco Central de Reserva del Perú para operaciones en moneda extranjera.",
            "La información que nos entregas —ventas, facturas, contratos, deudas vigentes y destino de los fondos— debe ser veraz, completa y actual. Entregar información falsa es causal de rechazo, de resolución del contrato y de exigir el pago total de inmediato.",
            "Debes usar el dinero para el destino declarado.",
            "El atraso genera los intereses y gastos que indique el contrato individual, y puede derivar en cobranza, reporte a centrales de riesgo y acciones judiciales.",
          ],
        },
        {
          h: "7. Verificación, prevención de lavado de activos y sanciones",
          p: [
            "Antes de recibir o entregar dinero verificamos tu identidad, el origen de los fondos y tu presencia en listas internacionales de sanciones. Este control es obligatorio y no se omite con nadie.",
            "Podemos pedirte documentación adicional en cualquier momento, y suspender o rechazar una operación mientras la revisamos o si no logramos completar la verificación. Reportamos a las autoridades competentes lo que la ley nos obligue a reportar.",
          ],
        },
        {
          h: "8. Comisiones e impuestos",
          p: [
            "Registrarte, navegar el sitio y recibir información no tiene costo. Finnoba cobra una comisión por originar, verificar y administrar los préstamos, equivalente al 40% del interés devengado en cada cuota; el 60% restante corresponde al lender. El detalle se recoge por escrito en el contrato individual antes de que firmes, y no cobramos comisiones que no estén en ese documento.",
            "Los impuestos que correspondan a tus rendimientos o a tu negocio son responsabilidad tuya.",
          ],
        },
        {
          h: "9. Tu cuenta",
          p: [
            "Eres responsable de mantener la confidencialidad de tus credenciales y de la actividad que ocurra con ellas. Avísanos de inmediato a info@finnoba.xyz si detectas un uso no autorizado. Podemos suspender el acceso por motivos de seguridad, por incumplimiento de estos términos o por mandato legal.",
          ],
        },
        {
          h: "10. Uso permitido",
          p: [
            "No puedes usar la plataforma para actividades ilícitas, ni intentar vulnerar su seguridad, extraer datos de forma automatizada, suplantar a otra persona o publicar información falsa. Cualquiera de estas conductas termina en la suspensión del acceso.",
          ],
        },
        {
          h: "11. Contenido y disponibilidad",
          p: [
            "Los contenidos del sitio son informativos y pueden cambiar sin aviso previo. Los ejemplos de negocios, montos, tasas y plazos son ilustrativos y no constituyen ofertas.",
            "Hacemos un esfuerzo razonable por mantener la plataforma disponible, pero no garantizamos una operación ininterrumpida ni libre de errores. Podemos suspenderla por mantenimiento o por causas fuera de nuestro control.",
          ],
        },
        {
          h: "12. Propiedad intelectual",
          p: [
            "La marca Finnoba, el sitio, la aplicación, sus textos, diseños y código son de titularidad de Finnoba o de sus licenciantes. Puedes usarlos para operar en la plataforma; no puedes copiarlos, distribuirlos ni explotarlos comercialmente sin nuestra autorización escrita.",
          ],
        },
        {
          h: "13. Datos personales",
          p: [
            "El tratamiento de tus datos personales se rige por nuestra Política de privacidad y por la Ley N.º 29733, Ley de Protección de Datos Personales, y su reglamento. Al usar la plataforma aceptas ese tratamiento.",
          ],
        },
        {
          h: "14. Comunicaciones y firma electrónica",
          p: [
            "Aceptas que te contactemos por correo electrónico y por los canales que registres, y que los contratos y avisos se firmen y notifiquen por medios electrónicos. Esas comunicaciones y firmas tienen plena validez entre las partes.",
            "Mantén tus datos de contacto actualizados: las notificaciones enviadas al último correo que registraste se consideran recibidas.",
          ],
        },
        {
          h: "15. Responsabilidad",
          p: [
            "Finnoba responde por las obligaciones que asume expresamente en estos términos y en cada contrato individual. No respondemos por el incumplimiento de pago de un negocio financiado, ni por las decisiones de inversión o de endeudamiento que tomes, ni por daños derivados de fallas de servicios de terceros, fuerza mayor o caso fortuito.",
            "Nada de esta cláusula limita la responsabilidad que la ley peruana no permite limitar, en particular la que nace de dolo o culpa inexcusable.",
          ],
        },
        {
          h: "16. Cambios en estos términos",
          p: [
            "Podemos actualizar estos términos. La versión vigente es siempre la publicada en esta página, con su fecha de actualización. Si el cambio es relevante, te avisamos por correo con antelación razonable. Los contratos individuales ya firmados se rigen por la versión vigente al momento de su firma.",
          ],
        },
        {
          h: "17. Ley aplicable y controversias",
          p: [
            "Estos términos se rigen por las leyes de la República del Perú. Cualquier controversia se somete a los jueces y tribunales del distrito judicial de Lima, sin perjuicio de las vías que la ley franquee al consumidor.",
            "Antes de llegar ahí, escríbenos: casi todo se resuelve conversando.",
          ],
        },
        {
          h: "18. Contacto",
          p: ["info@finnoba.xyz — Finnoba, Lima, Perú."],
        },
      ],
    },
    footer: {
      tagline:
        "Conectamos dólares parados con exportadores peruanos que ya cobran en dólares.",
      productTitle: "Producto",
      product: [
        { l: "Cómo funciona", h: "/how-it-works" },
        { l: "Para inversores", h: "/investors" },
        { l: "Por qué Finnoba", h: "/thesis" },
        { l: "Riesgo", h: "/risk" },
      ],
      resourcesTitle: "Recursos",
      resources: [
        { l: "Preguntas", h: "/faq" },
        { l: "Transparencia", h: "/transparency" },
        { l: "Equipo", h: "/team" },
      ],
      // Documentación, LinkedIn, X y Newsletter apuntaban a homepages
      // genéricas. Vuelven cuando existan los destinos, no antes.
      communityTitle: "Comunidad",
      community: [
        { l: "Solicitar financiamiento", h: "/apply" },
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
      investors: "Lenders",
      thesis: "Why Finnoba",
      faq: "Questions",
      app: "Take me to the app",
    },
    home: {
      meta: {
        title: "Finnoba — Dollar loans to Peruvian exporters",
        description:
          "We lend dollars to Peruvian exporters who already get paid in dollars. You join from $100 a loan and collect capital and return at maturity.",
      },
      hero: {
        tag: "2026 pilot · Peru · Limited seats",
        h1: "Your dollars, lent to people who already earn dollars.",
        sub: "Finnoba connects idle dollars with Peruvian exporters that banks won't serve. You join from $100 a loan and get your capital and return back when the loan matures.",
        primary: "I want to lend",
        secondary: "I need financing",
        badges: ["Everything in dollars", "Lend from $100", "Peru, first market"],
      },
      preview: {
        url: "app.finnoba.xyz",
        addFunds: "Add funds",
        title: "Your portfolio",
        sub: "Your money spread across vetted exporters that get paid in dollars.",
        headers: { business: "BUSINESS", amount: "AMOUNT", term: "TERM", grade: "LEVEL" },
      },
      stats: [
        { label: "Stage", value: "2026 pilot", sub: "we haven't lent yet" },
        { label: "Join from", value: "$100", sub: "per loan", subColor: "#157A47" },
        { label: "First market", value: "Peru", sub: "exporters paid in dollars" },
      ],
      markets: {
        eyebrow: "What it will look like",
        title: "Lend to real exporters. Get paid in dollars.",
        sub: "Every business is checked before it's listed: that it exists, that it exports and that it gets paid in dollars.",
        browse: "See the terms",
        amountLabel: "Loan amount",
        exampleLabel: "Illustrative example",
        disclaimer:
          "Illustrative examples: fictional businesses, not live offerings. Finnoba has not lent any money yet.",
        termSuffix: "mo term",
        levelLabel: "Level",
      },
      why: {
        eyebrow: "Why Finnoba",
        title: "A fairer way to lend and to borrow in dollars.",
        items: [
          {
            eyebrow: "No collateral",
            title: "We look at your sales, not your property",
            body: "A bank asks for real estate as collateral and years of audited accounts. We look at what actually matters: that you invoice, that you export and that you get paid.",
            tint: "mint",
          },
          {
            eyebrow: "You start small",
            title: "Your first loan is $500",
            body: "You start with a small amount over a short term. Pay it back well and you move up a level: more money, more time and a lower rate. You don't pick the rate — you earn it.",
            tint: "peach",
          },
          {
            eyebrow: "Where the return comes from",
            title: "It's paid by a business that sold, not a market that rose",
            body: "What you earn comes from exporters repaying loans in dollars. No speculation involved. Of the interest the business pays, 60% is your return and 40% is Finnoba's commission. We confirm it in writing before you commit anything, and it isn't a guarantee: a loan may not come back, and we don't make it good.",
            tint: "sky",
          },
          {
            eyebrow: "Our golden rule",
            title: "We only lend dollars to businesses that already earn dollars",
            body: "We finance exporters paid in dollars: coffee, cacao, blueberry, avocado, fish, textiles and software. Debt and income sit in the same currency, so a rising dollar doesn't turn a manageable instalment into an impossible one. We start in Peru.",
            tint: "lilac",
          },
        ],
      },
      how: {
        eyebrow: "How it works",
        title: "Two sides, one simple path.",
        columns: [
          {
            tag: "If you have idle dollars",
            color: "#6D54E8",
            steps: [
              { t: "You put your money in", d: "You decide how much to lend and we sign the terms." },
              { t: "Your money spreads itself", d: "Your money is spread across several loans, so you never depend on just one. Each slot is $100 and no single loan takes more than 10% of what you put in." },
              { t: "You collect at maturity", d: "When the loan ends you get your capital back plus what it earned, in dollars." },
            ],
          },
          {
            tag: "If you need financing",
            color: "#1FB36B",
            steps: [
              { t: "Tell us about your business", d: "Your tax ID, your sales over recent months, and an invoice or contract showing a foreign client pays you in dollars." },
              { t: "We check and get back to you", d: "We verify the business exists, that it exports and that it can repay. No collateral, no branch visits." },
              { t: "You get the money and move up", d: "Funds go only to a bank account held under that same tax ID. You start at $500. Every loan repaid on time moves you up a level: more money, more time and a lower rate." },
            ],
          },
        ],
      },
      cta: {
        title: "Get started today.",
        sub: "Whether you're putting idle dollars to work or financing your next export shipment, it starts with a conversation.",
        primary: "Get started",
      },
    },
    how: {
      meta: {
        title: "How it works",
        description:
          "How Finnoba works: three steps if you lend, the level ladder if you borrow, and what we ask for to approve a loan.",
      },
      h1: "Three steps. One path.",
      sub: "We connect people with idle dollars to Peruvian exporters who already get paid in dollars.",
      stepsTitle: "If you're going to lend",
      steps: [
        {
          k: "01",
          t: "You reserve your seat",
          b: "You get in touch, we review your profile and sign the terms. Before we take your money we verify your identity and where the funds came from — it's mandatory and it protects both of us.",
        },
        {
          k: "02",
          t: "Your money is spread across several loans",
          b: "Assignment is automatic and in order of arrival: you don't pick loans. Each slot is $100, a $500 loan is put together by several people, and no single loan takes more than 10% of what you put in. Every slot in a loan is repaid — and takes losses — in the same proportion. Every business is checked first.",
        },
        {
          k: "03",
          t: "You collect when the loan ends",
          b: "At maturity you get your capital back along with what it earned. In the meantime we send you a report on how each loan is doing.",
        },
      ],
      levelsTitle: "If you're going to borrow: the ladder",
      levelsIntro:
        "Nobody starts big. Your first loan is $500 over 2 months. Repay it in full and you move up a level: we lend you more, for longer, at a lower rate. You don't choose the rate — you earn it by paying.",
      levelsFoot:
        "The rate drops at every level. Level 1 is published in full below, with exact figures and no call to book. The levels above it are confirmed in writing before you accept anything.",
      scheduleTitle: "What Level 1 costs",
      scheduleLead:
        "$500 over 2 months, 5% a month on the balance you still owe. These are the exact figures.",
      scheduleHead: ["Instalment", "Capital", "Interest", "Total due"],
      scheduleTotalLabel: "Total repaid",
      scheduleCta: "Apply for financing",
      scheduleFoot:
        "TCEA (annual effective rate) 79.59%. Interest is always charged on the outstanding balance — what you still owe — and never on the original amount: that's why the second instalment costs less than the first. The central bank's legal cap for foreign currency is 99.84% a year, in force May to October 2026.",
      requirementsTitle: "What we ask for",
      requirements: [
        "An active, in-good-standing tax ID (RUC) with SUNAT",
        "Your sales over the last 6 to 12 months",
        "An invoice or contract showing a foreign client pays you in dollars",
        "A dollar bank account held under that same tax ID: funds go nowhere else",
        "What you're going to use the money for",
        "Whether you have other loans outstanding",
      ],
      flowTitle: "The whole journey",
      flow: [
        { t: "You lend", b: "You put dollars into the first cycle." },
        { t: "The loan is assembled", b: "Several people together make up each loan." },
        { t: "We check", b: "We verify each business before releasing money." },
        { t: "Exporters", b: "Peruvian businesses paid in dollars." },
        { t: "We collect", b: "Monthly follow-up on every instalment." },
        { t: "We pay you", b: "Capital and return when the loan matures." },
      ],
      tableTitle: "Terms and timing",
      table: [
        ["Loan terms", "2 to 6 months"],
        ["When you collect", "At each loan's maturity"],
        ["Minimum per loan", "$100"],
        ["Report", "Monthly, on the 5th"],
      ],
      cta: "See the terms for lenders",
    },
    investors: {
      meta: {
        title: "For investors",
        description:
          "Finnoba's first cycle: amounts, terms, commissions and how to get in.",
      },
      h1: "For people with idle dollars.",
      sub: "These are the terms of the first cycle and how you get in.",
      disclosureTitle: "Three things up front",
      disclosures: [
        {
          t: "40% of the interest on every instalment is ours",
          b: "Of the interest the business pays, 60% is your return and 40% is Finnoba's commission for originating, verifying and administering the loan. You see it broken out on every instalment, not just in the total.",
        },
        {
          t: "You are the creditor, not Finnoba",
          b: "The loan contract is between the lender and the business. Finnoba acts as agent: it originates, verifies, administers and collects, but it is not party to the loan and not the creditor of the debt.",
        },
        {
          t: "We put up no capital of our own to cover defaults",
          b: "Finnoba does not commit its own capital to cover defaults, and guarantees neither your capital nor your return. Credit risk sits with the lender — and that is why the return is what it is.",
        },
      ],
      termsTitle: "First cycle terms",
      terms: [
        ["Minimum per loan", "$100"],
        ["Suggested maximum", "$10,000 per cycle"],
        ["Who we lend to", "Peruvian exporters paid in dollars"],
        ["How long it lasts", "2 to 6 months, depending on the loans you're in"],
        ["How it's assigned", "Automatic, in order of arrival. You don't pick loans"],
        ["Most that goes into one loan", "10% of your deposit, at most"],
        ["When you collect", "Capital and return at each loan's maturity"],
        ["Leaving early", "No. Capital is committed until maturity"],
        ["Finnoba's commission", "40% of the interest on every instalment. The other 60% is yours"],
        ["Who the creditor is", "You. Finnoba administers, but is not party to the loan"],
        ["Uninvested cash", "Earns nothing. Only capital actually lent earns a return"],
      ],
      feeTitle: "How an instalment splits",
      feeLead:
        "An example Level 1 loan: $500 over 2 months. This is how the interest on each instalment splits between your return and our commission.",
      feeHead: ["Instalment", "Interest the business pays", "Finnoba commission (40%)", "Your share (60%)"],
      feeTotalLabel: "Total",
      feeFoot:
        "Capital ($500) comes back to you in full on top of that figure. Interest is charged on the balance the business still owes, not on the original amount. The example assumes it repays in full: if it doesn't, there is no interest to split and the capital doesn't come back either.",
      ladderTitle: "What your money funds",
      ladderBody:
        "Small, short loans to Peruvian exporters. Nobody walks in asking for the maximum: everyone starts at $500 and only moves up once they've repaid in full. That keeps what any one business can cost you contained, and means that by the time someone reaches $15,000 they have four repaid loans behind them.",
      profileTitle: "Who this is for and who it isn't",
      profileBody:
        "The pilot is private and meant for people who understand that lending money carries risk, who can leave it working for the full cycle and who won't need it before then.",
      profileFor: {
        title: "Who this is for",
        items: [
          "You have idle dollars you won't need over the coming months",
          "You want a better return than a term deposit and accept more risk for it",
          "You understand a loan may not come back",
          "You'd rather your money financed real businesses than an abstract instrument",
        ],
      },
      profileNotFor: {
        title: "Who this is NOT for",
        items: [
          "You need to be able to withdraw everything before the term",
          "You're looking for a guaranteed return",
          "It's money you can't afford to lose",
        ],
      },
      onboardingTitle: "How you get in",
      onboarding: [
        "You get in touch and reserve your seat",
        "We talk for 20 minutes: we walk you through the detail and answer your questions",
        "We verify your identity and the source of your funds, and screen you against international sanctions lists. It's mandatory and we skip it for no one",
        "We sign the terms and send you the transfer details",
        "Your money is spread automatically across the loans in the first cycle, in order of arrival, and we confirm your first payment date",
      ],
      cta: "Reserve my spot",
    },
    thesis: {
      meta: {
        title: "Thesis",
        description:
          "Why the Peruvian exporter who already gets paid in dollars is the best payer nobody is financing.",
      },
      h1: "Why we're doing this.",
      sub: "The exporter who already gets paid in dollars is the best payer nobody is financing.",
      problemTitle: "The problem, in numbers",
      problemIntro:
        "In Peru the price of credit depends on the size of whoever asks for it, not on whether they can repay. These are the rates banks charge, according to the central bank itself. A small exporter who sells abroad and gets paid in dollars pays several times what a corporation pays for the same money.",
      stats: [
        { v: "5.34%", l: "What a large Peruvian corporation pays a year for a bank loan" },
        { v: "20.01%", l: "What a small business pays for that same loan" },
        { v: "69.59%", l: "What a micro business pays. Thirteen times the corporate rate" },
        { v: "+514", l: "Basis points the micro-business rate rose in 12 months. Every other segment's fell" },
      ],
      statsFootnote:
        "Annual lending rates in local currency at commercial banks, as of 27 February 2026. Source: Banco Central de Reserva del Perú, March 2026 briefing.",
      whyFailTitle: "Why nobody serves them",
      whyFail: [
        "A bank looks at collateral and past accounts, not at the order the exporter already has signed or the dollars they'll be paid for it. A business with firm orders but no property doesn't clear the filter. That's why the rate tracks size: 5.34% if you're a corporation, 69.59% if you're a micro business.",
        "The timing doesn't line up. Weeks pass between shipping and the buyer paying, but the money is needed before production starts. By the time credit arrives, the season is over.",
        "Local alternatives lend in soles. The exporter ends up owing in one currency and earning in another, and a liquidity problem picks up currency risk on top.",
      ],
      whyFinnobaTitle: "Why we can",
      whyFinnoba: [
        "We look at what a bank doesn't: the orders, the contracts and the history of invoices collected in dollars.",
        "We lend in the same currency the business gets paid in. Without that mismatch, what's left is the ordinary risk of a business not paying — which can be measured and spread.",
        "We start with small amounts ($500) and only go up once a business has shown it repays. That caps how much any single one can cost.",
        "Small team, our own technology. Lower fixed costs and more reasonable rates on both sides.",
      ],
      stateTitle: "Where we are today",
      stateBody:
        "Finnoba has not lent any money yet. We're closing the pilot in Peru, building the list of exporters that meet the requirements and preparing the first cycle. The figures on this site will be filled in with real data from the first loan onward, not before.",
      cta: "Reserve my spot in the first cycle",
    },
    risk: {
      meta: {
        title: "Risk control",
        description:
          "How we look after the money lent: same currency, small amounts at first, forced spreading across several loans, and fraud controls before any money leaves.",
      },
      h1: "How we look after your money.",
      sub: "Lending always carries risk. What we can do is reduce it, measure it and tell you about it without dressing it up.",
      noLossTitle: "First things first: we don't cover the losses",
      noLossBody:
        "Finnoba does not commit its own capital to cover defaults, and guarantees neither your capital nor your return. Credit risk sits with the lender — and that is why the return is what it is. Everything below lowers the odds of something going wrong; none of those defences hands your money back if it goes wrong anyway.",
      frameworkTitle: "The general idea",
      frameworkBody:
        "We're not going to tell you this is risk-free, because it isn't. What we do is attack it from five sides: lend in the same currency the business gets paid in, check who we lend to, start with small amounts, force your money to spread across several loans, and stop fraud before the money goes out.",
      layersTitle: "The five defences",
      layers: [
        {
          k: "01",
          t: "Same currency (our golden rule)",
          b: "We only lend dollars to businesses that already get paid in dollars: coffee, cacao, blueberry, avocado, fishing, export textiles and software with clients abroad. That way debt and income are in the same currency: if the dollar rises, the instalment is still payable. A business invoicing in soles doesn't qualify, however well it's doing.",
        },
        {
          k: "02",
          t: "We check before lending",
          b: "We verify the business exists and is in good standing with the tax authority, that it has recent sales, that a foreign client pays it in dollars, and what it needs the money for. We expect to turn down more applications than we approve.",
        },
        {
          k: "03",
          t: "We start small",
          b: "Any business's first loan is $500 over a few months. The amount only grows once they've shown they repay. Nobody walks in asking for $15,000.",
        },
        {
          k: "04",
          t: "We spread your money whether you like it or not",
          b: "A $500 loan is assembled by several people, so each slot costs $100. It isn't optional: the engine won't let a single loan take more than 10% of what you deposited, even if you want it to. Assignment is automatic and in order of arrival, and every slot in a loan is repaid — and takes losses — in the same proportion.",
        },
        {
          k: "05",
          t: "We stop fraud before any money goes out",
          b: "We validate the tax ID with SUNAT, require 24 months of formal trading, match the legal representative against their national ID, verify documents with a liveness check and — the strongest control of all — only disburse to a bank account held under that same tax ID. Before money moves there's also a credit bureau check, electronic invoicing verification, device fingerprinting, a 24-hour cooling-off window and a verification call.",
        },
      ],
      collectionsTitle: "What happens when someone doesn't pay",
      collectionsIntro:
        "It's the first thing everybody asks, so it's written down rather than saved for a call:",
      collections: [
        "There are grace days agreed in the contract. Within that window there's no penalty, only reminders.",
        "After the grace days collections begin: direct contact, a payment plan where the business is still viable, and escalation where it isn't.",
        "Arrears accrue late interest on top of the ordinary interest, capped at 15% of the maximum rate set by the central bank. We don't invent charges above that.",
        "The ladder freezes while anything is in arrears. Nobody moves up a level owing an instalment, however good their record was before.",
        "Late payment is reported to credit bureaus and can lead to legal action, as agreed in the individual contract.",
        "Whatever is recovered is shared pari passu among everyone who put money into that loan, in the same proportion they would have been paid.",
      ],
      metricsTitle: "What we're aiming for",
      metricsHead: ["Indicator", "Target", "Actual"],
      metrics: [
        ["Loans that don't get repaid", "Under 5%", "No data"],
        ["Applications we approve", "15-25%", "No data"],
        ["Money recovered after a late payment", "25% or more", "No data"],
        ["Loan terms", "2 to 6 months", "No data"],
      ],
      metricsNote:
        "We haven't lent any money yet, so there's nothing real to report. These are the numbers we're aiming for. The actual ones will appear in this same table from the first cycle, updated every month.",
      uncontrolledTitle: "What we do NOT control",
      uncontrolledIntro:
        "Some things are beyond us, and we'd rather say so up front:",
      uncontrolled: [
        "An economic crisis that leaves many people unable to pay at once",
        "A drop in the international price of a product, or a market closing, leaving a business unpaid",
        "Rule changes that force us to operate differently",
        "Someone deceiving us and us not catching it during the checks",
        "Us getting it wrong: we're new and have no history yet to prove otherwise",
      ],
      uncontrolledFoot:
        "We can reduce the risk of our own operation, not the world's. That's why nobody should put money into Finnoba they can't afford to lose entirely.",
      cta: "See the full FAQ",
    },
    team: {
      meta: {
        title: "Team",
        description:
          "Who's behind Finnoba: founders, partners and how we work.",
      },
      h1: "Who's behind it.",
      sub: "Finnoba is built by people who have been on both sides: borrowing and lending.",
      foundersTitle: "Founders",
      founders: [
        {
          name: "[TBD]",
          role: "Co-founder · Lead",
          body: "Years assessing and placing loans, and running finance operations in the region.",
        },
        {
          name: "[TBD]",
          role: "Co-founder · Technology",
          body: "Years building financial platforms that move real money.",
        },
        {
          name: "[TBD]",
          role: "Co-founder · Risk",
          body: "Years managing loan books outside traditional banking.",
        },
      ],
      ecosystemTitle: "Who we work with",
      ecosystemSub: "The partners alongside us in the pilot.",
      ecosystem: [
        {
          name: "Indrox",
          body: "Our development team. All of Finnoba's technology is built in house, without depending on third parties.",
        },
        {
          name: "ThePrimeWay",
          body: "A network that helps us check businesses out: who has a good reputation in their community and who doesn't.",
        },
        {
          name: "HiddenLayer Podcast",
          body: "Outreach and community channel within the region's technology and investment scene.",
        },
        {
          name: "La Punta del Iceberg",
          body: "A network of companies across the region that brings us businesses that might qualify.",
        },
      ],
      philosophyTitle: "How we work",
      philosophy: [
        "Small team, our own technology. We don't burn anyone's money on advertising or offices.",
        "We'd rather grow slowly with defaults under control than grow fast and break the book in the first bad year.",
        "We want this to become the normal way of lending in the region. That takes doing it well, not quickly.",
      ],
      cta: "Read why we're doing this",
    },
    faq: {
      meta: {
        title: "FAQ",
        description:
          "What everyone asks before joining Finnoba: your money, how we operate and the rules.",
      },
      h1: "Frequently asked questions.",
      sub: "What everyone asks before joining.",
      groups: [
        {
          title: "About your money",
          items: [
            {
              q: "What's the minimum and when do I get paid?",
              a: "You join from $100 a loan. A $500 loan is assembled by several people, which is why the minimum is low. You don't pick which loans you're in: assignment is automatic and in order of arrival, and no single loan takes more than 10% of what you put in. You collect at maturity: once the business finishes repaying you get your capital back along with what it earned.",
            },
            {
              q: "What does Finnoba charge?",
              a: "40% of the interest on every instalment. The other 60% is your return. We charge for originating, verifying and administering the loan, and you see it broken out instalment by instalment in each loan's detail, not just in the total. Any other charge would have to be in the individual contract before you sign; today there is none.",
            },
            {
              q: "Who is the creditor on my loan?",
              a: "You are. The loan contract is between the lender and the business. Finnoba acts as agent: it originates, verifies, administers and collects on your behalf, but it is not party to the loan and not the creditor of the debt. We're finalising the definitive contract wording with legal counsel.",
            },
            {
              q: "What if a business doesn't pay?",
              a: "You take the loss. Finnoba commits no capital of its own to cover defaults: we run collections, apply late interest and report to credit bureaus, but we do not make good what doesn't come back. What we do is make sure no single loan takes more than 10% of your money, so a default costs you part of it rather than all of it. We're aiming for under 5% to fail, but that's a target with no track record behind it.",
            },
            {
              q: "Can I take my money out early?",
              a: "No. Your capital is committed until the loan matures, 2 to 6 months. In the pilot there are no partial withdrawals, no secondary market, and you can't resell your position to someone else. If you might need that money sooner, this isn't the place.",
            },
            {
              q: "What about taxes?",
              a: "What you earn is income and is taxed under the rules of the country where you live. We give you an annual report with the information to declare it. Check with your accountant — we don't give tax advice.",
            },
            {
              q: "How much will I earn, and is it guaranteed?",
              a: "Of the interest the business pays, 60% is yours and 40% is Finnoba's commission. What that adds up to depends on the level of the businesses you end up in, and we confirm it in writing before you commit anything. Guaranteed it is not — lending never is, and we do not make good what doesn't come back.",
            },
          ],
        },
        {
          title: "About how we operate",
          items: [
            {
              q: "How do you choose the businesses?",
              a: "First we apply the golden rule: we only lend dollars to businesses that already get paid in dollars. From there we check the tax ID is active and in good standing, their sales over recent months, an invoice or contract with a foreign client, what they need the money for and whether they have other debts. A bank would look at collateral; we look at whether the business sells and gets paid.",
            },
            {
              q: "Why exporters only?",
              a: "Because lending dollars to a business paid in soles hands it a problem it didn't have. If the dollar rises, the instalment becomes unpayable even though the business is healthy. By financing those already paid in dollars — coffee, cacao, blueberry, avocado, fish, textiles, software — debt and income sit in the same currency.",
            },
            {
              q: "What does the loan cost the business?",
              a: "Level 1 is $500 over 2 months at 5% a month on the outstanding balance: instalment 1 of $275.00, instalment 2 of $262.50, $537.50 repaid in total. That's a TCEA (annual effective rate) of 79.59%, below the 99.84% cap the central bank sets for foreign currency. It's published in full on How it works — no call to book.",
            },
            {
              q: "Why start at $500 and not more?",
              a: "Because nobody has proven anything yet. A small, short first loan lets us see how a business repays while risking little. If they deliver, they move up: $1,200, then $3,000, and on to $15,000. The rate falls at each step. They don't choose it — they earn it.",
            },
            {
              q: "Where is the money in the meantime?",
              a: "In accounts separate from our own, with loan-by-loan reporting for each person. We're finalising the definitive structure with our lawyers and it will be spelled out in the first cycle contract.",
            },
            {
              q: "Which countries do you operate in?",
              a: "The pilot is in Peru and that's where the first cycle goes. LATAM is the long-term plan, but we'll only move to another country once we know how to assess and collect properly there.",
            },
            {
              q: "Is this crypto?",
              a: "No. What you earn comes from businesses repaying loans in dollars, not from speculating on anything. To move money across borders we use a mix of bank transfers and digital-asset rails, because it's faster and cheaper than correspondent banking — but that's our plumbing: you don't buy crypto, don't hold it and have no exposure to its price.",
            },
            {
              q: "How is the platform built?",
              a: "We build it ourselves. Today a good part of the operation is manual and handled by the team; we automate as the pilot validates each step. We'd rather say it plainly than promise automation that doesn't exist yet.",
            },
          ],
        },
        {
          title: "About the rules",
          items: [
            {
              q: "Are you regulated?",
              a: "We're working with lawyers to define which framework Finnoba operates under in Peru and what controls apply, before opening the first cycle. We don't claim to hold licences or registrations that don't exist yet. Once it's confirmed, we'll publish it here.",
            },
            {
              q: "Will you ask me for paperwork?",
              a: "Yes. Before we take your money we verify your identity, where the money came from, and screen you against international sanctions lists. If you live outside Peru we'll also ask for your tax residency. It's mandatory, we skip it for no one, and it protects you as much as us.",
            },
            {
              q: "Is this a public securities offering?",
              a: "No. Finnoba operates as a private alternative investment platform. Participation is subject to investor profile evaluation and signing individual terms. This does not constitute a public offering under local regulation.",
            },
            {
              q: "Do I need to be a professional investor?",
              a: "No title required, but you do need to understand what you're doing: that you can lose money and that you won't be able to pull it out overnight. We go through that on the call before you join.",
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
          "Finnoba's real state: we haven't lent any money yet. The figures go up here from the first cycle onward.",
      },
      h1: "The books, open.",
      sub: "Finnoba hasn't lent any money yet. You won't find invented figures on this page: every number appears once it's real, and updates monthly from the first cycle onward.",
      portfolioTitle: "How much we've lent",
      portfolio: [
        ["Total money lent", "$0 — nothing yet"],
        ["Active loans", "0"],
        ["Loans already repaid", "0"],
        ["Loans that weren't repaid", "No data"],
        ["Actual return paid", "No data"],
        ["Where we operate", "Peru (pilot)"],
      ],
      distributionTitle: "How it's spread",
      distribution: [
        ["By country", "From the first cycle"],
        ["By type of business", "From the first cycle"],
        ["By loan size", "From the first cycle"],
        ["By term", "From the first cycle"],
      ],
      reportsTitle: "Monthly report",
      reportsBody:
        "Nothing to report yet. We'll publish a monthly PDF report from the close of the first operating quarter.",
      auditTitle: "Audit",
      auditBody:
        "There's no operation to audit yet. We'll appoint an external auditor before opening the first cycle and publish their reports here.",
      cta: "Reserve my spot",
    },
    apply: {
      meta: {
        title: "Apply for financing",
        description:
          "Tell us about your export business. We're putting together the first group of companies for Finnoba's pilot in Peru.",
      },
      h1: "Tell us about your business.",
      sub: "We're putting together the first group of companies for the pilot. It takes three minutes, we don't ask for documents yet, and it doesn't touch your credit record.",
      priceTitle: "Before you fill anything in: what it costs",
      priceLead:
        "We'd rather you didn't find out the price after a call. This is Level 1 in full — $500 over 2 months.",
      stageNote:
        "Finnoba is still being structured and has not disbursed a single loan. This form is not a credit application and not a pre-approval: it exists to find out whether what we're building solves a real problem, and to invite you to the first group when we open.",
      formTitle: "The form",
      legends: {
        business: "Your company",
        contact: "How we reach you",
        operation: "How it operates",
        need: "What you need",
      },
      f: {
        razonSocial: "Registered company name",
        ruc: "Tax ID (RUC)",
        rucHint: "11 digits, starting with 10 or 20",
        contacto: "Contact name",
        cargo: "Role",
        email: "Email",
        whatsapp: "WhatsApp",
        whatsappHint: "With country code",
        cobraUsd: "Does your end client pay you in dollars?",
        sector: "Sector",
        mercados: "Destination markets",
        mercadosHint: "Pick as many as apply",
        facturacion: "Monthly revenue in USD",
        antiguedad: "Months trading formally",
        monto: "How much do you need?",
        destino: "What do you need it for?",
        urgencia: "When do you need it?",
        ocSinFactura:
          "Do you have a signed purchase order or contract, but haven't issued the invoice yet?",
        alternativa: "What's your alternative today?",
        choose: "Choose an option",
      },
      options: {
        cobraUsd: { si: "Yes", no: "No", parcial: "Partly" },
        sector: {
          agro: "Agro-export",
          pesca: "Fishing",
          textil: "Textiles",
          software: "Software or BPO",
          turismo: "Inbound tourism",
          otro: "Other",
        },
        mercados: {
          eeuu: "USA",
          europa: "Europe",
          asia: "Asia",
          latam: "LatAm",
          otro: "Other",
        },
        facturacion: {
          "<3k": "Under $3K",
          "3-10k": "$3K - $10K",
          "10-30k": "$10K - $30K",
          "30-100k": "$30K - $100K",
          ">100k": "Over $100K",
        },
        antiguedad: {
          "<12": "Under 12",
          "12-24": "12 to 24",
          "24-48": "24 to 48",
          ">48": "Over 48",
        },
        monto: {
          "500-1.5k": "$500 - $1.5K",
          "1.5-3k": "$1.5K - $3K",
          "3-7k": "$3K - $7K",
          "7-15k": "$7K - $15K",
          ">15k": "Over $15K",
        },
        destino: {
          insumos: "Buying inputs",
          proveedores: "Paying suppliers",
          flete: "Freight and logistics",
          cosecha: "Harvest season",
          planilla: "Payroll",
          otro: "Other",
        },
        urgencia: {
          semana: "This week",
          mes: "This month",
          "3meses": "Next 3 months",
          explorando: "Just exploring",
        },
        ocSinFactura: { si: "Yes", no: "No", nose: "Not sure" },
        alternativa: {
          banco: "A bank",
          caja: "A municipal savings bank",
          factoring: "Factoring",
          informal: "An informal lender",
          familiares: "Family",
          ninguna: "None",
        },
      },
      submit: "Send",
      optional: "optional",
      consent:
        "I authorise Finnoba to process this data in order to assess demand for its financing pilot and to contact me about it, under Peru's Law 29733. I can withdraw this authorisation by writing to info@finnoba.xyz. I have read the",
      consentLink: "privacy policy",
      errorTitle: "We couldn't send the form",
      errors: {
        ruc: "That tax ID isn't valid. It's 11 digits starting with 10 or 20 — check none are missing.",
        invalid: "Some answers are missing or incomplete. Have a look and send it again.",
        rate: "We've had several submissions from your connection recently. Give it a while and try again.",
        server: "Something broke on our side. Write to info@finnoba.xyz and we'll sort it out.",
      },
      okTitle: "Got it.",
      okBody:
        "Thank you. We'll go through your case and write to the details you left. We aren't disbursing yet: when the first group opens, we'll be in touch.",
      okUrgentTitle: "Got it — but let's be straight about timing.",
      okUrgentBody:
        "We won't be able to help you this week. But if this need comes round again, or you can wait a few weeks, I want you in the first batch.",
      back: "Back to the homepage",
    },
    legal: {
      termsTitle: "Terms and conditions",
      privacyTitle: "Privacy policy",
      privacyStatus: "2026 pilot version · Last updated: 30 July 2026",
      privacyMeta:
        "How Finnoba handles your personal data: what we collect, what for, who we share it with, how long we keep it and how you exercise your rights in Peru.",
      privacy: [
        {
          h: "1. Who handles your data",
          p: [
            "The data controller is [TO BE DEFINED] (“Finnoba”, “we”), a company incorporated in Peru, based in Lima. Write to info@finnoba.xyz about anything related to your data.",
            "This policy covers the finnoba.xyz site, the app.finnoba.xyz application, and the forms and contact channels we offer.",
          ],
        },
        {
          h: "2. What data we collect",
          p: ["Depending on how you use the platform, we process:"],
          ul: [
            "Identity and contact: name, ID document, date of birth, nationality, country of residence, email, phone and address.",
            "Verification data: a copy of your ID, a selfie or liveness check where applicable, tax residency, source of funds and the result of the international sanctions-list screening.",
            "Financial data: bank accounts used to send or receive money, amounts lent or requested, payments and their history.",
            "If you apply for business financing: RUC, recent months' sales, export invoices or contracts, outstanding debt and use of funds.",
            "If you complete the application form: registered company name, RUC, contact name and role, email, WhatsApp, sector, destination markets, monthly revenue band, months trading formally, the amount and purpose of the financing you need, urgency, whether you hold a signed purchase order not yet invoiced, and what financing alternative you use today.",
            "Usage data: the emails and messages we exchange with you, and technical server logs such as your IP address, browser and access time.",
          ],
        },
        {
          h: "3. What we use it for, and on what legal basis",
          ul: [
            "To handle your registration, review your profile and perform the agreements we sign with you: legal basis, performance of the contract and the pre-contractual steps you request.",
            "To verify your identity and source of funds, and to comply with anti-money-laundering and counter-terrorist-financing rules as well as tax and accounting obligations: legal basis, compliance with legal obligations.",
            "To assess a business's credit risk and follow up on payments: legal basis, performance of the contract and our legitimate interest in collecting what was lent.",
            "To measure demand for our pilot and contact you about it, when you complete the application form: legal basis, your express consent. The form neither assesses nor pre-approves anything; it only collects information.",
            "To send you pilot updates and commercial communications: legal basis, your consent. You can withdraw it at any time.",
            "To run, maintain and protect the platform against fraud and abuse: legal basis, our legitimate interest.",
          ],
          after: [
            "We don't make automated decisions with legal effects on you without human review: today every application is assessed by the team.",
          ],
        },
        {
          h: "4. What happens if you don't give us your data",
          p: [
            "Identity, verification and financial data are necessary to operate: without them we can't open an account, receive your money or disburse a loan, because the law requires us to verify them. The data we ask for to send you updates is optional, and declining it doesn't affect anything else.",
          ],
        },
        {
          h: "5. Who we share it with",
          p: ["We don't sell your data. We share it only with:"],
          ul: [
            "Providers acting on our instructions and under contract: hosting and infrastructure, identity verification, email, payment processing and accounting. They only access what they need to deliver their service.",
            "Competent authorities, where the law requires us to report or to answer a request.",
            "Credit bureaus and collection agencies, in the case of borrowing businesses with overdue payments, as set out in the individual agreement.",
            "External auditors and legal advisors, bound by confidentiality.",
          ],
        },
        {
          h: "6. Data that leaves Peru",
          p: [
            "Some of our providers host servers outside Peru, mainly in the United States and the European Union. That means a cross-border transfer of your data. Where it happens, we require those providers to give contractual guarantees equivalent to what Peruvian law demands. By accepting this policy you consent to that transfer.",
          ],
        },
        {
          h: "7. How long we keep it",
          p: [
            "We keep your data for as long as the relationship lasts and, afterwards, for the periods required by anti-money-laundering, tax and commercial rules, which generally are no less than five years from the close of the operation.",
            "If you only signed up for updates and never operated, we delete your data two years after the last contact, or sooner if you ask.",
          ],
        },
        {
          h: "8. How we protect it",
          p: [
            "We apply reasonable technical and organisational measures: encryption in transit, role-based access, access logging and providers that meet recognised security standards.",
            "No system is infallible. If an incident affects your data, we'll tell you and notify the authority where required.",
          ],
        },
        {
          h: "9. Your rights",
          p: [
            "You can ask us for access to your data, its correction, its cancellation or deletion, object to certain processing, ask us to restrict the use of your data, and withdraw your consent where the processing relies on it.",
            "Write to info@finnoba.xyz from the email you registered, saying which right you want to exercise. We may ask you to prove your identity. We respond within the periods set by law: twenty business days for access and ten business days for the other rights.",
            "Some requests we can't fully honour while a legal duty to retain the information applies, such as anti-money-laundering record-keeping. When that happens, we explain it to you in writing.",
          ],
        },
        {
          h: "10. Cookies and technical logs",
          p: [
            "This site uses no analytics, profiling or advertising cookies. Our hosting provider keeps technical logs — IP address, browser, timestamp — for security and operational reasons.",
            "On the application form page we keep a daily visit count: a single number per day, with no cookie and nothing that identifies you. It tells us what share of the people who open the form go on to send it. Of your IP address we store only a salted hash, which serves solely to rate-limit repeated submissions from one connection and cannot be turned back into the address.",
            "The application uses strictly necessary cookies to keep you signed in. If we add analytics tooling in the future, we'll announce it on this page and ask for your consent before switching it on.",
          ],
        },
        {
          h: "11. Minors",
          p: [
            "The platform isn't aimed at people under 18 and we don't knowingly collect their data. If we find an account belonging to a minor, we close it and delete the information.",
          ],
        },
        {
          h: "12. Changes to this policy",
          p: [
            "We may update this policy. The version in force is always the one published on this page, with its update date. If a change is material, we'll email you before it takes effect.",
          ],
        },
        {
          h: "13. Complaints",
          p: [
            "If you think we're mishandling your data, write to us first at info@finnoba.xyz — we want to fix it. You can also file a complaint with Peru's National Authority for Personal Data Protection, at the Ministry of Justice and Human Rights.",
          ],
        },
      ],
      termsStatus: "2026 pilot version · Last updated: 30 July 2026",
      termsMeta:
        "Finnoba's terms of use: what the platform is, who can use it, what lending or borrowing in dollars involves, and the rules that apply in Peru.",
      terms: [
        {
          h: "1. Who operates Finnoba",
          p: [
            "Finnoba is a platform operated by [TO BE DEFINED] (“Finnoba”, “we”), a company incorporated in Peru. These terms govern the use of the finnoba.xyz site, the app.finnoba.xyz application, and the forms and contact channels we offer (together, “the platform”).",
            "The final legal name, tax ID and registered address will be published on this page before the first cycle opens.",
          ],
        },
        {
          h: "2. Using the platform means accepting these terms",
          p: [
            "If you use the platform, you accept these terms. If you don't agree with them, don't use it.",
            "These terms govern the use of the platform. Each loan is also governed by the individual agreement you sign for that loan. If anything in the individual agreement contradicts these terms, the agreement prevails.",
          ],
        },
        {
          h: "3. What Finnoba is and what it isn't",
          ul: [
            "Finnoba connects people who want to lend dollars with Peruvian businesses that export and already get paid in dollars.",
            "Finnoba is not a bank or a financial institution: we don't take deposits, we don't pay interest on balances, and we don't guarantee any return.",
            "This is not a public offering of securities. Access is private, subject to a profile review and to signing an individual agreement.",
            "Nothing we publish is financial, legal or tax advice. The decision to lend or to borrow is yours.",
            "We're in pilot stage: as of this version, Finnoba has not disbursed any loan. The businesses, amounts, rates and terms shown as examples on the site are fictitious and are not live offers.",
          ],
          after: [
            "We're working with legal counsel to define under which framework Finnoba operates in Peru and which authorisations apply to it. We don't claim licences, registrations or supervision we don't currently have. Once they exist, they go up here.",
          ],
        },
        {
          h: "4. Who can use Finnoba",
          p: ["To operate with us you need to:"],
          ul: [
            "Be 18 or older and legally able to enter into binding agreements.",
            "Act on your own behalf and with funds of lawful origin.",
            "Complete identity verification and, if you live outside Peru, evidence your tax residency.",
            "Not appear on international sanctions lists or on lists tied to money laundering or terrorist financing.",
            "If you're a business applying for financing: an active, compliant RUC with SUNAT.",
          ],
        },
        {
          h: "5. If you're going to lend",
          ul: [
            "The loan agreement is between you and the financed business. Finnoba acts as agent — originating, verifying, servicing and collecting on your behalf — and is not party to the loan nor creditor of the debt.",
            "The minimum is US$ 100 per loan. Your participation is documented in an individual agreement setting out amount, term, rate and repayment before you put money in.",
            "Assignment to loans is automatic and in order of arrival: you do not select loans. No loan receives more than 10% of your deposit, and all participants in a loan are repaid and bear losses pari passu, in the same proportion.",
            "The return is not guaranteed. It depends on the financed businesses paying. A loan can be repaid late, repaid in part, or not repaid at all.",
            "You can lose all of your capital. Don't put money into Finnoba that you can't afford to lose entirely.",
            "Your money is not liquid: it stays committed until the loan matures. There is no secondary market, no early withdrawal and no transfer of your position to third parties.",
            "Cash that isn't placed earns no return. Only capital actually lent earns anything.",
            "Finnoba commits no capital of its own to cover defaults and guarantees neither capital nor return. Credit risk sits entirely with the lender.",
            "Spreading your money across several loans reduces the impact of a default, but doesn't remove the risk.",
          ],
        },
        {
          h: "6. If you're going to borrow",
          ul: [
            "We lend only in dollars and only to businesses already paid in dollars. A business invoicing solely in soles doesn't qualify.",
            "Any business's first loan is US$ 500 over 2 months. Amount, term and rate improve with repayment history, following the level ladder published on the site.",
            "Interest is charged on the outstanding balance, never on the original amount. The full Level 1 schedule is published on the site; the schedule for higher levels is given to you in writing before you accept. In all cases below the cap set by the Central Reserve Bank of Peru for foreign-currency lending.",
            "The information you give us — sales, invoices, contracts, outstanding debt and use of funds — must be truthful, complete and current. False information is grounds for rejection, for terminating the agreement and for demanding immediate repayment in full.",
            "You must use the money for the stated purpose.",
            "Late payment accrues the interest and costs set out in the individual agreement, and can lead to collections, reporting to credit bureaus and legal action.",
          ],
        },
        {
          h: "7. Verification, anti-money-laundering and sanctions",
          p: [
            "Before receiving or releasing money we verify your identity, the source of funds and your presence on international sanctions lists. This check is mandatory and we don't skip it for anyone.",
            "We may request additional documentation at any time, and suspend or reject an operation while we review it or if we can't complete verification. We report to the competent authorities whatever the law requires us to report.",
          ],
        },
        {
          h: "8. Fees and taxes",
          p: [
            "Signing up, browsing the site and receiving information is free. Finnoba charges a fee for originating, verifying and servicing loans, equal to 40% of the interest accrued on each instalment; the remaining 60% belongs to the lender. The detail is set out in writing in the individual agreement before you sign, and we don't charge fees that aren't in that document.",
            "Any taxes on your returns or on your business are your responsibility.",
          ],
        },
        {
          h: "9. Your account",
          p: [
            "You're responsible for keeping your credentials confidential and for the activity that happens under them. Tell us immediately at info@finnoba.xyz if you spot unauthorised use. We can suspend access for security reasons, for breach of these terms, or where the law requires it.",
          ],
        },
        {
          h: "10. Acceptable use",
          p: [
            "You may not use the platform for unlawful activity, or attempt to breach its security, scrape data, impersonate someone else or post false information. Any of these ends in suspension of access.",
          ],
        },
        {
          h: "11. Content and availability",
          p: [
            "Site content is informational and can change without prior notice. Example businesses, amounts, rates and terms are illustrative and are not offers.",
            "We make reasonable efforts to keep the platform available, but we don't guarantee uninterrupted or error-free operation. We may suspend it for maintenance or for reasons outside our control.",
          ],
        },
        {
          h: "12. Intellectual property",
          p: [
            "The Finnoba brand, the site, the application, its copy, designs and code belong to Finnoba or its licensors. You may use them to operate on the platform; you may not copy, distribute or commercially exploit them without our written permission.",
          ],
        },
        {
          h: "13. Personal data",
          p: [
            "The processing of your personal data is governed by our Privacy policy and by Peruvian Law No. 29733 on Personal Data Protection and its regulations. By using the platform you accept that processing.",
          ],
        },
        {
          h: "14. Communications and electronic signature",
          p: [
            "You agree that we may contact you by email and through the channels you register, and that agreements and notices may be signed and served electronically. Those communications and signatures are fully valid between the parties.",
            "Keep your contact details up to date: notices sent to the last email you registered count as received.",
          ],
        },
        {
          h: "15. Liability",
          p: [
            "Finnoba is liable for the obligations it expressly assumes in these terms and in each individual agreement. We are not liable for a financed business failing to repay, for the investment or borrowing decisions you make, or for damage arising from third-party service failures, force majeure or unforeseeable events.",
            "Nothing in this clause limits liability that Peruvian law does not allow to be limited, in particular liability arising from wilful misconduct or gross negligence.",
          ],
        },
        {
          h: "16. Changes to these terms",
          p: [
            "We may update these terms. The version in force is always the one published on this page, with its update date. If a change is material, we'll email you with reasonable notice. Individual agreements already signed are governed by the version in force when they were signed.",
          ],
        },
        {
          h: "17. Governing law and disputes",
          p: [
            "These terms are governed by the laws of the Republic of Peru. Any dispute is submitted to the courts of the Lima judicial district, without prejudice to the remedies the law grants consumers.",
            "Before it gets there, write to us: almost everything gets sorted out by talking.",
          ],
        },
        {
          h: "18. Contact",
          p: ["info@finnoba.xyz — Finnoba, Lima, Peru."],
        },
      ],
    },
    footer: {
      tagline:
        "We connect idle dollars with Peruvian exporters who already get paid in dollars.",
      productTitle: "Product",
      product: [
        { l: "How it works", h: "/how-it-works" },
        { l: "For lenders", h: "/investors" },
        { l: "Why Finnoba", h: "/thesis" },
        { l: "Risk", h: "/risk" },
      ],
      resourcesTitle: "Resources",
      resources: [
        { l: "Questions", h: "/faq" },
        { l: "Transparency", h: "/transparency" },
        { l: "Team", h: "/team" },
      ],
      communityTitle: "Community",
      community: [
        { l: "Apply for financing", h: "/apply" },
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
