import type { Icons } from '#/svgs'

export type ToolsDataType = {
  id: ToolIds
  title: string
  subtitle?: string
  isLike?: boolean
  icon?: keyof typeof Icons
  content?: ToolsDataType[]
}

export enum ToolIds {
  FAVORITE = 'favorite',
  CRYPTO = 'crypto',
  HASH_TEXT = 'hash-text',
  TOKEN_GENERATOR = 'token-generator',
}

export const tools: ToolsDataType[] = [
  {
    id: ToolIds.CRYPTO,
    title: 'Crypto',
    icon: undefined,
    isLike: true,
    content: [
      {
        id: ToolIds.TOKEN_GENERATOR,
        title: 'Token generator',
        isLike: false,
        subtitle:
          'Generate random string with the chars you want, uppercase or lowercase letters, numbers and/or symbols.',
        icon: 'TokenGeneratorIcon',
      },
      {
        id: ToolIds.HASH_TEXT,
        title: 'Hash text',
        isLike: false,
        subtitle:
          'Hash a text string using the function you need : MD5, SHA1, SHA256, SHA224, SHA512, SHA384, SHA3 or RIPEMD160',
        icon: 'HashTextIcon',
      },
    ],
  },
]
