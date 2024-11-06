export const getPaginatedPlayersSchema = {
  description: 'Obtém uma lista paginada de jogadores',
  tags: ['Players'],
  summary: 'Listagem de jogadores',
  querystring: {
    type: 'object',
    properties: {
      page: { type: 'number', default: 1 },
      perPage: { type: 'number', default: 10 },
      search: { type: 'string' },
    },
  },
  response: {
    200: {
      description: 'Lista de jogadores paginada',
      type: 'object',
      properties: {
        players: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string' },
              name: { type: 'string' },
              nickname: { type: 'string' },
              createdAt: { type: 'string', format: 'date-time' },
            },
          },
        },
        pagination: {
          type: 'object',
          properties: {
            page: { type: 'number' },
            perPage: { type: 'number' },
            totalListed: { type: 'number' },
            hasNexPage: { type: 'boolean' },
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
