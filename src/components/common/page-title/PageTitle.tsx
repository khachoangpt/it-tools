import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import { Icon } from '@/components/ui/icons'
import { Separator } from '@/components/ui/separator'
import { Text } from '@/components/ui/text'

type Props = {
  title?: string
  subtitle?: string
  isLike?: boolean
}

const PageTitle = ({ title = '', subtitle = '', isLike = false }: Props) => {
  return (
    <Container className="m-auto py-10">
      <Container className="flex items-center justify-between">
        <Heading level={1}>{title}</Heading>
        <Icon
          icon={isLike ? 'HeartSolidIcon' : 'HeartIcon'}
          className="h-5 w-5"
        />
      </Container>
      <Separator className="my-2 h-[2px] w-52" />
      <Text>{subtitle}</Text>
    </Container>
  )
}

export default PageTitle
