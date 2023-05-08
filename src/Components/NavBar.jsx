import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo1 from "./images/logo1.jpg";
import logo2 from "./images/logo2.png";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <>
      <Navbar
        id="navbar"
        style={{
          display: "grid",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Container
          className="nav-container"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
          }}
        >
          <Navbar>
            <img
              style={{
                width: "10%",
                justifySelf: "start",
                alignSelf: "center",
              }}
              src={logo1}
              alt="logo"
            />
          </Navbar>
          <Navbar>
            <img
              style={{
                width: "50%",
                justifySelf: "start",
                alignSelf: "center",
              }}
              src={logo2}
              alt="logo"
            />
          </Navbar>
          <Navbar
            id="responsive-navbar-nav"
            style={{
              justifySelf: "end",
              alignSelf: "center",
            }}
          >
            <Nav>
              <Nav className="me-auto">
                <Nav.Link href="#navbar">Home</Nav.Link>
              </Nav>
              <Nav className="me-auto">
                <Nav.Link href="#services">Services</Nav.Link>
              </Nav>
              <Nav className="me-auto">
                <Nav.Link href="#hospitals">Hospitals</Nav.Link>
              </Nav>
              <Nav className="me-auto">
                <Nav.Link href="#contact">Contact Us</Nav.Link>
              </Nav>
            </Nav>
          </Navbar>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
