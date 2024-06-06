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
      <Container className="h-[100vh] flex-1 overflow-auto p-6">
        <Header />
        <Container>{children}</Container>
      </Container>
    </Container>
  )
}

export default DefaultLayout
