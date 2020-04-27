import React, { useState } from 'react';

import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from 'reactstrap';

import classnames from 'classnames';

import styles from './main.module.scss';

const navItems = [
  { displayText: 'Polling', href: '/poll' },
  { displayText: 'About', href: '/about' },
];

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const currentHref = window.location.href;

  return (
    <Navbar
      className={classnames('header bg-dark fixed-top', styles.menu)}
      dark
      expand="md"
    >
      <NavbarBrand className="mr-2" href="/">
        Hacker GIF Polling Platform
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar className="bg-dark">
        <Nav className="mr-auto" navbar>
          {navItems.map(({ displayText, href }) => (
            <NavItem className="ml-2 my-auto" key={href}>
              <NavLink href={href} active={currentHref.match(href) !== null}>
                {displayText}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Menu;
