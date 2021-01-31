// Import all modules
import React, { Fragment } from 'react';

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

function FormReset() {

  return (
    <Fragment>
      <Col xl={4} lg={5} className={ `d-flex align-items-center` }>
        <Container className={ `${styled.container} py-5` }>
          <Row className={`justify-content-center ${styled.row}`}>
            <Col xl={10} lg={10}>
              <div className={`mb-5`}>
                <p className={`${styled.subtitle} text-break w-100`}>
                  Fill your additional details
                </p>
                <p className={`${styled.formSubtitle}`}>
                  we'll send a link to your email shortly
                </p>
              </div>
              <Form>
                <Form.Group controlId="formBasicEmail" className="mb-4">
                  <Form.Label className="mb-3">Email address</Form.Label>
                  <Form.Control type="email" className={`${styled.controlSize}`} placeholder="Write your email" />
                </Form.Group>
                <Button variant="primary" type="submit" className={`${styled.controlSize} w-100 mt-4`}>
                  Active now
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Col>
    </Fragment>
  );
}

export default FormReset;