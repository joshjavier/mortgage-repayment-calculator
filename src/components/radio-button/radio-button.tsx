import { Label } from '../ui/label'
import { RadioGroupItem } from '../ui/radio-group'

interface RadioButtonProps {
  value: string
  label: string
}

export function RadioButton({ value, label }: RadioButtonProps) {
  return (
    <Label variant="radio">
      <RadioGroupItem value={value} />
      {label}
    </Label>
  )
}
