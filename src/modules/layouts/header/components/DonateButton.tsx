import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Icon } from '@/components/ui/icons'
import { Text } from '@/components/ui/text'

const DonateButton = () => {
  return (
    <Button
      variant="base"
      className="h-8 rounded-full bg-green-500 hover:bg-green-600 active:rounded-full active:bg-green-700"
    >
      <Container className="flex items-center justify-center gap-1 text-white">
        <Text as="span">Support me</Text>
        <Icon icon="HeartIcon" className="h-4 w-4" />
      </Container>
    </Button>
  )
}

export default DonateButton
