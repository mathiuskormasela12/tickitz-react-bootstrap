// import all modules
import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Moment from 'react-moment'

// Import react bootstrap components
import { 
  Row,
  Col,
  Card
} from 'react-bootstrap';

// import scss
import styled from './style.module.scss';

function PaymentHeaderComponent(props) {
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
              <p className="text-right m-0 text-dark">
                <Moment format="dddd, DD MMMM YYYY">
                  {props.order.showTimeDate}
                </Moment>
                {' '} at {' '} 
                <Moment format="HH:mma">
                  {props.ticketTime}
                </Moment>
              </p>
            </Col>
          </Row>
          <Row className="border-bottom py-3">
            <Col xs={6} sm={6}>
              <p className="text-muted m-0">Movie title</p>
            </Col>
            <Col xs={6} sm={6}>
              <p className="text-right text-dark m-0">{props.order.movieTitle}</p>
            </Col>
          </Row>
          <Row className="border-bottom py-3">
            <Col xs={6} sm={6}>
              <p className="text-muted m-0">Cinema name</p>
            </Col>
            <Col xs={6} sm={6}>
              <p className="text-right text-dark m-0">{props.order.cinemaName}</p>
            </Col>
          </Row>
          <Row className="border-bottom py-3">
            <Col xs={6} sm={6}>
              <p className="text-muted m-0">Number of tickets</p>
            </Col>
              <Col xs={6} sm={6}>
              <p className="text-right text-dark m-0">{props.order.ticketCount} pieces</p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col xs={6} sm={6}>
              <p className="text-muted m-0">Total payment</p>
            </Col>
            <Col xs={6} sm={6}>
              <p className="text-right text-dark font-weight-bold m-0">
                ${props.order.totalPayment} {' '}
                <span className="font-weight-normal">
                  {props.order.paymentMethod ? `via ${props.order.paymentMethod}` : ''} 
                </span>
              </p>
            </Col>
          </Row>
        </Card>
      </header>
    </Fragment>
  )
}

const mapStateToProps = state => ({
  order: state.order
})

export const PaymentHeader = connect(mapStateToProps, null)(PaymentHeaderComponent)