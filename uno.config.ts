// uno.config.ts
import {
  defineConfig, presetIcons, presetWind3, presetMini, presetWebFonts
} from 'unocss'

import { presetUI } from "@unifydev/preset-ui"

export default defineConfig({
  transformers: [
  ],
  presets: [
    presetWind3(),
    presetMini({
      dark: "class"
    }),
    presetWebFonts({
      provider: "none",
      fonts: {
        dms: ["'DM Sans'", 'sans-serif'],
      },
    }),
    presetUI(),
    presetIcons(
      {
        collections: {
          // carbon: () => import('@iconify-json/carbon/icons.json').then(i => i.default),
        }
      }
    ),
  ],
})