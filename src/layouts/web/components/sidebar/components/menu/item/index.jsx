import classNames from "classnames"
import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"

export default function MenuItem({ item }){
   return(
    <NavLink 
    to={item.path}
    key={key}
    className={({isActive}) => classNames("px-3 h-9 flex items-center rounded text-15 font-medium",{
    "text-zinc-800": !isActive,
    "bg-zinc-100":isActive
    })}
    >
    {item.title}
</NavLink>
   )
}

MenuItem.PropTypes = {
    items:{
        path:PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    }
}