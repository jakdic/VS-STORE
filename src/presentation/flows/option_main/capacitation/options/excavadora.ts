import { addKeyword } from "@builderbot/bot";
import { SendWaveProvider as Provider } from "@gamastudio/sendwave-provider";
import { flowMainCapacitacion } from "../main_capacitation";

export const flowCapacitationExcavadora = addKeyword<Provider>(
  "FLOW_CAPACITACION_EXCAVADORA"
).addAction(async ({ from }, { provider, gotoFlow }) => {
  await provider.sendVideo({
    from,
    url: "https://simulacion-profesional.lat/bt/exc.mp4",
    text: "*EXCAVADORA HIDRAULICA*",
  });
  await provider.sendVoice({
    from,
    url: "https://simulacion-profesional.lat/bt/exca.mp3",
    delay: 1000,
  });
  await provider.sendVideo({
    from,
    url: "https://simulacion-profesional.lat/bt/exc2.mp4",
    text: "INFO2",
  });

  await gotoFlow(flowMainCapacitacion);
});
