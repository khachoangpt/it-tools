import { Card } from '@/components/ui/card'
import Code from '@/components/ui/code/Code'
import { Container } from '@/components/ui/container'
import { getFileData } from '@/utils/get-file-data'

export const TokenGeneratorCode = async () => {
  const [tokenGeneratorCode, shuffleStringCode] = await Promise.all([
    getFileData('/src/utils/token-generator.ts'),
    getFileData('/src/utils/shuffle-string.ts'),
  ])

  return (
    <Container className="flex w-full flex-col gap-y-8">
      <Card>
        <Code code={tokenGeneratorCode} />
      </Card>
      <Card>
        <Code code={shuffleStringCode} />
      </Card>
    </Container>
  )
}
