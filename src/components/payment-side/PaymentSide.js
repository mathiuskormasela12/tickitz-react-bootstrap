// import all modules
import React, { Fragment } from 'react';
import warning from '../../assets/images/warning.svg';

// Import react bootstrap components
import { 
  Form,
  Card,
  Container,
  InputGroup,
  FormControl,
  Image,
  Alert
} from 'react-bootstrap';

// import scss
import styled from './style.module.scss';

export function PaymentSide() {
  return (
    <Fragment>
      <aside className={styled.aside}>
        <h3 className="mb-4">Personal Info</h3>
        <Card className={`${styled.card} w-100 h-100 pt-3 bg-light`}>
          <Card.Body>
            <Container className="px-2" fluid>
              <Form>
                <div className="mb-3">
                  <Form.Label htmlFor="fullname">Full Name</Form.Label>
                  <Form.Control type="text" id="fullname"/>
                </div>
                <div className="mb-3">
                  <Form.Label htmlFor="email" className="text-muted">Email</Form.Label>
                  <Form.Control type="email" id="email"/>
                </div>
                <div className="mb-3">
                  <Form.Label htmlFor="phonenumber">
                    Phone Number
                  </Form.Label>
                  <InputGroup className="mb-2">
                    <InputGroup.Prepend>
                      <InputGroup.Text>+62</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl id="phonenumber" />
                  </InputGroup>
                </div>
              </Form>
              <Alert variant="warning" className="mt-4 d-flex align-items-center">
                <Image fluid className="mr-4" src={ warning } alt="Warning" />
                Fill your data correctly.
              </Alert>
            </Container>
          </Card.Body>
        </Card>
      </aside>
    </Fragment>
  )
}