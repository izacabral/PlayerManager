import { FastifyInstance } from 'fastify';
import * as playerController from '../controllers/playerController';
import { getPaginatedPlayersSchema } from '../docs/getPaginatedPlayersSchema';
import { getPlayerByIdSchema } from '../docs/getPlayerByIdSchema';
import { createPlayerSchema } from '../docs/createPlayerSchema';
import { updatePlayerSchema } from '../docs/updatePlayerSchema';
import { deletePlayerSchema } from '../docs/deletePlayerSchema';

async function playerRoutes(server: FastifyInstance) {
  server.get(
    '/players',
    { schema: getPaginatedPlayersSchema },
    playerController.getPaginatedPlayers,
  );

  server.get(
    '/players/:id',
    { schema: getPlayerByIdSchema },
    playerController.getPlayerById,
  );

  server.post(
    '/players',
    { schema: createPlayerSchema },
    playerController.createPlayer,
  );

  server.put(
    '/players/:id',
    { schema: updatePlayerSchema },
    playerController.updatePlayer,
  );

  server.delete(
    '/players/:id',
    { schema: deletePlayerSchema },
    playerController.deletePlayer,
  );
}

export default playerRoutes;
