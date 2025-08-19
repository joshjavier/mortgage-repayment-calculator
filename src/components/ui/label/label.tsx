import { cn } from '@/lib/utils'
import * as LabelPrimitive from '@radix-ui/react-label'
import type { VariantProps } from 'class-variance-authority'
import { labelVariants } from './variants'

function Label({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root> &
  VariantProps<typeof labelVariants>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(labelVariants({ variant, className }))}
      {...props}
    />
  )
}

export { Label }
