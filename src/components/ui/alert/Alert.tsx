import type { VariantProps } from 'class-variance-authority'
import { forwardRef, type HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

import { Container } from '../container'
import { Heading } from '../heading'
import {
  alertDescriptionVariants,
  alertTitleVariants,
  alertVariants,
} from './variants'

const AlertBase = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <Container
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
AlertBase.displayName = 'AlertBase'

const AlertTitle = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLHeadingElement> & VariantProps<typeof alertTitleVariants>
>(({ className, children, ...props }, ref) => (
  <Heading
    level={5}
    ref={ref}
    className={cn(alertTitleVariants(), className)}
    {...props}
  >
    {children}
  </Heading>
))
AlertTitle.displayName = 'AlertTitle'

const AlertDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement> &
    VariantProps<typeof alertDescriptionVariants>
>(({ className, ...props }, ref) => (
  <Container
    ref={ref}
    className={cn(alertDescriptionVariants(), className)}
    {...props}
  />
))
AlertDescription.displayName = 'AlertDescription'

export { AlertBase, AlertDescription, AlertTitle }
