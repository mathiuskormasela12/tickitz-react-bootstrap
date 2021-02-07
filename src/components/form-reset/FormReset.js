// Import all modules
import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux'
import { sendForgotPasswordLink } from '../../redux/actions/auth'

// Import bootstrap component
import { 
  Container,
  Col,
  Row,
  Form,
  Button
} from 'react-bootstrap';

import {default as Alert} from '../alert/MyAlert'

// import scss
import styled from './style.module.scss';

function FormReset(props) {
  const [state, setState] = useState({
    email: ''
  })

  const handleInput = (e, prop) => {
    setState(currentState => ({
      ...currentState,
      [prop]: e.target.value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.send(state.email)    
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
                <p className={`${styled.formSubtitle}`}>
                  we'll send a link to your email shortly
                </p>
              </div>
              <Alert variant={props.success ? 'success' : 'warning'} message={props.message} />
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail" className="mb-4">
                  <Form.Label className="mb-3">Email address</Form.Label>
                  <Form.Control type="email" className={`${styled.controlSize}`} placeholder="Write your email" onChange={e => handleInput(e, 'email')} />
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

const mapStateToProps = state => {
  return {
    message: state.redux.message,
    success: state.redux.success
  }
}

const mapDispatchToProps = {
  send: sendForgotPasswordLink
}

export default connect(mapStateToProps, mapDispatchToProps)(FormReset);