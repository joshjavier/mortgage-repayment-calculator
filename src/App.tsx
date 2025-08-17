import IconCalculator from './assets/icon-calculator.svg?react'
import { Button } from './components/ui/button'
import { Label } from './components/ui/label'
import { RadioGroup, RadioGroupItem } from './components/ui/radio-group'

function RadioGroupDemo() {
  return (
    <RadioGroup>
      <div>
        <RadioGroupItem value="repayment" id="r1" />
        <Label htmlFor="r1">Repayment</Label>
      </div>
      <div>
        <RadioGroupItem value="interestOnly" id="r2" />
        <Label htmlFor="r2">Interest Only</Label>
      </div>
    </RadioGroup>
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
    </div>
  )
}

export default App
