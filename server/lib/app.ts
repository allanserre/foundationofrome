import { Server as HttpServer } from "http";
import { Server, ServerOptions } from "socket.io";
import { ClientEvents, ServerEvents } from "../../common/events";
import { RoomRepository } from "./room-management/room.repository";
import createRoomHandlers from "./room-management/room.handlers";

export interface Components {
  roomRepository: RoomRepository;
}

export function createApplication(
  httpServer: HttpServer,
  components: Components,
  serverOptions: Partial<ServerOptions> = {}
): Server<ClientEvents, ServerEvents> {
  const io = new Server<ClientEvents, ServerEvents>(httpServer, serverOptions);

  const {
    createRoom,
    readRoom,
    updateRoom,
    deleteRoom,
    listRoom,
  } = createRoomHandlers(components);

  io.on("connection", (socket) => {
    socket.on("room:create", createRoom);
    socket.on("room:read", readRoom);
    socket.on("room:update", updateRoom);
    socket.on("room:delete", deleteRoom);
    socket.on("room:list", listRoom);
  });

  return io;
}
