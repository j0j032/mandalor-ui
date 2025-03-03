import { amber, amberDark, amberA, amberDarkA } from '@radix-ui/colors'
import { orange, orangeDark, orangeA, orangeDarkA } from '@radix-ui/colors'
import { yellow, yellowDark, yellowA, yellowDarkA } from '@radix-ui/colors'
import { generatePaletteScales } from './helpers'

const warningPalettes = ['yellow', 'amber', 'orange'] as const
export type WarningPalette = (typeof warningPalettes)[number]
export const warningScalesMapping = {
  yellow: { base: yellow, a: yellowA, dark: yellowDark, darkA: yellowDarkA },
  amber: { base: amber, a: amberA, dark: amberDark, darkA: amberDarkA },
  orange: { base: orange, a: orangeA, dark: orangeDark, darkA: orangeDarkA }
}

export const warningScales = generatePaletteScales(warningPalettes, warningScalesMapping)
