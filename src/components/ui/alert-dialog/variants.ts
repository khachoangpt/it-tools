import { cva } from 'class-variance-authority'

export const alertDialogOverlayVariants = cva(
  'fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
)

export const alertDialogContentVariants = cva([
  [
    'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%]',
    'translate-y-[-50%] gap-4 border bg-base p-6 shadow-lg duration-200',
    'data-[state=open]:animate-in data-[state=closed]:animate-out',
    'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
    'data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]',
    'data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
  ],
])

export const alertDialogHeaderVariants = cva(
  'flex flex-col space-y-2 text-center sm:text-left',
)

export const alertDialogFooterVariants = cva(
  'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
)

export const alertDialogTitleVariants = cva('text-lg font-semibold')

export const alertDialogDescriptionVariants = cva(
  'text-sm text-muted-foreground',
)
