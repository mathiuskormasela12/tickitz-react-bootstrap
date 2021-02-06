// import all modules
import React, { Fragment } from 'react';
import warning from '../../assets/images/warning.svg';
import { connect } from 'react-redux'
import { setPersonalInfo, setPersonalInfoValid } from '../../redux/actions/order'

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

function PaymentSideComponent(props) {
  const handleInput = (e, prop) => {
    props.setPersonalInfo(prop, e.target.value)
  }

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
                  <Form.Control type="text" id="fullname" placeholder="Full name..." onChange={e => handleInput(e, 'fullName')} />
                </div>
                <div className="mb-3">
                  <Form.Label htmlFor="email" className="text-muted">Email</Form.Label>
                  <Form.Control type="email" id="email" placeholder="E-mail..." onChange={e => handleInput(e, 'email')} />
                </div>
                <div className="mb-3">
                  <Form.Label htmlFor="phonenumber">
                    Phone Number
                  </Form.Label>
                  <InputGroup className="mb-2">
                    <InputGroup.Prepend>
                      <InputGroup.Text className="bg-white">+62</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl id="phonenumber" placeholder="Phone number..." onChange={e => handleInput(e, 'phone')} />
                  </InputGroup>
                </div>
              </Form>
              {
                (props.order.message) ? (
                  <Alert variant={props.order.messageType} className="mt-4 d-flex align-items-center">
                    {
                      (props.order.messageType !== 'success') ? <Image fluid className="mr-4" src={ warning } alt="Warning" /> : null
                    }
                    {props.order.message}
                  </Alert>
                ) : null
              }
            </Container>
          </Card.Body>
        </Card>
      </aside>
    </Fragment>
  )
}

const mapStateToProps = state => ({
  order: state.order
})

const mapDispatchToProps = {
  setPersonalInfo,
  setPersonalInfoValid
}

export const PaymentSide = connect(mapStateToProps, mapDispatchToProps)(PaymentSideComponent)