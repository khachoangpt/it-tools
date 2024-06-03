'use client'

import * as DialogPrimitive from '@radix-ui/react-dialog'
import type { VariantProps } from 'class-variance-authority'
import { X } from 'lucide-react'
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
  type HTMLAttributes,
} from 'react'

import { cn } from '@/lib/utils'

import { Container } from '../container'
import { Text } from '../text'
import {
  dialogCloseVariants,
  dialogContentVariants,
  dialogDescriptionVariants,
  dialogFooterVariants,
  dialogHeaderVariants,
  dialogOverlayVariants,
  dialogTitleVariants,
} from './variants'

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = forwardRef<
  ElementRef<typeof DialogPrimitive.Overlay>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay> &
    VariantProps<typeof dialogOverlayVariants>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(dialogOverlayVariants(), className)}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = forwardRef<
  ElementRef<typeof DialogPrimitive.Content>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Content> &
    VariantProps<typeof dialogContentVariants> &
    VariantProps<typeof dialogCloseVariants>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(dialogContentVariants(), className)}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className={cn(dialogCloseVariants())}>
        <X className="h-4 w-4" />
        <Text as="span" className="sr-only">
          Close
        </Text>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof dialogHeaderVariants>) => (
  <Container className={cn(dialogHeaderVariants(), className)} {...props} />
)
DialogHeader.displayName = 'DialogHeader'

const DialogFooter = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof dialogFooterVariants>) => (
  <Container className={cn(dialogFooterVariants(), className)} {...props} />
)
DialogFooter.displayName = 'DialogFooter'

const DialogTitle = forwardRef<
  ElementRef<typeof DialogPrimitive.Title>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Title> &
    VariantProps<typeof dialogTitleVariants>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(dialogTitleVariants(), className)}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = forwardRef<
  ElementRef<typeof DialogPrimitive.Description>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Description> &
    VariantProps<typeof dialogDescriptionVariants>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn(dialogDescriptionVariants(), className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}
