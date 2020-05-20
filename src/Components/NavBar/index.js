import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Example = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="dark" dark>
        <NavbarBrand href="/" className="mr-auto">Disinfectant Duo</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/Home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Contactus/">Contact Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Checkitout">Check it out</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div> 
  );
}

export default Example;