import type {
  AccordionMultipleProps,
  AccordionSingleProps,
} from '@radix-ui/react-accordion'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import type { ProgressAccordionItem } from './progress-accordion.type'

type Props = {
  items: ProgressAccordionItem[]
} & (AccordionSingleProps | AccordionMultipleProps)

export const ProgressAccordion = ({ type, items = [] }: Props) => {
  return (
    <Accordion type={type}>
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger state={item.state}>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
