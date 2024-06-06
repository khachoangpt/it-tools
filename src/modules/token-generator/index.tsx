import PageTitle from '@/components/common/page-title/PageTitle'
import { Container } from '@/components/ui/container'
import { ToolIds } from '@/constants'
import { getToolData } from '@/utils/get-tool-data'

import TokenGeneratorCode from './components/TokenGeneratorCode'
import TokenGeneratorForm from './components/TokenGeneratorForm'

const TokenGeneratorModule = () => {
  const tokenGenerator = getToolData(ToolIds.TOKEN_GENERATOR)

  return (
    <Container className="m-auto max-w-2xl">
      <PageTitle
        title={tokenGenerator?.title ?? ''}
        subtitle={tokenGenerator?.subtitle ?? ''}
        isLike={tokenGenerator?.isLike ?? false}
      />
      <Container className="flex items-start justify-center">
        <TokenGeneratorForm />
      </Container>
      <Container className="mt-8 flex items-start justify-center">
        <TokenGeneratorCode />
      </Container>
    </Container>
  )
}

export default TokenGeneratorModule
