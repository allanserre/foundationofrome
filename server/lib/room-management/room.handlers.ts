import { Room } from './../../../common/Room';

import { Errors, mapErrorDetails, sanitizeErrorMessage } from "../util";
import { v4 as uuid } from "uuid";
import { Components } from "../app";
import Joi = require("joi");
const ShortUniqueId = require('short-unique-id');
import {
  ClientEvents,
  Response,
  ServerEvents,
} from "../../../common/events";
import { Socket } from "socket.io";
import { RoomID } from "../../../common/Room";

const idSchema = Joi.string().guid({
  version: "uuidv4",
});

export default function ({ roomRepository }: Components) {
  return {
    createRoom: async function (
      payload: string,
      callback: (res: Response<RoomID>) => void
    ) {
      // @ts-ignore
      const socket: Socket<ClientEvents, ServerEvents> = this;
      const generator = new ShortUniqueId({ dictionary: 'hex' });
      const code = generator();

      const room: Room = {
        id: uuid(), // generate a unique id for the new room, that way we don't need to deal with duplicates.
        code: code,
        players: [],
        state: 0,
        created_at: Date.now(),
        started_at: null
      };


      // persist the entity
      try {
        await roomRepository.save(room);
      } catch (e) {
        return callback({
          error: sanitizeErrorMessage(e),
        });
      }

      // acknowledge the creation
      callback({
        data: room.id,
      });

      // notify the other users
      socket.broadcast.emit("room:created", room);
    },

    readRoom: async function (
      id: RoomID,
      callback: (res: Response<Room>) => void
    ) {
      const { error } = idSchema.validate(id);

      if (error) {
        return callback({
          error: Errors.ENTITY_NOT_FOUND,
        });
      }

      try {
        const room = await roomRepository.findById(id);
        callback({
          data: room,
        });
      } catch (e) {
        callback({
          error: sanitizeErrorMessage(e),
        });
      }
    },

    updateRoom: async function (
      payload: Room,
      callback: (res?: Response<void>) => void
    ) {
      // @ts-ignore
      const socket: Socket<ClientEvents, ServerEvents> = this;

      try {
        await roomRepository.findById(payload.id);
        await roomRepository.save(payload);
      } catch (e) {
        return callback({
          error: sanitizeErrorMessage(e),
        });
      }

      callback();
      socket.broadcast.emit("room:updated", payload);
    },

    deleteRoom: async function (
      id: RoomID,
      callback: (res?: Response<void>) => void
    ) {
      // @ts-ignore
      const socket: Socket<ClientEvents, ServerEvents> = this;

      const { error } = idSchema.validate(id);

      if (error) {
        return callback({
          error: Errors.ENTITY_NOT_FOUND,
        });
      }

      try {
        await roomRepository.deleteById(id);
      } catch (e) {
        return callback({
          error: sanitizeErrorMessage(e),
        });
      }

      callback();
      socket.broadcast.emit("room:deleted", id);
    },

    joinRoom: async function (id: RoomID, callback: (res: Response<Room>) => void) {
      const { error } = idSchema.validate(id);

      if (error) {
        return callback({
          error: Errors.ENTITY_NOT_FOUND,
        });
      }

      try {
        const room = await roomRepository.findById(id);
        callback({
          data: room,
        });
      } catch (e) {
        callback({
          error: sanitizeErrorMessage(e),
        });
      }
    }
  };
}
