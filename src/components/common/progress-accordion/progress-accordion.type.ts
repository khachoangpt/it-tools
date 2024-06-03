import type { VariantProps } from 'class-variance-authority'
import type { ReactNode } from 'react'

import type { accordionTriggerVariants } from '@/components/ui/accordion/variants'

export type ProgressAccordionItem = {
  value: string
  trigger: ReactNode
  content: ReactNode
} & Pick<VariantProps<typeof accordionTriggerVariants>, 'state'>
