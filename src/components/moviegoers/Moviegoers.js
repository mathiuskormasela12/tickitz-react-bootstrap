// import all modules
import React, { Fragment } from 'react';

// Import react bootstrap components
import { 
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  FormControl
} from 'react-bootstrap';

// import scss
import styled from './style.module.scss';

export function MovieGoers() {
  return (
    <Fragment>
      <div className={`${styled.hero} py-5 mt-5`}>
        <Container>
          <Card className={`${styled.card}`}>
            <Card.Body>
              <Row className="text-center mb-2">
                <Col lg={12}>
                  <h5 className="mb-3">
                    Be the vanguard of the
                  </h5>
                  <h2 className="text-primary font-weight-bold"> 
                    Moviegoers
                  </h2>
                </Col>
              </Row>
              <Row className="mt-4 justify-content-center text-center">
                <Col lg={12} xs={8} className="d-flex justify-content-center text-center">
                  <Form inline className="d-flex justify-content-center d-lg-inline">
                    <FormControl type="text" placeholder="Type your email" className={`mr-sm-2 ${styled.input}`} />
                    <Button type="submit" className={`${styled.btn} ml-2 mt-4 mt-lg-0`}>Join Now</Button>
                  </Form>
                </Col>
              </Row>
              <Row className="justify-content-center mt-5">
                <Col lg={4} className="text-center">
                  <p>
                    By joining you as a Tickitz member,
                    we will always send you the latest updates via email .
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </Fragment>
  );
}