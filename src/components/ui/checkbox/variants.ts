import { cva } from 'class-variance-authority'

export const checkboxVariants = cva(
  'peer shrink-0 rounded-sm border border-primary ring-offset-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
  {
    variants: { size: { large: 'h-6 w-6', medium: 'h-4 w-4' } },
    defaultVariants: { size: 'medium' },
  },
)
