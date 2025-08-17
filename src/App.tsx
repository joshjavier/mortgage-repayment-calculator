import IconCalculator from './assets/icon-calculator.svg?react'
import { Button } from './components/ui/button'

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-5">
      <Button>
        <IconCalculator />
        Calculate Repayments
      </Button>

      <Button variant="link">Clear All</Button>
    </div>
  )
}

export default App
