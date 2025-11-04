import { TFlow } from "@builderbot/bot/dist/types";
import {
  flowMainMenuSimple,
  flowWelcome,
  flowsCapacitations,
  flowsCertification,
  flowsOtrasConsultas,
} from "./flows";

export const flows: TFlow[] = [
  flowWelcome,
  flowMainMenuSimple,
  // Capacitation
  ...flowsCapacitations,

  // Certification
  ...flowsCertification,

  // Otras Consultas
  ...flowsOtrasConsultas,
];
