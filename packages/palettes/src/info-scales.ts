import { blue, blueDark, blueA, blueDarkA } from '@radix-ui/colors'
import { indigo, indigoDark, indigoA, indigoDarkA } from '@radix-ui/colors'
import { sky, skyDark, skyA, skyDarkA } from '@radix-ui/colors'
import { cyan, cyanDark, cyanA, cyanDarkA } from '@radix-ui/colors'
import { generatePaletteScales } from './helpers'

const infoPalettes = ['blue', 'indigo', 'sky', 'cyan'] as const

export const infoScalesMapping = {
  blue: { base: blue, a: blueA, dark: blueDark, darkA: blueDarkA },
  indigo: { base: indigo, a: indigoA, dark: indigoDark, darkA: indigoDarkA },
  sky: { base: sky, a: skyA, dark: skyDark, darkA: skyDarkA },
  cyan: { base: cyan, a: cyanA, dark: cyanDark, darkA: cyanDarkA }
}

export const infoScales = generatePaletteScales(infoPalettes, infoScalesMapping)
