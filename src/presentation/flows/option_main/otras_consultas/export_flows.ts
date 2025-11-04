import { TFlow } from "@builderbot/bot/dist/types";
import { flowOtrasConsultas } from "./otras_consultas";
import { flowMainOtrasConsultas } from "./main_otras_consultas";
import {
  flowCalificationBot,
  flowConsultasPersonalizadas,
  flowDirection,
  flowRedesSociales,
} from "./options";

export const flowsOtrasConsultas: TFlow[] = [
  flowOtrasConsultas,
  flowMainOtrasConsultas,

  //SubFlows
  flowDirection,
  flowConsultasPersonalizadas,
  flowCalificationBot,
  flowRedesSociales,
];
