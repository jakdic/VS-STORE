import { addKeyword } from "@builderbot/bot";
import { SendWaveProvider as Provider } from "@gamastudio/sendwave-provider";
import { flowMainCertification } from "../main_certification";

export const flowCertificacionMaquinasCertificables = addKeyword<Provider>(
  "FLOW_CERTIFICADO_MAQUINAS_CERTIFICABLES"
).addAction(async ({ from }, { provider , gotoFlow}) => {
  await provider.sendImage({
    from,
    url: "https://simulacion-profesional.lat/bt/cert.png",
    text: "INFOTECK",
  });

  await provider.sendVoice({
    from,
    url: "https://simulacion-profesional.lat/bt/certis.mp3",
    delay: 1000,
  });
  await gotoFlow(flowMainCertification)
});
