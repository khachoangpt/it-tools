import { Slot } from '@radix-ui/react-slot'
import type { VariantProps } from 'class-variance-authority'
import { type ButtonHTMLAttributes, forwardRef } from 'react'

import { cn } from '@/lib/utils'
import { Icons } from '#/svgs'

import { Text } from '../text'
import { buttonVariants } from './variants'

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        disabled={loading || disabled}
        ref={ref}
        {...props}
      >
        <Text as="span" className={cn({ 'opacity-0': loading })}>
          {children}
        </Text>
        {loading && <Icons.Spinner className="absolute h-4 w-4 animate-spin" />}
      </Comp>
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
