import type { ReactNode } from 'react'

import DefaultLayout from '@/modules/layouts/DefaultLayout'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return <DefaultLayout>{children}</DefaultLayout>
}

export default Layout
