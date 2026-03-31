import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const toolbarVariants = cva(
  "flex items-center justify-between gap-2 border-b bg-background px-3.5 py-3.5",
  {
    variants: {
      variant: {
        default: "border-border",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface ToolbarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof toolbarVariants> {}

const Toolbar = React.forwardRef<HTMLDivElement, ToolbarProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(toolbarVariants({ variant, className }))}
      {...props}
    />
  )
)
Toolbar.displayName = "Toolbar"

const toolbarLeftVariants = cva("flex items-center gap-2", {
  variants: {
    variant: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

interface ToolbarLeftProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof toolbarLeftVariants> {}

const ToolbarLeft = React.forwardRef<HTMLDivElement, ToolbarLeftProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(toolbarLeftVariants({ variant, className }))}
      {...props}
    />
  )
)
ToolbarLeft.displayName = "ToolbarLeft"

const toolbarRightVariants = cva("flex flex-1 items-center justify-end gap-2", {
  variants: {
    variant: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

interface ToolbarRightProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof toolbarRightVariants> {}

const ToolbarRight = React.forwardRef<HTMLDivElement, ToolbarRightProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(toolbarRightVariants({ variant, className }))}
      {...props}
    />
  )
)
ToolbarRight.displayName = "ToolbarRight"

export {
  Toolbar,
  ToolbarLeft,
  ToolbarRight,
}
