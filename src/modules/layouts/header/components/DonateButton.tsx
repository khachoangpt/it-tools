import { useMediaQuery } from 'usehooks-ts'

import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Icon } from '@/components/ui/icons'
import { Text } from '@/components/ui/text'

const DonateButton = () => {
  const smallWidth = useMediaQuery('(min-width: 640px)')

  return (
    <Button
      variant="base"
      className="h-8 rounded-full bg-green-500 hover:bg-green-600 active:rounded-full active:bg-green-700"
    >
      <Container className="flex items-center justify-center text-white sm:gap-1">
        <Text as="span">{!smallWidth ? 'Donate' : 'Buy me a coffee'}</Text>
        <Icon icon="HeartIcon" className="h-4 w-4" />
      </Container>
    </Button>
  )
}

export default DonateButton
