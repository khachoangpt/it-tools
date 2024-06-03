import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Icon } from '@/components/ui/icons'
import { Text } from '@/components/ui/text'
import { cn } from '@/lib/utils'

type Props = {
  className?: string
}

const SearchButton = ({ className }: Props) => {
  return (
    <Button
      variant="neutral"
      className={cn('h-8 justify-start rounded-md', className)}
    >
      <Container className="flex items-center gap-2 opacity-50">
        <Icon icon="SearchIcon" className="h-4 w-4" />
        <Text>Search</Text>
      </Container>
    </Button>
  )
}

export default SearchButton
