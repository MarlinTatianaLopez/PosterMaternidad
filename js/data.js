/**
 * @file data.js
 * @description Capa de Datos / Entidades predefinidas del documento "MAMÁ SEGURA"
 * Arquitectura Limpia: Los datos están desacoplados de la presentación visual.
 */

export const APP_DATA = {
  meta: {
    title: "Mamá Segura",
    subtitle: "Tu bienestar y el de tu bebé comienzan con el autocuidado",
    version: "1.0.0",
    disclaimer: "Esta plataforma tiene fines educativos. No reemplaza los controles prenatales, la consulta médica ni la atención de urgencias."
  },

  trimesters: [
    {
      id: "trimestre-1",
      title: "Primer Trimestre",
      subtitle: "Semanas 1 a 13 • Cambios iniciales y adaptación",
      badge: "Semanas 1-13",
      description: "Durante las primeras semanas pueden aparecer cansancio, sueño, náuseas, sensibilidad en los senos y cambios en el apetito. Algunas gestantes tienen pocos síntomas y otras presentan más molestias; la intensidad no define la salud del embarazo.",
      recommendations: [
        "Prioriza tu descanso y adapta las rutinas a tus niveles de energía.",
        "Toma ácido fólico y los suplementos formulados por el equipo de salud.",
        "Evita por completo la automedicación, incluso con productos naturales.",
        "Informa en consulta médica si las náuseas o vómitos te impiden comer o beber líquidos."
      ],
      warningSign: "Sangrado vaginal, dolor pélvico fuerte o vómitos continuos sin retener líquidos."
    },
    {
      id: "trimestre-2",
      title: "Segundo Trimestre",
      subtitle: "Semanas 14 a 27 • Crecimiento y primeros movimientos",
      badge: "Semanas 14-27",
      description: "En esta etapa tu barriga comienza a aumentar de tamaño y comienzas a subir de peso paulatinamente. Algunas molestias frecuentes son dolor de espalda, acidez, estreñimiento, calambres o hinchazón leve.",
      recommendations: [
        "Mantén una alimentación variada, rica en frutas, verduras y fibra.",
        "Hidrátate continuamente con agua segura a lo largo del día.",
        "Realiza actividad física moderada (caminar, natación suave) sólo si tu médico la autoriza.",
        "Comenta en cada control prenatal cualquier molestia para recibir pautas personalizadas."
      ],
      warningSign: "Dolor de cabeza severo, visión borrosa, zumbidos en oídos o hinchazón súbita."
    },
    {
      id: "trimestre-3",
      title: "Tercer Trimestre",
      subtitle: "Semanas 28 al parto • Recta final y preparación",
      badge: "Semanas 28-Parto",
      description: "Puedes sentir mayor cansancio, dificultad para hallar una postura cómoda para dormir, presión en la pelvis, necesidad frecuente de orinar y cambios en el patrón de sueño.",
      recommendations: [
        "Organiza con anticipación tus documentos, transporte, acompañante y maletín.",
        "Consulta cualquier duda sobre contracciones regulares, salida de líquido o movimientos del bebé.",
        "No esperes a que varias molestias coincidan para pedir orientación médica.",
        "Practica ejercicios de respiración y descanso en posición lateral izquierda."
      ],
      warningSign: "Disminución marcada de movimientos del bebé, salida de líquido amniótico o sangrado."
    }
  ],

  careGuides: [
    {
      id: "nutricion",
      category: "Alimentación",
      tag: "Nutrición Segura",
      title: "Alimentación Balanceada y Segura",
      icon: "🥗",
      summary: "No necesitas 'comer por dos' ni dietas extremas. La clave está en la variedad, calidad y rigurosa higiene alimentaria.",
      details: [
        "Consume alimentos variados: verduras, frutas, legumbres (fríjoles, lentejas), cereales y proteínas.",
        "Lava minuciosamente frutas y verduras con agua potable.",
        "Cocina completamente carnes, pescados y huevos (evita preparaciones crudas).",
        "Separa alimentos crudos de los listos para consumir para evitar contaminación cruzada.",
        "Consulta con tu médico antes de tomar vitaminas, minerales o infusiones herbales."
      ]
    },
    {
      id: "sintomas",
      category: "Bienestar",
      tag: "Manejo Digestivo",
      title: "Alivio de Síntomas Frecuentes",
      icon: "💧",
      summary: "Respuestas prácticas ante náuseas, estreñimiento y acidez estomacal recomendadas por profesionales.",
      details: [
        "Náuseas: Come porciones pequeñas varias veces al día; evita ayunos prolongados y toma sorbos frecuentes de agua.",
        "Estreñimiento: Incrementa gradualmente alimentos con fibra (avena, verduras) y realiza caminatas si están autorizadas.",
        "Acidez: Evita acostarte inmediatamente después de comer y modera comidas muy condimentadas o grasas.",
        "No utilices laxantes, antiácidos ni infusiones sin prescripción médica previa."
      ]
    },
    {
      id: "farmacos",
      category: "Seguridad",
      tag: "Medicamentos",
      title: "Uso Responsable de Medicamentos",
      icon: "💊",
      summary: "Incluso productos de venta libre o plantas medicinales deben ser validados por un profesional de la salud.",
      details: [
        "Informa siempre en consulta el nombre, dosis y motivo de cualquier producto que tomes.",
        "Reporta tus semanas exactas de gestación y alergias conocidas.",
        "No compartas medicamentos con familiares ni uses fórmulas de embarazos anteriores.",
        "Si tomaste algo sin consultar: anota el nombre y hora, y comunícalo a tu centro médico sin culpas."
      ]
    },
    {
      id: "emocional",
      category: "Salud Mental",
      tag: "Bienestar Emocional",
      title: "Salud Emocional y Red Segura",
      icon: "🤍",
      summary: "El embarazo despierta múltiples emociones. Reconocer cuándo necesitas apoyo es un acto de valentía y autocuidado.",
      details: [
        "Pide orientación si sientes tristeza profunda, angustia intensa o agotamiento extremo continuo.",
        "Habla con personas de confianza sobre tus temores o expectativas frente a la maternidad.",
        "Protección: Si vives situaciones de violencia física, psicológica o económica, no estás sola; acude a tu centro de salud o línea púrpura.",
        "Mantén a la mano un teléfono seguro y una persona de apoyo incondicional."
      ]
    },
    {
      id: "actividad",
      category: "Cuerpo",
      tag: "Movimiento y Descanso",
      title: "Actividad Física y Pausas Clave",
      icon: "🧘‍♀️",
      summary: "El movimiento moderado fortalece el cuerpo durante la gestación, siempre con aval del equipo tratante.",
      details: [
        "Caminar y actividades acuáticas suaves son opciones seguras para embarazos de bajo riesgo.",
        "Usa ropa holgada, transpirable y calzado con buen soporte.",
        "Suspende de inmediato ante mareo, dolor en el pecho, sangrado o contracciones regulares.",
        "Programa pausas activas y descansos reparadores recostada hacia el lado izquierdo."
      ]
    },
    {
      id: "oral",
      category: "Higiene",
      tag: "Salud Oral e Infecciones",
      title: "Salud Bucal y Prevención Infecciosa",
      icon: "🪥",
      summary: "Los cambios hormonales aumentan la sensibilidad de las encías. La atención odontológica es segura en el embarazo.",
      details: [
        "Cepilla tus dientes dos veces al día con pasta fluorada y usa hilo dental.",
        "Informa siempre a tu dentista sobre tus semanas de embarazo.",
        "Consulta ante inflamación persistente, dolor agudo, sangrado de encías o fiebre.",
        "El lavado frecuente de manos con agua y jabón es la mejor barrera contra infecciones."
      ]
    }
  ],

  newbornCare: [
    {
      title: "Cuidado del Cordón Umbilical",
      icon: "🌿",
      text: "Mantén el cordón limpio y seco al aire libre. No apliques alcohol, aceites, polvos ni cremas caseras. Dobla el pañal por debajo del ombligo para evitar roces y humedad. Acude a urgencias si presenta secreción con mal olor, pus, sangrado persistente o piel enrojecida alrededor."
    },
    {
      title: "Higiene y Primeros Baños",
      icon: "🛁",
      text: "Prepara de antemano la toalla, ropa limpia y jabón neutro. Verifica la temperatura del agua con el codo o dorso de la muñeca para asegurar que esté tibia. Mantén un ambiente sin corrientes de aire y NUNCA dejes al bebé solo, ni siquiera por un segundo."
    },
    {
      title: "Lactancia Materna con Apoyo",
      icon: "🤱",
      text: "La lactancia es un aprendizaje mutuo. Busca una postura cómoda donde el bebé abarque la mayor parte de la areola. No tienes que soportar dolor o grietas en soledad; solicita que el personal de salud observe la toma. No suministres agua, infusiones ni fórmulas sin indicación clínica."
    },
    {
      title: "Sueño Seguro del Bebé",
      icon: "🌙",
      text: "Acuesta siempre al bebé boca arriba en superficie firme y plana. Cuna vacía: sin almohadas, peluches ni mantas sueltas. La cuna debe estar en la misma habitación de los padres, pero NO en la misma cama (evitar colecho peligroso). Cero humo de tabaco en el hogar."
    }
  ],

  checklists: [
    {
      category: "maletin-mama",
      title: "Maletín para la Madre",
      items: [
        { id: "m1", label: "Documento de identidad original" },
        { id: "m2", label: "Carné de control prenatal y últimos exámenes/ecografías" },
        { id: "m3", label: "Medicamentos formulados (si aplica) con su fórmula médica" },
        { id: "m4", label: "Ropa cómoda (camisones con apertura para lactancia)" },
        { id: "m5", label: "Artículos de higiene personal (cepillo, jabón, toallas maternas)" },
        { id: "m6", label: "Cargador de teléfono móvil y contactos anotados" },
        { id: "m7", label: "Calzado cómodo y antideslizante" }
      ]
    },
    {
      category: "maletin-bebe",
      title: "Maletín para el Recién Nacido",
      items: [
        { id: "b1", label: "Pañales para recién nacido (talla RN)" },
        { id: "b2", label: "Prendas de algodón previamente lavadas (bodies, enterizos)" },
        { id: "b3", label: "Gorrito de algodón y medias suaves" },
        { id: "b4", label: "Cobija liviana y transpirable según el clima" },
        { id: "b5", label: "Toallitas de tela suave o gasas limpias" },
        { id: "b6", label: "Silla de carro para el traslado seguro de regreso a casa" }
      ]
    },
    {
      category: "organizacion-familiar",
      title: "Logística y Red Familiar",
      items: [
        { id: "f1", label: "Medio de transporte principal identificado (y plan B de reserva)" },
        { id: "f2", label: "Persona acompañante designada para el trabajo de parto" },
        { id: "f3", label: "Plan de cuidado y alimentación para otros hijos o mascotas" },
        { id: "f4", label: "Dinero o medio de pago reservado para traslados imprevistos" },
        { id: "f5", label: "Teléfono y dirección de la clínica o centro de atención directa" }
      ]
    }
  ],

  emergencyAlarms: {
    pregnancy: [
      "Sangrado vaginal de cualquier cantidad",
      "Salida de líquido transparente o verdoso por la vagina",
      "Dolor de cabeza intenso que no cede, visión borrosa o lucecitas",
      "Hinchazón repentina en cara, manos o piernas",
      "Fiebre igual o mayor a 38 °C",
      "Disminución drástica o ausencia de movimientos del bebé",
      "Contracciones frecuentes y dolorosas antes de la fecha probable",
      "Dolor agudo en la boca del estómago o abdomen"
    ],
    newborn: [
      "Dificultad evidente para respirar (hunde las costillas, aleteo nasal, ruidos)",
      "Labios, cara o lengua de tonalidad azulada o gris",
      "Somnolencia extrema: cuesta despertarlo y no reacciona al estímulo",
      "Rechaza completamente alimentarse o presenta vómito verde/con sangre",
      "Fiebre (temperatura > 38 °C) o hipotermia (< 35.5 °C)",
      "Ombligo con enrojecimiento alrededor, pus o mal olor",
      "Color amarillo intenso en ojos y cuerpo que avanza con rapidez",
      "Convulsiones o movimientos espasmódicos involuntarios repetitivos"
    ],
    whatToBring: [
      "Edad exacta del bebé (o semanas de gestación si es la madre).",
      "Hora exacta en que inició el síntoma o cambio de alerta.",
      "Temperatura registrada y cómo fue tomada (axilar, digital).",
      "Carné materno o infantil con exámenes previos.",
      "Registro de última toma de leche y pañales mojados."
    ]
  }
};
