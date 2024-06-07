import PageTitle from '@/components/common/page-title/PageTitle'
import { Container } from '@/components/ui/container'
import { ToolIds } from '@/constants'
import {
  TokenGeneratorCode,
  TokenGeneratorForm,
} from '@/modules/token-generator'
import { getToolData } from '@/utils/get-tool-data'

const TokenGeneratorPage = () => {
  const tokenGenerator = getToolData(ToolIds.TOKEN_GENERATOR)
  const { title, subtitle, isLike } = tokenGenerator!

  return (
    <Container className="m-auto max-w-2xl">
      <PageTitle title={title} subtitle={subtitle} isLike={isLike} />
      <Container className="flex items-start justify-center">
        <TokenGeneratorForm />
      </Container>
      <Container className="mt-8 flex items-start justify-center">
        <TokenGeneratorCode />
      </Container>
    </Container>
  )
}

export default TokenGeneratorPage
