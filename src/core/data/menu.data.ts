import {
  MenuLabels,
  MainBack,
  MenuLabelsCapacitacion,
  MenuLabelsCertificado,
  MenuLabelsOtrasConsultas,
} from "../enums";

export const MenuData = [
  {
    title: "Opciones de Consulta",
    rows: [
      { title: MenuLabels.CAPACITACION },
      { title: MenuLabels.CETIFICADO },
      { title: MenuLabels.OTRAS_CONSULTAS },
    ],
  },
];

export const MenuDataCapacitacion = [
  {
    title: "Opciones de Capacitación",
    rows: [
      { title: MenuLabelsCapacitacion.RETROXACAVADORA },
      { title: MenuLabelsCapacitacion.EXCAVADORA },
      { title: MenuLabelsCapacitacion.CARGADOR_FRONTAL },
      { title: MenuLabelsCapacitacion.MOTONIVELEADORA },
      { title: MenuLabelsCapacitacion.TRACTOR_SOBRE_ORUGAS },
      { title: MenuLabelsCapacitacion.RODILLO_COMPACTADOR },
      { title: MenuLabelsCapacitacion.MINICARGADOR },
      { title: MenuLabelsCapacitacion.MONTACARGAS },
    ],
  },
  {
    title: "Opciones de Menú Principal",
    rows: [{ title: MainBack.MAIN_BACK }],
  },
];

export const MenuDataCertification = [
  {
    title: "Opciones de Certificación",
    rows: [
      { title: MenuLabelsCertificado.COMPETENCIAS_LABORALES },
      { title: MenuLabelsCertificado.BENEFICIOS },
      { title: MenuLabelsCertificado.REQUISITOS },
      { title: MenuLabelsCertificado.MAQUINAS_CERTIFICABLES },
      { title: MenuLabelsCertificado.NORMALIZACION },
    ],
  },
  {
    title: "Opciones de Menú Principal",
    rows: [{ title: MainBack.MAIN_BACK }],
  },
];

export const MenuDataOtrasConsultas = [
  {
    title: "Opciones de Otras Consultas",
    rows: [
      { title: MenuLabelsOtrasConsultas.DIRECCION_HORARIO },
      { title: MenuLabelsOtrasConsultas.CONSULTA_SPECIFICA },
      { title: MenuLabelsOtrasConsultas.CALIFICAR_BOT },
	  { title: MenuLabelsOtrasConsultas.ENVIAR_PDF },
    ],
  },

  {
    title: "Opciones de Menú Principal",
    rows: [{ title: MainBack.MAIN_BACK }],
  },
];
