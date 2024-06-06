'use client'

import useClipboard from '@/hooks/useClipboard'

import { Icon } from '../icons'

type Props = {
  text: string
}

const CopyButton = ({ text }: Props) => {
  const { copyToClipboard } = useClipboard()
  return (
    <Icon
      className="h-4 w-4"
      icon="CopyIcon"
      onClick={() => copyToClipboard(text)}
    />
  )
}

export default CopyButton
