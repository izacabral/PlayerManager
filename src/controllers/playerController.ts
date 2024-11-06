import { FastifyRequest, FastifyReply } from 'fastify';
import { playerSchema, playerIdSchema } from '../schemas/playerSchema';
import { querySchema } from '../schemas/querySchema';
import * as playerService from '../services/playerService';
import { ZodError } from 'zod';


export const getPaginatedPlayers = async (req: FastifyRequest, res: FastifyReply) => {
	try {
		const { page, perPage, search } = querySchema.parse(req.query);

		const result = await playerService.getPaginatedPlayers(page, perPage, search);

		return res.send(result);
	} catch (error) {
    if (error instanceof ZodError) {
			res.status(400).send({ message: "Erro de validação", errors: error.errors})
		} else {
			res.status(500).send({ message: "Erro ao listar jogadores", error })
		}
	}
}

export const getPlayerById = async (req: FastifyRequest, res: FastifyReply) => {
	try {
		const { id } = playerIdSchema.parse(req.params);

		const player = await playerService.getPlayerById(id);

		return res.send(player);
	} catch (error) {
		if (error instanceof ZodError) {
			res.status(400).send({ message: "Erro de validação", errors: error.errors})
		} else {
			res.status(500).send({ message: "Erro ao listar jogador", error })
		}
	}
}

export const createPlayer = async (req: FastifyRequest, res: FastifyReply) => {
	try {
		const playerData = playerSchema.parse(req.body);
		const newPlayer = await playerService.createPlayer(playerData);
		return res.status(201).send(newPlayer)
	} catch (error) {
		if (error instanceof ZodError) {
			res.status(400).send({ message: "Erro de validação", errors: error.errors})
		} else {
			res.status(500).send({ message: "Erro ao criar jogador", error })
		}
	}
}

export const updatePlayer = async (req: FastifyRequest, res: FastifyReply) => {
	try {
		const { id } = playerIdSchema.parse(req.params);
		const playerData = playerSchema.parse(req.body);
		const updatedPlayer = await playerService.updatePlayer(id, playerData);
		return res.send(updatedPlayer)
	} catch (error) {
		if (error instanceof ZodError) {
			res.status(400).send({ message: "Erro de validação", errors: error.errors})
		} else {
			res.status(500).send({ message: "Erro ao atualizar jogador", error })
		}
	}
}

export const deletePlayer = async (req: FastifyRequest, res: FastifyReply) => {
	try {
		const { id } = playerIdSchema.parse(req.params);
		await playerService.deletePlayer(id);
		return res.status(204).send();

	} catch (error) {
		if (error instanceof ZodError) {
			res.status(400).send({ message: "Erro de validação", errors: error.errors})
		} else {
			res.status(500).send({ message: "Erro ao deletar jogador", error })
		}
	}
}
