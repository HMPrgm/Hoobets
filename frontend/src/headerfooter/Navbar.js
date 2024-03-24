import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
  <nav class="p-3 navbar navbar-expand-lg navbar-light bg-light justify-content-between">
    <a class="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      <ul class="navbar-nav nav-light">
        <li class="nav-item active">
        <Link to="/" className="nav-link">HooBets</Link>
        </li>
        <li class="nav-item active">
        <Link to="/logout" className="nav-link">Logout</Link>
        </li>
        <li class="nav-item active">
        <Link to="/register" className="nav-link">Register</Link>
        </li>
        <li class="nav-item active">
        <Link to="/login" className="nav-link">Login</Link>
        </li>
      </ul>
  </nav>
          <Outlet />
        </>
      )
};

export default Navbar;