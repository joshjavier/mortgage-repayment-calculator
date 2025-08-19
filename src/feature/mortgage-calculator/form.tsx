import IconCalculator from '@/assets/icon-calculator.svg?react'
import { NumberField } from '@/components/number-field/number-field'
import { RadioButton } from '@/components/radio-button/radio-button'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { RadioGroup } from '@/components/ui/radio-group'

export function Form() {
  return (
    <div className="flex flex-col gap-300 px-300 py-400 sm:gap-500 sm:p-500">
      <div className="flex flex-wrap justify-between gap-100">
        <h1 className="text-preset-2">Mortgage Calculator</h1>
        <Button variant="link">Clear All</Button>
      </div>

      {/* Form fields */}
      <div className="flex flex-col gap-300">
        <NumberField label="Mortgage Amount" leftSection="£" />
        <NumberField label="Mortgage Term" rightSection="years" />
        <NumberField label="Interest Rate" rightSection="%" />
        <div>
          <Label className="mb-150">Mortgage Type</Label>
          <RadioGroup>
            <RadioButton label="Repayment" value="repayment" />
            <RadioButton label="Interest Only" value="interestOnly" />
          </RadioGroup>
        </div>
      </div>

      <Button className="sm:self-start">
        <IconCalculator />
        Calculate Repayments
      </Button>
    </div>
  )
}
