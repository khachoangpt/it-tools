export type StaticPageMeta = {
  title: string
  href: string
  isAuth: boolean
  pattern: string[]
}

type DynamicPageMeta = (config: object) => StaticPageMeta

export type PageMeta = StaticPageMeta | DynamicPageMeta
