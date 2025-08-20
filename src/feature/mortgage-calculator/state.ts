import { atom } from 'jotai'
import { atomWithReset, RESET } from 'jotai/utils'
import { calculateMortgage } from './services/mortgage'

type MortgageDetails = {
  monthlyPayment: number
  totalPayments: number
  totalInterest: number
}
type MortgageArgs = {
  principal: number
  years: number
  annualRate: number
  type?: 'repayment' | 'interestOnly'
}

const baseAtom = atomWithReset<MortgageDetails>({
  monthlyPayment: 0,
  totalPayments: 0,
  totalInterest: 0,
})
export const mortgageAtom = atom(
  (get) => get(baseAtom),
  (_get, set, newValue: MortgageArgs | typeof RESET) => {
    if (newValue === RESET) {
      set(baseAtom, newValue)
      return
    }

    const { principal, years, annualRate, type } = newValue
    set(baseAtom, calculateMortgage(principal, years, annualRate, type))
  },
)
