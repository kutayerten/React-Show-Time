import PropTypes from "prop-types"

export default function SidebarMenu({menu}){
    return(
        <nav className="grid gap-y-1">
            {menu.map((item, key) => (
                <MenuItem item={item} key={key} />
            ))}
        </nav>
    )
}

SidebarMenu.propTypes = {
    menu: PropTypes.array
}