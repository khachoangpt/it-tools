import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'
import { Text } from '@/components/ui/text'
import type { ToolIds } from '@/constants'

import LikeButton from './LikeButton'

type Props = {
  id?: ToolIds
  title?: string
  subtitle?: string
  isLike?: boolean
}

const PageTitle = ({ title = '', subtitle = '', id }: Props) => {
  return (
    <Container className="m-auto py-10">
      <Container className="flex items-center justify-between">
        <Heading level={1}>{title}</Heading>
        <LikeButton id={id} />
      </Container>
      <Separator className="my-2 h-[2px] w-52" />
      <Text>{subtitle}</Text>
    </Container>
  )
}

export default PageTitle
