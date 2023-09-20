import classNames from "classnames"
import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"

export default function MenuItem({ item }){


    
   return(
    <NavLink 
    to={item.path}
    onClick={item?.onClick}
    className={({isActive}) => classNames("px-3 h-9 flex dark:hover:bg-zinc-50/20 hover:bg-zinc-100 items-center rounded text-15 font-medium transition-colors",{
    "text-zinc-800 dark:text-zinc-400 ": !isActive,
    "text-red-600": item?.sensitive,
    "bg-zinc-100 text-primary dark:bg-blue-500/20 dark:text-white": (isActive && item?.path)
    })}
    >
        {item.title}
        {item.new && (
            <span className="text-[11px] ml-auto bg-red-600 text-white py-0.5 px-2.5 rounded">YENI</span>
        )}
    </NavLink>
   )
}

MenuItem.propTypes = {
    item: PropTypes.shape({
        path:PropTypes.string,
        title: PropTypes.string.isRequired,
        new: PropTypes.bool,
        sensitive: PropTypes.bool,
        onClick: PropTypes.func
    })
}

MenuItem.defaultProps = {
    new: false
}