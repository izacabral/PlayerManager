import { FastifyInstance } from 'fastify';

async function playerRoutes(fastify, options) {
  fastify.get('/players', async (req, res) => {
    return {
      message: 'hello from get',
    };
  });

  fastify.post('/players', async (req, res) => {
    return {
      message: 'hello from post',
    };
  });

  fastify.put('/players/:id', (req, res) => {
    const playerId = req.params.id;
    return {
      message: `hello from put ${playerId}`,
    };
  });

  fastify.delete('/players/:id', (req, res) => {
    const playerId = req.params.id;
    return {
      message: `hello from delete ${playerId}`,
    };
  });
}

export default playerRoutes;
