import { Header } from "./components/header"
import { SidebarNav } from "./components/sidebar-nav"
import { ViewToolbar } from "./components/view-toolbar"
import { EmptyState } from "./components/empty-state"
import { SidebarProvider, SidebarInset } from "./components/ui/sidebar"
import { HugeiconsIcon } from "@hugeicons/react"
import { Blockchain01Icon } from "@hugeicons/core-free-icons"

function App() {
  return (
    <SidebarProvider>
      <SidebarNav onHelpClick={() => console.log("Help clicked")} />
      <SidebarInset>
        {/* Header */}
        <Header
          breadcrumbs={[
            {
              icon: <HugeiconsIcon icon={Blockchain01Icon} size={16} color="currentColor" strokeWidth={1.5} absoluteStrokeWidth />,
              label: "Object name",
            },
          ]}
          onMessageClick={() => console.log("Messages clicked")}
          onHelpClick={() => console.log("Help clicked")}
          onAIAssistantClick={() => console.log("AI Assistant clicked")}
        />

        {/* Toolbar */}
        <ViewToolbar
          viewName="View name"
          onViewChange={(view) => console.log("View changed:", view)}
          onSearch={(query) => console.log("Search:", query)}
          onFilter={() => console.log("Filter clicked")}
          onSort={() => console.log("Sort clicked")}
          onColumnsClick={() => console.log("Columns clicked")}
          onAddClick={() => console.log("Add clicked")}
        />

        {/* Content Area */}
        <div className="flex-1 overflow-auto">
          <EmptyState onButtonClick={() => console.log("Add clicked")} />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default App
