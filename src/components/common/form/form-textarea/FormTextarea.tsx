import type { ChangeEventHandler } from 'react'

import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

type Props = {
  label?: string
  placeholder?: string
  className?: string
  description?: string
  onChange?: ChangeEventHandler<HTMLTextAreaElement>
  value?: string
  disabled?: boolean
}

export const FormTextarea = ({
  label = '',
  placeholder = '',
  className,
  description,
  onChange,
  value,
  disabled = false,
}: Props) => {
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <Textarea
          placeholder={placeholder}
          className={cn(className)}
          onChange={onChange}
          value={value}
          disabled={disabled}
        />
      </FormControl>
      <FormDescription>{description}</FormDescription>
      <FormMessage />
    </FormItem>
  )
}
