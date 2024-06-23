import type { BinaryToTextEncoding } from 'crypto'
import crypto from 'crypto'

export const hashText = (
  text: string,
  encode: BinaryToTextEncoding,
  algorithm: string,
): string => {
  return crypto.createHash(algorithm).update(text).digest(encode).toString()
}
