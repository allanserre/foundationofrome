import {BuildingType} from "./BuildingType";
import {BuildingVictoryPoints} from "./BuildingVictoryPoints";
import {BuildingName} from "./BuildingName";
import {GameModule} from "./GameModule";

export interface ClientBuilding {
    name: BuildingName,
    module : GameModule,
    type: BuildingType,
    rewardCount: number,
    score: number | BuildingVictoryPoints
}



