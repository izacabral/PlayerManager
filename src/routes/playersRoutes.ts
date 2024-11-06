import { FastifyInstance } from 'fastify';
import * as playerController from '../controllers/playerController';

async function playerRoutes(server: FastifyInstance) {
  server.get('/players', playerController.getPaginatedPlayers);

  server.get('/players/:id', playerController.getPlayerById);

  server.post('/players', playerController.createPlayer);

  server.put('/players/:id', playerController.updatePlayer);

  server.delete('/players/:id', playerController.deletePlayer);
}

export default playerRoutes;
