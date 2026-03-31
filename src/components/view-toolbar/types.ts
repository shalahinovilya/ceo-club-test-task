export interface ViewOption {
  label: string
  value: string
}

export interface ViewToolbarProps {
  viewName?: string
  views?: ViewOption[]
  onViewChange?: (view: string) => void
  onSearch?: (query: string) => void
  onFilter?: () => void
  onSort?: () => void
  onColumnsClick?: () => void
  onAddClick?: () => void
}
