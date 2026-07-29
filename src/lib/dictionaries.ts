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
          "Prestamos dólares a exportadores peruanos que ya cobran en dólares. Rendimiento objetivo de 14% al año en USD, pagado por negocios que devuelven préstamos reales.",
      },
      hero: {
        tag: "Piloto 2026 · Perú · Cupos limitados",
        h1: "Tus dólares, prestados a quien ya gana dólares.",
        sub: "Finnoba conecta a quien tiene dólares parados con exportadores peruanos que los bancos no atienden. Rendimiento objetivo de 14% al año en USD, respaldado por préstamos a negocios reales.",
        primary: "Quiero invertir",
        secondary: "Necesito financiamiento",
        badges: ["Todo en dólares", "Empiezas desde $500", "Perú, primer mercado"],
      },
      preview: {
        url: "app.finnoba.xyz",
        search: "Buscar negocios",
        addFunds: "Añadir fondos",
        title: "Negocios disponibles",
        sub: "Presta a exportadores verificados y cobra en dólares.",
        headers: { business: "NEGOCIO", amount: "MONTO", term: "PLAZO", yield: "RENDIMIENTO", grade: "NIVEL" },
      },
      stats: [
        { label: "Etapa", value: "Piloto 2026", sub: "aún no hemos prestado" },
        { label: "Rendimiento objetivo", value: "14%", sub: "al año en USD · no garantizado", subColor: "#157A47" },
        { label: "Primer mercado", value: "Perú", sub: "exportadores que cobran en dólares" },
      ],
      markets: {
        eyebrow: "Así se verá",
        title: "Presta a exportadores reales. Cobra en dólares.",
        sub: "Cada negocio se verifica antes de publicarse: que exista, que exporte y que le paguen en dólares.",
        browse: "Ver condiciones",
        yieldLabel: "Rendimiento al año",
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
            eyebrow: "Rendimiento objetivo",
            title: "14% al año en dólares, respaldado por préstamos",
            body: "Lo que gana el inversor lo pagan negocios reales devolviendo préstamos reales. No hay especulación de por medio. Es un objetivo, no una garantía.",
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
              { t: "Se reparte entre varios negocios", d: "Tu dinero no va a un solo préstamo, se reparte para que un impago no te golpee entero." },
              { t: "Cobras cada mes", d: "Los negocios pagan mensualmente en dólares. El objetivo es 14% al año." },
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
        sub: "Ya sea para poner a trabajar USD ocioso o para financiar tu próximo embarque de exportación, el proceso es 100% digital.",
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
          t: "Tu dinero se reparte entre varios negocios",
          b: "No va a un solo préstamo. Se reparte entre varios exportadores para que un impago no te golpee entero. Cada negocio pasa antes por nuestra revisión.",
        },
        {
          k: "03",
          t: "Cobras cada mes",
          b: "Los negocios pagan en cuotas mensuales. Recibes tu parte cada mes junto con un reporte de cómo va cada préstamo.",
        },
      ],
      levelsTitle: "Si vas a pedir: la escalera",
      levelsIntro:
        "Nadie empieza pidiendo mucho. Tu primer préstamo son $500 a pocos meses. Cuando lo pagas completo, subes de nivel: te prestamos más, por más tiempo y a una tasa más baja. La tasa no la eliges, te la ganas pagando.",
      levelsHead: ["Nivel", "Monto", "Plazo"],
      levelsFoot:
        "La tasa baja en cada nivel. Te la decimos por escrito antes de que aceptes nada, y siempre dentro del tope que fija la ley peruana.",
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
        { t: "Se reparte", b: "Tu dinero se divide entre varios préstamos." },
        { t: "Revisamos", b: "Verificamos cada negocio antes de darle el dinero." },
        { t: "Exportadores", b: "Negocios peruanos que cobran en dólares." },
        { t: "Cobramos", b: "Seguimiento mensual de cada cuota." },
        { t: "Te pagamos", b: "Tu parte, cada mes." },
      ],
      tableTitle: "Plazos y frecuencias",
      table: [
        ["Plazo de los préstamos", "2 a 6 meses"],
        ["Cada cuánto cobras", "Cada mes"],
        ["Reporte", "Día 5 del mes siguiente"],
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
        ["Monto mínimo", "$5,000"],
        ["Monto máximo sugerido", "$250,000 por ciclo"],
        ["Rendimiento objetivo", "14% al año en dólares (no garantizado)"],
        ["A quién se le presta", "Exportadores peruanos que cobran en dólares"],
        ["Cuánto dura", "2 a 6 meses, según los préstamos de tu cartera"],
        ["Cada cuánto cobras", "Cada mes"],
        ["Salir antes", "Se evalúa caso por caso"],
        ["Comisión de Finnoba", "[POR DEFINIR]"],
        ["Mínimo de préstamos por persona", "15, para que no dependas de uno solo"],
      ],
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
        "Un exportador peruano vende afuera y le pagan en dólares. Aun así, cuando necesita dinero para producir el siguiente pedido, el banco le pide un inmueble en garantía y años de balances auditados. La campaña no espera, así que termina financiándose caro o con lo suyo. Ese hueco es el negocio.",
      stats: [
        { v: "[X]%", l: "Exportadores pequeños que dicen que su mayor freno es la falta de capital de trabajo" },
        { v: "[X]", l: "Días que pasan, en promedio, entre que embarcan y que el comprador les paga" },
        { v: "$[X]B", l: "Financiamiento que le falta a las pymes exportadoras de la región" },
        { v: "[X]%", l: "Cuánto más caro les sale el crédito fuera del banco" },
      ],
      statsFootnote:
        "Cifras pendientes de publicar con fuente verificable (BID, Banco Mundial, BCRP, PROMPERÚ).",
      whyFailTitle: "Por qué nadie los atiende",
      whyFail: [
        "El banco mira las garantías y el pasado contable, no el pedido que el exportador tiene firmado ni los dólares que va a cobrar por él. Un negocio con pedidos en firme pero sin propiedades no pasa el filtro.",
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
          t: "Tu dinero se reparte",
          b: "Nunca vas a tener todo tu dinero en un solo préstamo. El mínimo es repartirlo entre 15. Así un negocio que no paga te hace un rasguño, no un hueco.",
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
        ["Préstamos por persona", "15 o más", "Sin datos"],
        ["Dinero recuperado tras un atraso", "60% o más", "Sin datos"],
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
              q: "¿Cuánto es lo mínimo y cómo cobro?",
              a: "Lo mínimo para entrar al primer ciclo son $5,000. Cobras cada mes, en proporción a lo que hayan pagado los negocios de tu cartera. Apuntamos a un 14% al año en dólares, pero es un objetivo, no una garantía.",
            },
            {
              q: "¿Qué pasa si un negocio no paga?",
              a: "Por eso tu dinero se reparte entre 15 préstamos o más: uno que falle no te tumba. Además ponemos capital nuestro que absorbe las primeras pérdidas antes de que te toquen a ti. Apuntamos a que falle menos del 5%.",
            },
            {
              q: "¿Puedo sacar mi dinero antes?",
              a: "Tu dinero queda comprometido con los plazos de los préstamos, que van de 2 a 6 meses. Lo que cobras cada mes sí puedes retirarlo o volver a prestarlo. Si necesitas salir del todo antes de tiempo, lo vemos caso por caso.",
            },
            {
              q: "¿Y los impuestos?",
              a: "Lo que ganas es un ingreso y tributa según las reglas del país donde vives. Te damos un reporte anual con la información para declararlo. Consulta con tu contador, nosotros no damos asesoría fiscal.",
            },
            {
              q: "¿El 14% está garantizado?",
              a: "No. Es un objetivo, no una promesa. Repartir el dinero entre varios préstamos y poner capital propio primero reduce bastante el riesgo, pero prestar dinero nunca está libre de perderlo.",
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
          "We lend dollars to Peruvian exporters who already get paid in dollars. Target return of 14% a year in USD, paid by businesses repaying real loans.",
      },
      hero: {
        tag: "2026 pilot · Peru · Limited seats",
        h1: "Your dollars, lent to people who already earn dollars.",
        sub: "Finnoba connects idle dollars with Peruvian exporters that banks won't serve. Target return of 14% a year in USD, backed by loans to real businesses.",
        primary: "I want to lend",
        secondary: "I need financing",
        badges: ["Everything in dollars", "You start at $500", "Peru, first market"],
      },
      preview: {
        url: "app.finnoba.xyz",
        search: "Search businesses",
        addFunds: "Add funds",
        title: "Available businesses",
        sub: "Lend to vetted exporters and get paid in dollars.",
        headers: { business: "BUSINESS", amount: "AMOUNT", term: "TERM", yield: "RETURN", grade: "LEVEL" },
      },
      stats: [
        { label: "Stage", value: "2026 pilot", sub: "we haven't lent yet" },
        { label: "Target return", value: "14%", sub: "a year in USD · not guaranteed", subColor: "#157A47" },
        { label: "First market", value: "Peru", sub: "exporters paid in dollars" },
      ],
      markets: {
        eyebrow: "What it will look like",
        title: "Lend to real exporters. Get paid in dollars.",
        sub: "Every business is checked before it's listed: that it exists, that it exports and that it gets paid in dollars.",
        browse: "See the terms",
        yieldLabel: "Return per year",
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
            eyebrow: "Target return",
            title: "14% a year in dollars, backed by loans",
            body: "What the lender earns is paid by real businesses repaying real loans. No speculation involved. It's a target, not a guarantee.",
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
              { t: "It spreads across several businesses", d: "Your money doesn't go to one loan — it spreads out so a single default doesn't hit you whole." },
              { t: "You collect every month", d: "Businesses repay monthly in dollars. The target is 14% a year." },
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
          t: "Your money spreads across several businesses",
          b: "It doesn't go to a single loan. It spreads across several exporters so one default doesn't hit you whole. Every business is checked first.",
        },
        {
          k: "03",
          t: "You collect every month",
          b: "Businesses repay in monthly instalments. You get your share each month along with a report on how every loan is doing.",
        },
      ],
      levelsTitle: "If you're going to borrow: the ladder",
      levelsIntro:
        "Nobody starts big. Your first loan is $500 over a few months. Repay it in full and you move up a level: we lend you more, for longer, at a lower rate. You don't choose the rate — you earn it by paying.",
      levelsHead: ["Level", "Amount", "Term"],
      levelsFoot:
        "The rate drops at every level. We put it in writing before you accept anything, and always within the cap set by Peruvian law.",
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
        { t: "It spreads", b: "Your money is divided across several loans." },
        { t: "We check", b: "We verify each business before releasing money." },
        { t: "Exporters", b: "Peruvian businesses paid in dollars." },
        { t: "We collect", b: "Monthly follow-up on every instalment." },
        { t: "We pay you", b: "Your share, every month." },
      ],
      tableTitle: "Terms and timing",
      table: [
        ["Loan terms", "2 to 6 months"],
        ["How often you collect", "Every month"],
        ["Report", "5th of the following month"],
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
        ["Minimum amount", "$5,000"],
        ["Suggested maximum", "$250,000 per cycle"],
        ["Target return", "14% a year in dollars (not guaranteed)"],
        ["Who we lend to", "Peruvian exporters paid in dollars"],
        ["How long it lasts", "2 to 6 months, depending on the loans in your book"],
        ["How often you collect", "Every month"],
        ["Leaving early", "Assessed case by case"],
        ["Finnoba's fee", "[TBD]"],
        ["Minimum loans per person", "15, so you don't depend on one"],
      ],
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
        "A Peruvian exporter sells abroad and gets paid in dollars. Even so, when they need money to produce the next order, the bank asks for real estate as collateral and years of audited accounts. The season doesn't wait, so they end up financing it expensively or out of their own pocket. That gap is the business.",
      stats: [
        { v: "[X]%", l: "Small exporters who say lack of working capital is their biggest constraint" },
        { v: "[X]", l: "Days, on average, between shipping and getting paid by the buyer" },
        { v: "$[X]B", l: "Financing the region's exporting SMEs are missing" },
        { v: "[X]%", l: "How much more credit costs them outside a bank" },
      ],
      statsFootnote:
        "Figures pending publication with a verifiable source (IDB, World Bank, BCRP, PROMPERÚ).",
      whyFailTitle: "Why nobody serves them",
      whyFail: [
        "A bank looks at collateral and past accounts, not at the order the exporter already has signed or the dollars they'll be paid for it. A business with firm orders but no property doesn't clear the filter.",
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
          t: "Your money spreads out",
          b: "You'll never have all your money in a single loan. The minimum is spreading it across 15. That way a business that doesn't pay leaves a scratch, not a hole.",
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
        ["Loans per person", "15 or more", "No data"],
        ["Money recovered after a late payment", "60% or more", "No data"],
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
              q: "What's the minimum and how do I get paid?",
              a: "The minimum to join the first cycle is $5,000. You collect every month, in proportion to what the businesses in your book have repaid. We're aiming for 14% a year in dollars, but it's a target, not a guarantee.",
            },
            {
              q: "What if a business doesn't pay?",
              a: "That's why your money spreads across 15 loans or more: one failing doesn't sink you. On top of that we put in our own capital, which absorbs the first losses before they reach you. We're aiming for under 5% to fail.",
            },
            {
              q: "Can I take my money out early?",
              a: "Your money is committed for the length of the loans, which run 2 to 6 months. What you collect each month you can withdraw or lend again. If you need to exit entirely ahead of time, we look at it case by case.",
            },
            {
              q: "What about taxes?",
              a: "What you earn is income and is taxed under the rules of the country where you live. We give you an annual report with the information to declare it. Check with your accountant — we don't give tax advice.",
            },
            {
              q: "Is the 14% guaranteed?",
              a: "No. It's a target, not a promise. Spreading money across several loans and putting our own capital in first cuts the risk considerably, but lending money is never free of losing it.",
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
