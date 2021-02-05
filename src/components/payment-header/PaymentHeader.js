// import all modules
import React, { Fragment } from 'react';

// Import react bootstrap components
import { 
  Row,
  Col,
  Card
} from 'react-bootstrap';

// import scss
import styled from './style.module.scss';

export function PaymentHeader() {
  return (
    <Fragment>
      <header className={styled.header}>
        <h3 className={`${styled.paymentTitle} mb-4`}>Payment Info</h3>
        <Card className={`${styled.card} py-3`}>
          <Row className="border-bottom py-3">
            <Col xs={6} sm={6}>
              <p className="text-muted m-0">Date & Time</p>
            </Col>
            <Col xs={6} sm={6}>
              <p className="text-right m-0">Tuesday, 07 July 2020 at 02:00pm</p>
            </Col>
          </Row>
          <Row className="border-bottom py-3">
            <Col xs={6} sm={6}>
              <p className="text-muted m-0">Movie title</p>
            </Col>
            <Col xs={6} sm={6}>
              <p className="text-right m-0">Spider-Man: Homecoming</p>
            </Col>
          </Row>
          <Row className="border-bottom py-3">
            <Col xs={6} sm={6}>
              <p className="text-muted m-0">Cinema name</p>
            </Col>
            <Col xs={6} sm={6}>
              <p className="text-right m-0">CineOne21 Cinema</p>
            </Col>
          </Row>
          <Row className="border-bottom py-3">
            <Col xs={6} sm={6}>
              <p className="text-muted m-0">Number of tickets</p>
            </Col>
              <Col xs={6} sm={6}>
              <p className="text-right m-0">3 pieces</p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col xs={6} sm={6}>
              <p className="text-muted m-0">Total payment</p>
            </Col>
            <Col xs={6} sm={6}>
              <p className="text-right m-0">$30,00</p>
            </Col>
          </Row>
        </Card>
      </header>
    </Fragment>
  )
}