import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Search = ({word, updWord, searchFunc}) =>{
  return(
    <Form className="mt-4" onSubmit={searchFunc}>
      <Container>
        <Row className="justify-content-center">
          <Col md={9}>
            <Row>
              <Col xs={9}>
                <Form.Control  
                  type="text"
                  value={word}
                  onChange={(e)=>{updWord(e.target.value)}}
                  placeholder="Search for new image... " />
              </Col>
              <Col>
                <Button variant="primary" type="submit">
                  Search
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Form>
  );
}

export default Search
