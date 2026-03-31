import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  UserIcon,
  Settings01Icon,
  Sun03Icon,
  Logout01Icon,
  PlusSignIcon,
  Tick02Icon,
  ArrowRight01Icon,
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
          className="flex w-full items-center gap-2 overflow-hidden rounded-md px-2 hover:bg-muted transition-[width,padding] text-left text-sm outline-none group-data-[collapsible=icon]:w-8 group-data-[collapsible=icon]:px-0 group-data-[collapsible=icon]:justify-center"
        >
          {logo ? (
            <div className="shrink-0">{logo}</div>
          ) : (
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sidebar-primary font-normal text-sidebar-primary-foreground shrink-0">
              {initials}
            </div>
          )}
          <h1 className="flex-1 truncate font-medium text-foreground transition-[margin,opacity] duration-200 group-data-[collapsible=icon]:-ml-8 group-data-[collapsible=icon]:opacity-0">
            {title}
          </h1>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" sideOffset={isMobile ? 4 : 4} alignOffset={8} className="w-[236px] z-[60]">
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
            <HugeiconsIcon icon={ArrowRight01Icon} size={16} color="currentColor" strokeWidth={1.5} absoluteStrokeWidth className="text-muted-foreground shrink-0" />
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
