import { addKeyword } from "@builderbot/bot";
import { SendWaveProvider as Provider } from "@gamastudio/sendwave-provider";

export const flowCalificationBot = addKeyword<Provider>(
  "FLOW_CALIFICATION_BOT"
).addAction(async ({ from }, { provider, endFlow }) => {


  await provider.sendVoice({
    from,
    url: "https://machine-training.com/bt/alquiler.mp3",
  });
  await provider.sendVideo({
    from,
    text: "💬 *¡Hey!* 🖐🏻\nAprovecha nuestra *PROMOCIÓN DE OCTUBRE* 🎉\n\n🚜 La *PRIMERA HORA* en el alquiler del *simulador de maquinaria pesada* es *¡TOTALMENTE GRATIS!* 🕐💸\n\n🦾 Nuestros simuladores están *LICENCIADOS y ACREDITADOS* ✅ para procesos de *formación en maquinaria pesada*.",
    url: "https://machine-training.com/bt/simu.mp4",
  });
  endFlow();
});
