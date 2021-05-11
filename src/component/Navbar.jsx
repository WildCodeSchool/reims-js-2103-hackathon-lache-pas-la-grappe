import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
    <nav className="navbar">
  <div>
      <ul className="navbarLink">
        <li>
          <NavLink exact to="/" className="navbarLinkItem">Vine</NavLink>
        </li>
        <li>
          <NavLink exact to="/plants" className="navbarLinkItem">Plants</NavLink>
        </li>
        <li>
          <NavLink exact to="/map" className="navbarLinkItem">Map</NavLink>
        </li>
      </ul>
     </div>
    </nav>
  )

  export default Navbar;
