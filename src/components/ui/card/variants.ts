import { cva } from 'class-variance-authority'

export const cardVariants = cva(
  'rounded-lg border bg-card text-card-foreground shadow-sm',
)

export const cardHeaderVariants = cva('flex flex-col space-y-1.5 p-6')

export const cardTitleVariants = cva('text-2xl font-semibold tracking-tight')

export const cardDescriptionVariants = cva('text-sm text-muted-foreground')

export const cardContentVariants = cva('p-6 pt-0')

export const cardFooterVariants = cva('flex items-center p-6 pt-0')
