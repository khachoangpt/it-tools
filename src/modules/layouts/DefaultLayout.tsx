'use client'

import type { ReactNode } from 'react'

import { Container } from '@/components/ui/container'
import { SidebarState } from '@/store/layout'

import Header from './header'
import Sidebar from './sidebar'
import useSidebarController from './sidebar/controllers/useSidebarController'

type Props = {
  children?: ReactNode
}

const DefaultLayout = ({ children }: Props) => {
  const { sidebarState, setSidebarState } = useSidebarController()

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
      {sidebarState === SidebarState.OPEN && (
        <Container
          onClick={() => setSidebarState(SidebarState.CLOSED)}
          className="absolute bottom-0 left-0 right-0 top-0 bg-gray-900 opacity-70 sm:hidden"
        />
      )}
    </Container>
  )
}

export default DefaultLayout
