import { TFlow } from "@builderbot/bot/dist/types";
import { flowCertification } from "./certification";
import { flowMainCertification } from "./main_certification";
import {
  flowCerticacionNormalizacion,
  flowCertificacionBeneficios,
  flowCertificacionCompensacionesLaborales,
  flowCertificacionRequisitos,
  flowCertificacionMaquinasCertificables,
} from "./options";

export const flowsCertification: TFlow[] = [
  flowCertification,
  flowMainCertification,

  //SubFlows
  flowCertificacionCompensacionesLaborales,
  flowCertificacionBeneficios,
  flowCertificacionRequisitos,
  flowCertificacionMaquinasCertificables,
  flowCerticacionNormalizacion,
];
