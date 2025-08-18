import IllustrationEmpty from '@/assets/illustration-empty.svg?react'

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center gap-200 text-center">
      <IllustrationEmpty />
      <h2 className="text-preset-2">Results shown here</h2>
      <p className="text-preset-4 text-slate-300">
        Complete the form and click &ldquo;calculate repayments&rdquo; to see
        what your monthly repayments would be.
      </p>
    </div>
  )
}
