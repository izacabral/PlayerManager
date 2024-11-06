export const swaggerOptions = {
  openapi: {
    info: {
      title: 'PlayerManager API',
      description: 'API para gerenciar jogadores e habilidades',
      version: '1.0.0',
    },
    host: 'localhost:3030',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
  },
};

export const swaggerUIOptions = {
  routePrefix: '/docs',

  staticCSP: true,

  transformStaticCSP: (header: string) => header,

  uiConfig: {
    docExpansion: 'full' as const,
    deepLinking: true,
  },
};
