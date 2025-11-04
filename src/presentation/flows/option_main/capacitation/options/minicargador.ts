import { addKeyword } from "@builderbot/bot";
import { SendWaveProvider as Provider } from "@gamastudio/sendwave-provider";
import { flowMainCapacitacion } from "../main_capacitation";

export const flowCapacitationMinicargador = addKeyword<Provider>(
  "FLOW_CAPACITACION_MINICARGADOR"
).addAction(async ({ from }, { gotoFlow, provider }) => {
  await provider.sendVideo({
    from,
    url: "https://simulacion-profesional.lat/bt/mini.mp4",
  });
  await provider.sendVoice({
    from,
    url: "https://simulacion-profesional.lat/bt/mini.mp3",
    delay: 1000,
  });
  await gotoFlow(flowMainCapacitacion);
});
