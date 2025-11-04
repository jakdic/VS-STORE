import { addKeyword } from "@builderbot/bot";
import { SendWaveProvider as Provider } from "@gamastudio/sendwave-provider";
import { flowMainCapacitacion } from "../main_capacitation";

export const flowCapacitationCargadorFrontal = addKeyword<Provider>(
  "FLOW_CAPACITACION_CARGADOR_FRONTAL"
).addAction(async ({ from }, { provider, gotoFlow }) => {
  await provider.sendImage({
    from,
    url: "https://simulacion-profesional.lat/bt/dossancatv2.jpg",
    text: "*Simulador de Cargador Frontal V2*",
  });
  await provider.sendImage({
    from,
    url: "https://simulacion-profesional.lat/bt/carartiv2.jpg",
    delay: 1000,
  });
  await provider.sendVideo({
    from,
    url: "https://simulacion-profesional.lat/bt/wld.mp4",
    text: "INF",
  });

  await gotoFlow(flowMainCapacitacion);
});

