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
        search: "Buscar negocios",
        addFunds: "Añadir fondos",
        title: "Negocios disponibles",
        sub: "Presta a exportadores verificados y cobra en dólares.",
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
            body: "Lo que ganas viene de exportadores devolviendo préstamos en dólares. No hay especulación de por medio. La tasa de cada ciclo te la confirmamos por escrito antes de que pongas nada, y no es una garantía: un préstamo puede no devolverse.",
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
              { t: "Eliges en qué negocios entrar", d: "Desde $100 por préstamo, así que con poco puedes estar en varios y no depender de uno solo." },
              { t: "Cobras al vencimiento", d: "Cuando el préstamo termina recuperas tu capital más lo que rindió, en dólares." },
            ],
          },
          {
            tag: "Si necesitas financiamiento",
            color: "#1FB36B",
            steps: [
              { t: "Nos cuentas de tu negocio", d: "Tu RUC, tus ventas de los últimos meses y una factura o contrato que muestre que te pagan en dólares." },
              { t: "Revisamos y te respondemos", d: "Verificamos que el negocio exista, que exporte y que pueda pagar. Sin garantías ni visitas a una sucursal." },
              { t: "Recibes el dinero y subes de nivel", d: "Empiezas en $500. Cada préstamo bien pagado te sube de nivel: más monto, más plazo y una tasa más baja." },
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
          t: "Entras a los préstamos que elijas",
          b: "Desde $100 por préstamo. Un préstamo de $500 se arma entre varias personas, así que con poco dinero puedes estar en varios negocios a la vez en lugar de depender de uno. Cada negocio pasa antes por nuestra revisión.",
        },
        {
          k: "03",
          t: "Cobras cuando el préstamo termina",
          b: "Al vencimiento recuperas tu capital junto con lo que rindió. Mientras tanto te mandamos un reporte de cómo va cada préstamo.",
        },
      ],
      levelsTitle: "Si vas a pedir: la escalera",
      levelsIntro:
        "Nadie empieza pidiendo mucho. Tu primer préstamo son $500 a pocos meses. Cuando lo pagas completo, subes de nivel: te prestamos más, por más tiempo y a una tasa más baja. La tasa no la eliges, te la ganas pagando.",
      levelsFoot:
        "La tasa baja en cada nivel. Te la decimos por escrito antes de que aceptes nada, y siempre por debajo del tope legal: el Banco Central fija un máximo de 99,84% anual en moneda extranjera para el periodo mayo-octubre 2026.",
      requirementsTitle: "Qué te pedimos",
      requirements: [
        "RUC activo y habido en SUNAT",
        "Tus ventas de los últimos 6 a 12 meses",
        "Una factura o contrato que muestre que un cliente del exterior te paga en dólares",
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
          "Condiciones del primer ciclo de Finnoba: montos, plazos, rendimiento objetivo y cómo entrar.",
      },
      h1: "Para quien tiene dólares parados.",
      sub: "Estas son las condiciones del primer ciclo y cómo se entra.",
      termsTitle: "Condiciones del primer ciclo",
      terms: [
        ["Monto mínimo por préstamo", "$100"],
        ["Monto máximo sugerido", "$10,000 por ciclo"],
        ["A quién se le presta", "Exportadores peruanos que cobran en dólares"],
        ["Cuánto dura", "2 a 6 meses, según los préstamos que elijas"],
        ["Cuándo cobras", "Capital y rendimiento al vencimiento de cada préstamo"],
        ["Salir antes", "Se evalúa caso por caso"],
        ["En cuántos préstamos entras", "Los que quieras. Desde $100 cada uno"],
      ],
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
        "Tu dinero se reparte entre los préstamos del primer ciclo y te confirmamos la fecha de tu primer cobro",
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
          "Cómo cuidamos el dinero prestado: misma moneda, montos pequeños al inicio, repartir entre varios y poner capital propio primero.",
      },
      h1: "Cómo cuidamos tu dinero.",
      sub: "Prestar siempre tiene riesgo. Lo que sí podemos hacer es reducirlo, medirlo y contarlo sin adornos.",
      frameworkTitle: "La idea general",
      frameworkBody:
        "No vamos a decirte que esto no tiene riesgo, porque lo tiene. Lo que hacemos es atacarlo por cinco lados: prestar en la misma moneda que el negocio cobra, revisar bien a quién le prestamos, empezar con montos pequeños, repartir tu dinero entre varios préstamos y poner capital nuestro para absorber las primeras pérdidas.",
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
          t: "Puedes repartir desde $100",
          b: "Un préstamo de $500 se arma entre varias personas, así que entrar cuesta $100. Con $1.000 puedes estar en diez negocios distintos en vez de uno. No te obligamos a repartir, pero decimos lo obvio: si pones todo en un solo préstamo, ese riesgo es entero tuyo.",
        },
        {
          k: "05",
          t: "Ponemos capital nuestro primero",
          b: "El equipo pone dinero propio en cada ciclo, y ese es el primero que se pierde si algo sale mal. Recién después te tocaría a ti. El objetivo es que sea el 10% del total.",
        },
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
              a: "Entras desde $100 por préstamo. Un préstamo de $500 se arma entre varias personas, por eso el mínimo es bajo. Cobras al vencimiento: cuando el negocio termina de pagar recuperas tu capital junto con lo que rindió.",
            },
            {
              q: "¿Qué pasa si un negocio no paga?",
              a: "Ponemos capital nuestro que absorbe las primeras pérdidas antes de que te toquen a ti. Y como puedes entrar desde $100, con poco dinero estás en varios préstamos en vez de depender de uno. Apuntamos a que falle menos del 5%, pero es un objetivo sin historial detrás.",
            },
            {
              q: "¿Puedo sacar mi dinero antes?",
              a: "No mientras el préstamo corre. Tu dinero queda comprometido hasta que el negocio termine de pagar, entre 2 y 6 meses según el préstamo. Si necesitas salir antes, lo vemos caso por caso, pero no lo prometemos.",
            },
            {
              q: "¿Y los impuestos?",
              a: "Lo que ganas es un ingreso y tributa según las reglas del país donde vives. Te damos un reporte anual con la información para declararlo. Consulta con tu contador, nosotros no damos asesoría fiscal.",
            },
            {
              q: "¿Cuánto voy a ganar y está garantizado?",
              a: "La tasa depende del nivel del negocio al que entres y te la confirmamos por escrito antes de que comprometas nada. Garantizado no está: prestar dinero nunca lo está. Poner capital nuestro primero y que puedas repartir desde $100 reduce el riesgo, no lo elimina.",
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
            "Datos de uso: correos y mensajes que intercambiamos contigo, y registros técnicos del servidor como tu dirección IP, navegador y fecha de acceso.",
          ],
        },
        {
          h: "3. Para qué los usamos y con qué base legal",
          ul: [
            "Para atender tu registro, evaluar tu perfil y ejecutar los contratos que firmemos contigo: base legal, la ejecución del contrato y las gestiones previas que pides.",
            "Para verificar tu identidad, el origen de los fondos y cumplir la normativa de prevención de lavado de activos y financiamiento del terrorismo, además de las obligaciones tributarias y contables: base legal, el cumplimiento de obligaciones legales.",
            "Para evaluar el riesgo crediticio de un negocio y hacer seguimiento a los pagos: base legal, la ejecución del contrato y nuestro interés legítimo en cobrar lo prestado.",
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
            "El monto mínimo es de US$ 100 por préstamo. Tu participación se documenta en un contrato individual que detalla monto, plazo, tasa y forma de pago antes de que pongas dinero.",
            "El rendimiento no está garantizado. Depende de que los negocios financiados paguen. Un préstamo puede pagarse tarde, pagarse en parte o no pagarse.",
            "Puedes perder todo el capital. No pongas en Finnoba dinero que no puedas permitirte perder por completo.",
            "Tu dinero no es líquido: queda comprometido hasta el vencimiento del préstamo. No hay mercado secundario ni retiro anticipado, salvo que el contrato individual diga otra cosa.",
            "El equipo aporta capital propio que absorbe las primeras pérdidas, con el objetivo de que sea el 10% del total. Es un objetivo de diseño, no una garantía ni un seguro.",
            "Repartir tu dinero entre varios préstamos reduce el impacto de un impago, pero no elimina el riesgo.",
          ],
        },
        {
          h: "6. Si vas a pedir prestado",
          ul: [
            "Prestamos solo en dólares y solo a negocios que ya cobran en dólares. Un negocio que factura únicamente en soles no califica.",
            "El primer préstamo de cualquier negocio es de US$ 500 y a plazo corto. El monto, el plazo y la tasa mejoran con el historial de pago, según la escalera de niveles publicada en el sitio.",
            "La tasa se te informa por escrito antes de que aceptes, y siempre por debajo del tope que fija el Banco Central de Reserva del Perú para operaciones en moneda extranjera.",
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
            "Registrarte, navegar el sitio y recibir información no tiene costo. Finnoba cobra una comisión por originar y administrar los préstamos: el monto, la forma de cálculo y el momento del cobro se detallan por escrito en el contrato individual antes de que firmes. No cobramos comisiones que no estén en ese documento.",
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
        search: "Search businesses",
        addFunds: "Add funds",
        title: "Available businesses",
        sub: "Lend to vetted exporters and get paid in dollars.",
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
            body: "What you earn comes from exporters repaying loans in dollars. No speculation involved. We confirm each cycle's rate in writing before you commit anything, and it isn't a guarantee: a loan may not come back.",
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
              { t: "You pick which businesses to back", d: "From $100 a loan, so even a small amount can sit across several instead of depending on one." },
              { t: "You collect at maturity", d: "When the loan ends you get your capital back plus what it earned, in dollars." },
            ],
          },
          {
            tag: "If you need financing",
            color: "#1FB36B",
            steps: [
              { t: "Tell us about your business", d: "Your tax ID, your sales over recent months, and an invoice or contract showing a foreign client pays you in dollars." },
              { t: "We check and get back to you", d: "We verify the business exists, that it exports and that it can repay. No collateral, no branch visits." },
              { t: "You get the money and move up", d: "You start at $500. Every loan repaid on time moves you up a level: more money, more time and a lower rate." },
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
          t: "You join the loans you choose",
          b: "From $100 a loan. A $500 loan is put together by several people, so a small amount can sit across several businesses instead of depending on one. Every business is checked first.",
        },
        {
          k: "03",
          t: "You collect when the loan ends",
          b: "At maturity you get your capital back along with what it earned. In the meantime we send you a report on how each loan is doing.",
        },
      ],
      levelsTitle: "If you're going to borrow: the ladder",
      levelsIntro:
        "Nobody starts big. Your first loan is $500 over a few months. Repay it in full and you move up a level: we lend you more, for longer, at a lower rate. You don't choose the rate — you earn it by paying.",
      levelsFoot:
        "The rate drops at every level. We put it in writing before you accept anything, and always below the legal cap: the central bank sets a maximum of 99.84% a year in foreign currency for May-October 2026.",
      requirementsTitle: "What we ask for",
      requirements: [
        "An active, in-good-standing tax ID (RUC) with SUNAT",
        "Your sales over the last 6 to 12 months",
        "An invoice or contract showing a foreign client pays you in dollars",
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
          "Finnoba's first cycle: amounts, terms, target return and how to get in.",
      },
      h1: "For people with idle dollars.",
      sub: "These are the terms of the first cycle and how you get in.",
      termsTitle: "First cycle terms",
      terms: [
        ["Minimum per loan", "$100"],
        ["Suggested maximum", "$10,000 per cycle"],
        ["Who we lend to", "Peruvian exporters paid in dollars"],
        ["How long it lasts", "2 to 6 months, depending on the loans you pick"],
        ["When you collect", "Capital and return at each loan's maturity"],
        ["Leaving early", "Assessed case by case"],
        ["How many loans you join", "As many as you like. From $100 each"],
      ],
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
        "Your money spreads across the loans in the first cycle and we confirm your first payment date",
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
          "How we look after the money lent: same currency, small amounts at first, spread across many, and our own capital first in line.",
      },
      h1: "How we look after your money.",
      sub: "Lending always carries risk. What we can do is reduce it, measure it and tell you about it without dressing it up.",
      frameworkTitle: "The general idea",
      frameworkBody:
        "We're not going to tell you this is risk-free, because it isn't. What we do is attack it from five sides: lend in the same currency the business gets paid in, check who we lend to, start with small amounts, spread your money across several loans, and put our own capital in to absorb the first losses.",
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
          t: "You can spread from $100",
          b: "A $500 loan is assembled by several people, so joining costs $100. With $1,000 you can sit across ten different businesses instead of one. We don't force you to spread, but we'll say the obvious: put it all in one loan and that risk is entirely yours.",
        },
        {
          k: "05",
          t: "Our capital goes first",
          b: "The team puts its own money into every cycle, and that's the first to be lost if something goes wrong. Only after that would it reach you. The target is 10% of the total.",
        },
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
              a: "You join from $100 a loan. A $500 loan is assembled by several people, which is why the minimum is low. You collect at maturity: once the business finishes repaying you get your capital back along with what it earned.",
            },
            {
              q: "What if a business doesn't pay?",
              a: "We put in our own capital, which absorbs the first losses before they reach you. And since you can join from $100, a small amount sits across several loans instead of depending on one. We're aiming for under 5% to fail, but that's a target with no track record behind it.",
            },
            {
              q: "Can I take my money out early?",
              a: "Not while the loan is running. Your money is committed until the business finishes repaying, 2 to 6 months depending on the loan. If you need to exit sooner we'll look at it case by case, but we don't promise it.",
            },
            {
              q: "What about taxes?",
              a: "What you earn is income and is taxed under the rules of the country where you live. We give you an annual report with the information to declare it. Check with your accountant — we don't give tax advice.",
            },
            {
              q: "How much will I earn, and is it guaranteed?",
              a: "The rate depends on the level of the business you back, and we confirm it in writing before you commit anything. Guaranteed it is not — lending never is. Putting our capital in first and letting you spread from $100 cuts the risk; it doesn't remove it.",
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
            "Usage data: the emails and messages we exchange with you, and technical server logs such as your IP address, browser and access time.",
          ],
        },
        {
          h: "3. What we use it for, and on what legal basis",
          ul: [
            "To handle your registration, review your profile and perform the agreements we sign with you: legal basis, performance of the contract and the pre-contractual steps you request.",
            "To verify your identity and source of funds, and to comply with anti-money-laundering and counter-terrorist-financing rules as well as tax and accounting obligations: legal basis, compliance with legal obligations.",
            "To assess a business's credit risk and follow up on payments: legal basis, performance of the contract and our legitimate interest in collecting what was lent.",
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
            "The minimum is US$ 100 per loan. Your participation is documented in an individual agreement setting out amount, term, rate and repayment before you put money in.",
            "The return is not guaranteed. It depends on the financed businesses paying. A loan can be repaid late, repaid in part, or not repaid at all.",
            "You can lose all of your capital. Don't put money into Finnoba that you can't afford to lose entirely.",
            "Your money is not liquid: it stays committed until the loan matures. There is no secondary market and no early withdrawal, unless the individual agreement says otherwise.",
            "The team commits its own capital, which absorbs the first losses, targeting 10% of the total. That's a design target, not a guarantee or an insurance policy.",
            "Spreading your money across several loans reduces the impact of a default, but doesn't remove the risk.",
          ],
        },
        {
          h: "6. If you're going to borrow",
          ul: [
            "We lend only in dollars and only to businesses already paid in dollars. A business invoicing solely in soles doesn't qualify.",
            "Any business's first loan is US$ 500 over a short term. Amount, term and rate improve with repayment history, following the level ladder published on the site.",
            "The rate is given to you in writing before you accept anything, and always below the cap set by the Central Reserve Bank of Peru for foreign-currency lending.",
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
            "Signing up, browsing the site and receiving information is free. Finnoba charges a fee for originating and servicing loans: the amount, how it's calculated and when it's charged are set out in writing in the individual agreement before you sign. We don't charge fees that aren't in that document.",
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
