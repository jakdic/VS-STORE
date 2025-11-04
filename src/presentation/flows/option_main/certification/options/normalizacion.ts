import { addKeyword } from "@builderbot/bot";
import { SendWaveProvider as Provider } from "@gamastudio/sendwave-provider";
import { flowMainCertification } from "../main_certification";

export const flowCerticacionNormalizacion = addKeyword<Provider>(
  "FLOW_CERTIFICADO_NORMALIZACION"
).addAction(async ({ from }, { provider,gotoFlow }) => {
  try {
    await provider.sendImage({
      from,
      url: "https://machine-training.com/bt/cert.png",
    text: "*NORMALIZACIÓN DE LAS COMPETENCIAS LABORALES (PERÚ)*\n\n* Es el proceso mediante el cual se establecen los *estandares oficiales* que describen qué debe saber y saber hacer una persona para desempeñar un oficio o puesto de trabajo\n* Estos estándares se llaman *Normas de Competencia Laboral (NCL)* y son elaboradas por el *MTPE*, *SINEACE* y los sectores productivos\n* Garanzitan evaluaciones *justas, objetivas y reconocidas a nivel nacional*\n\n*OBJETIVOS PRINCIPALES:*\n* Asegurar que la certificacion tenga el mismo valor en todo el pais\n* Unificar criterios entre entidades certificadoras\n* Promover la *movilidad laboral*\n* Facilitar la formación basada en estándares reales del trabajo\n\n*EN RESUMEN:*\nLa normalización define los estándares del desempeño laboral y asegura que todos los trabajadores certificados cumplan el mismo nivel técnico y profesional.",
  });
  await provider.sendVoice({
    from,
    url: "https://machine-training.com/bt/norma.mp3",
    delay: 10000,
  });
  await gotoFlow(flowMainCertification)
  } catch (error) {
    console.log("Error sending image/voice:", error);
  }
});
