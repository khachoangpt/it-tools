import { cookies } from 'next/headers'

import { COOKIES, THEME } from '@/constants'

/**
 * Retrieves the theme from cookies and returns it, defaulting to DARK theme if not found.
 *
 * @return {THEME} The selected theme.
 */
export const getTheme = (): THEME =>
  (cookies().get(COOKIES.THEME)?.value ?? THEME.DARK) as THEME

/**
 * Retrieves the JWT token from the cookies.
 *
 * @return {Promise<string>} The JWT token as a string.
 */
export const getJWT = async (): Promise<string> =>
  cookies().get(COOKIES.JWT)?.value as string
