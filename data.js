// Contenido de los tableros. Evidencia capturada en www.edreams.es (web, escritorio 1366 px y móvil 390 px) el 13/09/2026.
// Búsqueda de referencia: Madrid → Roma, 16/10 al 23/10/2026, 1 adulto. No se realizó ningún pago.

window.LEYES = [
  {
    grupo: 'Percepción y jerarquía visual',
    ley: 'Ley de Fitts',
    dice: 'El tiempo para alcanzar un objetivo depende de su tamaño y de la distancia al mismo.',
    pregunta: '¿Los botones o CTAs de uso frecuente son grandes y están cerca (pulgar en mobile, cursor en desktop)?',
    estado: 'cumple',
    captura: 'evidencia/x-mobile-cta.jpg',
    donde: 'Home móvil · buscador de vuelos',
    explicacion: 'En móvil, «Buscar vuelos» ocupa todo el ancho de la pantalla y queda justo debajo del último campo del formulario, al alcance del pulgar. El botón secundario «Buscar Vuelo + Hotel» tiene el mismo tamaño, pero en contorno, así que no compite con el principal.'
  },
  {
    grupo: 'Percepción y jerarquía visual',
    ley: 'Efecto Von Restorff',
    dice: 'El elemento que se diferencia del resto es el que mejor se recuerda.',
    pregunta: '¿La acción principal (CTA primario) se distingue con claridad del resto de los elementos?',
    estado: 'cumple',
    captura: 'evidencia/x-busqueda-vacia.jpg',
    donde: 'Home escritorio · buscador',
    explicacion: '«Buscar vuelos» es el único botón relleno de azul del buscador; el resto son pestañas, radios y un botón en contorno. En resultados, en cambio, el bloque que más se diferencia es el azul del precio Prime, no la tarifa sin suscripción (ver Estética-Usabilidad).'
  },
  {
    grupo: 'Percepción y jerarquía visual',
    ley: 'Efecto Estética-Usabilidad',
    dice: 'Un diseño lindo se percibe como más usable, aunque no lo sea.',
    pregunta: '¿La estética general está “comprando” tolerancia a fricciones reales de uso?',
    estado: 'rompe',
    captura: 'evidencia/x-precio-prime.jpg',
    donde: 'Resultados de búsqueda · tarjeta de vuelo',
    explicacion: 'La tarjeta azul «Precio con descuento», con la etiqueta «Ahorra 53 € en total», presenta el precio Prime como un simple descuento. La condición que genera la fricción (prueba gratis de 15 días y luego 99,99 €/año) aparece en letra chica y con bajo contraste dentro del mismo bloque.'
  },
  {
    grupo: 'Decisión y carga cognitiva',
    ley: 'Ley de Hick',
    dice: 'Más opciones y complejidad = más tiempo para decidir.',
    pregunta: '¿Los menús y formularios están simplificados? ¿Se usa progressive disclosure?',
    estado: 'rompe',
    captura: 'evidencia/x-home.jpg',
    donde: 'Home escritorio · primer pantallazo',
    explicacion: 'Antes de buscar aparecen 7 opciones en el menú superior, 5 pestañas de producto, 3 tipos de viaje, clase, «Vuelos directos», 2 botones de búsqueda y un carrusel de 10 banners, además de un modal de inicio de sesión al entrar. Hay progressive disclosure en detalles como la clase («Turista ▾») o los viajeros, pero la primera decisión sigue siendo recargada.'
  },
  {
    grupo: 'Decisión y carga cognitiva',
    ley: 'Ley de Miller',
    dice: 'La memoria de trabajo retiene solo 7 (± 2) elementos.',
    pregunta: '¿La información está agrupada en bloques (chunks) manejables?',
    estado: 'cumple',
    captura: 'evidencia/x-errores-form.jpg',
    donde: 'Checkout · datos del pasajero y del comprador',
    explicacion: 'El checkout separa la información en tarjetas: paquete, maletas, asientos, datos del pasajero y datos del comprador. Dentro de cada una, los campos se agrupan (nombre y apellido en una fila; día, mes y año de nacimiento en otra). Lo que no ayuda es que los cinco bloques estén en una sola página muy larga.'
  },
  {
    grupo: 'Decisión y carga cognitiva',
    ley: 'Navaja de Occam',
    dice: 'Entre dos soluciones igual de efectivas, gana la más simple.',
    pregunta: '¿Hay elementos que podrían eliminarse sin perder función?',
    estado: 'rompe',
    captura: 'evidencia/x-popup-congelar.jpg',
    donde: 'Checkout · «Congelar precio»',
    explicacion: 'La misma oferta de «Congelar precio por 1 €» aparece tres veces en el checkout: un banner, un botón fijo y un popup flotante. El popup queda encima de los campos del formulario, incluidos los mensajes de error del e-mail. Una sola mención cumpliría la misma función.'
  },
  {
    grupo: 'Decisión y carga cognitiva',
    ley: 'Ley de Tesler',
    dice: 'La complejidad no desaparece: se desplaza del sistema al usuario.',
    pregunta: '¿Quién absorbe la complejidad de la tarea: el diseño o la persona usuaria?',
    estado: 'rompe',
    captura: 'evidencia/x-prime-telefono.jpg',
    donde: 'Centro de ayuda · «¿Cómo puedo gestionar mi suscripción Prime?»',
    explicacion: 'Suscribirse a Prime se hace online en tres pasos, pero el propio centro de ayuda indica que, para cambiar la suscripción, hay que llamar al 93 550 01 41 de 9:00 a 20:00 (CET). Toda la complejidad de dar de baja la absorbe la persona: horario de España, llamada y espera, y además tiene que acordarse antes de la renovación automática.'
  },
  {
    grupo: 'Memoria y motivación',
    ley: 'Regla Peak-End',
    dice: 'Se recuerda el pico emocional y el final de la experiencia, no el promedio.',
    pregunta: '¿Cómo es el cierre del flujo (confirmación, error, pantalla de éxito)?',
    estado: 'cumple',
    captura: 'evidencia/x-404.jpg',
    donde: 'Página de error 404',
    explicacion: 'Cuando el recorrido termina en un error, la página 404 cierra con humor (una cita de Eduardo Galeano) y ofrece tres salidas: Inicio, Buscar vuelos y Comparar hoteles. Así el final no es un callejón sin salida. No evaluamos la pantalla de confirmación de compra porque exige pagar una reserva real.'
  },
  {
    grupo: 'Memoria y motivación',
    ley: 'Efecto Zeigarnik',
    dice: 'Lo incompleto o interrumpido se recuerda mejor que lo terminado.',
    pregunta: '¿Hay señales claras de progreso o tareas pendientes que inviten a volver?',
    estado: 'cumple',
    captura: 'evidencia/x-resultados-top.jpg',
    donde: 'Resultados de búsqueda',
    explicacion: 'La búsqueda queda «abierta» con «Búsquedas anteriores» en el encabezado, «Activar alerta de precios» y «Congela este precio por 1 € y reserva en 3 días». Estas funciones dejan la reserva como tarea pendiente e invitan a volver.'
  },
  {
    grupo: 'Memoria y motivación',
    ley: 'Efecto Gradiente de Meta',
    dice: 'La motivación aumenta cuanto más cerca se está de la meta.',
    pregunta: '¿Se usan barras de progreso, pasos numerados o avance regalado?',
    estado: 'cumple',
    captura: 'evidencia/x-prime-alta-pasos.jpg',
    donde: 'Alta de Prime · «Datos de contacto»',
    explicacion: 'El alta de Prime muestra la ruta «Crea una cuenta > Ingresa tus datos > Iniciar suscripción», así que se ve cuánto falta. Contraste: en el primer paso del checkout de vuelos no vimos un indicador equivalente de pasos restantes.'
  },
  {
    grupo: 'Consistencia y robustez',
    ley: 'Ley de Jakob',
    dice: 'Los usuarios esperan que un producto funcione como los que ya conocen.',
    pregunta: '¿Sigue las convenciones de su categoría o plataforma, o exige aprender un patrón nuevo?',
    estado: 'rompe',
    captura: 'evidencia/x-pestana-hoteles.jpg',
    donde: 'Home → «Buscar vuelos»',
    explicacion: 'Lo esperable al tocar «Buscar» es ver los resultados en la misma pestaña. En eDreams, los vuelos se abren en una pestaña nueva y la original cambia sola a una búsqueda de hoteles con las mismas fechas. Si la persona vuelve atrás, no encuentra lo que dejó.'
  },
  {
    grupo: 'Consistencia y robustez',
    ley: 'Ley de Postel',
    dice: 'Ser flexible en lo que se recibe, preciso en lo que se envía.',
    pregunta: '¿Los formularios toleran variaciones razonables de formato de entrada?',
    estado: 'rompe',
    captura: 'evidencia/x-postel.jpg',
    donde: 'Checkout · datos (probado con datos ficticios, sin enviar)',
    explicacion: 'El formulario acepta tildes y ñ («José Muñoz»), aunque el aviso pide «solo caracteres latinos (A-Z)», y también un teléfono con espacios. En cambio, rechaza un e-mail válido por tener un espacio al inicio o al final y responde que las direcciones no coinciden, en lugar de quitar el espacio.'
  },
  {
    grupo: 'Consistencia y robustez',
    ley: 'Umbral de Doherty',
    dice: 'Responder en menos de 400 ms mantiene la productividad y la atención.',
    pregunta: '¿Hay feedback inmediato ante cada acción (loading, skeleton, estado de carga)?',
    estado: 'cumple',
    captura: 'evidencia/x-skeleton.jpg',
    donde: 'Carga de resultados',
    explicacion: 'Mientras busca, el sitio muestra enseguida un skeleton de tarjetas, una barra de progreso y el texto «Encontrando las mejores ofertas…». Hay feedback inmediato, aunque en nuestra medición los resultados completos tardaron unos 12 segundos.'
  },
  {
    grupo: 'Priorización',
    ley: 'Principio de Pareto',
    dice: 'En muchos sistemas, el 80% del efecto proviene del 20% de las causas.',
    pregunta: '¿El diseño prioriza visual y funcionalmente las tareas más usadas por la mayoría?',
    estado: 'cumple',
    captura: 'evidencia/x-autocompletar.jpg',
    donde: 'Home · buscador',
    explicacion: 'La tarea principal, buscar un vuelo, ocupa el primer pantallazo con la pestaña «Vuelos» activa por defecto y autocompletado de ciudad y aeropuerto. Las tareas secundarias (trenes, coches, Prime) quedan en pestañas o en el menú.'
  }
];

window.HEURISTICAS = [
  {
    n: 1,
    nombre: 'Visibilidad del estado del sistema',
    resumen: 'Mantener a los usuarios informados sobre lo que está pasando.',
    severidad: 2,
    captura: 'evidencia/x-duracion-150h.jpg',
    donde: 'Pantalla intermedia «Tu viaje a Roma» (oferta de hotel)',
    explicacion: 'Tras elegir el vuelo, el resumen informa una duración de «150h 00m» y «160h 00m» para trayectos directos de 2 h 30 y 2 h 40, y el precio cambia de 215 € a 214,15 € sin aviso. El sistema sí da feedback de carga (skeleton), pero la información de estado es incorrecta.',
    impacto: 'La persona puede dudar de si eligió el vuelo correcto o del precio que va a pagar justo antes del checkout. Resta confianza, aunque no bloquea la tarea.'
  },
  {
    n: 2,
    nombre: 'Correspondencia entre el sistema y el mundo real',
    resumen: 'Hablar el lenguaje del usuario.',
    severidad: 2,
    captura: 'evidencia/x-desglose.jpg',
    donde: 'Checkout · «Desglose del precio» (tarifa sin Prime)',
    explicacion: 'El desglose muestra «Descuento Prime no aplicado −52,98 €» con signo negativo y tachado, aunque ese importe no se descuenta: el total sigue siendo 214,15 €. También usa términos internos sin explicar, como «Gastos de gestión», «Oferta Genius» o «Congelar precio».',
    impacto: 'Una línea negativa que no resta obliga a interpretar la lógica comercial y funciona más como publicidad de Prime que como información de la compra.'
  },
  {
    n: 3,
    nombre: 'Control y libertad del usuario',
    resumen: 'Ofrecer salidas de emergencia claramente marcadas.',
    severidad: 4,
    captura: 'evidencia/x-prime-telefono.jpg',
    donde: 'Centro de ayuda · gestión de la suscripción Prime',
    explicacion: 'Entrar a Prime se hace con un clic en el precio Prime o con un alta online de tres pasos. La salida no está en la interfaz: para cambiar o cancelar la suscripción, la ayuda indica que hay que llamar por teléfono de 9:00 a 20:00 (CET), y la suscripción se renueva automáticamente.',
    impacto: 'Involucra dinero y una renovación recurrente. Sin una salida online, la persona que no llega a llamar a tiempo recibe un cobro no deseado. Coincide con los reclamos de consumidores relevados en el desk research, por eso la calificamos como catástrofe.'
  },
  {
    n: 4,
    nombre: 'Consistencia y estándares',
    resumen: 'Seguir las convenciones de la plataforma.',
    severidad: 2,
    captura: 'evidencia/x-prime-planes.jpg',
    donde: 'Landing de Prime vs. resultados de búsqueda',
    explicacion: 'El precio de «Prime» se comunica de formas distintas según la pantalla: en resultados, «prueba gratis de 15 días, luego 99,99 €/año»; en la landing, «8,99 €/mes, plan anual con pago mensual» (107,88 €/año); y en el alta, «8,99 €/mes durante 12 meses». No se explica si son planes diferentes. Además, el checkout promete descuentos «para 4 amigos y familiares después de tu prueba gratuita», pero en la tabla de planes ese beneficio figura solo en Prime Plus.',
    impacto: 'Sin una referencia única, la persona no puede anticipar cuánto le va a costar la suscripción.'
  },
  {
    n: 5,
    nombre: 'Prevención de errores',
    resumen: 'Diseño que prevenga que los problemas ocurran.',
    severidad: 3,
    captura: 'evidencia/x-resumen-prime.jpg',
    donde: 'Checkout con precio Prime · resumen lateral',
    explicacion: 'Al elegir el precio Prime en resultados, el resumen del checkout muestra «Descuento Prime aplicado −52,74 €» y un total de 160,37 €, pero no suma ni menciona al lado del total el costo de la suscripción que sigue a la prueba. Además, el sexo del pasajero aparece preseleccionado en «Hombre». No observamos el paso de pago.',
    impacto: 'Es fácil aceptar una suscripción creyendo que se trata solo de un descuento. Un error así se descubre recién con el cobro de la renovación.'
  },
  {
    n: 6,
    nombre: 'Reconocimiento antes que recuerdo',
    resumen: 'Hacer visibles los objetos, acciones y opciones.',
    severidad: 0,
    captura: 'evidencia/x-autocompletar.jpg',
    donde: 'Home · buscador',
    explicacion: 'El buscador autocompleta la ciudad y el aeropuerto con su código (MAD - Madrid), el calendario indica los días más baratos y los resultados mantienen visibles origen, destino, fechas y viajeros, además de «Búsquedas anteriores». No hace falta recordar códigos ni volver a escribir la búsqueda.',
    impacto: 'Reduce los errores de tipeo y la carga de memoria en la tarea más frecuente.'
  },
  {
    n: 7,
    nombre: 'Flexibilidad y eficiencia de uso',
    resumen: 'Aceleradores para el usuario experto.',
    severidad: 1,
    captura: 'evidencia/x-resultados-top.jpg',
    donde: 'Resultados de búsqueda',
    explicacion: 'Hay aceleradores útiles: los órdenes «Mejor / Más barato / Más corto» con precio visible, filtros de escalas y horarios, «Búsquedas anteriores» e inicio de sesión con Google. El check-in automático, en cambio, según la ayuda requiere descargar la app, lo que suma un paso a quien reservó en la web.',
    impacto: 'Problema menor: las personas expertas tienen atajos para buscar, pero la gestión posterior pide cambiar de canal.'
  },
  {
    n: 8,
    nombre: 'Diseño estético y minimalista',
    resumen: 'Eliminar información irrelevante o raramente necesaria.',
    severidad: 3,
    captura: 'evidencia/x-filtros.jpg',
    donde: 'Resultados de búsqueda',
    explicacion: 'Entre dos vuelos se intercalan un banner de Prime, un banner lateral «generado con asistencia de IA», el enlace «Congela este precio» debajo de cada tarjeta y la etiqueta «Último billete a este precio», que se repite en varias tarjetas. En el checkout, un popup tapa campos del formulario.',
    impacto: 'Compiten con la comparación de horarios y precios, y los avisos de urgencia repetidos pierden credibilidad. Lo calificamos como alto porque llega a tapar mensajes de error.'
  },
  {
    n: 9,
    nombre: 'Ayudar a reconocer, diagnosticar y recuperarse de errores',
    resumen: 'Mensajes en lenguaje llano.',
    severidad: 2,
    captura: 'evidencia/x-postel.jpg',
    donde: 'Checkout · e-mail del comprador (datos ficticios, sin enviar)',
    explicacion: 'Con campos vacíos, los mensajes son claros y aparecen junto a cada campo («Introduce un nombre»). Pero con un e-mail correcto que tiene un espacio al final, el sistema dice «Introduce un e-mail válido» y «Las dos direcciones deben coincidir», sin mencionar el espacio, que es la causa real.',
    impacto: 'La persona ve dos direcciones idénticas marcadas como error y no sabe qué corregir, así que puede quedarse trabada en el último paso antes del pago.'
  },
  {
    n: 10,
    nombre: 'Ayuda y documentación',
    resumen: 'Cuando es necesaria, debe ser fácil de buscar y orientada a la tarea.',
    severidad: 2,
    captura: 'evidencia/x-login-muro.jpg',
    donde: '«¿Te podemos ayudar?» → «Cancelaciones»',
    explicacion: 'El centro de ayuda público (help.edreams.es) tiene buscador y artículos por tarea. Pero, desde el acceso «¿Te podemos ayudar?», el tema «Cancelaciones» lleva primero a una pantalla de inicio de sesión, y para Prime la respuesta documentada es llamar por teléfono.',
    impacto: 'La ayuda existe, pero el camino más visible exige iniciar sesión antes de ver información. Quien solo quiere saber si puede cancelar tiene que buscar la versión pública por su cuenta.'
  }
];
