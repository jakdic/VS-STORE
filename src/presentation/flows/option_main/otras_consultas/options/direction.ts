import { addKeyword } from "@builderbot/bot";
import { SendWaveProvider as Provider } from "@gamastudio/sendwave-provider";
import { flowMainOtrasConsultas } from "../main_otras_consultas";

export const flowDirection = addKeyword<Provider>(
  "FLOW_DIRECTION_HORARIO"
).addAction(async ({ from }, { provider, gotoFlow }) => {
  try {
    await provider.sendImage({
      from,
      url: "https://simulacion-profesional.lat/bt/hora.png",
      text: "VENIR ++",
    });
    await provider.sendVideo({
      from,
      url: "https://simulacion-profesional.lat/bt/ir.mp4",
      text: "VER DONDE IR",
    });

    await provider.sendLocation({
      from,
      address: "vs STORE",
      name: "NO HELP",
      latitude: -8.81760341253257,
      longitude: -18.05286512025077,
    });
    await gotoFlow(flowMainOtrasConsultas);
  } catch (error) {
    console.log("Error sending video/image:", error);
  }
});
