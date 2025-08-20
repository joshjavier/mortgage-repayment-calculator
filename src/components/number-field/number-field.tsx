import { cn } from '@/lib/utils'
import { useId, type ReactNode } from 'react'
import { NumericFormat, type NumericFormatProps } from 'react-number-format'
import { Input } from '../ui/input'

interface NumberFieldProps extends NumericFormatProps {
  rightSection?: ReactNode
  leftSection?: ReactNode
}

export function NumberField({
  leftSection,
  rightSection,
  ...inputProps
}: NumberFieldProps) {
  const inputId = useId()
  return (
    <div
      className={cn(
        'group flex min-h-12 overflow-clip rounded-sm border border-slate-500',
        'focus-within:border-lime',
        'has-aria-invalid:border-red',
        'hover:not-focus-within:not-has-aria-invalid:border-slate-900',
      )}
    >
      {leftSection && (
        <div
          className={cn(
            'text-preset-3 inline-flex flex-none items-center bg-slate-100 px-200 text-slate-700',
            'group-focus-within:bg-lime group-focus-within:text-slate-900',
            'group-has-aria-invalid:bg-red group-has-aria-invalid:text-white',
          )}
        >
          {leftSection}
        </div>
      )}
      <NumericFormat
        customInput={Input}
        thousandSeparator
        id={inputId}
        className="text-preset-3 h-auto rounded-none border-none px-200 text-slate-900 shadow-none focus-visible:ring-0"
        {...inputProps}
      />
      {rightSection && (
        <div
          className={cn(
            'text-preset-3 inline-flex flex-none items-center bg-slate-100 px-200 text-slate-700',
            'group-focus-within:bg-lime group-focus-within:text-slate-900',
            'group-has-aria-invalid:bg-red group-has-aria-invalid:text-white',
          )}
        >
          {rightSection}
        </div>
      )}
    </div>
  )
}
