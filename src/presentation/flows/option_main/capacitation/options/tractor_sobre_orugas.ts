import { addKeyword } from "@builderbot/bot";
import { SendWaveProvider as Provider } from "@gamastudio/sendwave-provider";
import { flowMainCapacitacion } from "../main_capacitation";

export const flowCapacitationTractorSobreOrugas = addKeyword<Provider>(
  "FLOW_CAPACITACION_TRACTOR_SOBRE_ORUGAS"
).addAction(async ({ from }, { gotoFlow, provider }) => {
  await provider.sendVideo({
    from,
    url: "https://simulacion-profesional.lat/bt/dzr.mp4",
    text: "*SIMULACION 5*",
  });
  await provider.sendVoice({
    from,
    url: "https://simulacion-profesional.lat/bt/dzr.mp3",
    delay: 1000,
  });

  await gotoFlow(flowMainCapacitacion);
});
