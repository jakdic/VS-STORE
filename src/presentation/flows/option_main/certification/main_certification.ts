import { addKeyword } from "@builderbot/bot";
import { MenuDataCertification } from "@core/data";
import { MainBack, MenuLabelsCertificado } from "@core/enums";
import { SendWaveProvider as Provider } from "@gamastudio/sendwave-provider";
import {
  flowCerticacionNormalizacion,
  flowCertificacionBeneficios,
  flowCertificacionCompensacionesLaborales,
  flowCertificacionMaquinasCertificables,
  flowCertificacionRequisitos,
} from "./options";
import { flowMainMenuSimple } from "@presentation/flows/main_menu_simple";

export const flowMainCertification = addKeyword<Provider>(
  "FLOW_MAIN_CERTIFICADO"
)
  .addAction(async (ctx, { provider }) => {
    try {
      await provider.sendList({
        from: ctx.from,
        list: {
          button: "Selecciona una opci贸n",
          title: "CERTIFICACION",
          description:
            "馃徑馃憞馃徑馃憞馃徑馃憞馃徑",
          content: MenuDataCertification,
        },
      });
    } catch (error) {
      console.log("Error sending list/dynamic:", error);
    }
  })
  .addAction({ capture: true }, async ({ body }, { gotoFlow, fallBack }) => {
    try {
      switch (body.trim()) {
        case MenuLabelsCertificado.COMPETENCIAS_LABORALES:
          await gotoFlow(flowCertificacionCompensacionesLaborales);
          break;

        case MenuLabelsCertificado.BENEFICIOS:
          await gotoFlow(flowCertificacionBeneficios);
          break;
        case MenuLabelsCertificado.REQUISITOS:
          await gotoFlow(flowCertificacionRequisitos);
          break;
        case MenuLabelsCertificado.MAQUINAS_CERTIFICABLES:
          await gotoFlow(flowCertificacionMaquinasCertificables);
          break;

        case MenuLabelsCertificado.NORMALIZACION:
          await gotoFlow(flowCerticacionNormalizacion);
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

