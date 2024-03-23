import { Outlet, Link } from "react-router-dom";
import '../styles/Navbar.css'
const Navbar = () => {
    return (
        <>
          <nav>
            
            <ul className="main-nav">
              <li className="main-title">
                <Link to="/" className="nav-link">HooBets</Link>
              </li>
              <li>
                <ul className="sub-nav">
                <Link to="/logout" className="nav-link">Logout</Link>
                <Link to="/register" className="nav-link">Register</Link>
                <Link to="/login" className="nav-link">Login</Link>
                </ul>
              </li>
              
            </ul>
          </nav>
    
          <Outlet />
        </>
      )
};

export default Navbar;