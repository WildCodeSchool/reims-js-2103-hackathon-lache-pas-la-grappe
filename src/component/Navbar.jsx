import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
      <ul className="navbar">
        <li>
          <NavLink exact to="/" className="navbarItem">Vine</NavLink>
        </li>
        <li>
          <NavLink exact to="/plants" className="navbarItem">Plants</NavLink>
        </li>
        <li>
          <NavLink exact to="/map" className="navbarItem">Map</NavLink>
        </li>
      </ul>
  )

  export default Navbar;
