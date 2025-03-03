import { NeutralPalette, neutralScales } from './gray-scales'
import config from './components.json'
import { AccentPalette } from './accent-scales'
import { ErrorPalette } from './error-scales'
import { SuccessPalette } from './success-scales'
import { WarningPalette } from './warning-scales'
import { InfoPalette } from './info-scales'

type ComponentsConfig = {
  'neutral-palette': NeutralPalette
  'accent-palette': AccentPalette
  'error-palette': ErrorPalette
  'success-palette': SuccessPalette
  'warning-palette': WarningPalette
  'info-palette': InfoPalette
}

const {
  'neutral-palette': neutralPalette,
  'accent-palette': accentPalette,
  'error-palette': errorPalette,
  'success-palette': successPalette,
  'warning-palette': warningPalette,
  'info-palette': infoPalette
} = config as ComponentsConfig

console.log(neutralScales[neutralPalette])

const cssVariablesSuffixes = [
  '',
  'accent',
  'accent-alpha',
  'error',
  'error-alpha',
  'success',
  'success-alpha',
  'warning',
  'warning-alpha',
  'info',
  'info-alpha'
] as const
