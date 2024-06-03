import { cva } from 'class-variance-authority'

export const accordionItemVariants = cva('border-b')

export const accordionTriggerVariants = cva(
  [
    'flex flex-1 group px-5 gap-3 items-center font-medium transition-all',
    'hover:underline [&[data-state=open]>svg]:rotate-180',
  ],
  {
    variants: {
      state: {
        'not-started': '',
        'in-progress': '',
        completed: '',
      },
    },
    defaultVariants: {
      state: 'not-started',
    },
  },
)

export const accordionContentVariants = cva(
  'overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
)
