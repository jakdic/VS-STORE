import { addKeyword } from "@builderbot/bot";
import { SendWaveProvider as Provider } from "@gamastudio/sendwave-provider";
import { flowMainOtrasConsultas } from "../main_otras_consultas";

export const flowDirection = addKeyword<Provider>(
  "FLOW_DIRECTION_HORARIO"
).addAction(async ({ from }, { provider, gotoFlow }) => {
  try {
    await provider.sendImage({
      from,
      url: "https://machine-training.com/bt/hora.png",
      text: "*Horario de Atención*\n\nAtendemos de *lunes a viernes* de *8:30 a.m. a 6:00 p.m.*\nLos *domingos* tambien también podemos atenderte *previa cita*\n\nSi deseas agendar una atencion especial, solo indícanos el *dia y hora* que te convenga.",
    });
    await provider.sendVideo({
      from,
      url: "https://machine-training.com/bt/ir.mp4",
      text: "*¡Hey!*\nMira este video, te mostrara cómo llegar *rápidamente desde el puente grande*\n\nSigue las indicaciones y estarás en nuestras instalaciones en pocos minutos",
    });

    await provider.sendLocation({
      from,
      address: "Machine Training JS EIRL",
      name: "MACHINE TRAINING CENTER",
      latitude: -7.81760341253257,
      longitude: -78.05286512025077,
    });
    await gotoFlow(flowMainOtrasConsultas);
  } catch (error) {
    console.log("Error sending video/image:", error);
  }
});
