import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const AppNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <Navbar bg="warning" expand="lg">
      <Container>
        <Navbar.Brand href="/products" className="mr-auto" style={{ color: 'white' }}>
          AvaloZe
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={toggleNav}
        >
          {isNavOpen ? 'X' : <div>&#9776;</div>}
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav" className={`flex-column ${isNavOpen ? 'show' : ''}`}>
          <Nav className="ml-auto">
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link type="button" className="--btn" href="/log-in" style={{ color: 'white' }}>
              Log In
            </Nav.Link>
            <Nav.Link href="/sign-up">Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Nav className="ml-auto">
          <Nav.Link href="#cart" style={{ color: 'white', fontSize: '20px' }}>
            🛒Cart
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
