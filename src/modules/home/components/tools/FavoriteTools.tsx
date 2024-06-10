'use client'

import { useEffect, useState } from 'react'

import { Container } from '@/components/ui/container'
import { Text } from '@/components/ui/text'
import type { ToolIds } from '@/constants'
import { getToolData } from '@/utils/get-tool-data'

import { ToolItem } from './ToolItem'

export const FavoriteTools = () => {
  const [favoriteTools, setFavoriteTools] = useState<ToolIds[]>([])

  useEffect(() => {
    const storedFavoriteList = localStorage.getItem('favoriteList')
    if (storedFavoriteList) {
      setFavoriteTools(JSON.parse(storedFavoriteList))
    }
  }, [])

  useEffect(() => {
    const listenStorageChange = () => {
      const storedFavoriteList = localStorage.getItem('favoriteList')
      if (storedFavoriteList) {
        setFavoriteTools(JSON.parse(storedFavoriteList))
      }
    }
    window.addEventListener('storage', listenStorageChange)

    return () => {
      window.removeEventListener('storage', listenStorageChange)
    }
  }, [])

  if (favoriteTools.length === 0) return null

  return (
    <Container>
      <Text className="mb-2 text-xl font-semibold">Favorite tools</Text>
      <Container className="grid grid-cols-4 gap-3 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        {favoriteTools.map((tool) => (
          <ToolItem key={tool} tool={getToolData(tool)} />
        ))}
      </Container>
    </Container>
  )
}
