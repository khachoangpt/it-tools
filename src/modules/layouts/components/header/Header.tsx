import Link from 'next/link'

import { Select } from '@/components/common/select'
import { Container } from '@/components/ui/container'
import { Icon } from '@/components/ui/icons'
import { pageList } from '@/constants'

import { DonateButton } from './DonateButton'
import { HamburgerButton } from './HamburgerButton'
import { SearchButton } from './SearchButton'

export const Header = () => {
  return (
    <Container className="flex items-center gap-2">
      <HamburgerButton />
      <Link href={pageList.home.href} aria-label="Go to home link">
        <Icon icon="HomeIcon" />
      </Link>
      <SearchButton className="flex-1" />
      <Container className="flex items-center gap-2 max-lg:hidden">
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
