import { addKeyword } from "@builderbot/bot";
import { SendWaveProvider as Provider } from "@gamastudio/sendwave-provider";
import { flowMainCapacitacion } from "./main_capacitation";

export const flowCapacitation = addKeyword<Provider>(
  "FLOW_CAPACITACION"
).addAction(async ({ from }, { gotoFlow, provider }) => {
  await provider.sendImage({
    from,
    url: "https://simulacion-profesional.lat/bt/P1020289.png",
  });
  await provider.sendImage({
    from,
    url: "https://simulacion-profesional.lat/bt/banner1.jpg",
    delay: 1600,
  });
  gotoFlow(flowMainCapacitacion);
});

