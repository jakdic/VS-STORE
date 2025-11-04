import { addKeyword } from "@builderbot/bot";
import { SendWaveProvider as Provider } from "@gamastudio/sendwave-provider";
import { flowMainCapacitacion } from "../main_capacitation";

export const flowCapacitationTractorSobreOrugas = addKeyword<Provider>(
  "FLOW_CAPACITACION_TRACTOR_SOBRE_ORUGAS"
).addAction(async ({ from }, { gotoFlow, provider }) => {
  await provider.sendVideo({
    from,
    url: "https://machine-training.com/bt/dzr.mp4",
    text: "*TRACTOR SOBRE ORUGAS*",
  });
  await provider.sendVoice({
    from,
    url: "https://machine-training.com/bt/dzr.mp3",
    delay: 10000,
  });

  await gotoFlow(flowMainCapacitacion);
});
