import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  User02Icon,
  Settings01Icon,
  Sun01Icon,
  Logout01Icon,
  PlusSignIcon,
  Tick01Icon,
} from "@hugeicons/core-free-icons"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"

interface WorkspaceMenuProps {
  title: string
  initials: string
  logo?: React.ReactNode
}

const WorkspaceMenu = ({ title, initials, logo }: WorkspaceMenuProps) => {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button
          className="flex-1 flex items-center gap-2 rounded-md hover:bg-muted transition-colors text-left outline-none"
        >
          {logo ? (
            <div className="shrink-0">{logo}</div>
          ) : (
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sidebar-primary text-sm font-medium text-sidebar-primary-foreground shrink-0">
              {initials}
            </div>
          )}
          <h1 className="flex-1 truncate text-base font-medium text-foreground">
            {title}
          </h1>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" sideOffset={-4} alignOffset={8} className="w-[236px] z-[60]">
        <DropdownMenuGroup>
          <DropdownMenuItem className="gap-2">
            <div className="flex h-4 w-4 items-center justify-center rounded text-xs font-medium bg-sidebar-primary text-sidebar-primary-foreground">
              C
            </div>
            <span className="flex-1">CEO Club</span>
            <HugeiconsIcon icon={Tick01Icon} size={16} color="currentColor" strokeWidth={1.5} absoluteStrokeWidth />
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2">
            <div className="flex h-4 w-4 items-center justify-center rounded text-xs font-medium bg-blue-500 text-white">
              A
            </div>
            <span>Another Workspace</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2">
            <HugeiconsIcon icon={PlusSignIcon} size={16} color="currentColor" strokeWidth={1.5} absoluteStrokeWidth />
            <span>Створити робочій простір</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem className="gap-2">
            <HugeiconsIcon icon={User02Icon} size={16} color="currentColor" strokeWidth={1.5} absoluteStrokeWidth />
            <span>Обліковий запис</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2">
            <HugeiconsIcon icon={Settings01Icon} size={16} color="currentColor" strokeWidth={1.5} absoluteStrokeWidth />
            <span>Робочий простір</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2">
            <HugeiconsIcon icon={Sun01Icon} size={16} color="currentColor" strokeWidth={1.5} absoluteStrokeWidth />
            <span className="flex-1">Вигляд</span>
            <span className="text-xs">→</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem className="gap-2 text-destructive">
            <HugeiconsIcon icon={Logout01Icon} size={16} color="currentColor" strokeWidth={1.5} absoluteStrokeWidth />
            <span>Вийти</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

WorkspaceMenu.displayName = "WorkspaceMenu"

export { WorkspaceMenu }
