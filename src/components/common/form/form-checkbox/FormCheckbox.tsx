import type { CheckedState } from '@radix-ui/react-checkbox'

import { CheckboxBase } from '@/components/ui/checkbox'
import { Container } from '@/components/ui/container'
import {
  FormControl,
  FormDescription,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Label } from '@/components/ui/label'

type Props = {
  id: string
  label?: string
  disabled?: boolean
  name?: string
  checked?: boolean
  description?: string
  onChange?(checked: CheckedState): void
}

export const FormCheckbox = ({
  id,
  label = '',
  disabled = false,
  name = '',
  checked,
  description,
  onChange,
}: Props) => {
  return (
    <FormItem className="flex items-start gap-x-2 space-y-0">
      <FormControl className="">
        <CheckboxBase
          disabled={disabled}
          name={name}
          checked={checked}
          onCheckedChange={onChange}
          id={`checkbox_${id}`}
        />
      </FormControl>
      <Container className="flex flex-col justify-start gap-y-1">
        <Label htmlFor={`checkbox_${id}`}>{label}</Label>
        {!!description && <FormDescription>{description}</FormDescription>}
        <FormMessage />
      </Container>
    </FormItem>
  )
}
