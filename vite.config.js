import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import copy from 'rollup-plugin-copy';
import mkcert from 'vite-plugin-mkcert';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  server: { https: true, port: 3005 },
  build: {
    reportCompressedSize: true
  },
  plugins: [
    viteCompression({
      // Настройте параметры здесь, чтобы отключить сжатие GZIP
      disable: true, // Отключает сжатие
      filter: /\.(js|mjs|json|css|html|onnx|gz|wasm)$/i, // Фильтрация типов файлов для сжатия
      // Другие параметры...
    }),
    copy({
      targets: [
        { src: 'node_modules/@idscan/idvc2/dist/networks/*', dest: 'public/networks' },
      ],
      hook: 'writeBundle',
    }),
    mkcert(),
    vue(),
  ],
})
