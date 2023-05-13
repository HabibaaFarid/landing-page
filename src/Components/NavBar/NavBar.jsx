import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo1 from "../images/logo1.jpg";
import logo2 from "../images/logo2.png";
import "./NavBar.scss";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <Navbar className="main-navbar">
      <Container className="nav-container">
        <Navbar>
          <img
            src={logo1}
            alt="logo"
            className="navbar-logo1"
            onClick={() => navigate("/")}
          />
        </Navbar>
        <Navbar>
          <img src={logo2} alt="logo" className="navbar-logo2"onClick={() => navigate("/")} />
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
              <Nav.Link
                onClick={() => {
                  window.location.pathname.includes("hospitals")
                    ? window.location.replace("/#services")
                    : window.location.replace("#services");
                }}
              >
                Services
              </Nav.Link>
            </Nav>
            <Nav className="me-auto">
              <Nav.Link onClick={() => window.location.replace("/hospitals")}>
                Hospitals
              </Nav.Link>
            </Nav>
            <Nav className="me-auto">
              <Nav.Link href="#contact">Contact Us</Nav.Link>
            </Nav>
          </Nav>
        </Navbar>
      </Container>
    </Navbar>
  );
};

export default NavBar;
