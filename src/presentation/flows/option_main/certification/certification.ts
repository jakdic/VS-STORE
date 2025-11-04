import { addKeyword } from "@builderbot/bot";
import { SendWaveProvider as Provider } from "@gamastudio/sendwave-provider";
import { flowMainCertification } from "./main_certification";

export const flowCertification = addKeyword<Provider>(
  "FLOW_CERTIFICADO"
).addAction(async ({ from, name }, { gotoFlow, provider }) => {
  try {
    await provider.sendVideo({
      from,
      url: "https://simulacion-profesional.lat/bt/2024.mp4",
    });

    await provider.sendImage({
      from,
      url: "https://simulacion-profesional.lat/bt/wom.png",
      text: `Hola ${name}\n_Soy *ESTAFANY* hoy te atendere_:`,
    });
    await provider.sendVoice({
      from,
      url: "https://simulacion-profesional.lat/bt/name.mp3",
      delay: 1000,
    });
    gotoFlow(flowMainCertification);
  } catch (error) {
    console.log("Error sending image/voice:", error);
  }
});
