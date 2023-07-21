import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import React from 'react';
import { useState } from 'react'; 


export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);
  // setLoggedIn((jwt) => !jwt);

  return (
    <Navbar className="bg-body-tertiary">
    <Container fluid className='px-4'>
      <Navbar.Brand href="#home">BrandName</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav className="me-auto">
          <Nav.Link href="/schedule">Schedule+Positions</Nav.Link>
          {/* <Nav.Link href="/schedule">My Schedule</Nav.Link> */}
          <Nav.Link href="/employees">Employees</Nav.Link>
          {/* If [isAdmin] show, otherwise don't */}
          <Nav.Link href="/messages">Messages</Nav.Link>
          <Nav.Link href="/account">Account</Nav.Link>

        </Nav>
        <Navbar.Text>
              Login/Logout
              {/* <a href="/login">{loggedIn ? 'Login' : 'Logout'}</a> */}
            </Navbar.Text>
      </Navbar.Collapse>
    </Container>
    </Navbar>
  );
}

//   isAdmin ? adminView() : userView();


