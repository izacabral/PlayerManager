export const updatePlayerSchema = {
  description: 'Atualiza as informações de um jogador existente',
  tags: ['Players'],
  summary: 'Atualização de jogador',
  params: {
    type: 'object',
    properties: {
      id: { type: 'string' },
    },
    required: ['id'],
  },
  body: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      nickname: { type: 'string' },
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
  response: {
    200: {
      description: 'Jogador atualizado com sucesso',
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
