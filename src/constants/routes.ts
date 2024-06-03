import type { PageMeta } from '@/types/routes.types'

export const pageList = {
  login: {
    title: 'Login',
    href: '/login',
    isAuth: false,
    pattern: ['login'],
  },
  maintenance: {
    title: 'Maintenance',
    href: '/maintenance',
    isAuth: false,
    pattern: ['maintenance'],
  },
  home: {
    title: 'Home',
    href: '/',
    isAuth: false,
    pattern: [''],
  },
}

export const pathList: PageMeta[] = Object.values(pageList)
