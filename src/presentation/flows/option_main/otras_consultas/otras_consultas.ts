import { addKeyword } from "@builderbot/bot";
import { SendWaveProvider as Provider } from "@gamastudio/sendwave-provider";
import { flowMainOtrasConsultas } from "./main_otras_consultas";

export const flowOtrasConsultas = addKeyword<Provider>(
  "FLOW_OTRAS_CONSULTAS"
).addAction(async ({ from }, { gotoFlow, provider }) => {
  try {
    await provider.sendImage({
      from,
      url: "https://simulacion-profesional.lat/bt/aten.png",
    });
    await provider.sendVoice({
      from,
      url: "https://simulacion-profesional.lat/bt/atenc.mp3",
    });

   await gotoFlow(flowMainOtrasConsultas);
  } catch (error) {
    console.log("Error sending image/voice:", error);
  }
});
