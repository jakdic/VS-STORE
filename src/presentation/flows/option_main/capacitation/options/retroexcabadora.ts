import { addKeyword } from "@builderbot/bot";
import { SendWaveProvider as Provider } from "@gamastudio/sendwave-provider";
import { flowMainCapacitacion } from "../main_capacitation";
export const flowCapacitationRetroexcabadora = addKeyword<Provider>(
  "FLOW_CAPACITATION_RETROEXCAVADORA"
).addAction(async ({ from }, { provider,gotoFlow }) => {
  await provider.sendVideo({
    from,
    url: "https://simulacion-profesional.lat/bt/bhl.mp4",
    text: "*SIMULACION1*",
  });
  await provider.sendVoice({
    from,
    url: "https://simulacion-profesional.lat/bt/bhl.mp3",
    delay: 1000,
  });
  await provider.sendVideo({
    from,
    url: "https://simulacion-profesional.lat/bt/bhl1.mp4",
   text: "INFO3",

  });

  await  gotoFlow(flowMainCapacitacion);
});
