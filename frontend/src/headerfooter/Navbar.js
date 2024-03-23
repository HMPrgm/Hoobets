import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
          <nav>
            
            <ul className="main-nav">
              <li className="main-title">
                <Link to="/">HooBets</Link>
              </li>
              <li>
                <ul className="sub-nav">
                <Link to="/profile">Profile</Link>
                </ul>
              </li>
            </ul>
          </nav>
    
          <Outlet />
        </>
      )
};

export default Navbar;