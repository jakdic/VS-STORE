import { addKeyword } from "@builderbot/bot";
import { SendWaveProvider as Provider } from "@gamastudio/sendwave-provider";
import { flowMainOtrasConsultas } from "../main_otras_consultas";

export const flowConsultasPersonalizadas = addKeyword<Provider>(
  "FLOW_CONSULTAS_PERSONALIZADAS"
).addAction(async ({ from }, { provider, gotoFlow }) => {
  try {
    await provider.sendText({
      from,
      text: "💬 *¡Hey!* 🖐🏻\n_Para darle una atención personalizada y súper rapida, por favor bríndame los siguientes datos:_\n 👷🏻 *Nombre y Apellidos*:\n🪪 *DNI:* \n🎉 *Edad:* \n🎓 *Interés en que programa:* \n📲 *Horario disponible para llamarte:*\n\n_Mientras tanto, te invito a conocer los increibles resultados del alcance de nuestro programa de formación_ 👉🏻 https://machine-training.com/evidencia.html",
    });
    await gotoFlow(flowMainOtrasConsultas);
  } catch (error) {
    console.log("Error sending text:", error);
  }
});
