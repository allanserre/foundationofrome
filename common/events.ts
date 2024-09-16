import { Room, RoomID } from "./Room"

interface Error {
  error: string;
  errorDetails?: {
    message: string;
    path: Array<string | number>;
    type: string;
  }[];
}

interface Success<T> {
  data: T;
}

export type Response<T> = Error | Success<T>;

export interface ServerEvents {
  "room:created": (room: Room) => void;
  "room:updated": (room: Room) => void;
  "room:deleted": (id: RoomID) => void;
}

export interface ClientEvents {
  "room:list": (callback: (res: Response<Room[]>) => void) => void;

  "room:create": (
    payload: Omit<Room, "id">,
    callback: (res: Response<RoomID>) => void
  ) => void;

  "room:read": (id: RoomID, callback: (res: Response<Room>) => void) => void;

  "room:update": (
    payload: Room,
    callback: (res?: Response<void>) => void
  ) => void;

  "room:delete": (id: RoomID, callback: (res?: Response<void>) => void) => void;
}
