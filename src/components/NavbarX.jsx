import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarX = () => {
  return ( 
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" >
      <Container>
        <Navbar.Brand href="#" className="nav-link">backtest-X</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" className="nav-link">Dashboard</Nav.Link>
            <Nav.Link href="#" className="nav-link">Social</Nav.Link>
            <Nav.Link href="#" className="nav-link">Search</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#" className="nav-link nav-account">Login</Nav.Link>
            <Nav.Link href="#" className="nav-link nav-account">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   );
}
 
export default NavbarX;