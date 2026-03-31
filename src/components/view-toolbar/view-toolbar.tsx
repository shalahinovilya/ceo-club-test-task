import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Layout07Icon,
  SearchIcon,
  FilterIcon,
  FilterHorizontalIcon,
  ArrowUpDownIcon,
  PlusSignIcon,
  EyeIcon,
  Layers01Icon,
  Download01Icon,
  Database01Icon,
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
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxItem,
} from "../ui/combobox"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet"
import { useIsMobile } from "@/hooks/use-mobile"
import {
  DEFAULT_VIEW_NAME,
  DEFAULT_VIEWS,
  DEFAULT_ATTRIBUTES,
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
    const isMobile = useIsMobile()
    const [selectedView, setSelectedView] = React.useState(viewName)
    const [visibleAttributes, setVisibleAttributes] = React.useState<string[]>(
      DEFAULT_ATTRIBUTES.map((a) => a.value)
    )
    const [attributesSheetOpen, setAttributesSheetOpen] = React.useState(false)

    const handleViewChange = (value: string) => {
      setSelectedView(value)
      onViewChange?.(value)
    }


    return (
      <>
      <ToolbarPrimitive ref={ref}>
        {/* Left: View Dropdown */}
        <ToolbarLeft>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="text-sm font-medium text-foreground max-w-fit truncate gap-2 py-1.5 h-auto border-[0.5px]"
              >
                <HugeiconsIcon icon={Layout07Icon} size={16} color="currentColor" strokeWidth={1.5} absoluteStrokeWidth className="shrink-0 text-muted-foreground" />
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
            <HugeiconsIcon icon={SearchIcon} size={16} color="currentColor" strokeWidth={1.5} absoluteStrokeWidth className="text-muted-foreground" />
          </Button>
        </ToolbarLeft>

        {/* Right: Filter, Sort, Columns, Add */}
        <ToolbarRight>
          {/* Filter Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="text-sm font-medium text-foreground border-[0.5px] w-8 md:w-auto"
              >
                <HugeiconsIcon icon={FilterIcon} size={16} color="currentColor" strokeWidth={1.5} absoluteStrokeWidth className="shrink-0 text-muted-foreground" />
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
                className="text-sm font-medium text-foreground border-[0.5px] w-8 md:w-auto"
              >
                <HugeiconsIcon icon={ArrowUpDownIcon} size={16} color="currentColor" strokeWidth={1.5} absoluteStrokeWidth className="shrink-0 text-muted-foreground" />
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

          {/* Columns Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                aria-label="Columns"
                className="text-muted-foreground border-[0.5px]"
              >
                <HugeiconsIcon icon={FilterHorizontalIcon} size={16} color="currentColor" strokeWidth={1.5} absoluteStrokeWidth />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-44">
              <DropdownMenuGroup>
                {isMobile ? (
                  <DropdownMenuItem onClick={() => setAttributesSheetOpen(true)} className="gap-2">
                    <HugeiconsIcon icon={EyeIcon} size={16} color="currentColor" strokeWidth={1.5} absoluteStrokeWidth className="text-muted-foreground shrink-0" />
                    <span>Видимі атрибути</span>
                  </DropdownMenuItem>
                ) : (
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger className="gap-2">
                      <HugeiconsIcon icon={EyeIcon} size={16} color="currentColor" strokeWidth={1.5} absoluteStrokeWidth className="text-muted-foreground shrink-0" />
                      <span>Видимі атрибути</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent className="p-0 w-[237px]">
                      <Combobox
                        multiple
                        value={visibleAttributes}
                        onValueChange={setVisibleAttributes}
                      >
                        <div className="p-1">
                          <ComboboxInput
                            placeholder="Пошук..."
                            showClear={false}
                            showTrigger={false}
                            className="w-full !border-[0.5px] !border-ring !bg-input/30 rounded-lg has-[[data-slot=input-group-control]:focus-visible]:!ring-3 has-[[data-slot=input-group-control]:focus-visible]:!ring-ring/50 has-[[data-slot=input-group-control]:focus-visible]:!border-ring"
                          />
                        </div>
                        <ComboboxList className="px-1 pb-1 max-h-48 overflow-y-auto">
                          {DEFAULT_ATTRIBUTES.map((attr) => (
                            <ComboboxItem
                              key={attr.value}
                              value={attr.value}
                              className="h-7 max-h-7 py-1 pl-2.5 pr-8 gap-1.5"
                            >
                              <HugeiconsIcon icon={Database01Icon} size={16} color="currentColor" strokeWidth={1.5} absoluteStrokeWidth className="text-muted-foreground shrink-0" />
                              {attr.label}
                            </ComboboxItem>
                          ))}
                        </ComboboxList>
                      </Combobox>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                )}
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="gap-2">
                    <HugeiconsIcon icon={Layers01Icon} size={16} color="currentColor" strokeWidth={1.5} absoluteStrokeWidth className="text-muted-foreground shrink-0" />
                    <span>Групувати за</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>Поле 1</DropdownMenuItem>
                    <DropdownMenuItem>Поле 2</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem className="gap-2" onClick={onColumnsClick}>
                  <HugeiconsIcon icon={Download01Icon} size={16} color="currentColor" strokeWidth={1.5} absoluteStrokeWidth className="text-muted-foreground shrink-0" />
                  <span>Експорт</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Add Button (Primary) */}
          <Button
            variant="default"
            className="text-sm font-medium text-primary-foreground md:px-2.5 cursor-pointer w-8 md:w-auto"
            onClick={onAddClick}
          >
            <HugeiconsIcon icon={PlusSignIcon} size={16} color="currentColor" strokeWidth={1.5} absoluteStrokeWidth className="shrink-0" />
            <span className="hidden md:inline">{ADD_BUTTON_LABEL_UK}</span>
          </Button>
        </ToolbarRight>
      </ToolbarPrimitive>

      {/* Attributes Sheet (Mobile Only) */}
      <Sheet open={attributesSheetOpen} onOpenChange={setAttributesSheetOpen}>
        <SheetContent side="bottom" className="h-[80vh]">
          <SheetHeader>
            <SheetTitle>Видимі атрибути</SheetTitle>
          </SheetHeader>
          <div className="mt-4">
            <Combobox
              multiple
              value={visibleAttributes}
              onValueChange={setVisibleAttributes}
            >
              <div className="mb-3">
                <ComboboxInput
                  placeholder="Пошук..."
                  showClear={false}
                  showTrigger={false}
                  className="w-full !border-[0.5px] !border-ring !bg-input/30 rounded-lg has-[[data-slot=input-group-control]:focus-visible]:!ring-3 has-[[data-slot=input-group-control]:focus-visible]:!ring-ring/50 has-[[data-slot=input-group-control]:focus-visible]:!border-ring"
                />
              </div>
              <ComboboxList className="max-h-[calc(80vh-150px)] overflow-y-auto">
                {DEFAULT_ATTRIBUTES.map((attr) => (
                  <ComboboxItem
                    key={attr.value}
                    value={attr.value}
                    className="h-7 max-h-7 py-1 pl-2.5 pr-8 gap-1.5"
                  >
                    <HugeiconsIcon icon={Database01Icon} size={16} color="currentColor" strokeWidth={1.5} absoluteStrokeWidth className="text-muted-foreground shrink-0" />
                    {attr.label}
                  </ComboboxItem>
                ))}
              </ComboboxList>
            </Combobox>
          </div>
        </SheetContent>
      </Sheet>
      </>
    )
  }
)

ViewToolbar.displayName = "ViewToolbar"

export { ViewToolbar }
