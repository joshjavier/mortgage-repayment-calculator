import { cn } from '@/lib/utils'
import { useId, type ReactNode } from 'react'
import { NumericFormat, type NumericFormatProps } from 'react-number-format'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

type NumberInputProps = NumericFormatProps

interface NumberFieldProps extends NumberInputProps {
  label?: string
  rightSection?: ReactNode
  leftSection?: ReactNode
}

function NumberInput({ ...props }: NumberInputProps) {
  return <NumericFormat customInput={Input} thousandSeparator {...props} />
}

export function NumberField({
  label,
  leftSection,
  rightSection,
  ...inputProps
}: NumberFieldProps) {
  const inputId = useId()
  return (
    <div>
      {label && (
        <Label
          htmlFor={inputId}
          className="text-preset-4 w mb-150 p-0 text-slate-700"
        >
          {label}
        </Label>
      )}
      <div
        className={cn(
          'group flex min-h-12 overflow-clip rounded-sm border border-slate-500',
          'focus-within:border-lime hover:not-focus-within:border-slate-900',
        )}
      >
        {leftSection && (
          <div
            className={cn(
              'text-preset-3 inline-flex flex-none items-center bg-slate-100 px-200 text-slate-700',
              'group-focus-within:bg-lime group-focus-within:text-slate-900',
            )}
          >
            {leftSection}
          </div>
        )}
        <NumberInput
          id={inputId}
          className="text-preset-3 h-auto rounded-none border-none px-200 text-slate-900 shadow-none focus-visible:ring-0"
          {...inputProps}
        />
        {rightSection && (
          <div
            className={cn(
              'text-preset-3 inline-flex flex-none items-center bg-slate-100 px-200 text-slate-700',
              'group-focus-within:bg-lime group-focus-within:text-slate-900',
            )}
          >
            {rightSection}
          </div>
        )}
      </div>
    </div>
  )
}
