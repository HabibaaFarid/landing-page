import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo1 from "./images/logo1.jpg";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Container className="nav-container">
          <Navbar.Brand href="/">
            <img
              style={{
                width: "10%",
                justifySelf: "start",
                alignSelf: "center",
              }}
              src={logo1}
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
          <Navbar
            id="responsive-navbar-nav"
            style={{
              justifySelf: "end",
              alignSelf: "center",
            }}
          >
            <Nav>
              <Nav className="me-auto">
                <Nav.Link href="">Home</Nav.Link>
              </Nav>
              <Nav className="me-auto">
                <Nav.Link href="">Services</Nav.Link>
              </Nav>
              <Nav className="me-auto">
                <Nav.Link href="">Hospitals</Nav.Link>
              </Nav>
              <Nav className="me-auto">
                <Nav.Link href="">Contact Us</Nav.Link>
              </Nav>
            </Nav>
          </Navbar>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
