// import all modules
import React, { Fragment } from 'react';

// Import react bootstrap components
import { 
  Container,
  Row,
  Col
} from 'react-bootstrap';

// import all components
import {
  PaymentHeader,
  PaymentMain,
  PaymentSide
} from '../'

// import scss
import styled from './style.module.scss';

export function Payment() {
  return (
    <Fragment>
      <section className={styled.hero}>
        <Container>
          <Row>
            <Col lg={8}>
              <PaymentHeader />
              <PaymentMain />
            </Col>
            <Col lg={4} className="mt-4 mt-lg-0">
              <PaymentSide />
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  )
}