import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function ProjectCards() {
  return (
    <>
      <h1 className="projects__title">Projects</h1>
      <Container className="projects__container">
        <Row>
          <Col>
            <Card style={{ width: "18rem", height: "450px" }}>
              <Card.Img variant="top" src="/JSFCA.png" />
              <Card.Body>
                <Card.Title>Gameview from API</Card.Title>
                <Card.Text>
                  This project was made for the sole purpose of practicing
                  creating a axios login form with the npm package yup for
                  validation and react hook form. And using a fetch get request
                  to get games from the api url.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/Advancedhd/Viewgame-info-API/"
                  target="_blank"
                >
                  Github
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem", height: "450px" }}>
              <Card.Img variant="top" src="/NordicShoeStore.png" />
              <Card.Body>
                <Card.Title>NordicShoeStore</Card.Title>
                <Card.Text>
                  The site is made using HTML for viewing, JS for functionality,
                  sass for styling. The clients can view and shop for shoes. The
                  admin of the page can POST/DELETE/PUT shoes into the Strapi
                  headless CMS it uses.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/Advancedhd/nordic-shoe-store"
                  target="_blank"
                >
                  Github
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem", height: "450px" }}>
              <Card.Img variant="top" src="/Holidaze.png" />
              <Card.Body>
                <Card.Title>Holidaze</Card.Title>
                <Card.Text>
                  The project Holidaze is a website that tries to deliver
                  housing to people around a certain area. It has Login
                  functionality. Uses Strapi as headless CMS. ADD/POST/DELETE if
                  you are admin and logged in.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/Advancedhd/Project-Holidaze"
                  target="_blank"
                >
                  Github
                </Button>
                <Button
                  className="site__button"
                  variant="primary"
                  href="https://dazzling-dango-a74766.netlify.app/"
                  target="_blank"
                >
                  Site
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProjectCards;
