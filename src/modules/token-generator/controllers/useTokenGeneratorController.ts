import { useEffect, useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'

import { generateRandomToken } from '@/utils/token-generator'

import type { TokenGeneratorFormType } from '../types/token-generator-form.type'

export const useTokenGeneratorController = () => {
  const form = useForm<TokenGeneratorFormType>({ defaultValues })
  const {
    control,
    formState: { errors },
  } = form
  const formDataWatch = useWatch({ control })
  const [randomText, setRandomText] = useState<string>('')

  useEffect(() => {
    generate()
  }, [formDataWatch])

  const generate = () => {
    const text = generateRandomToken({
      isLowercase: formDataWatch.isLowercase ?? false,
      isNumber: formDataWatch.isNumber ?? false,
      isSymbol: formDataWatch.isSymbol ?? false,
      isUppercase: formDataWatch.isUppercase ?? false,
      length: formDataWatch.length?.at(0) ?? 1,
    })
    setRandomText(text)
  }

  return { tokenGeneratorForm: form, control, errors, randomText, generate }
}

const defaultValues: TokenGeneratorFormType = {
  isLowercase: false,
  isNumber: false,
  isSymbol: false,
  isUppercase: true,
  length: [32],
}
