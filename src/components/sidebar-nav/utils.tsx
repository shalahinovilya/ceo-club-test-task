import { Home, Bell, CheckSquare2, BarChart3, Clock } from "lucide-react"

export function getIconByType(iconType: string) {
  switch (iconType) {
    case "home":
      return <Home className="h-4 w-4" />
    case "bell":
      return <Bell className="h-4 w-4" />
    case "checkSquare":
      return <CheckSquare2 className="h-4 w-4" />
    case "barChart":
      return <BarChart3 className="h-4 w-4" />
    case "clock":
      return <Clock className="h-4 w-4" />
    default:
      return null
  }
}
