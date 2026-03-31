import * as React from "react"
import { PanelLeftClose, User, Settings, Sun, LogOut, Plus, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { sidebarHeaderVariants, DEFAULT_TITLE, DEFAULT_INITIALS } from "./constants"
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
        {/* Workspace Menu Dropdown - Wraps the clickable area */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button onClick={(e) => e.stopPropagation()} className="flex-1 flex items-center gap-2 rounded-md p-2 hover:bg-muted transition-colors text-left outline-none">
              {/* Avatar/Logo */}
              {logo ? (
                <div className="shrink-0">{logo}</div>
              ) : (
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sidebar-primary text-sm font-medium text-sidebar-primary-foreground shrink-0">
                  {initials}
                </div>
              )}

              {/* Title */}
              <h1 className="flex-1 truncate text-base font-medium text-foreground">
                {title}
              </h1>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56 z-50">
            {/* Workspaces */}
            <DropdownMenuGroup>
              <DropdownMenuItem className="gap-2">
                <div className="flex h-4 w-4 items-center justify-center rounded text-xs font-medium bg-sidebar-primary text-sidebar-primary-foreground">
                  C
                </div>
                <span className="flex-1">CEO Club</span>
                <Check className="h-4 w-4" />
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2">
                <div className="flex h-4 w-4 items-center justify-center rounded text-xs font-medium bg-blue-500 text-white">
                  A
                </div>
                <span>Another Workspace</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2">
                <Plus className="h-4 w-4" />
                <span>Створити робочій простір</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            {/* Settings */}
            <DropdownMenuGroup>
              <DropdownMenuItem className="gap-2">
                <User className="h-4 w-4" />
                <span>Обліковий запис</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2">
                <Settings className="h-4 w-4" />
                <span>Робочий простір</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2">
                <Sun className="h-4 w-4" />
                <span className="flex-1">Вигляд</span>
                <span className="text-xs">→</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            {/* Logout */}
            <DropdownMenuGroup>
              <DropdownMenuItem className="gap-2 text-destructive">
                <LogOut className="h-4 w-4" />
                <span>Вийти</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Close Sidebar Button */}
        {showToggle && onToggle && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggle}
            aria-label="Close sidebar"
            className="rounded-md shrink-0"
          >
            <PanelLeftClose className="h-4 w-4" />
          </Button>
        )}
      </div>
    )
  }
)

SidebarHeader.displayName = "SidebarHeader"

export { SidebarHeader }
