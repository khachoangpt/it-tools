import type { CSSProperties } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import { Container } from '../container'
import CopyButton from './CopyButton'

type Props = {
  code: string
  language?: string
  style?: {
    [key: string]: CSSProperties
  }
}

const Code = ({ code, language = 'typescript', style = anOldHope }: Props) => {
  return (
    <Container className="relative">
      <SyntaxHighlighter
        customStyle={{ borderRadius: '8px' }}
        language={language}
        style={style}
        showLineNumbers
      >
        {code}
      </SyntaxHighlighter>
      <Container className="absolute right-3 top-3">
        <CopyButton text={code} />
      </Container>
    </Container>
  )
}

export default Code
