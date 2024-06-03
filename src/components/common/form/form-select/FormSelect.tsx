'use client'

import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import type { SelectOptions } from '@/types'

import { Select } from '../../select'

type Props = {
  label?: string
  options: SelectOptions[]
  placeholder?: string
  className?: string
  description?: string
  onChange?(value: string): void
  value?: string
  disabled?: boolean
}

export const FormSelect = ({
  label = '',
  options,
  placeholder = 'Select',
  className,
  description,
  onChange,
  value,
  disabled = false,
}: Props) => {
  return (
    <FormItem>
      {!!label && <FormLabel>{label}</FormLabel>}
      <FormControl>
        <Select
          options={options}
          placeholder={placeholder}
          className={className}
          disabled={disabled}
          onChange={onChange}
          value={value}
        />
      </FormControl>
      {!!description && <FormDescription>{description}</FormDescription>}
      <FormMessage />
    </FormItem>
  )
}
