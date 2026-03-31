import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Layout07Icon,
  SearchIcon,
  FilterIcon,
  FilterHorizontalIcon,
  ArrowUpDownIcon,
  PlusSignIcon,
} from "@hugeicons/core-free-icons"
import { ChevronDownIcon } from "@/icons/chevron-down-icon"
import { Button } from "../ui/button"
import {
  Toolbar as ToolbarPrimitive,
  ToolbarLeft,
  ToolbarRight,
} from "../ui/toolbar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu"
import {
  DEFAULT_VIEW_NAME,
  DEFAULT_VIEWS,
  FILTER_LABEL_UK,
  SORT_LABEL_UK,
  ADD_BUTTON_LABEL_UK,
} from "./constants"
import type { ViewToolbarProps } from "./types"

const ViewToolbar = React.forwardRef<HTMLDivElement, ViewToolbarProps>(
  (
    {
      viewName = DEFAULT_VIEW_NAME,
      views = DEFAULT_VIEWS,
      onViewChange,
      onSearch,
      onFilter,
      onSort,
      onColumnsClick,
      onAddClick,
    },
    ref
  ) => {
    const [selectedView, setSelectedView] = React.useState(viewName)

    const handleViewChange = (value: string) => {
      setSelectedView(value)
      onViewChange?.(value)
    }

    return (
      <ToolbarPrimitive ref={ref}>
        {/* Left: View Dropdown */}
        <ToolbarLeft>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="text-sm font-medium text-foreground max-w-fit truncate gap-2 py-1.5 h-auto border-[0.5px]"
              >
                <HugeiconsIcon icon={Layout07Icon} size={16} color="currentColor" strokeWidth={2} className="shrink-0" />
                <span className="truncate max-w-[60px] sm:max-w-none">{selectedView}</span>
                <ChevronDownIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {views.map((view) => (
                <DropdownMenuItem
                  key={view.value}
                  onClick={() => handleViewChange(view.label)}
                >
                  {view.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Search Button */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => onSearch?.("")}
            aria-label="Search"
            className="text-foreground border-[0.5px]"
          >
            <HugeiconsIcon icon={SearchIcon} size={16} color="currentColor" strokeWidth={2} />
          </Button>
        </ToolbarLeft>

        {/* Right: Filter, Sort, Columns, Add */}
        <ToolbarRight>
          {/* Filter Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="text-sm font-medium text-foreground"
              >
                <HugeiconsIcon icon={FilterIcon} size={16} color="currentColor" strokeWidth={2} className="shrink-0" />
                <span className="hidden md:inline">{FILTER_LABEL_UK}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={onFilter}>
                Add Filter
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Clear Filters</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Sort Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="text-sm font-medium text-foreground"
              >
                <HugeiconsIcon icon={ArrowUpDownIcon} size={16} color="currentColor" strokeWidth={2} className="shrink-0" />
                <span className="hidden md:inline">{SORT_LABEL_UK}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={onSort}>
                Sort A-Z
              </DropdownMenuItem>
              <DropdownMenuItem>Sort Z-A</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Clear Sort</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Columns Button */}
          <Button
            variant="outline"
            size="icon"
            onClick={onColumnsClick}
            aria-label="Columns"
            className="text-foreground"
          >
            <HugeiconsIcon icon={FilterHorizontalIcon} size={16} color="currentColor" strokeWidth={2} />
          </Button>

          {/* Add Button (Primary) */}
          <Button
            variant="default"
            className="text-sm font-medium text-primary-foreground md:px-2.5"
            onClick={onAddClick}
          >
            <HugeiconsIcon icon={PlusSignIcon} size={16} color="currentColor" strokeWidth={2} className="shrink-0" />
            <span className="hidden md:inline">{ADD_BUTTON_LABEL_UK}</span>
          </Button>
        </ToolbarRight>
      </ToolbarPrimitive>
    )
  }
)

ViewToolbar.displayName = "ViewToolbar"

export { ViewToolbar }
