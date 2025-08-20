import { TransitionPanel } from '@/components/motion-primitives/transition-panel'
import { Separator } from '@/components/ui/separator'
import NumberFlow from '@number-flow/react'
import { useAtomValue } from 'jotai'
import { EmptyState } from './empty-state'
import { mortgageAtom } from './state'

export function Results() {
  const { monthlyPayment, totalPayments } = useAtomValue(mortgageAtom)
  const activeIndex = !monthlyPayment || !totalPayments ? 0 : 1
  return (
    <div className="bg-slate-900 px-300 py-400 text-white sm:p-500 lg:rounded-bl-[80px]">
      <TransitionPanel
        activeIndex={activeIndex}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        variants={{
          enter: { opacity: 0, y: -50, filter: 'blur(4px)' },
          center: { opacity: 1, y: 0, filter: 'blur(0px)' },
          exit: { opacity: 0, y: 50, filter: 'blur(4px)' },
        }}
      >
        <div key={0} className="h-full">
          <EmptyState />
        </div>

        <div key={1}>
          <h2 className="text-preset-2 mb-200">Your results</h2>
          <p className="text-preset-4 mb-300 text-slate-300 sm:mb-500">
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click &ldquo;calculate
            repayments&rdquo; again.
          </p>
          <div className="border-lime flex flex-col gap-200 rounded-xl border-t-4 bg-black/25 px-200 pt-5 pb-300 sm:gap-400 sm:px-400 sm:pt-7 sm:pb-400">
            <div>
              <h3 className="text-preset-4 mb-100 text-slate-300">
                Your monthly repayments
              </h3>
              <NumberFlow
                value={monthlyPayment}
                format={{ style: 'currency', currency: 'GBP' }}
                className="text-lime text-preset-1 max-sm:text-[40px] max-sm:leading-[normal]"
              />
            </div>
            <Separator />
            <div>
              <h3 className="text-preset-4 mb-100 text-slate-300">
                Total you'll repay over the term
              </h3>
              <NumberFlow
                value={totalPayments}
                format={{ style: 'currency', currency: 'GBP' }}
                className="text-preset-2"
              />
            </div>
          </div>
        </div>
      </TransitionPanel>
    </div>
  )
}
