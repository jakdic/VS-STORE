import { addKeyword, EVENTS } from "@builderbot/bot";
import { flowMainMenuSimple } from "./main_menu_simple";
import { SendWaveProvider as Provider } from "@gamastudio/sendwave-provider";

export const flowWelcome = addKeyword<Provider>(EVENTS.WELCOME).addAction(
  async ({ from, name }, { gotoFlow, provider }) => {
    try {
      await provider.sendImage({
        from,
        url: "https://machine-training.com/bt/log1.png",
        text: `*ENTRENAMIENTOS DE TALLA 🌍🌍🌍 MUNDIAL🌍🌍🌍*`,
      });
      await provider.sendImage({
        from,
        url: "https://machine-training.com/bt/man.png",
        text: `Hola ${name}\n_Soy *Jakcob* hoy te atendere_:`,
      });

      await provider.sendVoice({
        from,
        url: "https://machine-training.com/bt/busca.mp3",
        delay: 5000,
      });

      await gotoFlow(flowMainMenuSimple);
    } catch (error) {
      console.log("Error sending reaction:", error);
    }
  }
);
