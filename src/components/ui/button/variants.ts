import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  'relative inline-flex items-center justify-center whitespace-nowrap rounded-sm active:rounded-sm after:rounded-sm after:hover:rounded-sm text-sm font-medium ring-offset-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 after:inset-0 after:absolute',
  {
    variants: {
      variant: {
        base: 'bg-button-inverted hover:bg-button-inverted-hover active:bg-button-inverted-pressed text-primary-foreground after:bg-button-inverted-gradient after:hover:bg-button-inverted-hover-gradient after:active:bg-button-inverted-pressed-gradient',
        danger:
          'bg-button-danger hover:bg-button-danger-hover active:bg-button-danger-pressed text-destructive-foreground after:bg-button-danger-gradient after:hover:bg-button-danger-hover-gradient after:active:bg-button-danger-pressed-gradient',
        neutral:
          'bg-button-neutral hover:bg-button-neutral-hover active:bg-button-neutral-pressed hover:text-accent-foreground after:bg-button-neutral-gradient after:hover:bg-button-neutral-hover-gradient after:active:bg-button-neutral-pressed-gradient',
        transparent:
          'bg-button-transparent hover:bg-button-transparent-hover active:bg-button-transparent-pressed text-secondary-foreground after:bg-button-transparent-gradient after:hover:bg-button-transparent-hover-gradient after:active:bg-button-transparent-pressed-gradient',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 px-3',
        lg: 'h-11 px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'base',
      size: 'default',
    },
  },
)
