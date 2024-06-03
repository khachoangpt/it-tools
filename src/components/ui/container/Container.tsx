import { forwardRef, type HTMLAttributes } from 'react'

export const Container = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ children, ...rest }, ref) => (
  <div {...rest} ref={ref}>
    {children}
  </div>
))

Container.displayName = 'Container'
