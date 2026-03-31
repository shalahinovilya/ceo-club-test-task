import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  UserIcon,
  Settings01Icon,
  Sun03Icon,
  Logout01Icon,
  PlusSignIcon,
  Tick02Icon,
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
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

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
      <DropdownMenuContent align="start" sideOffset={isMobile ? 4 : -4} alignOffset={8} className="w-[236px] z-[60]">
        <DropdownMenuGroup>
          <DropdownMenuItem className="gap-2">
            <div className="flex h-4 w-4 items-center justify-center rounded text-xs font-medium bg-sidebar-primary text-sidebar-primary-foreground">
              C
            </div>
            <span className="flex-1">CEO Club</span>
            <HugeiconsIcon icon={Tick02Icon} size={16} color="currentColor" strokeWidth={1.5} absoluteStrokeWidth className="text-muted-foreground" />
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2">
            <div className="flex h-4 w-4 items-center justify-center rounded text-xs font-medium bg-blue-500 text-white">
              A
            </div>
            <span>Another Workspace</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2">
            <HugeiconsIcon icon={PlusSignIcon} size={16} color="currentColor" strokeWidth={1.5} absoluteStrokeWidth className="text-muted-foreground" />
            <span>Створити робочій простір</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem className="gap-2">
            <HugeiconsIcon icon={UserIcon} size={16} color="currentColor" strokeWidth={1.5} absoluteStrokeWidth className="text-muted-foreground" />
            <span>Обліковий запис</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2">
            <HugeiconsIcon icon={Settings01Icon} size={16} color="currentColor" strokeWidth={1.5} absoluteStrokeWidth className="text-muted-foreground" />
            <span>Робочий простір</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2">
            <HugeiconsIcon icon={Sun03Icon} size={16} color="currentColor" strokeWidth={1.5} absoluteStrokeWidth className="text-muted-foreground" />
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
