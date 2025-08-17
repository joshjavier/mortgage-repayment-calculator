import { Label } from '../ui/label'
import { RadioGroupItem } from '../ui/radio-group'

interface RadioButtonProps {
  value: string
  label: string
}

export function RadioButton({ value, label }: RadioButtonProps) {
  return (
    <Label className="hover:border-lime has-data-[state=checked]:bg-lime/15 has-data-[state=checked]:border-lime rounded-[4px] border border-slate-500">
      <RadioGroupItem value={value} />
      {label}
    </Label>
  )
}
