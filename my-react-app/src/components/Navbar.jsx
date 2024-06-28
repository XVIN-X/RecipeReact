import { Link, useLocation } from "react-router-dom";

import { useState } from "react";
import Sidebar from "./Sidebar";

function Navbar() {
    const [showSidebar, setshowSidebar] = useState(false);
    const location = useLocation();
    const links = [
        {
            name:"Home",
            path:"/",
            icon:<i class="fa fa-home"></i>
        },
        {
            name:"Recipes",
            path:"/recipes",
            icon:<i class="fa fa-list"></i>
        },
        {
            name:"Settings",
            path:"/settings",
            icon:<i class="fa fa-cog"></i>
        }
    ]

    function closeSidebar(){
        setshowSidebar(false);
    }

    return <>
        <div className="navbar container">
            <Link to={"/"} className="logo">C<span>oo</span>K B<span>oo</span>K</Link>
            <div className="nav-links">
                {links.map(link => (
                    <Link to={link.path} className={location.pathname === link.path? "active": ""} key={link.name}>{link.name}</Link>
                ))}
            </div>
            <div onClick={() => setshowSidebar(!showSidebar)} className={showSidebar ? "sidebarBtn active" : "sidebarBtn"}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </div>
        {showSidebar && <Sidebar close={closeSidebar} links={links}/>}
    </>
}

export default Navbar