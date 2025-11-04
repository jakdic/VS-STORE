import { addKeyword } from "@builderbot/bot";
import { SendWaveProvider as Provider } from "@gamastudio/sendwave-provider";
import { flowMainCertification } from "../main_certification";

export const flowCerticacionNormalizacion = addKeyword<Provider>(
  "FLOW_CERTIFICADO_NORMALIZACION"
).addAction(async ({ from }, { provider,gotoFlow }) => {
  try {
    await provider.sendImage({
      from,
      url: "https://simulacion-profesional.lat/bt/cert.png",
    text: "INFOS 6",
  });
  await provider.sendVoice({
    from,
    url: "https://simulacion-profesional.lat/bt/norma.mp3",
    delay: 1000,
  });
  await gotoFlow(flowMainCertification)
  } catch (error) {
    console.log("Error sending image/voice:", error);
  }
});
