import { addKeyword } from "@builderbot/bot";
import { SendWaveProvider as Provider } from "@gamastudio/sendwave-provider";
import { flowMainCapacitacion } from "../main_capacitation";

export const flowCapacitationCargadorFrontal = addKeyword<Provider>(
  "FLOW_CAPACITACION_CARGADOR_FRONTAL"
).addAction(async ({ from }, { provider, gotoFlow }) => {
  await provider.sendVideo({
    from,
    url: "https://simulacion-profesional.lat/bt/wl.mp4",
    text: "*CARGADOR FRONTAL*",
  });
  await provider.sendVoice({
    from,
    url: "https://simulacion-profesional.lat/bt/wl.mp3",
    delay: 10000,
  });
  await provider.sendVideo({
    from,
    url: "https://simulacion-profesional.lat/bt/wld.mp4",
    text: "INF",
  });

  await gotoFlow(flowMainCapacitacion);
});
