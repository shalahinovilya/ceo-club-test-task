import type { ViewOption } from "./types"

export const DEFAULT_VIEW_NAME = "View name"

export const DEFAULT_VIEWS: ViewOption[] = [
  { label: "Grid", value: "grid" },
  { label: "Table", value: "table" },
  { label: "Kanban", value: "kanban" },
]

export const DEFAULT_ATTRIBUTES = [
  { label: "Назва", value: "name" },
  { label: "Статус", value: "status" },
  { label: "Пріоритет", value: "priority" },
  { label: "Виконавець", value: "assignee" },
  { label: "Дедлайн", value: "deadline" },
  { label: "Теги", value: "tags" },
  { label: "Опис", value: "description" },
]

export const FILTER_LABEL_UK = "Фільтр"
export const SORT_LABEL_UK = "Сортування"
export const ADD_BUTTON_LABEL_UK = "Додати"
