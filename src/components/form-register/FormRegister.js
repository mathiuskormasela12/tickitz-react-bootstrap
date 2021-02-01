// Import all modules
import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import { peekPassword } from '../../redux/actions/peekPassword'
import { register } from '../../redux/actions/auth'


// Import components
import Separator from '../separator/Separator';
import SocialMediaAuth from '../social-media-auth/SocialMediaAuth';
import {default as Alert} from '../alert/MyAlert'

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

function FormRegister(props) {
  const [state, setState] = useState({
    email: '',
    password: '',
    agree: false
  })

  const handleInput = (e, prop) => {
    setState(currentState => ({
      ...currentState,
      [prop]: e.target.value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.register(state.email, state.password, state.password)    
  }

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
              </div>
              <Alert variant={props.success ? 'success' : 'warning'} message={props.message} /> 
              <Form method="POST" onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail" className="mb-4">
                  <Form.Label className="mb-3">Email address</Form.Label>
                  <Form.Control type="email" className={`${styled.controlSize}`} placeholder="Write your email"  onChange={(e) => handleInput(e, 'email')}/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword" className="mb-3">
                  <Form.Label className="mb-3">Password</Form.Label>
                  <InputGroup className="mb-3">
                    <FormControl
                      type={ props.show ? 'text' : 'password'}
                      className={`${styled.controlSize} ${styled.hideBorderLeft}`}
                      placeholder="Write your password"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) => handleInput(e, 'password')}
                    />
                    <InputGroup.Append>
                      <InputGroup.Text id="basic-addon2" className={`${styled.hideAppend}`}>
                        {
                          props.show ? (
                            <Fragment>
                              <div onClick={props.showPassword}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#5F2EEA" className={`bi bi-eye-slash ${styled.eye}`} viewBox="0 0 16 16">
                                  <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
                                  <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299l.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
                                  <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884l-12-12 .708-.708 12 12-.708.708z"/>
                                </svg>
                              </div>
                            </Fragment>
                          ) : (
                            <Fragment>
                              <div onClick={props.showPassword}>
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
                <Form.Check
                  type="checkbox"
                  className="my-1 mr-sm-2 mr-5"
                  id="customControlInline"
                  label="I agree to terms & conditions"
                  custom
                  onChange={e => handleInput(e, 'agree')}
                />
                {
                  state.agree ? (
                    <Button variant="primary" type="submit" className={`${styled.controlSize} w-100 mt-4`}>
                      Join for free now
                    </Button>
                  ) : (
                    <Button variant="primary" type="submit" className={`${styled.controlSize} w-100 mt-4`} disabled>
                      Join for free now
                    </Button>
                  )
                }
              </Form>
              <Row className="mt-5">
                <Col>
                  <p className={`${styled.formSubtitle} text-center`}>
                    Do you already have an account? <Link to="/login" className="text-primary">Log In</Link>
                  </p>
                </Col>
              </Row>
              <Separator />
              <SocialMediaAuth />
            </Col>
          </Row>
        </Container>
      </Col>
    </Fragment>
  );
}

const mapStateToProps = state => {
  return {
    show: state.redux.showPassword,
    message: state.redux.message,
    success: state.redux.success
  }
}

const mapDispatchToProps = {
  showPassword: peekPassword,
  register
}

export default connect(mapStateToProps, mapDispatchToProps)(FormRegister);