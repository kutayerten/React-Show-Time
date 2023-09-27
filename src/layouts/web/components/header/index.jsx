import { useBreakpoint } from "~/hooks/use-breakpoint";
import Auth from "./auth";
import Logo from "./logo";
import Search from "./search";

import {HiMenuAlt2} from 'react-icons/hi'
import { setSidebarVisibility } from "~/stores/app/actions";
import { useSidebarVisibility } from "~/stores/app/hooks";
import Sidebar from "../sidebar";

export default function Header() {

  const sidebarVisibility = useSidebarVisibility()
  const {breakpoint} = useBreakpoint()

  return (
    <header className="h-14 w-full  dark:bg-zinc-900 dark:border-zinc-700 border-b border-zinc-200 transition-colors flex items-center px-4 justify-between fixed top-0 left-0 bg-white z-10">
     {breakpoint !== 'desktop' && (
      <button
      onClick={() => {
        setSidebarVisibility(!sidebarVisibility)
      }}
      >
        <HiMenuAlt2 size={24}
        className="text-black dark:text-white"
        />
      </button>
     )}
      <Logo />
      {breakpoint === 'desktop' &&(
      <Search />
      )}
      <Auth />
    </header>
  )
}
