import PageTitle from '@/components/common/page-title/PageTitle'
import { Container } from '@/components/ui/container'
import { ToolIds } from '@/constants'
import { HashTextForm } from '@/modules/hash-text'
import { getToolData } from '@/utils/get-tool-data'

const HashTextPage = () => {
  const hashText = getToolData(ToolIds.HASH_TEXT)
  const { id, title, subtitle, isLike } = hashText!
  return (
    <Container className="m-auto max-w-2xl">
      <PageTitle id={id} title={title} subtitle={subtitle} isLike={isLike} />
      <Container>
        <HashTextForm />
      </Container>
    </Container>
  )
}

export default HashTextPage
