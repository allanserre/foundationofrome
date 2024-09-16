import { Player } from './../client/src/app/models/Player';
export interface Room {
	id: RoomID
	code: string
	players: Player[]
	state: number
	created_at: number
	started_at: number | null
}

export type RoomID = string;
