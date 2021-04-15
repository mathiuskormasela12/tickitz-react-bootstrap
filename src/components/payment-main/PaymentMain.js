// import all modules
import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import http from '../../services/AuthService'
import Swal from 'sweetalert2'

// import redux actions
import { setPaymentMethod, removePaymentMethod, setMessage } from '../../redux/actions/order'

// import all images
import googlepay from '../../assets/images/google-pay.svg';
import bri from '../../assets/images/bri.svg';
import visa from '../../assets/images/visa.svg';
import gopay from '../../assets/images/gopay.svg';
import dana from '../../assets/images/dana.svg';
import bca from '../../assets/images/bca.svg';
import ovo from '../../assets/images/ovo.svg';
import paypal from '../../assets/images/paypal.svg';

// Import react bootstrap components
import { 
  Row,
  Col,
  Card,
  Container,
  Button
} from 'react-bootstrap';

// import scss
import styled from './style.module.scss';

function PaymentMainComponent(props) {
  const history = useHistory()
  const back = () => {
    props.removePaymentMethod()
    history.push('/order')
  }

  const order = async () => {
    const formData = new URLSearchParams();
    formData.append('showTimeId', props.order.showTimeId)
    formData.append('timeId', props.order.timeId)
    formData.append('cinemaId', props.order.cinemaId)
    formData.append('totalPayment', props.order.totalPayment)
    formData.append('paymentMethod', props.order.paymentMethod)
    formData.append('seats', props.order.seats.join(', '))
    formData.append('movieId', props.order.movieId)
    formData.append('showTimeDate', props.order.showTimeDate)
    formData.append('ticketTime', props.order.ticketTime)
    formData.append('cinemaName', props.order.cinemaName)
    formData.append('cinemaPoster', props.order.cinemaPoster.replace(process.env.REACT_APP_PHOTO_URL, ''))
    formData.append('cinemaCity', props.order.cinemaCity)
    formData.append('movieTitle', props.order.movieTitle)

    if(props.order.paymentMethod) {
      try {
        const response = await http.buyTicket(props.token, formData);
        props.setMessage(null, null)
        Swal.fire({
          title: 'Success',
          text: response.data.message,
          icon: 'success',
        })
        history.push('/ticket')
      } catch (err) {
        console.log(err);
        props.setMessage(null, null)
        Swal.fire({
          title: 'Failed',
          text: err.response.data.message,
          icon: 'error',
        })
      }
    } else {
      Swal.fire({
        title: 'Failed',
        text: 'Please select your payment method',
        icon: 'warning',
      })
    }
  }

  return (
    <Fragment>
      <main className={`${styled.main} mt-5`}>
        <h3 className={`${styled.paymentMethodTitle} mb-4`}>Choose a Payment Method</h3>
        <Card className={styled.card}>
          <Card.Body>
            <Container>
              <Row className={styled.paymentRow}>
                <Col lg={3}>
                  <Card className={styled.card}>
                    <img src={googlepay} className="card-img-top" alt="Google Pay" onClick={ () => props.setPaymentMethod('Google Pay')} />
                  </Card>
                </Col>
                <Col lg={3}>
                  <Card className={styled.card}>
                    <img src={visa} className="card-img-top" alt="Visa" onClick={ () => props.setPaymentMethod('Visa')} />
                  </Card>
                </Col>
                <Col lg={3}>
                  <Card className={styled.card}>
                    <img src={gopay} className="card-img-top" alt="Go pay" onClick={ () => props.setPaymentMethod('Go Pay')} />
                  </Card>
                </Col>
                <Col lg={3}>
                  <Card className={styled.card}>
                    <img src={paypal} className={`${styled.imgPaypal} card-img-top`} alt="Paypal" onClick={ () => props.setPaymentMethod('Paypal')} />
                  </Card>
                </Col>
                <Col lg={3}>
                  <Card className={styled.card}>
                    <img src={dana} className="card-img-top" alt="Dana" onClick={ () => props.setPaymentMethod('Dana')} />
                  </Card>
                </Col>
                <Col lg={3}>
                  <Card className={styled.card}>
                    <img src={bca} className="card-img-top" alt="BCA" onClick={ () => props.setPaymentMethod('BCA')} />
                  </Card>
                </Col>
                <Col lg={3}>
                  <Card className={styled.card}>
                    <img src={bri} className={`${styled.imgBri} card-img-top`} alt="BRI" onClick={ () => props.setPaymentMethod('BRI')} />
                  </Card>
                </Col>
                <Col lg={3}>
                  <Card className={styled.card}>
                    <img src={ovo} className="card-img-top" alt="Ovo" onClick={ () => props.setPaymentMethod('Ovo')} />
                  </Card>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col sm={5} xs={5}>
                  <hr />
                </Col>
                <Col sm={2} xs={2}>
                  <p className="text-muted text-center">Or</p>
                </Col>
                <Col sm={5} xs={5}>
                  <hr />
                </Col>
              </Row>
              <Row className="mt-3">
                <Col lg={12}>
                  <p className="text-muted fs-6 text-center">
                    Pay via cash. <span className="text-primary">See how it work</span>
                  </p>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </main>
      <footer className={`${styled.footer} mt-5`}>
        <Row className="no-gutter justify-content-between">
          <Col lg={5} className="mb-4 mb-lg-0 text-left">
            <Button variant="outline-primary" className={`${styled.btnFooter} w-100`} onClick={back}>
              Previous step
            </Button>
          </Col>
          <Col lg={5} className="text-right">
            <Button variant="primary" className={`${styled.btnFooter} w-100`} onClick={order}>
              Pay your order
            </Button>
          </Col>
        </Row>
      </footer>
    </Fragment>
  )
}

const mapStateToProps = state => ({
  order: state.order,
  token: state.auth.token,
})

const mapDispatchToProps = {
  setPaymentMethod,
  removePaymentMethod,
  setMessage
}

export const PaymentMain = connect(mapStateToProps, mapDispatchToProps)(PaymentMainComponent)