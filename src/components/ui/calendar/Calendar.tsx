'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import type * as React from 'react'
import { DayPicker } from 'react-day-picker'

import { cn } from '@/lib/utils'

import { calendarVariants } from './variants'

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      classNames={{ ...calendarVariants, ...classNames }}
      components={{
        IconLeft: () => <ChevronLeft className="h-4 w-4" />,
        IconRight: () => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  )
}
Calendar.displayName = 'Calendar'

export { Calendar }
