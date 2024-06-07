'use client'

import Link from 'next/link'
import { Fragment } from 'react'

import { Container } from '@/components/ui/container'
import { Text } from '@/components/ui/text'
import { pageList, tools } from '@/constants'
import { SidebarState, useLayoutStore } from '@/store/layout'
import { Images } from '#/svgs'

import useSidebarController from '../../controllers/useSidebarController'
import { MenuCollapsible } from './MenuCollapsible'

export const Sidebar = () => {
  useSidebarController()
  const { sidebarState, setSidebarState } = useLayoutStore()

  return (
    <Fragment>
      <Container
        data-state={sidebarState}
        className="z-20 h-screen overflow-hidden bg-card transition-all duration-500 ease-in-out hover:overflow-y-auto data-[state=closed]:w-0 data-[state=open]:w-60 max-sm:absolute"
      >
        <Images.SidebarHeader className="absolute z-10 mt-[-75px] block h-fit w-full" />
        <Link
          href={pageList.home.href}
          className="absolute top-4 z-10 w-full overflow-hidden"
        >
          <Text className="whitespace-nowrap text-center text-2xl font-bold">
            IT - TOOLS
          </Text>
          <Text className="mt-3 whitespace-nowrap text-center font-medium">
            Handy tools for developers
          </Text>
        </Link>
        <Container className="mb-10 pt-40">
          {tools.map((tool, index) => (
            <MenuCollapsible key={index} tool={tool} />
          ))}
        </Container>
      </Container>
      {sidebarState === SidebarState.OPEN && (
        <Container
          onClick={() => setSidebarState(SidebarState.CLOSED)}
          className="fixed bottom-0 left-0 right-0 top-0 z-10 bg-gray-900 opacity-70 sm:hidden"
        />
      )}
    </Fragment>
  )
}
