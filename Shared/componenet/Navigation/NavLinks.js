import React from 'react';
import { NavLink } from "react-router-dom";
import './NavLinks.css';
const NavLinks = () => {
    return (
      <ul className="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/u1/places">View resume</NavLink>
        </li>
        <li>
          <NavLink to="/places/new">Explore Projects</NavLink>
        </li>
        <li>
          <NavLink to="/Places/Contact">Get in touch </NavLink>
        </li>
      </ul>
    );
  };
export default NavLinks;