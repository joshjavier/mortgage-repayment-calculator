import { MortgageCalculator } from './feature/mortgage-calculator/mortgage-calculator'
import { Results } from './feature/mortgage-calculator/results'

function App() {
  return (
    <div className="min-h-svh flex-col items-center justify-center sm:flex sm:p-500">
      <div className="shadow-card w-full max-w-[688px] overflow-clip bg-white sm:rounded-3xl">
        <MortgageCalculator />
        <Results monthlyPayment={1797.74} totalPayments={539322.94} />
      </div>
    </div>
  )
}

export default App
