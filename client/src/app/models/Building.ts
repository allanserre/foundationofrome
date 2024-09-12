export interface Building {
  name: string,
  code: number,
  type: BuildingType,
  rewardCount: number,
  score: ScoreCondition | null
}

export interface ScoreCondition {
  score: number,
  adjacentBuildingType: BuildingType,
  requiredCount: number
}

export enum BuildingType {
  ALL = 0,
  CIVIC = 1,
  RESIDENTIAL = 2,
  COMMERCIAL = 3
}
