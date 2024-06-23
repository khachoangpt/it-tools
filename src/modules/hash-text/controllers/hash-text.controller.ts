import { useForm } from 'react-hook-form'

import { HashTextEncode } from '@/constants'
import type { SelectOptions } from '@/types'

import type { HashTextFormType } from '../types'

const useHashTextController = () => {
  const defaultValues: HashTextFormType = {
    text: '',
    encode: 'hex',
  }
  const encodes: SelectOptions[] = [
    { label: 'Hexadecimal (base 16)', value: 'hex' },
    // { label: 'Binary (base 2)', value: 'binary' },
    { label: 'Base64 (base 64)', value: 'base64' },
    // { label: 'Base64 Url', value: 'base64url' },
  ]
  const hashTextForm = useForm<HashTextFormType>({ defaultValues })
  const { control } = hashTextForm
  const algorithms: HashTextEncode[] = [
    HashTextEncode.MD5,
    HashTextEncode.SHA1,
    HashTextEncode.SHA224,
    HashTextEncode.SHA256,
    HashTextEncode.SHA512,
    HashTextEncode.SHA384,
    HashTextEncode.RIPEMD160,
  ]

  return { hashTextForm, control, encodes, algorithms }
}

export default useHashTextController
