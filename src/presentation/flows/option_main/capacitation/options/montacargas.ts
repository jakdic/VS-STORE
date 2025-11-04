import { addKeyword } from "@builderbot/bot";
import { SendWaveProvider as Provider } from "@gamastudio/sendwave-provider";
import { flowMainCapacitacion } from "../main_capacitation";

export const flowCapacitationMontacargas = addKeyword<Provider>(
  "FLOW_CAPACITACION_MONTACARGAS"
).addAction(async ({ from }, { gotoFlow, provider }) => {
  await provider.sendVideo({
    from,
    url: "https://simulacion-profesional.lat/bt/mtrc.mp4",
  });
  await provider.sendVoice({
    from,
    url: "https://simulacion-profesional.lat/bt/mtrc.mp3",
    delay: 1000,
  });
    await gotoFlow(flowMainCapacitacion);
});
