import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Container className="container">
          <Navbar.Brand href="/">
            <img
              style={{
                width: "50%",
                justifySelf: "start",
                alignSelf: "center",
              }}
              src=""
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Brand href="/">
            <img
              style={{
                width: "50%",
                justifySelf: "center",
                alignSelf: "center",
              }}
              src=""
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav className="me-auto">
                <Nav.Link href="" className="shipments">
                  Home
                </Nav.Link>
              </Nav>
              <Nav className="me-auto">
                <Nav.Link href="" className="shipments">
                  Services
                </Nav.Link>
              </Nav>
              <Nav className="me-auto">
                <Nav.Link href="" className="shipments">
                  Hospitals
                </Nav.Link>
              </Nav>
              <Nav className="me-auto">
                <Nav.Link href="" className="shipments">
                  Contact Us
                </Nav.Link>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
