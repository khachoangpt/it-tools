import type { DetailedHTMLProps, HTMLAttributes } from 'react'

type Props =
  | (DetailedHTMLProps<
      HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    > & {
      as?: 'p'
    })
  | (DetailedHTMLProps<
      HTMLAttributes<HTMLSpanElement>,
      HTMLParagraphElement
    > & {
      as?: 'span'
    })

const Text = ({ as = 'p', children, ...rest }: Props) => {
  const Comp = as
  return <Comp {...rest}>{children}</Comp>
}

export { Text }
