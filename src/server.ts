import Fastify from 'fastify';
import playersRoutes from './routes/playersRoutes.js';

const server = Fastify();

server.register(playersRoutes);

const start = async () => {
  try {
    await server.listen({ port: 3030 });
    console.log('Server running on https://localhost:3030');
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
};
start();
