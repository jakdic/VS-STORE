import { addKeyword } from "@builderbot/bot";
import { SendWaveProvider as Provider } from "@gamastudio/sendwave-provider";
import { flowMainCapacitacion } from "../main_capacitation";

export const flowCapacitationRodilloCompactador = addKeyword<Provider>(
  "FLOW_CAPACITACION_RODILLO_COMPACTADOR"
).addAction(async ({ from }, { gotoFlow, provider }) => {
  await provider.sendVideo({
    from,
    url: "https://machine-training.com/bt/rola.mp4",
    text: "*RODILLO COMPACTADOR*",
  });
  await provider.sendVoice({
    from,
    url: "https://machine-training.com/bt/rola.mp3",
    delay: 10000,
  });
  await gotoFlow(flowMainCapacitacion);
});