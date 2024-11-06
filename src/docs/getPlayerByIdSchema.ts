export const getPlayerByIdSchema = {
  description: 'Obtém detalhes de um jogador específico pelo ID',
  tags: ['Players'],
  summary: 'Detalhes de jogador por ID',
  params: {
    type: 'object',
    properties: {
      id: { type: 'string' },
    },
    required: ['id'],
  },
  response: {
    200: {
      description: 'Detalhes do jogador',
      type: 'object',
      properties: {
        id: { type: 'string' },
        name: { type: 'string' },
        nickname: { type: 'string' },
        createdAt: { type: 'string', format: 'date-time' },
        skills: {
          type: 'object',
          properties: {
            strength: { type: 'integer' },
            speed: { type: 'integer' },
            driblle: { type: 'integer' },
          },
        },
      },
    },
    400: {
      description: 'Erro de validação',
      type: 'object',
      properties: {
        message: { type: 'string' },
        errors: { type: 'array', items: { type: 'object' } },
      },
    },
    500: {
      description: 'Erro interno',
      type: 'object',
      properties: {
        message: { type: 'string' },
        error: { type: 'object' },
      },
    },
  },
};
