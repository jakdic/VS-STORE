import { addKeyword } from "@builderbot/bot";
import { SendWaveProvider as Provider } from "@gamastudio/sendwave-provider";
import { flowMainCapacitacion } from "../main_capacitation";
export const flowCapacitationRetroexcabadora = addKeyword<Provider>(
  "FLOW_CAPACITATION_RETROEXCAVADORA"
).addAction(async ({ from }, { provider,gotoFlow }) => {
  await provider.sendVideo({
    from,
    url: "https://machine-training.com/bt/bhl.mp4",
    text: "*RETROEXCAVADORA*",
  });
  await provider.sendVoice({
    from,
    url: "https://machine-training.com/bt/bhl.mp3",
    delay: 10000,
  });
  await provider.sendVideo({
    from,
    url: "https://machine-training.com/bt/bhl1.mp4",
   text: "*FORMACIÓN PROFESIONAL*\n\n*_🎯 Realizarás actividades prácticas como:_*\n\n🚜 _Carguío de volquetes_\n🏗️ _Acopio de materiales_\n⛏️ _Excavaciones, zanjas y mucho más_",

  });

  await  gotoFlow(flowMainCapacitacion);
});
