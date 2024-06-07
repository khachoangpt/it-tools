'use client'

import { Icon } from '@/components/ui/icons'
import { SidebarState, useLayoutStore } from '@/store/layout'

export const HamburgerButton = () => {
  const { setSidebarState, sidebarState } = useLayoutStore()

  const changeSidebarState = () => {
    setSidebarState(
      sidebarState === SidebarState.OPEN
        ? SidebarState.CLOSED
        : SidebarState.OPEN,
    )
  }

  return <Icon icon="HamburgerIcon" onClick={changeSidebarState} />
}
