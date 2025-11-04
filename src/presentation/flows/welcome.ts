import { addKeyword, EVENTS } from "@builderbot/bot";
import { flowMainMenuSimple } from "./main_menu_simple";
import { SendWaveProvider as Provider } from "@gamastudio/sendwave-provider";

export const flowWelcome = addKeyword<Provider>(EVENTS.WELCOME).addAction(
  async ({ from, name }, { gotoFlow, provider }) => {
    try {
      await provider.sendImage({
        from,
        url: "https://simulacion-profesional.lat/bt/banner1.png",
        text: `*👋 *¡Hola! Bienvenido* 👋
 🚜💻 *Velard-Store* 💻🚜*`,
      });
      await provider.sendImage({
        from,
        url: "https://machine-training.com/bt/man.png",
        text: `Mi nombre es *Jonny Velard*.
_Te cuento rápido: eh trabajado más de 16 años en SIMLOG, una de las empresas pioneras en simuladores de maquinaria pesada. Ahí fui parte del equipo que los desarrollaba desde cero_. 💡
_Hoy, con toda esa experiencia y la colaboración de algunos colegas, creó Velar-Store, una tienda especializada en simuladores de operación de maquinaria pesada, pensados para que entrenes como si estuvieras dentro de la cabina, pero con menos costo y más seguridad._`,
      });

      await provider.sendImage({
        from,
        url: "https://simulacion-profesional.lat/bt/ok.jpg",
        delay: 1000,
      });

      await gotoFlow(flowMainMenuSimple);
    } catch (error) {
      console.log("Error sending reaction:", error);
    }
  }
);
