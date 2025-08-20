/**
 * Calculates mortgage details
 * @param principal - The loan amount
 * @param years - Mortgage term in years
 * @param annualRate - Annual interest rate in percentage (e.g. 6.5 for 6.5%)
 * @param type - "repayment" | "interestOnly"
 * @returns Object with monthly payment, total payments, total interest
 */
export function calculateMortgage(
  principal: number,
  years: number,
  annualRate: number,
  type: 'repayment' | 'interestOnly' = 'repayment',
): {
  monthlyPayment: number
  totalPayments: number
  totalInterest: number
} {
  const monthlyRate = annualRate / 100 / 12
  const totalPaymentsCount = years * 12

  let monthlyPayment: number
  let totalPayments: number
  let totalInterest: number

  if (type === 'interestOnly') {
    // Monthly payment = interest only
    monthlyPayment = principal * monthlyRate
    totalPayments = monthlyPayment * totalPaymentsCount
    totalInterest = totalPayments // principal is untouched
  } else {
    // Standard repayment mortgage
    if (monthlyRate === 0) {
      monthlyPayment = principal / totalPaymentsCount
    } else {
      monthlyPayment =
        (principal *
          monthlyRate *
          Math.pow(1 + monthlyRate, totalPaymentsCount)) /
        (Math.pow(1 + monthlyRate, totalPaymentsCount) - 1)
    }
    totalPayments = monthlyPayment * totalPaymentsCount
    totalInterest = totalPayments - principal
  }

  return {
    monthlyPayment,
    totalPayments,
    totalInterest,
  }
}
