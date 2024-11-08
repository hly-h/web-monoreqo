import type { Theme } from 'unocss/preset-uno'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerAttributifyJsx,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import presetTheme from 'unocss-preset-theme'
import { myTheme } from './uno.theme'

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetAttributify({
      /* preset options */
      presets: [presetAttributify(), presetUno()],
      transformers: [
        transformerDirectives(),
        transformerAttributifyJsx(),
        transformerVariantGroup(),
      ],
    }),
    presetUno(),
    presetTheme<Theme>({
      theme: myTheme,
    }),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerAttributifyJsx(),
    transformerVariantGroup(),
  ],
  shortcuts: [
    [
      'btn',
      'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
    ],
    [
      'icon-btn',
      'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600 !outline-none',
    ],
  ],
})
