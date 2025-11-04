import { addKeyword } from "@builderbot/bot";
import { SendWaveProvider as Provider } from "@gamastudio/sendwave-provider";
import { flowMainCapacitacion } from "../main_capacitation";

export const flowCapacitationCargadorFrontal = addKeyword<Provider>(
  "FLOW_CAPACITACION_CARGADOR_FRONTAL"
).addAction(async ({ from }, { provider, gotoFlow }) => {
  await provider.sendVideo({
    from,
    url: "https://machine-training.com/bt/wl.mp4",
    text: "*CARGADOR FRONTAL*",
  });
  await provider.sendVoice({
    from,
    url: "https://machine-training.com/bt/wl.mp3",
    delay: 10000,
  });
  await provider.sendVideo({
    from,
    url: "https://machine-training.com/bt/wld.mp4",
    text: "*🚀 ASÍ LO LLEVARÁS*\n\n*_🏗️ Realizando trabajos específicos en un centro de trabajo como:_*\n\n🦾 _Solo en cabina desde el primer día_\n📡 _Comunicación radial continua_\n⚙️ _Operación en campo constante_",
  });

  await gotoFlow(flowMainCapacitacion);
});
