import { useEffect, useState } from 'react'
import { useMediaQuery as useMediaQueryLibrary } from 'usehooks-ts'

import { ScreenWidth } from '@/constants'

const mediaQuery = {
  small: '(max-width: 640px)',
  medium: '(min-width: 641px) and (max-width: 768px)',
  large: '(min-width: 769px) and (max-width: 1024px)',
  xlarge: '(min-width: 1025px)',
}

const useMediaQuery = () => {
  const smallWidth = useMediaQueryLibrary(mediaQuery.small)
  const mediumWidth = useMediaQueryLibrary(mediaQuery.medium)
  const largeWidth = useMediaQueryLibrary(mediaQuery.large)
  const xLargeWidth = useMediaQueryLibrary(mediaQuery.xlarge)
  const [screenWidth, setScreenWidth] = useState<ScreenWidth>()

  useEffect(() => {
    if (smallWidth) {
      setScreenWidth(ScreenWidth.SMALL)
    }
    if (mediumWidth) {
      setScreenWidth(ScreenWidth.MEDIUM)
    }
    if (largeWidth) {
      setScreenWidth(ScreenWidth.LARGE)
    }
    if (xLargeWidth) {
      setScreenWidth(ScreenWidth.XLARGE)
    }
  }, [smallWidth, mediumWidth, largeWidth, xLargeWidth])

  return {
    screenWidth,
  }
}

export default useMediaQuery
