import { cva } from 'class-variance-authority'

export const labelVariants = cva(
  'inline-flex items-center gap-2 select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'text-preset-4 text-slate-700',
        radio:
          'text-preset-3 gap-200 px-200 min-h-[48px] text-slate-900 hover:border-lime has-data-[state=checked]:bg-lime/15 has-data-[state=checked]:border-lime rounded-[4px] border border-slate-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)
