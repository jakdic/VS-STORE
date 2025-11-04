import { addKeyword } from "@builderbot/bot";
import { SendWaveProvider as Provider } from "@gamastudio/sendwave-provider";
import { flowMainCertification } from "../main_certification";

export const flowCertificacionBeneficios = addKeyword<Provider>(
  "FLOW_CERTIFICACION_BENEFICIOS"
).addAction(async ({ from }, { provider, gotoFlow }) => {
  await provider.sendImage({
    from,
    url: "https://simulacion-profesional.lat/bt/cert.png",
    text: "INFO 4",
  });

  await provider.sendVoice({
    from,
    url: "https://simulacion-profesional.lat/bt/bene.mp3",
    delay: 1000,
  });
  await gotoFlow(flowMainCertification)
});
