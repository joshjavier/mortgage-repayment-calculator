import IconCalculator from '@/assets/icon-calculator.svg?react'
import { NumberField } from '@/components/number-field/number-field'
import { RadioButton } from '@/components/radio-button/radio-button'
import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form as FormRoot,
} from '@/components/ui/form'
import { RadioGroup } from '@/components/ui/radio-group'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSetAtom } from 'jotai'
import { useResetAtom } from 'jotai/utils'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { mortgageAtom } from '../state'
import { TitleBar } from './title-bar'

const preprocessFn = (val: string | number) => {
  if (typeof val === 'string') {
    const parsed = Number(val.replace(/[^\d.-]/g, ''))
    return parsed !== 0 ? parsed : undefined
  }
  return val
}

const numberSchema = z
  .number('This field is required')
  .nonnegative('Must not be negative')

const formSchema = z.object({
  amount: z.preprocess(preprocessFn, numberSchema),
  term: z.preprocess(preprocessFn, numberSchema),
  interest: z.preprocess(preprocessFn, numberSchema),
  type: z.literal(['repayment', 'interestOnly'], 'This field is required'),
})

type FormFields = z.input<typeof formSchema>
type FormPayload = z.output<typeof formSchema>

export function Form() {
  const calcMortgage = useSetAtom(mortgageAtom)
  const resetResults = useResetAtom(mortgageAtom)
  const [key, setKey] = useState(+new Date())
  const form = useForm<FormFields>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: '',
      term: '',
      interest: '',
    },
  })

  const onSubmit = (values: unknown) => {
    const { amount, term, interest, type } = values as FormPayload
    calcMortgage({ principal: amount, years: term, annualRate: interest, type })
  }

  const onReset = () => {
    form.reset()
    setKey(+new Date()) // workaround to uncheck all radio buttons
    resetResults()
  }

  return (
    <FormRoot {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, (values) => console.log(values))}
        className="flex flex-col gap-300 px-300 py-400 sm:gap-500 sm:p-500"
      >
        <TitleBar title="Mortgage Calculator" onReset={onReset} />

        <div className="flex flex-col gap-300">
          {/* mortgage amount */}
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mortgage Amount</FormLabel>
                <FormControl>
                  <NumberField
                    leftSection="£"
                    allowNegative={false}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid-cols-2 items-start gap-300 sm:grid">
            {/* mortgage term */}
            <FormField
              control={form.control}
              name="term"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mortgage Term</FormLabel>
                  <FormControl>
                    <NumberField
                      rightSection="years"
                      allowNegative={false}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* interest rate */}
            <FormField
              control={form.control}
              name="interest"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Interest Rate</FormLabel>
                  <FormControl>
                    <NumberField rightSection="%" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* mortgage type */}
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mortgage Type</FormLabel>
                <FormControl>
                  <RadioGroup onValueChange={field.onChange} key={key}>
                    <FormItem>
                      <FormControl>
                        <RadioButton label="Repayment" value="repayment" />
                      </FormControl>
                    </FormItem>
                    <FormItem>
                      <FormControl>
                        <RadioButton
                          label="Interest Only"
                          value="interestOnly"
                        />
                      </FormControl>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" className="sm:self-start">
          <IconCalculator />
          Calculate Repayments
        </Button>
      </form>
    </FormRoot>
  )
}
