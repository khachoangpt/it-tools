import { cva, type VariantProps } from 'class-variance-authority'
import type { DetailedHTMLProps, HTMLAttributes } from 'react'

export const headingVariants = cva('tracking-tight leading-none', {
  variants: {
    level: {
      1: 'text-4xl font-extrabold',
      2: 'text-3xl font-semibold',
      3: 'text-2xl font-semibold',
      4: 'text-xl font-medium',
      5: 'text-lg font-medium',
      6: 'text-base font-medium',
    },
  },
  defaultVariants: { level: 1 },
})

export type HeadingProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> &
  VariantProps<typeof headingVariants>
