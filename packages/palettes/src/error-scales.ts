import { red, redA, redDark, redDarkA } from '@radix-ui/colors'
import { ruby, rubyA, rubyDark, rubyDarkA } from '@radix-ui/colors'
import { tomato, tomatoA, tomatoDark, tomatoDarkA } from '@radix-ui/colors'
import { crimson, crimsonA, crimsonDark, crimsonDarkA } from '@radix-ui/colors'
import { generatePaletteScales } from './helpers'

const errorPalettes = ['red', 'ruby', 'tomato', 'crimson'] as const

export const errorScalesMapping = {
  red: { base: red, a: redA, dark: redDark, darkA: redDarkA },
  ruby: { base: ruby, a: rubyA, dark: rubyDark, darkA: rubyDarkA },
  tomato: { base: tomato, a: tomatoA, dark: tomatoDark, darkA: tomatoDarkA },
  crimson: { base: crimson, a: crimsonA, dark: crimsonDark, darkA: crimsonDarkA }
}

export const errorScales = generatePaletteScales(errorPalettes, errorScalesMapping)
