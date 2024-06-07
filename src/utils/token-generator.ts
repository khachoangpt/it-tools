import { shuffleString } from './shuffle-string'

const textUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const textLowercase = 'abcdefghijklmnopqrstuvwxyz'
const textNumber = '1234567890'
const textSymbol = '!@#$%^&*()_+-=[]{}|;:,.<>/?'

type GenerateRandomTokenOptions = {
  isUppercase: boolean
  isLowercase: boolean
  isNumber: boolean
  isSymbol: boolean
  length: number
}

export const generateRandomToken = (
  options: GenerateRandomTokenOptions,
): string => {
  const { isLowercase, isNumber, isSymbol, isUppercase, length } = options
  let token = ''
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
