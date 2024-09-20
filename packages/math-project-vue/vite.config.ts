import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
// https://vitejs.dev/config/
import UnoCSS from 'unocss/vite'


export default defineConfig({
  plugins: [vue(), UnoCSS(),
  ],
  resolve: {
    alias: { '@': '/src' },
  },
  server: {
    open: true,
    proxy: {
      '/api': {
        target: 'https://www.zhihu.com',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
