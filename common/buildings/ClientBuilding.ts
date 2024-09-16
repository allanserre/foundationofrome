import { BuildingType } from "./BuildingType";
import { BuildingVictoryPoints } from "./BuildingVictoryPoints";
import { BuildingName } from "./BuildingName";
import { GameModule } from "./GameModule";

/**
 * representation of a building on the client side of the app
 */
export interface ClientBuilding {
    name: BuildingName,
    module: GameModule,
    type: BuildingType,
    rewardCount: number,
    score: number | BuildingVictoryPoints
}



