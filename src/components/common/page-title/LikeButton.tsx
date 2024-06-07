'use client'

import { useEffect, useState } from 'react'

import { Icon } from '@/components/ui/icons'
import type { ToolIds } from '@/constants'

type Props = {
  id?: ToolIds
}

const LikeButton = ({ id }: Props) => {
  const [favoriteList, setFavoriteList] = useState<(ToolIds | undefined)[]>([])

  useEffect(() => {
    const storedFavoriteList = localStorage.getItem('favoriteList')
    if (storedFavoriteList) {
      setFavoriteList(JSON.parse(storedFavoriteList))
    } else {
      localStorage.setItem('favoriteList', JSON.stringify([]))
    }
  }, [])

  const toggleFavorite = () => {
    const updatedFavoriteList = favoriteList.includes(id)
      ? favoriteList.filter((toolId) => toolId !== id)
      : [...favoriteList, id]
    setFavoriteList(updatedFavoriteList)
    localStorage.setItem('favoriteList', JSON.stringify(updatedFavoriteList))
  }

  return (
    <Icon
      onClick={toggleFavorite}
      icon={favoriteList.includes(id) ? 'HeartSolidIcon' : 'HeartIcon'}
      className="h-5 w-5"
    />
  )
}

export default LikeButton
