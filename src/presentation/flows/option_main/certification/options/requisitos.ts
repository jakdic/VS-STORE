import { addKeyword } from "@builderbot/bot";
import { SendWaveProvider as Provider } from "@gamastudio/sendwave-provider";
import { flowMainCertification } from "../main_certification";

export const flowCertificacionRequisitos = addKeyword<Provider>(
  "FLOW_CERTIFICACION_REQUISITOS"
).addAction(async ({ from }, { provider, gotoFlow }) => {
  try {
    await provider.sendImage({
      from,
      url: "https://machine-training.com/bt/cert.png",
      text: "*PROCESOS DE INSCRIPCIÓN PARA LA CERTIFICACION*\n\n* Elige la ocupación o especialidad en la que tienes experiencia\n* Acércate a una entidad *MACHIME TRAINING* o al *MTPE*\n* Presenta tu DNI y completa la ficha de inscripción\n* Agenda tu evaluación practica y téorica\n* Si apruebas, recibirás tu *Certificado Oficial de Competencia Laboral*\n\n*DETALLES IMPORTANTES:*\n* No necesitas estudios previos\n* El proceso evalúa lo que sabes hacer, no lo que memorizas\n*Duración estimada: entre 1 y 2 semanas\n*Certificacion válida en todo el territorio nacional*\n\n_Para más información, puedes visitar el sitio web del *MTPE*_: www.gob.pe/mtpe",
    });
    await provider.sendVoice({
      from,
      url: "https://machine-training.com/bt/requi.mp3",
      delay: 10000,
    });
    await gotoFlow(flowMainCertification  );
  } catch (error) {
    console.log("Error sending image/voice:", error);
  }
});
