import { addKeyword } from "@builderbot/bot";
import { SendWaveProvider as Provider } from "@gamastudio/sendwave-provider";
import { flowMainCertification } from "./main_certification";

export const flowCertification = addKeyword<Provider>(
  "FLOW_CERTIFICADO"
).addAction(async ({ from, name }, { gotoFlow, provider }) => {
  try {

    await provider.sendImage({
      from,
      url: "https://simulacion-profesional.lat/bt/100.jpg",
      text: `Hola ${name}\n_Quieres algunos *CURSOS INTERACTIVOS*`,
    });
    gotoFlow(flowMainCertification);
  } catch (error) {
    console.log("Error sending image/voice:", error);
  }
});

