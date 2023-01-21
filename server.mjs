import Fastify from 'fastify'
import fastifyStatic from '@fastify/static';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const state = {
    name: 'World'
};

const fastify = Fastify({ logger: true });

fastify.get('/api/name', async (request, reply) => {
    return { name: state.name }
});

const schema = {
    body: {
        name: { type: 'string' }
    }
};

fastify.post('/api/name', { schema }, async (request, reply) => {
    const name = request.body.name;

    state.name = name;

    return { status: 'ok' };
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
