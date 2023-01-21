import { nodeResolve } from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy';
import del from 'rollup-plugin-delete';

export default {
    input: 'src/main.mjs',
    output: {
        file: 'dist/main.mjs',
        format: 'es',
        sourcemap: true
    },
    plugins: [
        del({ targets: 'dist/*' }),
        copy({
            targets: [
                { src: 'index.html', dest: 'dist' },
                { src: 'style.css', dest: 'dist' }
            ]
        }),
        nodeResolve()
    ]
};
