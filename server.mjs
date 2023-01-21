import Fastify from 'fastify'
import fastifyStatic from '@fastify/static';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fastify = Fastify({ logger: true });

fastify.get('/api/name', async (request, reply) => {
    return { name: 'World' }
});

fastify.register(fastifyStatic, {
    root: path.join(__dirname, 'dist')
});

const start = async () => {
    try {
        await fastify.listen({ port: 3000 })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start();
