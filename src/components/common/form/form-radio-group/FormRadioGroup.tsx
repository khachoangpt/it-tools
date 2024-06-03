'use client'

import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

type Props = {
  disabled?: boolean
  name?: string
  description?: string
  onChange?(value: string): void
  value: string
  options: { value: string; label: string }[]
}

export const FormRadioGroup = ({
  disabled = false,
  name = '',
  value = '',
  description,
  onChange,
  options,
}: Props) => {
  return (
    <FormItem className="flex items-start gap-x-2 space-y-0">
      <RadioGroup
        disabled={disabled}
        name={name}
        defaultValue={value}
        onValueChange={onChange}
      >
        {options?.map((option) => (
          <FormItem
            key={`radio_${option.value}`}
            className="flex items-center space-x-3 space-y-0"
          >
            <FormControl>
              <RadioGroupItem value={option.value} />
            </FormControl>
            <FormLabel className="font-normal">{option.label}</FormLabel>
          </FormItem>
        ))}
      </RadioGroup>
      {!!description && <FormDescription>{description}</FormDescription>}
      <FormMessage />
    </FormItem>
  )
}
