import { addKeyword } from "@builderbot/bot";
import { SendWaveProvider as Provider } from "@gamastudio/sendwave-provider";
import { flowMainCapacitacion } from "../main_capacitation";

export const flowCapacitationRodilloCompactador = addKeyword<Provider>(
  "FLOW_CAPACITACION_RODILLO_COMPACTADOR"
).addAction(async ({ from }, { gotoFlow, provider }) => {
  await provider.sendVideo({
    from,
    url: "https://simulacion-profesional.lat/bt/rola.mp4",
    text: "*SIMULACION 6*",
  });
  await provider.sendVoice({
    from,
    url: "https://simulacion-profesional.lat/bt/rola.mp3",
    delay: 1000,
  });
  await gotoFlow(flowMainCapacitacion);
});