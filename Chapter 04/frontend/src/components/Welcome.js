import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

function Welcome(){
  return(
    <Card className="mt-4" style={{backgroundColor: "#eee"}}>
      <Card.Body>This application retrieves images using the Unsplash API. To start, search a term in the input field</Card.Body>
      <Container className="pb-4">
        <Row>
          <Col xs={4} md={3} lg={2}>
            <Button variant="primary" href="https://unsplash.com/developers" target="_blank">Learn More</Button>
          </Col>
        </Row>
      </Container>
    </Card>
  )
}

export default Welcome
