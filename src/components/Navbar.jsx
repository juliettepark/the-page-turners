import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
             <p className="website-title">The Page Turners</p>
            <ul className="nav-links">
                <li className="nav-button"><Link className="nav-button" to="/" key="library">Library</Link></li>
                <li className="nav-button"><Link className="nav-button" to="/newread" key="newread">New_Read</Link></li>
                {/* <li><Link to="/library" key="library">Library</Link></li> */}
            </ul>
        </nav>      
    );
}

export default Navbar;