'use client'

import type { ReactNode } from 'react'

import { Container } from '@/components/ui/container'

import Header from './header'
import Sidebar from './sidebar'

type Props = {
  children?: ReactNode
}

const DefaultLayout = ({ children }: Props) => {
  return (
    <Container className="flex">
      {/* Sidebar */}
      <Container className="relative">
        <Sidebar />
      </Container>
      {/* Content */}
      <Container className="flex-1 p-6">
        <Header />
        <Container>{children}</Container>
      </Container>
    </Container>
  )
}

export default DefaultLayout
