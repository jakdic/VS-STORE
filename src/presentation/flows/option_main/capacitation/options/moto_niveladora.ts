import { addKeyword } from "@builderbot/bot";
import { SendWaveProvider as Provider } from "@gamastudio/sendwave-provider";
import { flowMainCapacitacion } from "../main_capacitation";

export const flowCapacitationMotoNiveladora = addKeyword<Provider>(
  "FLOW_CAPACITACION_MOTO_NIVELADORA"
).addAction(async ({ from }, { gotoFlow, provider }) => {
  await provider.sendVideo({
    from,
    url: "https://machine-training.com/bt/mtn.mp4",
    text: "*MOTONIVELADORA*",
  });
  await provider.sendVoice({
    from,
    url: "https://machine-training.com/bt/mtn.mp3",
    delay: 10000,
  });

  await gotoFlow(flowMainCapacitacion);
});
