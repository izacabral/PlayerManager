import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { playerSchema, playerIdSchema } from '../schemas/playerSchema';
import prisma from '../lib/prisma';

async function playerRoutes(server: FastifyInstance) {
  //listar - paginação - busca por nome e apelido - retornar: id, nome, apelido, data de criação
  server.get('/players', async (req: FastifyRequest, res: FastifyReply) => {
    const players = await prisma.player.findMany({
      select: {
        id: true,
        name: true,
        nickname: true,
        createdAt: true,
      },
    });

    return players;
  });

  //listar por id - retornar todos os dados
  server.get('/players/:id', async (req: FastifyRequest, res: FastifyReply) => {
    const { id } = playerIdSchema.parse(req.params);

    const player = await prisma.player.findUniqueOrThrow({
      where: {
        id,
      },
    });

    return player;
  });

  //criar
  server.post('/players', async (req: FastifyRequest, res: FastifyReply) => {
    const { name, nickname } = playerSchema.parse(req.body);

    const player = await prisma.player.create({
      data: {
        name,
        nickname,
      },
    });

    return player;
  });

  //editar
  server.put('/players/:id', async (req: FastifyRequest, res: FastifyReply) => {
    const { id } = playerIdSchema.parse(req.params);
    const { name, nickname } = playerSchema.parse(req.body);

    const player = await prisma.player.update({
      where: {
        id,
      },
      data: {
        name,
        nickname,
      },
    });

    return player;
  });

  //remover
  server.delete(
    '/players/:id',
    async (req: FastifyRequest, res: FastifyReply) => {
      const { id } = playerIdSchema.parse(req.params);

      await prisma.player.delete({
        where: {
          id,
        },
      });
    },
  );
}

export default playerRoutes;
