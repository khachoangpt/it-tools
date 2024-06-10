import { useEffect, useState } from 'react'

import type { ToolsDataType } from '@/constants'
import { ScreenWidth, ToolIds } from '@/constants'
import useMediaQuery from '@/hooks/useMediaQuery'
import { SidebarState, useLayoutStore } from '@/store/layout'
import { getToolData } from '@/utils/get-tool-data'

const useSidebarController = () => {
  const { setSidebarState } = useLayoutStore()
  const { screenWidth } = useMediaQuery()
  const [favoriteTools, setFavoriteTools] = useState<ToolsDataType>({
    id: ToolIds.FAVORITE,
    title: 'Favorite',
    content: [],
  })

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

  useEffect(() => {
    const storedFavoriteList = localStorage.getItem('favoriteList')
    if (storedFavoriteList) {
      const favoriteIds = JSON.parse(storedFavoriteList) as ToolIds[]
      const favoriteTools: ToolsDataType[] = []
      for (const id of favoriteIds) {
        const tool = getToolData(id)
        !!tool && favoriteTools.push(tool)
      }
      setFavoriteTools((prev) => ({
        ...prev,
        content: favoriteTools,
      }))
    }
  }, [])

  useEffect(() => {
    const listenStorageChange = () => {
      const storedFavoriteList = localStorage.getItem('favoriteList')
      if (storedFavoriteList) {
        const favoriteIds = JSON.parse(storedFavoriteList) as ToolIds[]
        const favoriteTools: ToolsDataType[] = []
        for (const id of favoriteIds) {
          const tool = getToolData(id)
          !!tool && favoriteTools.push(tool)
        }
        setFavoriteTools((prev) => ({
          ...prev,
          content: favoriteTools,
        }))
      }
    }
    window.addEventListener('storage', listenStorageChange)

    return () => {
      window.removeEventListener('storage', listenStorageChange)
    }
  }, [])

  return {
    favoriteTools,
  }
}

export default useSidebarController
