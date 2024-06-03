import type { SVGProps } from 'react'

import { cn } from '@/lib/utils'
import { Icons } from '#/svgs'

import { Container } from '../container'

type Props = { icon?: keyof typeof Icons } & SVGProps<SVGSVGElement>

export const Icon = (props: Props) => {
  return (
    <Container className="flex h-fit w-fit cursor-pointer items-center justify-center rounded-full p-1 hover:bg-gray-600">
      {Icons[props.icon ?? 'HomeIcon']({
        className: cn('h-6 w-6', props.className),
        ...props,
      })}
    </Container>
  )
}
