import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { viteExternalsPlugin } from 'vite-plugin-externals'

// https://vitejs.dev/config/
export default defineConfig({
  // root:resolve(__dirname, 'index.html'),
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
      },
      output: {
        manualChunks(id) {
          if (id.includes('style.css')) {
            return 'tailwindcss'
          }
          // else if (id.includes('configs/element-theme.scss')) {
          //   return 'ele'
          // }
        },
      },
    },
  },
  plugins: [
    vue(),
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      // global imports to register
      imports: [
        'vue',
        'vue-router',
        'pinia',
        // custom
        {
          '@vueuse/core': [
            // named imports
            'useMouse', // import { useMouse } from '@vueuse/core',
            // alias
            ['useFetch', 'useMyFetch'], // import { useFetch as useMyFetch } from '@vueuse/core',
          ],
          axios: [
            // default imports
            ['default', 'axios'], // import { default as axios } from 'axios',
          ],
          '[package-name]': [
            '[import-names]',
            // alias
            ['[from]', '[alias]'],
          ],
        },
      ],
      dts: true, // generate dts to `dist/auto-imports.d.ts`
      eslintrc: {
        enabled: false, // <-- this
      },
    }),
  ],
  base: './',
  resolve: {
    alias: { '@': resolve(__dirname, 'src') },
  },
  server: {
    host: '0.0.0.0',
    // proxy: {
    //   // 选项写法
    //   '/proxy': {
    //     target: 'http://test.example.com',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/proxy/, ''),
    //   },
    // },
  },
})
