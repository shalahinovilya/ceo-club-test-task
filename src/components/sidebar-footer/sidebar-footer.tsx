import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { HelpCircleIcon } from "@hugeicons/core-free-icons"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { HELP_ICON_ARIA_LABEL } from "./constants"
import type { SidebarFooterProps } from "./types"

const SidebarFooter = React.forwardRef<HTMLDivElement, SidebarFooterProps>(
  ({ className, onHelpClick, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col items-start gap-0 border-t border-sidebar-border bg-sidebar p-2",
          className
        )}
        {...props}
      >
        {children ? (
          children
        ) : (
          <Button
            variant="ghost"
            size="icon"
            onClick={onHelpClick}
            aria-label={HELP_ICON_ARIA_LABEL}
            className="rounded-md"
          >
            <HugeiconsIcon icon={HelpCircleIcon} size={16} color="currentColor" />
          </Button>
        )}
      </div>
    )
  }
)

SidebarFooter.displayName = "SidebarFooter"

export { SidebarFooter }
