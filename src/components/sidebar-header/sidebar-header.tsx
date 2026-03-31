import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { WorkspaceMenu } from "../workspace-menu"
import { sidebarHeaderVariants, DEFAULT_TITLE, DEFAULT_INITIALS } from "./constants"
import { SidebarToggleIcon } from "@/icons/sidebar-toggle-icon"
import type { SidebarHeaderProps } from "./types"

const SidebarHeader = React.forwardRef<HTMLDivElement, SidebarHeaderProps>(
  (
    {
      className,
      variant,
      logo,
      title = DEFAULT_TITLE,
      initials = DEFAULT_INITIALS,
      onToggle,
      showToggle = true,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(sidebarHeaderVariants({ variant, className }), "relative")}
        {...props}
      >
        <WorkspaceMenu title={title} initials={initials} logo={logo} />

        {/* Close Sidebar Button */}
        {showToggle && onToggle && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggle}
            aria-label="Close sidebar"
            className="rounded-md shrink-0"
          >
            <SidebarToggleIcon />
          </Button>
        )}
      </div>
    )
  }
)

SidebarHeader.displayName = "SidebarHeader"

export { SidebarHeader }
