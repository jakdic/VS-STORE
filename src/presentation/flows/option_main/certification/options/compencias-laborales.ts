import { addKeyword } from "@builderbot/bot";
import { SendWaveProvider as Provider } from "@gamastudio/sendwave-provider";
import { flowMainCertification } from "../main_certification";

export const flowCertificacionCompensacionesLaborales = addKeyword<Provider>(
  "FLOW_CERTIFICACION_COMPENSACIONES_LABORALES"
).addAction(async ({ from }, { provider, gotoFlow }) => {
  await provider.sendImage({
    from,
    url: "https://machine-training.com/bt/cert.png",
    text: "*CERTIFICACIÓN DE COMPETENCIAS LABORALES (PERÚ):*\n\n* Reconoce oficialmente tus habilidades y experiencia laboral\n* Evaluación práctica y teórica según los estándares del *MTPE*\n* Dirigida a trabajadores con experiencia que buscan validar su desempeño sin necesidad de estudios formales\n* Te permite acceder a mejores oportunidades laborales y ascensos\n* Es otorgada por entidades autorizadas por *SINEACE* y tiene validez nacional\n\n*CARACTERÍSTICAS PRINCIPALES:*\n* Evaluación objetiva por expertos certificados\n* Certificado oficial emitido por el *Ministerio de trabajo y Promoción del Empleo (MTPE)*\n* Reconocimiento válido ante empresas públicas y privadas\n* Ideal para operadores, técnicos y profesionales con experiencia comprobada\n\n _Para más información, puedes visitar el sitio web del *MTPE*_: www.gob.pe/mtpe",
  });
  await provider.sendVoice({
    from,
    url: "https://machine-training.com/bt/cerquees.mp3",
    delay: 10000,
  });
  await gotoFlow(flowMainCertification)
});
