import { useAnimate } from 'framer-motion'
import { useState } from 'react'

const useMenuCollapsibleController = () => {
  const [scope, animate] = useAnimate()
  const [open, setOpen] = useState<boolean>(true)

  const handleChange = () => {
    animate(scope.current, { height: open ? 0 : 'auto' }, { duration: 0.3 })
    setOpen((prev) => !prev)
  }

  return {
    scope,
    handleChange,
  }
}

export default useMenuCollapsibleController
