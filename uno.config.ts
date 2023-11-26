import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  shortcuts: {
		'keep-all': 'ws-nowrap break-keep',
		'text-exceed': 'truncate break-keep'
  },
//	theme: {
//	    colors: {
//	      // ...
//	      bg:"#FFF",
//	      base:"blue"
//	    },
//	},
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})