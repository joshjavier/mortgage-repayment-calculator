import { Form } from './form'
import { Results } from './results'

export function MortgageCalculator() {
  return (
    <div className="shadow-card w-full max-w-[688px] overflow-clip bg-white sm:rounded-3xl lg:grid lg:max-w-[1008px] lg:grid-cols-2">
      <Form />
      <Results monthlyPayment={1797.74} totalPayments={539322.94} />
    </div>
  )
}
