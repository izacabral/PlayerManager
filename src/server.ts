import Fastify from 'fastify';
import playersRoutes from './routes/playersRoutes.js';
import { swaggerOptions, swaggerUIOptions } from './docs/swagger.js';
import swagger from '@fastify/swagger';
import swaggerUI from '@fastify/swagger-ui';

const server = Fastify();

server.register(swagger, swaggerOptions);

server.register(swaggerUI, swaggerUIOptions);

server.register(playersRoutes);

const start = async () => {
  try {
    await server.listen({ port: 3030 });
    console.log('Server running on http://localhost:3030');
    console.log( "Documentation on http://localhost:3030/docs")
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
};
start();
