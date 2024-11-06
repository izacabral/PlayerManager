export const createPlayerSchema = {
  description: 'Cria um novo jogador com habilidades associadas',
  tags: ['Players'],
  summary: 'Criação de jogador',
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
        required: ['strength', 'speed'],
      },
    },
    required: ['name', 'skills'],
  },
  response: {
    201: {
      description: 'Resposta bem-sucedida',
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
