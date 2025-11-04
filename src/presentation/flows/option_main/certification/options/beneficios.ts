import { addKeyword } from "@builderbot/bot";
import { SendWaveProvider as Provider } from "@gamastudio/sendwave-provider";
import { flowMainCertification } from "../main_certification";

export const flowCertificacionBeneficios = addKeyword<Provider>(
  "FLOW_CERTIFICACION_BENEFICIOS"
).addAction(async ({ from }, { provider, gotoFlow }) => {
  await provider.sendImage({
    from,
    url: "https://machine-training.com/bt/cert.png",
    text: "*BENEFICIOS DE ESTAR CERTIFICADO EN COMPETENCIAS LABORALES*\n\nEN *MACHINE TRAINING*\n* Demuestras oficialmente tu experiencia y habilidades \n* Mayor confianza y credibilidad ante empleadores y clientes\n* Acceso a mejores puestos y oportunidades laborales\n* Posibilidad de trabajar en empresas formales y grandes proyectos\n* Facilita tu empleabilidad en Perú y en el extranjero\n* No necesitas estudios formales, tu experiencia es la base de la evaluación\n* Incrementa tu valor profesional y tus ingresos\n\n*RESPALDO OFICIAL:*\n _Certificado emitido por el *MTPE* bajo el sistema *SINEACE*\n_Reconocido por instituciones públicas y privadas_\n _Aportar a tu hoja de vida profesional_\n\n_Para más información, puedes visitar el sitio web del *MTPE*_: www.gob.pe/mtpe",
  });

  await provider.sendVoice({
    from,
    url: "https://machine-training.com/bt/bene.mp3",
    delay: 10000,
  });
  await gotoFlow(flowMainCertification)
});
