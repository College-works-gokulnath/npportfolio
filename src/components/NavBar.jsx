import React from "react";
import { Link, Text } from "react-router-dom";

import styled from "styled-components";

const Nav = styled.div`
  width: 100%;
  height: 81px;
  /* background-color: #ffffff; */
  /* background-color: transparent; */
  background-color: #426bff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;

  
`;
const Logo = styled.div`
  width: 36px;
  height: 54px;

  background: url("Assets/logo.svg");
  box-shadow: rgba(0, 0, 0, 1);
  margin: 0 2rem;
`;

const NavList = styled.ul`
  display: flex;
  width: 40%;
  justify-content: space-evenly;
  align-items: center;
`;
const NavItem = styled.li`
  list-style-type: none;
  /* background-color: red; */
  color: white;
  /* color: #ffffff; */

  /* test  */

  font-family: "Inter";
      /* font-family: 'poppins'; */
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 24px;
  /* or 160% */
  cursor: pointer;
`;
const NavLinkStyle = {
  textDecoration: "none",
  color: "black",
};
function NavBar() {
  return (
    <Nav>
      <Logo>{/* <img src="Assets/logo.png" /> */}</Logo>
      <NavList>
      <NavItem>
          {" "}
          <Link style={NavLinkStyle} to="/gs">
            GOOGLE SCHOLAR
          </Link>
        </NavItem>
        <NavItem>
          {" "}
          <Link style={NavLinkStyle} to="/publications">
            PUBLICATIONS
          </Link>
        </NavItem>
        <NavItem>
          <Link style={NavLinkStyle} to="projects">
            PROJECTS
          </Link>
        </NavItem>
        <NavItem>
          <Link style={NavLinkStyle} to="/">
            ABOUT
          </Link>
        </NavItem>
        <NavItem>
          {" "}
          <Link style={NavLinkStyle} to="contact">
            CONTACT
          </Link>
        </NavItem>
      </NavList>
    </Nav>
  );
}

export default NavBar;
