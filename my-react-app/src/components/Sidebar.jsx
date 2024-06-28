import { Link, useLocation } from "react-router-dom";

function Sidebar({ close, links }) {
    const location = useLocation();
    return <div className="sidebar" onClick={close}>
        {links.map(link => (
            <Link to={link.path} className={location.pathname === link.path? "sidebar-links active": "sidebar-links"} key={link.name}>
                {link.icon}{link.name}
            </Link>
        ))}
    </div>
}

export default Sidebar;