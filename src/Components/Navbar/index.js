import React from 'react'
import {Nav, NavLink, Bars, NavMenu} from './navbar-style'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/about-a" activeStyle>
            Git
          </NavLink>
          <NavLink to="/about-b" activeStyle>
            About
          </NavLink>
          <NavLink to="/about-c" activeStyle>
            About
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
}

export default Navbar