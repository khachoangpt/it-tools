import { cva } from 'class-variance-authority'

export const drawerOverlayVariants = cva('fixed inset-0 z-50 bg-black/80')

export const drawerContentVariants = cva(
  'fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-base',
)

export const drawerHeaderVariants = cva(
  'grid gap-1.5 p-4 text-center sm:text-left',
)

export const drawerFooterVariants = cva('mt-auto flex flex-col gap-2 p-4')

export const drawerTitleVariants = cva(
  'text-lg font-semibold leading-none tracking-tight',
)

export const drawerDescriptionVariants = cva('text-sm text-muted-foreground')
