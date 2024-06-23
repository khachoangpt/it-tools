import type { VariantProps } from 'class-variance-authority'
import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react'

import { cn } from '@/lib/utils'

import { Container } from '../container'
import { inputVariants } from './variants'

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  prefix?: ReactNode
}

const Input = forwardRef<
  HTMLInputElement,
  InputProps & VariantProps<typeof inputVariants>
>(({ className, type, prefix, ...props }, ref) => {
  return (
    <Container className="flex w-full items-center">
      {prefix && (
        <Container className="flex h-10 items-center">{prefix}</Container>
      )}
      <input
        type={type}
        className={cn(inputVariants(), className)}
        ref={ref}
        {...props}
      />
    </Container>
  )
})
Input.displayName = 'Input'

export { Input }
