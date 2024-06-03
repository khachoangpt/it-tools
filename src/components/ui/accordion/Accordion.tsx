'use client'

import * as AccordionPrimitive from '@radix-ui/react-accordion'
import type { VariantProps } from 'class-variance-authority'
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from 'react'

import { cn } from '@/lib/utils'
import { Icons } from '#/svgs'

import { Container } from '../container'
import { Text } from '../text'
import {
  accordionContentVariants,
  accordionItemVariants,
  accordionTriggerVariants,
} from './variants'

const Accordion = AccordionPrimitive.Root

const AccordionItem = forwardRef<
  ElementRef<typeof AccordionPrimitive.Item>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> &
    VariantProps<typeof accordionItemVariants>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(accordionItemVariants(), className)}
    {...props}
  />
))
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = forwardRef<
  ElementRef<typeof AccordionPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> &
    VariantProps<typeof accordionTriggerVariants>
>(({ className, children, state, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(accordionTriggerVariants(), className)}
      {...props}
    >
      <Text as="span" className="flex h-12 w-12 items-center justify-center">
        {state === 'not-started' && (
          <Icons.CircleMiniSolid className="h-5 w-5" />
        )}
        {state === 'in-progress' && (
          <Icons.CircleHalfSolid className="h-5 w-5" />
        )}
        {state === 'completed' && (
          <Icons.CheckCircleSolid className="h-5 w-5" />
        )}
      </Text>
      {children}
      <Container className="ml-auto shrink-0 rounded-medium p-2 hover:bg-[#27282d]">
        <Icons.Plus className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-45" />
      </Container>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = forwardRef<
  ElementRef<typeof AccordionPrimitive.Content>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> &
    VariantProps<typeof accordionContentVariants>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={accordionContentVariants()}
    {...props}
  >
    <Container className={cn('pb-4 pl-20 pt-0', className)}>
      {children}
    </Container>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
