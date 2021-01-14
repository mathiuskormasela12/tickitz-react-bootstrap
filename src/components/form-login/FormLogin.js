// Import all modules
import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';

// Import Context
import Context from '../../Context';

// Import components
import Separator from '../separator/Separator';

// Import bootstrap component
import { 
  Container,
  Col,
  Row,
  Form,
  Button,
  InputGroup,
  FormControl
} from 'react-bootstrap';

// import scss
import styled from './style.module.scss';

const { AppContext } = Context;

function FormLogin() {
  const state = useContext(AppContext);

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
                  <Form.Label className="mb-3">Email address</Form.Label>
                  <Form.Control type="email" className={`${styled.controlSize}`} placeholder="Write your email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword" className="mb-3">
                  <Form.Label className="mb-3">Password</Form.Label>
                  <InputGroup className="mb-3">
                    <FormControl
                      type={ state.show ? 'text' : 'password'}
                      className={`${styled.controlSize} ${styled.hideBorderLeft}`}
                      placeholder="Write your password"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                      <InputGroup.Text id="basic-addon2" className={`${styled.hideAppend}`}>
                        {
                          state.show ? (
                            <Fragment>
                              <div onClick={ () => state.showPassword()}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#5F2EEA" className={`bi bi-eye-slash ${styled.eye}`} viewBox="0 0 16 16">
                                  <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
                                  <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299l.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
                                  <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884l-12-12 .708-.708 12 12-.708.708z"/>
                                </svg>
                              </div>
                            </Fragment>
                          ) : (
                            <Fragment>
                              <div onClick={ () => state.showPassword()}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#A0A3BD" className={`bi bi-eye ${styled.eye}`} viewBox="0 0 16 16">
                                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                                </svg>
                              </div>     
                            </Fragment>
                          )
                        }
                      </InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>
                </Form.Group>
                <Button variant="primary" type="submit" className={`${styled.controlSize} w-100 mt-4`}>
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
              <Separator />
            </Col>
          </Row>
        </Container>
      </Col>
    </Fragment>
  );
}

export default FormLogin;