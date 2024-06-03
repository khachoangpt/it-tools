import type { FC, SVGProps } from 'react'

import { default as CheckCircleSolid } from './check-circle-solid.svg'
import { default as CircleHalfSolid } from './circle-half-solid.svg'
import { default as CircleMiniSolid } from './circle-mini-solid.svg'
import { default as InformationCircleSolid } from './information-circle-solid.svg'
import { default as Plus } from './plus.svg'
import { default as Spinner } from './spinner.svg'
import { default as XCircleSolid } from './x-circle-solid.svg'

type Icon = FC<SVGProps<SVGSVGElement>>

export const Icons = {
  InformationCircleSolid: InformationCircleSolid as Icon,
  XCircleSolid: XCircleSolid as Icon,
  Spinner: Spinner as Icon,
  Plus: Plus as Icon,
  CircleMiniSolid: CircleMiniSolid as Icon,
  CircleHalfSolid: CircleHalfSolid as Icon,
  CheckCircleSolid: CheckCircleSolid as Icon,
}
