import { cva } from 'class-variance-authority'

export const selectVariants = cva(
  [
    'flex h-8 w-full items-center justify-between rounded-small bg-background-field border px-3 py-2 text-sm ring-offset-base hover:bg-background-field-hover focus:outline-none focus:ring-2 ring-background-highlight-hover focus:border-border-interactive focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 [&>svg]:data-[state=open]:rotate-180 [&>svg]:duration-200 [&>span]:line-clamp-1',
  ],
  {
    variants: {
      variant: {
        block:
          'rounded-2xl data-[state=open]:rounded-b-none data-[state=open]:border-b-transparent',
      },
    },
    defaultVariants: {},
  },
)

export const selectContentVariants = cva(
  [
    'relative z-50 min-w-[8rem] overflow-hidden rounded-medium border bg-popover text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 min-w-[var(--radix-select-trigger-width)] max-w-[--radix-select-trigger-width]',
  ],
  {
    variants: {
      variant: {
        block:
          'rounded-2xl rounded-t-none data-[side=bottom]:-translate-y-[1px] border-t-0 bg-background-field data-[state=open]:zoom-in-0 w-[var(--radix-select-trigger-width)]',
      },
    },
    defaultVariants: {},
  },
)

export const selectItemVariants = cva(
  [
    'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:font-semibold data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
  ],
  {
    variants: {
      variant: {
        block: 'rounded-xl',
      },
    },
    defaultVariants: {},
  },
)
