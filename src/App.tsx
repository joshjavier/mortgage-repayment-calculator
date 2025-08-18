import IconCalculator from './assets/icon-calculator.svg?react'
import { NumberField } from './components/number-field/number-field'
import { RadioButton } from './components/radio-button/radio-button'
import { Button } from './components/ui/button'
import { RadioGroup } from './components/ui/radio-group'

function RadioGroupDemo() {
  return (
    <RadioGroup>
      <RadioButton value="repayment" label="Repayment" />
      <RadioButton value="interestOnly" label="Interest Only" />
    </RadioGroup>
  )
}

function NumberFieldDemo() {
  return (
    <NumberField
      value={300000}
      leftSection="Prefix"
      rightSection="Suffix"
      label="Title"
    />
  )
}

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-5">
      <Button>
        <IconCalculator />
        Calculate Repayments
      </Button>

      <Button variant="link">Clear All</Button>

      <RadioGroupDemo />

      <NumberFieldDemo />
    </div>
  )
}

export default App
