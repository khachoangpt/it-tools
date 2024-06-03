import type { FC, HTMLAttributes, SVGProps } from 'react'

import { default as CheckCircleSolid } from './check-circle-solid.svg'
import { default as CircleHalfSolid } from './circle-half-solid.svg'
import { default as CircleMiniSolid } from './circle-mini-solid.svg'
import { default as Github } from './github.svg'
import { default as Hamburger } from './hamburger.svg'
import { default as HashText } from './hash-text.svg'
import { default as Heart } from './heart.svg'
import { default as HeartSolid } from './heart-solid.svg'
import { default as Home } from './home.svg'
import { default as Info } from './info.svg'
import { default as InformationCircleSolid } from './information-circle-solid.svg'
import { default as Plus } from './plus.svg'
import { default as Search } from './search.svg'
import { default as SidebarHeader } from './sidebar-header.svg'
import { default as Spinner } from './spinner.svg'
import { default as ThemeDark } from './theme-dark.svg'
import { default as ThemeLight } from './theme-light.svg'
import { default as TokenGenerator } from './token-generator.svg'
import { default as Twitter } from './twitter.svg'
import { default as XCircleSolid } from './x-circle-solid.svg'

type Icon = FC<SVGProps<SVGSVGElement>>
type Container = FC<HTMLAttributes<HTMLDivElement>>

export const Icons = {
  InformationCircleSolid: InformationCircleSolid as Icon,
  XCircleSolid: XCircleSolid as Icon,
  Spinner: Spinner as Icon,
  Plus: Plus as Icon,
  CircleMiniSolid: CircleMiniSolid as Icon,
  CircleHalfSolid: CircleHalfSolid as Icon,
  CheckCircleSolid: CheckCircleSolid as Icon,
  HamburgerIcon: Hamburger as Icon,
  HomeIcon: Home as Icon,
  GithubIcon: Github as Icon,
  TwitterIcon: Twitter as Icon,
  InfoIcon: Info as Icon,
  ThemeDarkIcon: ThemeDark as Icon,
  ThemeLightIcon: ThemeLight as Icon,
  HeartIcon: Heart as Icon,
  SearchIcon: Search as Icon,
  TokenGeneratorIcon: TokenGenerator as Icon,
  HashTextIcon: HashText as Icon,
  HeartSolidIcon: HeartSolid as Icon,
}

export const Images = {
  SidebarHeader: SidebarHeader as Container,
}
