import { addKeyword } from "@builderbot/bot";
import { MenuData } from "@core/data";
import { MenuLabels } from "@core/enums";

import { SendWaveProvider as Provider } from "@gamastudio/sendwave-provider";
import {
  flowCapacitation,
  flowCertification,
  flowOtrasConsultas,
} from "./option_main";

export const flowMainMenuSimple = addKeyword<Provider>("FLOW_MAIN")
  .addAction(async (ctx, { provider }) => {
    try {
      await provider.sendList({
        from: ctx.from,
        list: {
          button: "Selecciona una opción",
          content: MenuData,
          title: "",
          description: `𝙈𝙀𝙉𝙐 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝙏𝙄𝙑𝙊`,
        },
      });
    } catch (error) {
      console.log("Error sending list/dynamic:", error);
    }
  })
  .addAction({ capture: true }, async (ctx, { gotoFlow, fallBack }) => {
    switch (ctx.body.trim()) {
      case MenuLabels.CAPACITACION:
        gotoFlow(flowCapacitation);
        break;
      case MenuLabels.CETIFICADO:
        gotoFlow(flowCertification);
        break;
      case MenuLabels.OTRAS_CONSULTAS:
        gotoFlow(flowOtrasConsultas);
        break;

        break;
      default:
        fallBack(
          "Opción no válida. Por favor, selecciona una opción del menú."
        );
        break;
    }
  });
