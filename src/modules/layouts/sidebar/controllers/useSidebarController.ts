import { useEffect } from 'react'
import { useMediaQuery } from 'usehooks-ts'

import { SidebarState, useLayoutStore } from '@/store/layout'

const useSidebarController = () => {
  const { sidebarState, setSidebarState } = useLayoutStore()
  const mediumWidth = useMediaQuery('(min-width: 768px)')

  useEffect(() => {
    if (!mediumWidth) {
      setSidebarState(SidebarState.CLOSED)
    } else {
      setSidebarState(SidebarState.OPEN)
    }
  }, [mediumWidth])

  return {
    sidebarState,
    setSidebarState,
  }
}

export default useSidebarController
