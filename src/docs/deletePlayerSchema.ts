export const deletePlayerSchema = {
  description: 'Deleta um jogador específico pelo ID',
  tags: ['Players'],
  summary: 'Deleção de jogador',
  params: {
    type: 'object',
    properties: {
      id: { type: 'string' },
    },
    required: ['id'],
  },
  response: {
    204: {
      description: 'Jogador deletado com sucesso',
      type: 'null',
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
