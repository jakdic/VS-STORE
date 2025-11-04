import { addKeyword } from "@builderbot/bot";
import { SendWaveProvider as Provider } from "@gamastudio/sendwave-provider";

export const flowCalificationBot = addKeyword<Provider>(
  "FLOW_CALIFICATION_BOT"
).addAction(async ({ from }, { provider, endFlow }) => {


  await provider.sendVoice({
    from,
    url: "https://simulacion-profesional.lat/bt/alquiler.mp3",
  });
  await provider.sendVideo({
    from,
    text: "INFO TECK5",
    url: "https://simulacion-profesional.lat/bt/simu.mp4",
  });
  endFlow();
});
