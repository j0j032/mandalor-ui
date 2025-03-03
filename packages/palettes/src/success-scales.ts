import { green, greenDark, greenA, greenDarkA } from '@radix-ui/colors'
import { teal, tealDark, tealA, tealDarkA } from '@radix-ui/colors'
import { jade, jadeDark, jadeA, jadeDarkA } from '@radix-ui/colors'
import { grass, grassDark, grassA, grassDarkA } from '@radix-ui/colors'
import { mint, mintDark, mintA, mintDarkA } from '@radix-ui/colors'

import { generatePaletteScales } from './helpers'

const successPalettes = ['green', 'teal', 'jade', 'grass', 'mint'] as const

export const successScalesMapping = {
  green: { base: green, a: greenA, dark: greenDark, darkA: greenDarkA },
  teal: { base: teal, a: tealA, dark: tealDark, darkA: tealDarkA },
  jade: { base: jade, a: jadeA, dark: jadeDark, darkA: jadeDarkA },
  grass: { base: grass, a: grassA, dark: grassDark, darkA: grassDarkA },
  mint: { base: mint, a: mintA, dark: mintDark, darkA: mintDarkA }
}

export const successScales = generatePaletteScales(successPalettes, successScalesMapping)
