import { Outlet, Link } from "react-router-dom";

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
                <Link to="/profile" className="nav-link">Profile</Link>
                </ul>
              </li>
            </ul>
          </nav>
    
          <Outlet />
        </>
      )
};

export default Navbar;