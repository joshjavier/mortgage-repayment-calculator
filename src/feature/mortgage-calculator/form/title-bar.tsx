import { Button } from '@/components/ui/button'

interface TitleBarProps {
  title: string
  onReset?: () => void
}

export function TitleBar({ title, onReset }: TitleBarProps) {
  return (
    <div className="flex flex-wrap justify-between gap-100">
      <h1 className="text-preset-2">{title}</h1>
      <Button type="button" variant="link" onClick={onReset}>
        Clear All
      </Button>
    </div>
  )
}
