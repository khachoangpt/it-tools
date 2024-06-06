import { shuffleString } from './shuffle-string'

const textUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const textLowercase = 'abcdefghijklmnopqrstuvwxyz'
const textNumber = '1234567890'
const textSymbol = '!@#$%^&*()_+-=[]{}|;:,.<>/?'

/**
 * Generates a random token based on the provided options.
 *
 * @param {Object} options - The options for generating the token.
 * @param {boolean} options.isUppercase - Indicates whether uppercase letters should be included in the token.
 * @param {boolean} options.isLowercase - Indicates whether lowercase letters should be included in the token.
 * @param {boolean} options.isNumber - Indicates whether numbers should be included in the token.
 * @param {boolean} options.isSymbol - Indicates whether symbols should be included in the token.
 * @param {number} options.length - The length of the token to generate.
 * @return {string} The generated random token.
 */
export const generateRandomToken = ({
  isLowercase,
  isNumber,
  isSymbol,
  isUppercase,
  length,
}: {
  isUppercase: boolean
  isLowercase: boolean
  isNumber: boolean
  isSymbol: boolean
  length: number
}): string => {
  let token = ''
  token += isUppercase ? textUppercase : ''
  token += isLowercase ? textLowercase : ''
  token += isNumber ? textNumber : ''
  token += isSymbol ? textSymbol : ''

  const times = Math.ceil(length / token.length)
  token = token.repeat(times)
  token = shuffleString(token)
  token = token.slice(0, length)

  return token
}

export const tokenGeneratorCode = `const generateRandomToken = ({
  isLowercase,
  isNumber,
  isSymbol,
  isUppercase,
  length,
}: {
  isUppercase: boolean
  isLowercase: boolean
  isNumber: boolean
  isSymbol: boolean
  length: number
}): string => {
  let token = ''
  token += isUppercase ? textUppercase : ''
  token += isLowercase ? textLowercase : ''
  token += isNumber ? textNumber : ''
  token += isSymbol ? textSymbol : ''

  const times = Math.ceil(length / token.length)
  token = token.repeat(times)
  token = shuffleString(token)
  token = token.slice(0, length)

  return token
}
`
