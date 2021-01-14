// Import all modules
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

// Import bootstrap component
import { 
  Container,
  Col,
  Row,
  Form,
  Button
} from 'react-bootstrap';

// import scss
import styled from './style.module.scss';

function FormLogin() {
  return (
    <Fragment>
      <Col lg={4} className={ `d-flex align-items-center` }>
        <Container>
          <Row className={`justify-content-center`}>
            <Col lg={10}>
              <div className={`mb-5`}>
                <h1 className={ `${styled.title} font-weight-bold` }>Sign In</h1>
                <p className={`${styled.subtitle} text-break w-100`}>
                  Sign in with your data that you entered during
                  your registration
                </p>
              </div>
              <Form>
                <Form.Group controlId="formBasicEmail" className="mb-4">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" size="lg" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword" className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" size="lg" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" size="lg" className="w-100">
                  Sign In
                </Button>
              </Form>
              <Row className="mt-4">
                <Col>
                  <p className={`${styled.formSubtitle} text-center`}>
                    Forgot your password? <Link to="/reset" className="text-primary">Reset now</Link>
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Col>
    </Fragment>
  );
}

export default FormLogin;