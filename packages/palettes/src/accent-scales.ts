import { amber, amberDark, amberA, amberDarkA } from '@radix-ui/colors'
import { blue, blueDark, blueA, blueDarkA } from '@radix-ui/colors'
import { bronze, bronzeDark, bronzeA, bronzeDarkA } from '@radix-ui/colors'
import { brown, brownDark, brownA, brownDarkA } from '@radix-ui/colors'
import { crimson, crimsonDark, crimsonA, crimsonDarkA } from '@radix-ui/colors'
import { cyan, cyanDark, cyanA, cyanDarkA } from '@radix-ui/colors'
import { gold, goldDark, goldA, goldDarkA } from '@radix-ui/colors'
import { green, greenDark, greenA, greenDarkA } from '@radix-ui/colors'
import { indigo, indigoDark, indigoA, indigoDarkA } from '@radix-ui/colors'
import { iris, irisDark, irisA, irisDarkA } from '@radix-ui/colors'
import { jade, jadeDark, jadeA, jadeDarkA } from '@radix-ui/colors'
import { lime, limeDark, limeA, limeDarkA } from '@radix-ui/colors'
import { mint, mintDark, mintA, mintDarkA } from '@radix-ui/colors'
import { orange, orangeDark, orangeA, orangeDarkA } from '@radix-ui/colors'
import { pink, pinkDark, pinkA, pinkDarkA } from '@radix-ui/colors'
import { plum, plumDark, plumA, plumDarkA } from '@radix-ui/colors'
import { purple, purpleDark, purpleA, purpleDarkA } from '@radix-ui/colors'
import { red, redDark, redA, redDarkA } from '@radix-ui/colors'
import { ruby, rubyDark, rubyA, rubyDarkA } from '@radix-ui/colors'
import { sky, skyDark, skyA, skyDarkA } from '@radix-ui/colors'
import { teal, tealDark, tealA, tealDarkA } from '@radix-ui/colors'
import { tomato, tomatoDark, tomatoA, tomatoDarkA } from '@radix-ui/colors'
import { violet, violetDark, violetA, violetDarkA } from '@radix-ui/colors'
import { yellow, yellowDark, yellowA, yellowDarkA } from '@radix-ui/colors'
import { generatePaletteScales } from './helpers'

export const accentPalettes = [
  'amber',
  'blue',
  'bronze',
  'brown',
  'crimson',
  'cyan',
  'gold',
  'green',
  'indigo',
  'iris',
  'jade',
  'lime',
  'mint',
  'orange',
  'pink',
  'plum',
  'purple',
  'red',
  'ruby',
  'sky',
  'teal',
  'tomato',
  'violet',
  'yellow'
] as const

export type AccentPalette = (typeof accentPalettes)[number]

const paletteMapping = {
  amber: { base: amber, a: amberA, dark: amberDark, darkA: amberDarkA },
  blue: { base: blue, a: blueA, dark: blueDark, darkA: blueDarkA },
  bronze: { base: bronze, a: bronzeA, dark: bronzeDark, darkA: bronzeDarkA },
  brown: { base: brown, a: brownA, dark: brownDark, darkA: brownDarkA },
  crimson: { base: crimson, a: crimsonA, dark: crimsonDark, darkA: crimsonDarkA },
  cyan: { base: cyan, a: cyanA, dark: cyanDark, darkA: cyanDarkA },
  gold: { base: gold, a: goldA, dark: goldDark, darkA: goldDarkA },
  green: { base: green, a: greenA, dark: greenDark, darkA: greenDarkA },
  indigo: { base: indigo, a: indigoA, dark: indigoDark, darkA: indigoDarkA },
  iris: { base: iris, a: irisA, dark: irisDark, darkA: irisDarkA },
  jade: { base: jade, a: jadeA, dark: jadeDark, darkA: jadeDarkA },
  lime: { base: lime, a: limeA, dark: limeDark, darkA: limeDarkA },
  mint: { base: mint, a: mintA, dark: mintDark, darkA: mintDarkA },
  orange: { base: orange, a: orangeA, dark: orangeDark, darkA: orangeDarkA },
  pink: { base: pink, a: pinkA, dark: pinkDark, darkA: pinkDarkA },
  plum: { base: plum, a: plumA, dark: plumDark, darkA: plumDarkA },
  purple: { base: purple, a: purpleA, dark: purpleDark, darkA: purpleDarkA },
  red: { base: red, a: redA, dark: redDark, darkA: redDarkA },
  ruby: { base: ruby, a: rubyA, dark: rubyDark, darkA: rubyDarkA },
  sky: { base: sky, a: skyA, dark: skyDark, darkA: skyDarkA },
  teal: { base: teal, a: tealA, dark: tealDark, darkA: tealDarkA },
  tomato: { base: tomato, a: tomatoA, dark: tomatoDark, darkA: tomatoDarkA },
  violet: { base: violet, a: violetA, dark: violetDark, darkA: violetDarkA },
  yellow: { base: yellow, a: yellowA, dark: yellowDark, darkA: yellowDarkA }
} as const

export const accentScales = generatePaletteScales(accentPalettes, paletteMapping)
