import IconCalculator from './assets/icon-calculator.svg?react'
import { NumberField } from './components/number-field/number-field'
import { RadioButton } from './components/radio-button/radio-button'
import { Button } from './components/ui/button'
import { RadioGroup } from './components/ui/radio-group'

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-5">
      <div className="bg-white">
        {/* Mortgage Calculator */}
        <div className="space-y-300 px-300 py-400">
          <div className="flex flex-wrap justify-between gap-100">
            <h1 className="text-preset-2">Mortgage Calculator</h1>
            <Button variant="link">Clear All</Button>
          </div>

          {/* Form fields */}
          <div className="flex flex-col gap-300">
            <NumberField label="Mortgage Amount" leftSection="£" />
            <NumberField label="Mortgage Term" rightSection="years" />
            <NumberField label="Interest Rate" rightSection="%" />
            <RadioGroup>
              <RadioButton label="Repayment" value="repayment" />
              <RadioButton label="Interest Only" value="interestOnly" />
            </RadioGroup>
          </div>

          <Button>
            <IconCalculator />
            Calculate Repayments
          </Button>
        </div>

        {/* Your results */}
      </div>
    </div>
  )
}

export default App
