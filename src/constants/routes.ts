import type { PageMeta } from '@/types/routes.types'

import type { ToolsDataType } from './tools'

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
  tool: (config?: { tool?: ToolsDataType }) => ({
    title: config?.tool?.title ?? '',
    href: `/${config?.tool?.id ?? ''}`,
    isAuth: false,
    pattern: [config?.tool?.id ?? ''],
  }),
  home: {
    title: 'Home',
    href: '/',
    isAuth: false,
    pattern: [''],
  },
}

export const pathList: PageMeta[] = Object.values(pageList)
