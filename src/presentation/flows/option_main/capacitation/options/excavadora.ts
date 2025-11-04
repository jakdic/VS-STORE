import { addKeyword } from "@builderbot/bot";
import { SendWaveProvider as Provider } from "@gamastudio/sendwave-provider";
import { flowMainCapacitacion } from "../main_capacitation";

export const flowCapacitationExcavadora = addKeyword<Provider>(
  "FLOW_CAPACITACION_EXCAVADORA"
).addAction(async ({ from }, { provider, gotoFlow }) => {
  await provider.sendVideo({
    from,
    url: "https://machine-training.com/bt/exc.mp4",
    text: "*EXCAVADORA HIDRAULICA*",
  });
  await provider.sendVoice({
    from,
    url: "https://machine-training.com/bt/exca.mp3",
    delay: 10000,
  });
  await provider.sendVideo({
    from,
    url: "https://machine-training.com/bt/exc2.mp4",
    text: "*🏁 LOS RESULTADOS*\n\n*_🔥 Dominio correcto de la máquina:_*\n\n🚜 _Destresa en la operaión_\n🏗️ _Aplicación de ángulos de trabajo_\n⛏️ _Resultados visibles y medibles_",
  });

  await gotoFlow(flowMainCapacitacion);
});
