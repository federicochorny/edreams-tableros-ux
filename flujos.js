// Task flows y user flows de la situación ACTUAL de eDreams (web). No son propuestas de rediseño.
// Nodos con clase "doc": pasos tomados del centro de ayuda oficial o que requieren una reserva/cuenta real (no observados).

window.FLUJOS = [
  {
    id: 'comprar-vuelo',
    titulo: 'Comprar un vuelo',
    prioridad: 1,
    porque: 'Es la tarea central del producto y la puerta de entrada al resto de los servicios, Prime incluido.',
    fuente: 'Observado en edreams.es el 13/09/2026 (Madrid → Roma) hasta el formulario de datos. El pago y la confirmación no se ejecutaron.',
    task: [
      'Entrar a edreams.es', 'Cerrar el modal de inicio de sesión', 'Elegir «Ida y vuelta»', 'Escribir el origen',
      'Escribir el destino', 'Elegir las fechas de ida y vuelta', 'Indicar la cantidad de viajeros', 'Tocar «Buscar vuelos»',
      'Esperar los resultados', 'Comparar vuelos y precios', 'Elegir una tarifa', 'Tocar «Continuar sin hotel»',
      'Elegir paquete Basic, Flex o Super Flex', 'Agregar maletas y asientos (opcional)', 'Completar los datos del pasajero',
      'Completar los datos del comprador', 'Tocar «Continuar»', 'Pagar *', 'Recibir la confirmación *'
    ],
    user: `flowchart TD
  A(["Inicio"]) --> B["Home de eDreams"]
  B --> C{"¿Aparece el modal de inicio de sesión?"}
  C -- Sí --> D["Modal «Mejor precio garantizado»"]
  D --> E{"¿Inicia sesión?"}
  E -- Sí --> E1["Login con Google o e-mail"]
  E -- No --> F
  E1 --> F
  C -- No --> F[/"Ingresa origen, destino, fechas y viajeros"/]
  F --> G["Toca «Buscar vuelos»"]
  G --> H{"¿Datos completos y válidos?"}
  H -- No --> H1["Errores en rojo junto a cada campo"]
  H1 --> F
  H -- Sí --> I["Pestaña nueva: carga con skeleton (~12 s)<br/>La pestaña original pasa a Hoteles"]
  I --> J["Resultados: Mejor / Más barato / Más corto"]
  J --> K{"¿Aplica filtros?"}
  K -- Sí --> K1[/"Escalas, horarios, compañías"/]
  K1 --> J
  K -- No --> L{"¿Elige el precio con Prime?"}
  L -- Sí --> L1["Tarifa Prime: prueba 15 días,<br/>luego 99,99 €/año"]
  L -- No --> M
  L1 --> M["«Tu viaje a Roma»: oferta de hotel"]
  M --> N{"¿Agrega hotel?"}
  N -- Sí --> N1["Elige habitación"]
  N1 --> O
  N -- No --> O["Checkout: paquete, maletas y asientos"]
  O --> P[/"Datos del pasajero y del comprador"/]
  P --> Q{"¿Formulario válido?"}
  Q -- No --> Q1["Mensajes de error en los campos"]
  Q1 --> P
  Q -- Sí --> R["Pago"]
  R --> S{"¿Pago aprobado?"}
  S -- No --> R
  S -- Sí --> T["Confirmación y e-mail"]
  T --> Z(["Fin"])
  class E1,N1,R,S,T doc`,
    problemas: [
      'Un modal de inicio de sesión interrumpe la home antes de que la persona pueda buscar.',
      'Los resultados se abren en una pestaña nueva y la original cambia sola a hoteles, lo que rompe el «volver atrás».',
      'La tarjeta de resultados destaca el precio Prime; la suscripción que implica queda en letra chica.',
      'La pantalla de hotel intermedia muestra duraciones erróneas («150h 00m») y un precio con céntimos distinto al de resultados.',
      'El checkout reúne cinco bloques en una página larga, con una oferta repetida («Congelar precio») que tapa campos.'
    ]
  },
  {
    id: 'contratar-prime',
    titulo: 'Contratar eDreams Prime',
    prioridad: 2,
    porque: 'Es el modelo de negocio de eDreams y el origen del hallazgo central del proyecto: los reclamos por cobros de Prime.',
    fuente: 'Observado hasta el formulario «Datos de contacto» del alta y hasta el checkout con precio Prime. No se completó ninguna suscripción.',
    task: [
      'Entrar a edreams.es', 'Tocar «¿Qué es Prime?»', 'Leer los beneficios', 'Ir a «Elige tu plan»',
      'Comparar Prime y Prime Plus', 'Tocar «Únete a Prime»', 'Completar nombre, apellido y e-mail', 'Tocar «Continuar»',
      'Ingresar los datos de pago *', 'Tocar «Iniciar suscripción» *', 'Recibir el e-mail de bienvenida *'
    ],
    user: `flowchart TD
  A(["Inicio"]) --> B{"¿Llega desde una búsqueda de vuelos?"}
  B -- Sí --> C["Resultados con tarjeta «Precio con descuento»"]
  C --> D["Toca el precio Prime"]
  D --> E["Checkout con «Descuento Prime aplicado»"]
  E --> F[/"Datos del pasajero y del comprador"/]
  F --> G["Pago de la reserva"]
  G --> H["Prueba Prime de 15 días activa,<br/>renovación automática"]
  H --> Z(["Fin"])
  B -- No --> I["Home: toca «¿Qué es Prime?»"]
  I --> J["Landing de eDreams Prime"]
  J --> K["Tabla «Elige tu plan»: 8,99 €/mes o 10,99 €/mes"]
  K --> L{"¿Elige Prime Plus?"}
  L -- Sí --> L1["Alta de Prime Plus"]
  L1 --> M
  L -- No --> M["Alta: «Crea una cuenta > Ingresa tus datos > Iniciar suscripción»"]
  M --> N[/"Nombre, apellido y e-mail"/]
  N --> O{"¿Datos válidos?"}
  O -- No --> O1["Mensajes de error"]
  O1 --> N
  O -- Sí --> P[/"Datos y medio de pago"/]
  P --> Q{"¿Pago aprobado?"}
  Q -- No --> P
  Q -- Sí --> R["Bienvenida a Prime"]
  R --> Z
  class G,H,L1,O1,P,Q,R doc`,
    problemas: [
      'Hay dos caminos de entrada y el más corto (tocar el precio Prime en resultados) no se presenta como alta a una suscripción.',
      'El resumen del checkout con precio Prime no muestra junto al total el costo de la suscripción que sigue a la prueba.',
      'El precio se comunica distinto en cada pantalla: 99,99 €/año, 8,99 €/mes con plan anual, 8,99 €/mes durante 12 meses.',
      'El alta sí muestra los pasos restantes; el checkout de vuelos no lo hace.'
    ]
  },
  {
    id: 'cancelar-prime',
    titulo: 'Cancelar eDreams Prime',
    prioridad: 3,
    porque: 'Es la tarea donde se concentran las quejas relevadas en el desk research: cobros de renovación que las personas no esperaban.',
    fuente: 'Documentado con el centro de ayuda oficial (help.edreams.es) y la pantalla de atención observada. No se probó con una cuenta Prime real.',
    task: [
      'Buscar cómo cancelar Prime', 'Tocar «¿Te podemos ayudar?»', 'Ir al centro de ayuda público', 'Entrar a «Otros › Prime»',
      'Abrir «¿Cómo puedo gestionar mi suscripción Prime?»', 'Anotar el teléfono 93 550 01 41', 'Llamar entre 9:00 y 20:00 (CET) *',
      'Identificarse con el agente *', 'Pedir la cancelación *', 'Recibir la confirmación *'
    ],
    user: `flowchart TD
  A(["Inicio"]) --> B["Home: toca «¿Te podemos ayudar?»"]
  B --> C["Área de atención: temas Cancelaciones, Modificaciones, Equipaje…"]
  C --> D{"¿Encuentra una opción para gestionar Prime?"}
  D -- Sí --> D1["Gestión dentro de la cuenta"]
  D1 --> Z
  D -- No --> E["Centro de ayuda público"]
  E --> F["Sección «Prime»"]
  F --> G["Artículo: llamar al 93 550 01 41, de 9:00 a 20:00 (CET)"]
  G --> H{"¿Está dentro del horario?"}
  H -- No --> H1["Espera al próximo horario de atención"]
  H1 --> H
  H -- Sí --> I["Llamada con agente"]
  I --> J[/"Datos de la cuenta Prime"/]
  J --> K{"¿Está dentro de los 14 días del alta?"}
  K -- Sí --> K1["Cancelación con reembolso"]
  K -- No --> K2["Se cancela la renovación;<br/>el acceso sigue hasta fin del período"]
  K1 --> L
  K2 --> L["Confirmación de la baja"]
  L --> Z(["Fin"])
  class D1,I,J,K,K1,K2,L doc`,
    problemas: [
      'No hay una salida online visible: la ayuda deriva a una llamada telefónica en horario de España.',
      'El área de atención no ofrece «Prime» como tema; hay que ir al centro de ayuda público.',
      'Asimetría: el alta se hace online en tres pasos, pero la baja requiere una llamada.',
      'La renovación es automática y el reembolso depende de actuar a tiempo (14 días según el alta).'
    ],
    nota: 'El nodo «Gestión dentro de la cuenta» se incluye como decisión posible, pero no pudimos verificarlo sin una cuenta Prime; la ayuda oficial solo menciona el teléfono.'
  },
  {
    id: 'check-in',
    titulo: 'Hacer el check-in',
    prioridad: 4,
    porque: 'Es la gestión posterior más frecuente antes de viajar y eDreams la promociona como servicio («Te hacemos el check-in»).',
    fuente: 'Documentado con los artículos «¿Cómo hacer el check in?» y «¿Cuándo recibiré mi tarjeta de embarque?». Requiere una reserva real.',
    task: [
      'Descargar la app de eDreams', 'Iniciar sesión', 'Abrir «Mis viajes»', 'Elegir el viaje', 'Tocar «Pedir ahora»',
      'Esperar a que abra la facturación (≈24 h antes)', 'Recibir las tarjetas de embarque por e-mail', 'Guardar o imprimir las tarjetas'
    ],
    user: `flowchart TD
  A(["Inicio"]) --> B{"¿Tiene la app instalada?"}
  B -- No --> B1["Tienda de aplicaciones: descarga eDreams"]
  B1 --> C
  B -- Sí --> C["App: pantalla de Perfil"]
  C --> D{"¿Tiene la sesión iniciada?"}
  D -- No --> D1[/"E-mail y contraseña o enlace por e-mail"/]
  D1 --> E
  D -- Sí --> E["Mis viajes"]
  E --> F["Detalle del viaje"]
  F --> G["Toca «Pedir ahora»"]
  G --> H{"¿La aerolínea y la ruta admiten check-in anticipado?"}
  H -- No --> H1["Check-in en la web de la aerolínea o en el mostrador"]
  H1 --> Z
  H -- Sí --> I{"¿Faltan menos de 24 h para salir?"}
  I -- No --> I1["Solicitud pendiente hasta que abra la facturación"]
  I1 --> I
  I -- Sí --> J["E-mail con tarjetas de embarque"]
  J --> K{"¿Recibió todas las tarjetas?"}
  K -- No --> K1["Contactar a atención al cliente"]
  K1 --> Z
  K -- Sí --> Z(["Fin"])
  class B1,C,D,D1,E,F,G,H,H1,I,I1,J,K,K1 doc`,
    problemas: [
      'Según la ayuda, el check-in anticipado exige la app, aunque la persona haya reservado en la web.',
      'Si el viaje tiene varias aerolíneas, las tarjetas llegan por separado, en momentos distintos.',
      'Algunas rutas no admiten el servicio y la persona tiene que resolverlo por su cuenta con la aerolínea.'
    ]
  },
  {
    id: 'cancelar-reserva',
    titulo: 'Cancelar una reserva',
    prioridad: 5,
    porque: 'Es una gestión de alto impacto económico: el reembolso depende de la tarifa y de los gastos de gestión.',
    fuente: 'Observado hasta la pantalla de acceso de «Gestionar reserva». El resto está documentado con el artículo «¿Cómo cancelar un vuelo?».',
    task: [
      'Entrar a edreams.es', 'Tocar «Gestionar reserva»', 'Ingresar e-mail y localizador (o iniciar sesión)', 'Abrir la reserva en «Mis viajes»',
      'Revisar las condiciones de cancelación', 'Tocar «Cancelar ahora» o solicitar la cancelación', 'Confirmar la cancelación',
      'Recibir la información del reembolso'
    ],
    user: `flowchart TD
  A(["Inicio"]) --> B["Home: toca «Gestionar reserva»"]
  B --> C["Pantalla de acceso: enlace por e-mail, contraseña o localizador"]
  C --> D{"¿Tiene cuenta en eDreams?"}
  D -- Sí --> D1[/"E-mail → enlace de inicio de sesión"/]
  D -- No --> D2[/"E-mail + localizador de 10 u 11 dígitos"/]
  D1 --> E
  D2 --> E{"¿Datos correctos?"}
  E -- No --> E1["Mensaje de error"]
  E1 --> C
  E -- Sí --> F["Mis viajes: detalle de la reserva"]
  F --> G{"¿Ya hizo el check-in?"}
  G -- Sí --> G1["Cancelar el check-in con la aerolínea"]
  G1 --> F
  G -- No --> H{"¿Tiene cancelación gratuita o «por cualquier motivo»?"}
  H -- Sí --> H1["Toca «Cancelar ahora»"]
  H1 --> K
  H -- No --> I["Opciones: reembolso según tarifa,<br/>gastos de gestión de 60 € por billete"]
  I --> J{"¿Acepta las condiciones?"}
  J -- No --> Z
  J -- Sí --> K["Confirmación de la cancelación y del reembolso"]
  K --> Z(["Fin"])
  class D1,D2,E,E1,F,G,G1,H,H1,I,J,K doc`,
    problemas: [
      'Desde «¿Te podemos ayudar?», el tema «Cancelaciones» lleva primero a iniciar sesión, sin información previa.',
      'El costo real (gastos de gestión de 60 € por billete) aparece en la ayuda y no en la elección de tarifa.',
      'Si ya se hizo el check-in, hay que salir de eDreams, cancelarlo con la aerolínea y volver.'
    ]
  }
];

// Tareas relevadas antes de priorizar (consigna: al menos cinco).
window.TAREAS_LISTADO = [
  ['Comprar un vuelo', 'Alta', 'Tarea central; origen de la mayoría de los ingresos y de la venta de Prime.'],
  ['Contratar Prime', 'Alta', 'Modelo de negocio; vinculado al hallazgo central del desk research.'],
  ['Cancelar Prime', 'Alta', 'Concentra los reclamos por cobros no esperados.'],
  ['Hacer el check-in', 'Media', 'Gestión frecuente antes de viajar, promocionada en la home.'],
  ['Cancelar una reserva', 'Media', 'Alto impacto económico; depende de la tarifa.'],
  ['Buscar y reservar un hotel', 'Baja', 'Secundaria para este proyecto; comparte patrón con vuelos.'],
  ['Activar una alerta de precios', 'Baja', 'Función de apoyo a la búsqueda.'],
  ['Pedir una factura', 'Baja', 'Gestión administrativa poco frecuente.']
];
