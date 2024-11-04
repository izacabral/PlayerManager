import Fastify from 'fastify';
import playerRoutes from './routes/playerRoutes.js';

const server = Fastify();

server.register(playerRoutes);

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
