import { defineConfig, presetAttributify, presetIcons, presetUno, Rule } from 'unocss'
// https://github.com/unocss/unocss

export const createConfig = () => {
  return defineConfig({
    presets: [
      presetUno(),
      presetAttributify(),
      presetIcons({
        prefix: '',
      }),
    ],
    include: [/\.vue$/],
  })
}

export default createConfig()
