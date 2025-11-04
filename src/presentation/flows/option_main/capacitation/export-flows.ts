import { TFlow } from "@builderbot/bot/dist/types";
import { flowCapacitation } from "./capacitation";
import { flowMainCapacitacion } from "./main_capacitation";
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

export const flowsCapacitations: TFlow[] = [
  flowCapacitation,
  flowMainCapacitacion,
  //SubFlows
  flowCapacitationRetroexcabadora,
  flowCapacitationExcavadora,
  flowCapacitationCargadorFrontal,
  flowCapacitationMotoNiveladora,
  flowCapacitationRodilloCompactador,
  flowCapacitationTractorSobreOrugas,
  flowCapacitationMinicargador,
  flowCapacitationMontacargas,
];
