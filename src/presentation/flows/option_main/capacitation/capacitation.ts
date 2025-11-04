import { addKeyword } from "@builderbot/bot";
import { SendWaveProvider as Provider } from "@gamastudio/sendwave-provider";
import { flowMainCapacitacion } from "./main_capacitation";

export const flowCapacitation = addKeyword<Provider>(
  "FLOW_CAPACITACION"
).addAction(async ({ from }, { gotoFlow, provider }) => {
  await provider.sendVideo({
    from,
    url: "https://simulacion-profesional.lat/bt/progms.mp4",
  });
  await provider.sendVoice({
    from,
    url: "https://simulacion-profesional.lat/bt/pemor.mp3",
    delay: 1600,
  });
  gotoFlow(flowMainCapacitacion);
});
