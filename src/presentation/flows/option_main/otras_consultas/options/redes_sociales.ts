import { addKeyword } from "@builderbot/bot";
import { SendWaveProvider as Provider } from "@gamastudio/sendwave-provider";
import { flowMainOtrasConsultas } from "../main_otras_consultas";

export const flowRedesSociales = addKeyword<Provider>(
  "FLOW_REDES_SOCIALES"
).addAction(async ({ from }, { provider, gotoFlow }) => {
  try {
    const message = `🌐 *Redes*`;
    await provider.sendText({
      from,
      text: message,
    });

    // Redirige al flujo principal de otras consultas
    await gotoFlow(flowMainOtrasConsultas);
  } catch (error) {
    console.error("❌ Error en flowRedesSociales:", error);

    await provider.sendText({
      from,
      text: "⚠️ Ocurrió un error al enviar la información de redes sociales. Por favor, intenta nuevamente más tarde.",
    });
  }
});
