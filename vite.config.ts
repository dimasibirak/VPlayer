import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
    plugins: [
        legacy({
            targets: ['defaults', 'not IE 11'],
        }),
    ],
    build: {
        lib: {
            entry: 'src/index.ts',
            name: 'VPlayer',
            fileName: (format: string) => `v-player.${format}.js`,
        },
        rollupOptions: {
            external: [],
            output: {
                globals: {},
            },
        },
        minify: 'esbuild',
        sourcemap: false,
    },
    server: {
        port: 4000,
        open: true,
    },
});