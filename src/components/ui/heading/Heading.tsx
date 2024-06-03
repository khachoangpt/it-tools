import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

import { type HeadingProps, headingVariants } from './variants'

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level, ...props }, ref) => {
    const Comp = `h${level}`

    return (
      <Comp ref={ref} className={cn(headingVariants({ level }))} {...props} />
    )
  },
)

Heading.displayName = 'Heading'
