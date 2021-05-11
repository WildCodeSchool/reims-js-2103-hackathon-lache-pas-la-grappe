import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
    <nav className="navbar">
  <div>
      <ul className="navbarLink">
        <li>
          <NavLink exact to="/" ClassName="navbarLinkItem">Vine</NavLink>
        </li>
        <li>
          <NavLink exact to="/plants" ClassName="navbarLinkItem">Plants</NavLink>
        </li>
        <li>
          <NavLink exact to="/map" ClassName="navbarLinkItem">Map</NavLink>
        </li>
      </ul>
     </div>
    </nav>
  )

  export default Navbar
