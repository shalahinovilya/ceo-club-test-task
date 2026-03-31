import * as React from "react"
import { Slot } from "radix-ui"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const sidebarContext = React.createContext<{
  state: "expanded" | "collapsed"
  open: boolean
  setOpen: (open: boolean) => void
} | null>(null)

interface SidebarContextType {
  state: "expanded" | "collapsed"
  open: boolean
  setOpen: (open: boolean) => void
}

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  state?: "expanded" | "collapsed"
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  (
    {
      state = "expanded",
      open = true,
      onOpenChange,
      className,
      ...props
    },
    ref
  ) => {
    const [internalOpen, setInternalOpen] = React.useState(open)

    const handleOpenChange = React.useCallback(
      (newOpen: boolean) => {
        setInternalOpen(newOpen)
        onOpenChange?.(newOpen)
      },
      [onOpenChange]
    )

    const contextValue: SidebarContextType = {
      state,
      open: internalOpen,
      setOpen: handleOpenChange,
    }

    return (
      <sidebarContext.Provider value={contextValue}>
        <div
          ref={ref}
          data-state={state}
          data-open={internalOpen}
          className={cn(
            "flex h-full flex-col border-r border-sidebar-border bg-sidebar transition-all duration-300 overflow-visible",
            state === "expanded" && "w-64",
            state === "collapsed" && "w-16",
            className
          )}
          {...props}
        />
      </sidebarContext.Provider>
    )
  }
)
Sidebar.displayName = "Sidebar"

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex-1 overflow-auto px-4 py-4", className)}
    {...props}
  />
))
SidebarContent.displayName = "SidebarContent"

const SidebarGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col gap-2 p-2", className)}
    {...props}
  />
))
SidebarGroup.displayName = "SidebarGroup"

const sidebarGroupLabelVariants = cva(
  "px-2 text-xs font-medium text-muted-foreground transition-colors",
  {
    variants: {
      variant: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface SidebarGroupLabelProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sidebarGroupLabelVariants> {}

const SidebarGroupLabel = React.forwardRef<
  HTMLDivElement,
  SidebarGroupLabelProps
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(sidebarGroupLabelVariants({ variant, className }))}
    {...props}
  />
))
SidebarGroupLabel.displayName = "SidebarGroupLabel"

const SidebarMenu = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(({ className, ...props }, ref) => (
  <ul ref={ref} className={cn("flex flex-col gap-1", className)} {...props} />
))
SidebarMenu.displayName = "SidebarMenu"

const SidebarMenuItem = React.forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("flex flex-col gap-1", className)} {...props} />
))
SidebarMenuItem.displayName = "SidebarMenuItem"

const sidebarMenuButtonVariants = cva(
  "relative flex h-8 w-full items-center gap-2 rounded-md px-2 text-sm font-normal transition-colors outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring",
  {
    variants: {
      variant: {
        default:
          "text-foreground hover:bg-muted hover:text-foreground aria-expanded:bg-muted",
        active:
          "bg-accent text-accent-foreground hover:bg-accent/90 aria-expanded:bg-accent",
      },
      size: {
        default: "h-8 px-2",
        sm: "h-7 px-2 text-xs",
        icon: "h-8 w-8 justify-center",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface SidebarMenuButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof sidebarMenuButtonVariants> {
  asChild?: boolean
  isActive?: boolean
}

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  SidebarMenuButtonProps
>(
  (
    {
      className,
      variant = "default",
      size = "default",
      asChild = false,
      isActive = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot.Root : "button"

    return (
      <Comp
        ref={ref}
        data-active={isActive}
        className={cn(
          sidebarMenuButtonVariants({
            variant: isActive ? "active" : variant,
            size,
            className,
          })
        )}
        {...props}
      />
    )
  }
)
SidebarMenuButton.displayName = "SidebarMenuButton"

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("border-t px-4 py-4", className)}
    {...props}
  />
))
SidebarFooter.displayName = "SidebarFooter"

export {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
}
