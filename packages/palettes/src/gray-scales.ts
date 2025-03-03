import { gray, grayDark, grayA, grayDarkA } from '@radix-ui/colors'
import { mauve, mauveDark, mauveA, mauveDarkA } from '@radix-ui/colors'
import { slate, slateDark, slateA, slateDarkA } from '@radix-ui/colors'
import { sage, sageDark, sageA, sageDarkA } from '@radix-ui/colors'
import { olive, oliveDark, oliveA, oliveDarkA } from '@radix-ui/colors'
import { sand, sandDark, sandA, sandDarkA } from '@radix-ui/colors'
import { generatePaletteScales } from './helpers'

export const neutralPalettes = ['gray', 'mauve', 'slate', 'sage', 'olive', 'sand'] as const
export type NeutralPalette = (typeof neutralPalettes)[number]

const paletteMapping = {
  gray: { base: gray, a: grayA, dark: grayDark, darkA: grayDarkA },
  mauve: { base: mauve, a: mauveA, dark: mauveDark, darkA: mauveDarkA },
  slate: { base: slate, a: slateA, dark: slateDark, darkA: slateDarkA },
  sage: { base: sage, a: sageA, dark: sageDark, darkA: sageDarkA },
  olive: { base: olive, a: oliveA, dark: oliveDark, darkA: oliveDarkA },
  sand: { base: sand, a: sandA, dark: sandDark, darkA: sandDarkA }
} as const

export const neutralScales = generatePaletteScales(neutralPalettes, paletteMapping)
