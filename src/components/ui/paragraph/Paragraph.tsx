import type { DetailedHTMLProps, HTMLAttributes } from 'react'

export const Paragraph = ({
  children,
  ...rest
}: DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>) => {
  return <p {...rest}>{children}</p>
}
