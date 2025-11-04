import { addKeyword } from "@builderbot/bot";
import { MenuDataOtrasConsultas } from "@core/data";
import { MainBack, MenuLabelsOtrasConsultas } from "@core/enums";
import { SendWaveProvider as Provider } from "@gamastudio/sendwave-provider";
import { flowMainMenuSimple } from "@presentation/flows/main_menu_simple";
import {
  flowCalificationBot,
  flowConsultasPersonalizadas,
  flowDirection,
  flowRedesSociales,
} from "./options";

export const flowMainOtrasConsultas = addKeyword<Provider>(
  "FLOW_MAIN_OTRAS_CONSULTAS"
)
  .addAction(async ({ from }, { provider }) => {
    try {
      await provider.sendList({
        from,
        list: {
          button: "Selecciona una opción",
          title: "*FREE BOX*",
          description:
            "Encuentra información adicional o realiza otra solicitud aquí.",
          content: MenuDataOtrasConsultas,
        },
      });
    } catch (error) {
      console.log("Error sending list/dynamic:", error);
    }
  })
  .addAction({ capture: true }, async ({ body }, { gotoFlow, fallBack }) => {
    try {
      switch (body.trim()) {
        case MenuLabelsOtrasConsultas.DIRECCION_HORARIO:
          await gotoFlow(flowDirection);
          break;
        case MenuLabelsOtrasConsultas.CONSULTA_SPECIFICA:
          await gotoFlow(flowConsultasPersonalizadas);
          break;
        case MenuLabelsOtrasConsultas.CALIFICAR_BOT:
          await gotoFlow(flowCalificationBot);
          break;
        case MenuLabelsOtrasConsultas.REDES_SOCIALES:
          await gotoFlow(flowRedesSociales);
          break;
        case MainBack.MAIN_BACK:
          await gotoFlow(flowMainMenuSimple);
          break;
        default:
          fallBack(
            "Opción no válida. Por favor, selecciona una opción del menú."
          );
          break;
      }
    } catch (error) {
      console.log("Error sending text:", error);
    }
  });
