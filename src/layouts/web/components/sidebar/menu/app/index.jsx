import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { SIDEBAR_MENU } from "~/utils/consts/sidebar";

export default function AppMenu(){
    return(
        <nav className="grid gap-y-1 ">
            {SIDEBAR_MENU.map((menu, key) => (
                <NavLink 
                to={menu.path}
                 key={key}
                 className={({isActive}) => classNames("px-3 h-9 flex items-center rounded text-15 font-medium",{
                    "text-zinc-800": !isActive,
                    "bg-zinc-100":isActive
                 })}
                 >
                    {menu.title}
                </NavLink>
            ))}
        </nav>
    )
}