import { createLocalizedPathnamesNavigation } from 'next-intl/navigation'
import { getRequestConfig } from 'next-intl/server'

import { locales } from '@/constants/languages'

export default getRequestConfig(async ({ locale }) => ({
  messages: {
    ...(await import(`#/messages/${locale}/common.json`)).default,
    ...(await import(`#/messages/${locale}/login.json`)).default,
  },
}))

export const { usePathname, Link } = createLocalizedPathnamesNavigation({
  locales,
  pathnames: {},
})
