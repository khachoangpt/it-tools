'use client'

import FormSlider from '@/components/common/form/form-slider/FormSlider'
import FormSwitch from '@/components/common/form/form-switch/FormSwitch'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { Form, FormField } from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import useClipboard from '@/hooks/useClipboard'

import useTokenGeneratorController from '../controllers/useTokenGeneratorController'

const TokenGeneratorForm = () => {
  const { copyToClipboard } = useClipboard()
  const { control, tokenGeneratorForm, randomText, generate } =
    useTokenGeneratorController()

  return (
    <Form {...tokenGeneratorForm}>
      <Card className="flex-1 px-6 py-5">
        <Container className="flex justify-center gap-8">
          <Container className="flex flex-col items-end gap-y-8">
            <FormField
              name="isUppercase"
              control={control}
              render={({ field: { value, onChange } }) => (
                <FormSwitch
                  checked={value}
                  onChange={onChange}
                  label="Uppercase (ABC...)"
                  name="isUppercase"
                />
              )}
            />
            <FormField
              name="isNumber"
              control={control}
              render={({ field: { value, onChange } }) => (
                <FormSwitch
                  checked={value}
                  onChange={onChange}
                  label="Numbers (123...)"
                  name="isNumber"
                />
              )}
            />
          </Container>
          <Container className="flex flex-col items-end gap-y-8">
            <FormField
              name="isLowercase"
              control={control}
              render={({ field: { value, onChange } }) => (
                <FormSwitch
                  checked={value}
                  onChange={onChange}
                  label="Lowercase (abc...)"
                  name="isLowercase"
                />
              )}
            />
            <FormField
              name="isSymbol"
              control={control}
              render={({ field: { value, onChange } }) => (
                <FormSwitch
                  checked={value}
                  onChange={onChange}
                  label="Symbols (!-;...)"
                  name="isSymbol"
                />
              )}
            />
          </Container>
        </Container>
        <Container className="mt-8">
          <FormField
            control={control}
            name="length"
            render={({ field: { value, onChange } }) => (
              <FormSlider
                label={`Length (${value})`}
                max={512}
                min={1}
                step={1}
                onChange={onChange}
                value={value}
              />
            )}
          />
        </Container>
        <Container className="mt-8">
          <Textarea
            onChange={() => {}}
            className="text-center"
            rows={4}
            value={randomText}
          />
        </Container>
        <Container className="mt-6 flex justify-center gap-x-4">
          <Button size="sm" onClick={() => copyToClipboard(randomText)}>
            Copy
          </Button>
          <Button size="sm" onClick={generate}>
            Refresh
          </Button>
        </Container>
      </Card>
    </Form>
  )
}

export default TokenGeneratorForm
