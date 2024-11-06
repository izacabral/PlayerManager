import { PlayerType } from '../schemas/playerSchema';
import { Prisma } from '@prisma/client';
import prisma from '../lib/prisma';

//listar - paginação - busca por nome e apelido - retornar: id, nome, apelido, data de criação
export const getPaginatedPlayers = async (
  page: number,
  perPage: number,
  search?: string,
) => {
  const skip = (page - 1) * perPage;

  const where = search
    ? {
        OR: [
          { name: { contains: search, mode: Prisma.QueryMode.insensitive } },
          {
            nickname: {
              contains: search,
              mode: Prisma.QueryMode.insensitive,
            },
          },
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
    orderBy: { createdAt: 'desc' },
  });

  const totalListed = players.length > perPage ? perPage : players.length;
  const hasNexPage = players.length > perPage;

  return {
    players: players.slice(0, perPage),
    pagination: {
      page,
      perPage,
      totalListed,
      hasNexPage,
    },
  };
};

//listar por id - retornar todos os dados
export const getPlayerById = async (id: string) => {
  return await prisma.player.findUniqueOrThrow({
    where: {
      id,
    },
    include: {
      skills: true,
    },
  });
};

//criar
export const createPlayer = async (playerData: PlayerType) => {
  return await prisma.player.create({
    data: {
      name: playerData.name,
      nickname: playerData.nickname,
      skills: {
        create: playerData.skills,
      },
    },
    include: {
      skills: true,
    },
  });
};

//editar
export const updatePlayer = async (id: string, playerData: PlayerType) => {
  return await prisma.player.update({
    where: {
      id,
    },
    data: {
      name: playerData.name,
      nickname: playerData.nickname,
      skills: {
        update: playerData.skills,
      },
    },
    include: {
      skills: true,
    },
  });
};

//remover
export const deletePlayer = async (id: string) => {
  await prisma.player.delete({
    where: {
      id,
    },
  });
};
