import { useEffect } from 'react'

import { ScreenWidth } from '@/constants'
import useMediaQuery from '@/hooks/useMediaQuery'
import { SidebarState, useLayoutStore } from '@/store/layout'

const useSidebarController = () => {
  const { setSidebarState } = useLayoutStore()
  const { screenWidth } = useMediaQuery()

  useEffect(() => {
    switch (screenWidth) {
      case ScreenWidth.SMALL:
      case ScreenWidth.MEDIUM:
      case ScreenWidth.LARGE:
        setSidebarState(SidebarState.CLOSED)
        break
      case ScreenWidth.XLARGE:
        setSidebarState(SidebarState.OPEN)
        break
      default:
        break
    }
  }, [screenWidth])
}

export default useSidebarController
