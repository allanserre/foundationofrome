import { createServer } from "http";
import { createApplication } from "./app";
import { InMemoryRoomRepository } from "./room-management/room.repository";

const httpServer = createServer();

createApplication(
  httpServer,
  {
    roomRepository: new InMemoryRoomRepository(),
  },
  {
    cors: {
      origin: ["http://localhost:4200"],
    },
  }
);

httpServer.listen(3000);
