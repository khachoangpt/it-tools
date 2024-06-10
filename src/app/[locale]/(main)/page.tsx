import { Container } from '@/components/ui/container'
import { FavoriteTools, Tools } from '@/modules/home'

const HomePage = async () => {
  return (
    <Container className="mt-20 space-y-8">
      <FavoriteTools />
      <Tools />
    </Container>
  )
}

export default HomePage
