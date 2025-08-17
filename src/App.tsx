import IconCalculator from './assets/icon-calculator.svg?react'
import { Button } from './components/ui/button'

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>
        <IconCalculator />
        Calculate Repayments
      </Button>
    </div>
  )
}

export default App
