import { FormControl, FormItem, FormLabel } from '@/components/ui/form'
import { Slider } from '@/components/ui/slider'
import { cn } from '@/lib/utils'

type Props = {
  max?: number
  step?: number
  value: number[]
  onChange: (value: number[]) => void
  min?: number
  label?: string
  orientation?: 'horizontal' | 'vertical'
}

const FormSlider = ({
  min,
  label,
  max,
  step,
  value,
  onChange,
  orientation = 'horizontal',
}: Props) => {
  return (
    <FormItem
      className={cn('flex gap-4', orientation === 'vertical' && 'flex-col')}
    >
      <FormLabel className="mt-2 whitespace-nowrap">{label}</FormLabel>
      <FormControl>
        <Slider
          min={min}
          value={value}
          max={max}
          step={step}
          onValueChange={onChange}
        />
      </FormControl>
    </FormItem>
  )
}

export default FormSlider
