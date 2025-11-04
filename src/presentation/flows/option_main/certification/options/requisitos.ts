import { addKeyword } from "@builderbot/bot";
import { SendWaveProvider as Provider } from "@gamastudio/sendwave-provider";
import { flowMainCertification } from "../main_certification";

export const flowCertificacionRequisitos = addKeyword<Provider>(
  "FLOW_CERTIFICACION_REQUISITOS"
).addAction(async ({ from }, { provider, gotoFlow }) => {
  try {
    await provider.sendImage({
      from,
      url: "https://simulacion-profesional.lat/bt/cert.png",
      text: "INFORME 6",
    });
    await provider.sendVoice({
      from,
      url: "https://simulacion-profesional.lat/bt/requi.mp3",
      delay: 1000,
    });
    await gotoFlow(flowMainCertification  );
  } catch (error) {
    console.log("Error sending image/voice:", error);
  }
});
