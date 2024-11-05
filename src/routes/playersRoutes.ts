import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { playerSchema, playerIdSchema } from '../schemas/playerSchema';
import { querySchema } from '../schemas/querySchema';
import { Prisma } from '@prisma/client';
import prisma from '../lib/prisma';

async function playerRoutes(server: FastifyInstance) {
  //listar - paginação - busca por nome e apelido - retornar: id, nome, apelido, data de criação
  server.get('/players', async (req: FastifyRequest, res: FastifyReply) => {
    const { page, perPage, search } = querySchema.parse(req.query);

    const skip = (page -1) * perPage;

    const where = search
      ? {
          OR: [
            { name: { contains: search, mode: Prisma.QueryMode.insensitive }},
            { nickname: { contains: search, mode: Prisma.QueryMode.insensitive }},
          ],
      }
    : {};

    const players = await prisma.player.findMany({
      where,
      select: {
        id: true,
        name: true,
        nickname: true,
        createdAt: true,
      },
      skip,
      take: perPage + 1,
      orderBy: { createdAt: 'desc'}
    });

    const totalListed = players.length
    const hasNexPage = totalListed > perPage;

    return {
      players: players.slice(0, perPage),
      pagination: {
        page,
        perPage,
        totalListed,
        hasNexPage,
      }
    }
  });

  //listar por id - retornar todos os dados
  server.get('/players/:id', async (req: FastifyRequest, res: FastifyReply) => {
    const { id } = playerIdSchema.parse(req.params);

    const player = await prisma.player.findUniqueOrThrow({
      where: {
        id,
      },
      include: {
        skills: true
      }
    });

    return player;
  });

  //criar
  server.post('/players', async (req: FastifyRequest, res: FastifyReply) => {
    const { name, nickname, skills } = playerSchema.parse(req.body);

    const player = await prisma.player.create({
      data: {
        name,
        nickname,
        skills: {
          create: {
            strength: skills.strength,
            speed: skills.speed,
            driblle: skills.driblle,
          }
        }
      },
      include: {
        skills: true
      }
    });

    return player;
  });

  //editar
  server.put('/players/:id', async (req: FastifyRequest, res: FastifyReply) => {
    const { id } = playerIdSchema.parse(req.params);
    const { name, nickname, skills } = playerSchema.parse(req.body);

    const player = await prisma.player.update({
      where: {
        id,
      },
      data: {
        name,
        nickname,
        skills: {
          create: skills,
        }
      },
      include: {
        skills: true
      }
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
