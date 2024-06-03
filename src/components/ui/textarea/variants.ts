import { cva } from 'class-variance-authority'

export const textareaVariants = cva([
  'flex min-h-[80px] w-full rounded-medium border border-input bg-base px-3 py-2 text-sm ring-offset-base',
  'placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
  'focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
])
