import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";

function NavigationBar() {
  return (
    <>
      <Row>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">
            <img
              className="logo"
              src="/Logo.png"
              alt="Logo of my Portfolio"
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/"></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Row>
    </>
  );
}

export default NavigationBar;
