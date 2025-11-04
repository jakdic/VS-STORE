import { addKeyword } from "@builderbot/bot";
import { MenuDataCapacitacion } from "@core/data";
import { MainBack, MenuLabelsCapacitacion } from "@core/enums";
import { SendWaveProvider as Provider } from "@gamastudio/sendwave-provider";

//SubFlows
import {
  flowCapacitationCargadorFrontal,
  flowCapacitationExcavadora,
  flowCapacitationMinicargador,
  flowCapacitationMontacargas,
  flowCapacitationMotoNiveladora,
  flowCapacitationRetroexcabadora,
  flowCapacitationRodilloCompactador,
  flowCapacitationTractorSobreOrugas,
} from "./options";

import { flowMainMenuSimple } from "@presentation/flows/main_menu_simple";

export const flowMainCapacitacion = addKeyword<Provider>("FLOW_CAPACITACION")
  .addAction(async ({ from }, { provider }) => {
    try {
      await provider.sendList({
        from,
        list: {
          button: "Selecciona una opción",
          content: MenuDataCapacitacion,
          title: "INFORMES",
          description: `💪 _Esta información es de tu interes_ 👇🏽👇🏽👇🏽👇🏽👇🏽👇🏽..`,
        },
      });
    } catch (error) {
      console.log("Error sending list/dynamic:", error);
    }
  })
  .addAction({ capture: true }, async (ctx, { gotoFlow, fallBack }) => {
    switch (ctx.body.trim()) {
      case MenuLabelsCapacitacion.RETROXACAVADORA:
        gotoFlow(flowCapacitationRetroexcabadora);
        break;
      case MenuLabelsCapacitacion.EXCAVADORA:
        gotoFlow(flowCapacitationExcavadora);
        break;
      case MenuLabelsCapacitacion.CARGADOR_FRONTAL:
        gotoFlow(flowCapacitationCargadorFrontal);
        break;
      case MenuLabelsCapacitacion.MOTONIVELEADORA:
        gotoFlow(flowCapacitationMotoNiveladora);
        break;
      case MenuLabelsCapacitacion.RODILLO_COMPACTADOR:
        gotoFlow(flowCapacitationRodilloCompactador);
        break;
      case MenuLabelsCapacitacion.TRACTOR_SOBRE_ORUGAS:
        gotoFlow(flowCapacitationTractorSobreOrugas);
        break;
      case MenuLabelsCapacitacion.MINICARGADOR:
        gotoFlow(flowCapacitationMinicargador);
        break;
      case MenuLabelsCapacitacion.MONTACARGAS:
        gotoFlow(flowCapacitationMontacargas);
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
  });
