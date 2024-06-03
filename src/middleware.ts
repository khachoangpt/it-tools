import { type NextRequest, NextResponse } from 'next/server'
import createIntlMiddleware from 'next-intl/middleware'

import {
  COOKIES,
  defaultLocale,
  type LOCALE,
  locales,
  pageList,
  THEME,
} from './constants'
import { findRouteByPathname } from './utils/find-route'

export async function middleware(request: NextRequest) {
  const url = request.nextUrl
  const cookies = request.cookies
  const theme = cookies.get(COOKIES.THEME)?.value
  const jwt = cookies.get(COOKIES.JWT)?.value
  const locale = (cookies.get(COOKIES.NEXT_LOCALE)?.value ??
    defaultLocale) as LOCALE
  const isMaintenance = process.env.NEXT_PUBLIC_MAINTENANCE_MODE
  const handleI18nRouting = createIntlMiddleware({
    locales,
    defaultLocale,
    localePrefix: 'as-needed',
  })
  const response = handleI18nRouting(request)

  // check route is exist
  const requestIsRouter = await findRouteByPathname(url.pathname, locale)
  if (!requestIsRouter) {
    return response
  }
  // get current customer
  // if (jwt && requestIsRouter.isAuth) {
  //   const { error } = await getMe()
  //   if (error) {
  //     const redirectUrl = new URL(pageList.login.href, request.url)
  //     const responseJwt = NextResponse.redirect(redirectUrl)
  //     responseJwt.cookies.delete(COOKIES.JWT)
  //     return responseJwt
  //   }
  // }
  // check route is auth and customer not logged in
  if (!jwt && requestIsRouter.isAuth) {
    const redirectUrl = new URL(pageList.login.href, request.url)
    return NextResponse.redirect(redirectUrl)
  }
  // access to login page while logged in
  if (jwt && requestIsRouter.href === pageList.login.href) {
    const redirectUrl = new URL(pageList.home.href, request.url)
    return NextResponse.redirect(redirectUrl)
  }
  if (isMaintenance === 'true' && url.pathname !== pageList.maintenance.href) {
    // maintenance mode is enabled
    const redirectUrl = new URL(pageList.maintenance.href, request.url)
    return NextResponse.redirect(redirectUrl)
  }
  // access to maintenance page while maintenance node is disabled
  if (isMaintenance !== 'true' && url.pathname === pageList.maintenance.href) {
    const redirectUrl = new URL(pageList.home.href, request.url)
    return NextResponse.redirect(redirectUrl)
  }
  response.cookies.set(COOKIES.THEME, theme ?? THEME.DARK)
  return response
}

export const config = {
  matcher: [
    '/((?!api|_next|images|fonts|manifest|serviceworker|favicon.ico|robots.txt).*)',
    '/',
  ],
}
