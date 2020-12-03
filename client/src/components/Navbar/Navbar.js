import React from 'react';
import Nav from 'react-bootstrap/Nav';

import './Navbar.css'


const Navbar = () => {
    return(
      <Nav className="justify-content-end navBar" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home" className="navItem">¿Por qué existe?</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/" className="navItem">Forma parte de la solución</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/" className="navItem">Contáctanos</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/" className="navItem">Equipo</Nav.Link>
        </Nav.Item>
    </Nav>
    )
}

export default Navbar;

//When you click on a link created with react-router-hash-link it will scroll to the element on the page with the id that matches the #hash-fragment in the link.
