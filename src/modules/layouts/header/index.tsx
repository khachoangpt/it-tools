import Link from 'next/link'

import { Select } from '@/components/common/select'
import { Container } from '@/components/ui/container'
import { Icon } from '@/components/ui/icons'
import { pageList } from '@/constants'
import { SidebarState, useLayoutStore } from '@/store/layout'

import DonateButton from './components/DonateButton'
import SearchButton from './components/SearchButton'

const Header = () => {
  const { setSidebarState, sidebarState } = useLayoutStore()

  const changeSidebarState = () => {
    setSidebarState(
      sidebarState === SidebarState.OPEN
        ? SidebarState.CLOSED
        : SidebarState.OPEN,
    )
  }

  return (
    <Container className="flex items-center gap-2">
      <Icon icon="HamburgerIcon" onClick={changeSidebarState} />
      <Link href={pageList.home.href} aria-label="Go to home link">
        <Icon icon="HomeIcon" />
      </Link>
      <SearchButton className="flex-1" />
      <Container className="flex items-center gap-2 max-md:hidden">
        <Select
          className="w-32"
          options={[{ value: '1', label: 'Option 1' }]}
          value="1"
        />
        <Icon icon="GithubIcon" />
        <Icon icon="TwitterIcon" />
        <Icon icon="InfoIcon" />
        <Icon icon="ThemeLightIcon" />
      </Container>
      <DonateButton />
    </Container>
  )
}

export default Header
