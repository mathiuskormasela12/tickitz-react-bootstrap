// Import all modules
import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux'
import { sendForgotPasswordLink, resetMessage } from '../../redux/actions/auth'

// Import bootstrap component
import { 
  Container,
  Col,
  Row,
  Form,
  Button
} from 'react-bootstrap';

import {default as Alert} from '../alert/MyAlert'

// import all components
import Loading from '../loading/Loading'

// import scss
import styled from './style.module.scss';

function FormReset(props) {
  const [state, setState] = useState({
    email: ''
  })

  const {resetMessage} = props

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

  React.useEffect(() => {
    setTimeout(() => {
      resetMessage()
    }, 3000)
  }, [resetMessage, props.message, props.success])

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
                <Loading>
                  <Button variant="primary" type="submit" className={`${styled.controlSize} w-100 mt-4`}>
                    Active now
                  </Button>
                </Loading>
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
    message: state.message.message,
    success: state.message.success
  }
}

const mapDispatchToProps = {
  send: sendForgotPasswordLink,
  resetMessage,
}

export default connect(mapStateToProps, mapDispatchToProps)(FormReset);