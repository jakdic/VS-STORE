import { addKeyword } from "@builderbot/bot";
import { SendWaveProvider as Provider } from "@gamastudio/sendwave-provider";
import { flowMainCapacitacion } from "../main_capacitation";

export const flowCapacitationExcavadora = addKeyword<Provider>(
  "FLOW_CAPACITACION_EXCAVADORA"
).addAction(async ({ from }, { provider, gotoFlow }) => {
  await provider.sendImage({
    from,
    url: "https://simulacion-profesional.lat/bt/excava.jpg",
    text: "*Simulador de Excavadora*",
  });
  await provider.sendVideo({
    from,
    url: "https://simulacion-profesional.lat/bt/exc2.mp4",
    text: "*Este video es de la Version 2.99 actualizada al 2024 febrero*",
  });

  await gotoFlow(flowMainCapacitacion);
});

