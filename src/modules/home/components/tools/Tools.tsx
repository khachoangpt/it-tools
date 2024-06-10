import { Container } from '@/components/ui/container'
import { Text } from '@/components/ui/text'
import { tools } from '@/constants'

import { ToolItem } from './ToolItem'

export const Tools = () => {
  return (
    <Container>
      <Text className="mb-2 text-xl font-semibold">Tools</Text>
      <Container className="grid grid-cols-4 gap-3 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        {tools.map((tool) =>
          tool.content?.map((item) => <ToolItem key={item.id} tool={item} />),
        )}
      </Container>
    </Container>
  )
}
