import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
  const {user, logOut} = useAuth();
    return (
        <>
  <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
    <Container>
    <Navbar.Brand href="#home">G.C.M</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
      <Nav.Link as={Link} to="/home#services">Services</Nav.Link>
      <Nav.Link as={Link} to="/home#exparts">Exparts</Nav.Link>
      {user?.email?
        <Button onClick={logOut} variant="success">Logout</Button> :
        <Nav.Link as={Link} to="/login">Login</Nav.Link>
      }
    </Nav>
    <Navbar.Toggle />
    <Navbar.Text>
        Signed in as: <a href="#login">{user?.di}</a>
      </Navbar.Text>
    </Container>
  </Navbar>
 
</>
    );
};

export default Header;