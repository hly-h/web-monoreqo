import path from 'node:path'
import VueI18n from '@intlify/unplugin-vue-i18n/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
// https://vitejs.dev/config/
import UnoCSS from 'unocss/vite'


export default defineConfig({
  test: {
    environment: 'jsdom',
  },
  plugins: [vue(), VueI18n({
    runtimeOnly: true,
    compositionOnly: true,
    fullInstall: true,
    include: [path.resolve(__dirname, 'locales/**')],
  }), UnoCSS({
    // 默认在根目录，也可手动指定配置文件
    configFile: './uno.config.ts',
    theme: {
      breakpoints: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      fontSize: {
        micro: ['0.625rem', '1rem'],
        xs: ['0.75rem', '1rem'],
        sm: ['0.875rem', '1.125rem'],
        base: ['1rem', '1.5rem'],
        md: ['1.125rem', '1.5rem'],
        lg: ['1.25rem', '1.5rem'],
        xl: ['1.375rem', '2rem'],
      },
    },
  })],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
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
