import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';

async function playerRoutes(server: FastifyInstance) {
  server.get('/players', async (req: FastifyRequest, res: FastifyReply) => {

  });

  server.get('/players/:id', async (req: FastifyRequest, res: FastifyReply) => {

  });

  server.post('/players', async (req: FastifyRequest, res: FastifyReply) => {

  });

  server.put('/players/:id', async (req: FastifyRequest, res: FastifyReply) => {

  });

  server.delete(
    '/players/:id',
    async (req: FastifyRequest, res: FastifyReply) => {

  });
}

export default playerRoutes;
