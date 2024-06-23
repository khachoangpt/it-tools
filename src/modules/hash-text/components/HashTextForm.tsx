'use client'

import { useWatch } from 'react-hook-form'

import { FormSelect } from '@/components/common/form/form-select'
import { FormTextarea } from '@/components/common/form/form-textarea'
import { Card } from '@/components/ui/card'
import CopyButton from '@/components/ui/code/CopyButton'
import { Container } from '@/components/ui/container'
import { Form, FormField } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { hashText } from '@/utils/hash-text'

import useHashTextController from '../controllers/hash-text.controller'

export const HashTextForm = () => {
  const { hashTextForm, control, encodes, algorithms } = useHashTextController()
  const { text, encode } = useWatch({ control })

  return (
    <Form {...hashTextForm}>
      <Card className="flex-1 px-6 py-5">
        <FormField
          control={control}
          name="text"
          render={({ field: { value, onChange } }) => (
            <FormTextarea
              value={value}
              onChange={onChange}
              label="Your text to hash:"
              placeholder="Your string to hash:"
            />
          )}
        />
        <Separator className="my-5" />
        <FormField
          control={control}
          name="encode"
          render={({ field: { value, onChange } }) => (
            <FormSelect
              label="Digest encoding"
              options={encodes}
              value={value}
              onChange={onChange}
            />
          )}
        />
        <Container className="mt-6 space-y-2">
          {algorithms.map((algorithm) => {
            const hashedText = hashText(text!, encode!, algorithm)
            return (
              <Container key={algorithm} className="flex">
                <Input
                  type="text"
                  prefix={
                    <Container className="flex h-full w-32 items-center whitespace-nowrap rounded-md border bg-slate-700 px-2">
                      {algorithm}
                    </Container>
                  }
                  value={hashedText}
                />
                <Container className="flex items-center p-2">
                  <CopyButton text={hashedText} />
                </Container>
              </Container>
            )
          })}
        </Container>
      </Card>
    </Form>
  )
}
