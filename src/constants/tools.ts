import type { Icons } from '#/svgs'

export type ToolsDataType = {
  id: string
  title: string
  subtitle?: string
  isLike?: boolean
  icon?: keyof typeof Icons
  content?: ToolsDataType[]
}

export const tools: ToolsDataType[] = [
  {
    id: 'crypto',
    title: 'Crypto',
    icon: undefined,
    isLike: true,
    content: [
      {
        id: 'token-generator',
        title: 'Token generator',
        isLike: false,
        subtitle:
          'Generate random string with the chars you want, uppercase or lowercase letters, numbers and/or symbols.',
        icon: 'TokenGeneratorIcon',
      },
      {
        id: 'hash-text',
        title: 'Hash text',
        isLike: false,
        subtitle:
          'Hash a text string using the function you need : MD5, SHA1, SHA256, SHA224, SHA512, SHA384, SHA3 or RIPEMD160',
        icon: 'HashTextIcon',
      },
    ],
  },
]
