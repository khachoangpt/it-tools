import type { Icons } from '#/svgs'

export type SidebarDataType = {
  id: string
  title: string
  subtitle?: string
  isLike?: boolean
  icon?: keyof typeof Icons
  content?: SidebarDataType[]
}
