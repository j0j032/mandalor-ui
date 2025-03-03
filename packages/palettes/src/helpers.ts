export const getPaletteObjWithIndex = (palette: any) => {
  return Object.keys(palette).reduce((acc, key, index) => {
    return {
      ...acc,
      [index + 1]: palette[key]
    }
  }, {})
}

type PaletteVariant = 'base' | 'a' | 'dark' | 'darkA'

type PaletteMapping<T extends string> = Record<T, Record<PaletteVariant, any>>

type PaletteScales<T extends string> = {
  [K in T]: {
    [V in PaletteVariant]: Record<number, string>
  }
}

export const generatePaletteScales = <T extends string>(
  paletteNames: readonly T[],
  paletteMapping: PaletteMapping<T>
): PaletteScales<T> => {
  const paletteVariants = {
    '': 'base',
    A: 'a',
    Dark: 'dark',
    DarkA: 'darkA'
  } as const satisfies Record<string, PaletteVariant>

  return paletteNames.reduce((acc, paletteName) => {
    const paletteScales = Object.entries(paletteVariants).reduce(
      (scales, [_, variant]) => {
        const value = getPaletteObjWithIndex(paletteMapping[paletteName][variant])
        return { ...scales, [variant]: value }
      },
      {} as Record<PaletteVariant, Record<number, string>>
    )

    return {
      ...acc,
      [paletteName]: paletteScales
    }
  }, {} as PaletteScales<T>)
}
