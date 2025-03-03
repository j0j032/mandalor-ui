import { neutralScales } from './gray-scales'
import config from './components.json'

const {
  'neutral-palette': neutralPalette,
  'accent-palette': accentPalette,
  'error-palette': errorPalette,
  'success-palette': successPalette,
  'warning-palette': warningPalette,
  'info-palette': infoPalette
} = config

console.log(neutralScales[neutralPalette].gray1)

const palette1VariablesNames = [
  'app-background',
  'app-background-alpha',
  'app-background-accent',
  'app-background-accent-alpha',
  'app-background-error',
  'app-background-error-alpha',
  'app-background-success',
  'app-background-success-alpha',
  'app-background-warning',
  'app-background-warning-alpha',
  'app-background-info',
  'app-background-info-alpha'
]

const palette1Variables = palette1VariablesNames.map(variable => {
  return {
    // [variable]: neutralScales['neutral-palette'][variable],
  }
})
