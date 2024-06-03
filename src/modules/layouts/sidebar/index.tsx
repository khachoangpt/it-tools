import Link from 'next/link'

import { Container } from '@/components/ui/container'
import { Text } from '@/components/ui/text'
import { pageList, tools } from '@/constants'
import { Images } from '#/svgs'

import MenuCollapsible from './components/MenuCollapsible'
import useSidebarController from './controllers/useSidebarController'

const Sidebar = () => {
  const { sidebarState } = useSidebarController()

  return (
    <Container
      data-state={sidebarState}
      className="h-screen overflow-hidden bg-card transition-all duration-500 ease-in-out hover:overflow-y-scroll data-[state=closed]:w-0 data-[state=open]:w-60"
    >
      <Images.SidebarHeader className="absolute z-10 mt-[-75px] h-fit w-full" />
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
  )
}

export default Sidebar
