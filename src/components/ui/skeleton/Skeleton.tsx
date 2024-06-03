import type { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

import { Container } from '../container'

function Skeleton({
  className,
  ...props
}: Readonly<HTMLAttributes<HTMLDivElement>>) {
  return (
    <Container
      className={cn('animate-pulse rounded-medium bg-muted', className)}
      {...props}
    />
  )
}

export { Skeleton }
