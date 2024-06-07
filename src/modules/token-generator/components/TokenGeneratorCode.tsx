import { Card } from '@/components/ui/card'
import Code from '@/components/ui/code/Code'
import { Container } from '@/components/ui/container'
import { shuffleStringCode } from '@/utils/shuffle-string'
import { tokenGeneratorCode } from '@/utils/token-generator'

export const TokenGeneratorCode = () => {
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
