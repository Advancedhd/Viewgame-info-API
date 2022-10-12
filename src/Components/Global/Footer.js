import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function footer() {
  return (
    <div className="container footercontainer">
      <Row className="d-block d-md-none">
        <Col className="footer__icons__mobile">
          <a
            href="https://github.com/Advancedhd"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-github fa-2x icons "></i>
          </a>
          <a
            href="https://www.facebook.com/hakonhv"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook-f fa-2x icons"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/h%C3%A5kon-volden-019054b4/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin-in fa-2x icons"></i>
          </a>
        </Col>
      </Row>
      <Row>
        <Col className="d-sm-none d-md-block footericons">
          <a
            href="https://github.com/Advancedhd"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github fa-2x icons "></i>
          </a>
          <a
            href="https://www.facebook.com/hakonhv"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook-f fa-2x icons"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/h%C3%A5kon-volden-019054b4/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin-in fa-2x icons"></i>
          </a>
        </Col>
        <Col className="footeremail">hakon.volden@gmail.com</Col>
        <Col className="footercp">Copyright 2022</Col>
      </Row>
    </div>
  );
}

export default footer;
