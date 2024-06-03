import type { VariantProps } from 'class-variance-authority'
import { forwardRef, type InputHTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

import { inputVariants } from './variants'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<
  HTMLInputElement,
  InputProps & VariantProps<typeof inputVariants>
>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(inputVariants(), className)}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = 'Input'

export { Input }
