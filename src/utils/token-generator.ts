import { shuffleString } from './shuffle-string'

const textUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const textLowercase = 'abcdefghijklmnopqrstuvwxyz'
const textNumber = '1234567890'
const textSymbol = '!@#$%^&*()_+-=[]{}|;:,.<>/?'

/**
 * Generates a random token based on the provided options.
 *
 * @param {Object} params - The options for generating the token.
 * @param {boolean} params.isUppercase - Indicates whether uppercase letters should be included in the token.
 * @param {boolean} params.isLowercase - Indicates whether lowercase letters should be included in the token.
 * @param {boolean} params.isNumber - Indicates whether numbers should be included in the token.
 * @param {boolean} params.isSymbol - Indicates whether symbols should be included in the token.
 * @param {number} params.length - The length of the token to generate.
 * @return {string} The generated random token.
 */
export const generateRandomToken = (params: {
  isUppercase: boolean
  isLowercase: boolean
  isNumber: boolean
  isSymbol: boolean
  length: number
}): string => {
  let token = ''
  const { isLowercase, isNumber, isSymbol, isUppercase, length } = params
  token += isUppercase ? textUppercase : ''
  token += isLowercase ? textLowercase : ''
  token += isNumber ? textNumber : ''
  token += isSymbol ? textSymbol : ''

  if (token === '') {
    return ''
  }

  const times = Math.ceil(length / token.length)
  token = token.repeat(times)
  token = shuffleString(token)
  token = token.slice(0, length)

  return token
}

export const tokenGeneratorCode = `const textUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const textLowercase = 'abcdefghijklmnopqrstuvwxyz'
const textNumber = '1234567890'
const textSymbol = '!@#$%^&*()_+-=[]{}|;:,.<>/?'

const generateRandomToken = (params: {
  isUppercase: boolean
  isLowercase: boolean
  isNumber: boolean
  isSymbol: boolean
  length: number
}): string => {
  let token = ''
  const { isLowercase, isNumber, isSymbol, isUppercase, length } = params
  token += isUppercase ? textUppercase : ''
  token += isLowercase ? textLowercase : ''
  token += isNumber ? textNumber : ''
  token += isSymbol ? textSymbol : ''

  if (token === '') {
    return ''
  }

  const times = Math.ceil(length / token.length)
  token = token.repeat(times)
  token = shuffleString(token)
  token = token.slice(0, length)

  return token
}
  `
