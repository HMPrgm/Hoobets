import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";

const Navbar = ({isLoggedIn, username, handleLoggedIn}) => {
  
  return (
    <>
      <nav className="p-3 navbar navbar-expand-lg navbar-light bg-light justify-content-between">
        <a className="navbar-brand" href="/">HooBets</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul className="navbar-nav nav-light">
          {isLoggedIn ?
          <>
            <li className="nav-item active">
              <Link to="/logout" className="nav-link">Logout</Link>
            </li>
            <li>
              <Link to={"/profile/"+username} className="nav-link">Profile</Link>
            </li>
            </>

            :
            <>
              <li className="nav-item active">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
              <li className="nav-item active">
                <Link to="/register" className="nav-link">Register</Link>
              </li>
            </>
          }
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Navbar;