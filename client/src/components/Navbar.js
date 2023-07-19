import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { useState } from 'react'; 

const CollapsibleExample = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);
  setLoggedIn((jwt) => !jwt);

  function adminView() {
    return (
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">BrandName</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/schedule">Schedule+Positions</Nav.Link>
              <Nav.Link href="/employees">Employees</Nav.Link>
              <Nav.Link href="/Message">Messages</Nav.Link>
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  <a href="/login">{loggedIn ? 'Login' : 'Logout'}</a>
                </Navbar.Text>
              </Navbar.Collapse>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  function userView() {
    return (
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">BrandName</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/schedule">My Schedule</Nav.Link>
            <Nav.Link href="/employees">Messages</Nav.Link>
            <Nav.Link href="/Message">Account</Nav.Link>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
              <a href="/login">{loggedIn ? 'Login' : 'Logout'}</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  }

  isAdmin ? adminView() : userView();
}

export default CollapsibleExample;

