import Link from 'next/link'

import { Card } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { Icon } from '@/components/ui/icons'
import { Text } from '@/components/ui/text'
import { pageList, type ToolsDataType } from '@/constants'

type Props = {
  tool: ToolsDataType
}

const ToolItem = ({ tool }: Props) => {
  return (
    <Link href={pageList.tool({ tool }).href}>
      <Card className="h-full cursor-pointer border-2 px-6 py-5 transition-all duration-500 hover:border-spacing-3 hover:border-green-600">
        <Container className="flex items-center justify-between">
          <Icon icon={tool.icon} className="h-8 w-8" />
          <Icon icon="HeartSolidIcon" className="h-4 w-4" />
        </Container>
        <Text className="mt-2 text-lg font-semibold">{tool.title}</Text>
        <Text className="mt-2 line-clamp-2 text-sm">{tool.subtitle}</Text>
      </Card>
    </Link>
  )
}

export default ToolItem
