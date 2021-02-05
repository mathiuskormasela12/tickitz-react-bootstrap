// import all modules
import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import Moment from 'react-moment'

// Import react bootstrap components
import {
  Card,
  Container,
  Row,
  Col
} from 'react-bootstrap';

// import scss
import styled from './style.module.scss';

function OrderSideComponent(props) {
  return (
    <Fragment>
      <aside className={styled.aside}>
        <h3 className="mb-4">Order Info</h3>
        <Card className={`${styled.card} w-100 pt-3`} style={{ height: '100%'}}>
          <Card.Body>
            <Container className="px-2" fluid>
              <Row>
                <Col lg={12} className="text-center mb-3">
                  <img className={`${styled.imgMovie} img-fluid`} alt="Movie" src={ props.results.cinemaPoster }/>
                </Col>
                <Col lg={12} className="text-center">
                  <h5 className="fw-normal">
                    {props.results.cinemaName}
                  </h5>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col sm={5} xs={5}>
                  <p className={`${styled.movieSelect} text-muted`}>Movie selected</p>
                </Col>
                <Col sm={7} xs={7}>
                  <p className={`${styled.movieSelect} text-muted font-weight-bold text-right`}>{props.results.movieTitle}</p>
                </Col>
              </Row>
              <Row>
                <Col sm={6} xs={6}>
                  <p className={`${styled.movieSelect} text-muted`}>
                    <Moment format="dddd, D MMMM YYYY">
                      {props.results.showTimeDate}
                    </Moment>
                  </p>
                </Col>
                <Col sm={6} xs={6}>
                  <p className={`${styled.movieSelect} text-muted font-weight-bold text-right`}>
                    <Moment format="HH:mma">
                      {`2021-01-26 ${props.results.ticketTime}`}
                    </Moment>
                  </p>
                </Col>
              </Row>
              <Row>
                <Col sm={6} xs={6}>
                  <p className={`${styled.movieSelect} text-muted`}>One ticket price</p>
                </Col>
                <Col sm={6} xs={6}>
                  <p className={`${styled.movieSelect} text-muted font-weight-bold text-right`}>${props.results.pricePerSeat}</p>
                </Col>
              </Row>
              <Row>
                <Col sm={6} xs={6}>
                  <p className={`${styled.movieSelect} text-muted`}>Seat choosed</p>
                </Col>
                <Col sm={6} xs={6}>
                  <p className={`${styled.movieSelect} text-muted font-weight-bold text-right`}>{props.results.seats.join(', ')}</p>
                </Col>
              </Row>
            </Container>
          </Card.Body>
          <Card.Footer className={`${styled.cardFooter} pt-4`}>
            <Row>
              <Col sm={6} xs={6}>
                <p style={{
                  fontWeight: 'bold'
                }}> 
                  Total Payment
                </p>
              </Col>
              <Col sm={6} xs={6}>
                <p className="text-primary text-right font-weight-bold">
                  ${props.results.totalPayment}
                </p>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </aside>
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  results: state.order
})

export const OrderSide = connect(mapStateToProps, null)(OrderSideComponent)