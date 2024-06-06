import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Switch } from '@/components/ui/switch'

type Props = {
  label?: string
  checked?: boolean
  onChange?: (checked: boolean) => void
  name?: string
}

const FormSwitch = ({ label, checked, onChange, name }: Props) => {
  return (
    <FormItem className="flex items-center space-x-2 space-y-0">
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <Switch name={name} checked={checked} onCheckedChange={onChange} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )
}

export default FormSwitch
