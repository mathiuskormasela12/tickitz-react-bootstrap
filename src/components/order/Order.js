// import all modules
import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeSeat, setTotalPayment, setTicketCount } from '../../redux/actions/order'
import Swall from 'sweetalert2'

// import react bootstrap component
import {
  Row,
  Col,
  Button,
  Container
} from 'react-bootstrap'

// import all component
import { 
  OrderHeader,
  OrderMain ,
  OrderSide
} from '../'

import styled from './style.module.scss'

function OrderComponent(props) {
  const history = useHistory();

  const checkout = () => {
    if(props.results.seats.length < 1) {
      Swall.fire({
        title: 'Failed to checkout',
        text: 'Please select your seat',
        icon: 'warning'
      })
    } else {
      history.push('/payment');
    }
  }

  const changeMovie = () => {
    props.removeSeat()
    props.setTicketCount()
    props.setTotalPayment()
    history.push('/');
  }

  return (
    <Fragment>
      <section className={styled.order}>
        <Container>
          <Row>
            <Col lg={8}>
              <OrderHeader />
              <OrderMain />
              <footer className="mt-5">
                <Row className="no-gutter justify-content-between">
                  <Col lg={5} className="mb-4 mb-lg-0 text-start">
                    <Button variant="outline-primary" onClick={ changeMovie } className={`${styled.btnFooter} w-100`}>
                      Change your movie
                    </Button>
                  </Col>
                  <Col lg={5} className="text-end">
                    <Button onClick={ checkout } variant="primary" className={`${styled.btnFooter} w-100`}>
                      Checkout now
                    </Button>
                  </Col>
                </Row>
              </footer>
            </Col>
            <Col lg={4} className="mt-4 mt-lg-0">
              <OrderSide />
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  results: state.order
})

const mapDispatchToProps = {
  removeSeat,
  setTotalPayment,
  setTicketCount
}

export const Order = connect(mapStateToProps, mapDispatchToProps)(OrderComponent)