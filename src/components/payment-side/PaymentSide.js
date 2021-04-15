// import all modules
import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { setPersonalInfo, setPersonalInfoValid } from '../../redux/actions/order'

// Import react bootstrap components
import { 
  Form,
  Card,
  Container,
  InputGroup,
  FormControl,
} from 'react-bootstrap';

// import scss
import styled from './style.module.scss';

function PaymentSideComponent(props) {
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
                  <Form.Control type="text" id="fullname" placeholder="Full name..." />
                </div>
                <div className="mb-3">
                  <Form.Label htmlFor="email" className="text-muted">Email</Form.Label>
                  <Form.Control type="email" id="email" placeholder="E-mail..." />
                </div>
                <div className="mb-3">
                  <Form.Label htmlFor="phonenumber">
                    Phone Number
                  </Form.Label>
                  <InputGroup className="mb-2">
                    <InputGroup.Prepend>
                      <InputGroup.Text className="bg-white">+62</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl id="phonenumber" placeholder="Phone number..." />
                  </InputGroup>
                </div>
              </Form>
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