import { useSidebarType } from "~/stores/app/hooks"
import AppMenu from "./menu/app"

export default function Sidebar() {

  const type = useSidebarType()

  return (
    <aside className="w-[250px] border-r border-zinc-200 h-[calc(100vh-3.5rem)] fixed top-[3.5rem] p-2 flex flex-col overflow-auto">
     {type === 'app' && <AppMenu />}
    </aside>
  )
}
