import { addKeyword } from "@builderbot/bot";
import { SendWaveProvider as Provider } from "@gamastudio/sendwave-provider";
import { flowMainOtrasConsultas } from "./main_otras_consultas";

export const flowConsultasPersonalizadas = addKeyword<Provider>(
  "FLOW_CONSULTAS_PERSONALIZADAS"
).addAction(async ({ from }, { provider, gotoFlow }) => {
  try {
    await provider.sendText({
      from,
      text: "*info gratis*",
    });
    await gotoFlow(flowMainOtrasConsultas);
  } catch (error) {
    console.log("Error sending text:", error);
  }
});

