// import all modules
import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import Moment from 'react-moment'

// import actions
import { getShowTimes, getAllTimes } from '../../redux/actions/movieDetails'

// import react bootstrap component
import { 
  Row,
  Col,
  Form,
  Container,
  Card,
  Image,
  Button
} from 'react-bootstrap'

// import SCSS
import styled from './style.module.scss'

// import all components

function ShowTimesComponent(props) {
  const { getShowTimes, id, getAllTimes } = props 

  useEffect(() => {
    getShowTimes(id)
    getAllTimes()
  }, [getShowTimes, getAllTimes, id])

  return (
    <Fragment>
      <div className={`${styled.hero} py-5`}>
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h3 className={styled.title}>Show Times and Tickets</h3>
            </Col>
            <Col lg={12} className="text-center">
              <Form className="mt-4">
                <Row className="justify-content-center">
                  <Col lg={3}>
                    <Form.Control placeholder="First name" type="date" className={`${styled.date} py-4`} />
                    <label className={styled.arrowDate}></label>
                  </Col>
                  <Col lg={3} className="position-relative">
                    <Form.Control as="select" id="select" className={`${styled.select}`}>
                      <option selected>Jakarta</option>
                      <option>Bandung</option>
                    </Form.Control>
                    <label htmlFor="select" className={styled.arrow}></label>
                  </Col>
                </Row>
              </Form>
            </Col>
            <Col lg={12} className="mt-5">
              <Row>
                {
                  props.success ? (
                    props.results.map((item, index) => (
                      <Col lg={4} key={String(index)} className="mb-3">
                        <Card className={`${styled.card}`}>
                          <Card.Body>
                            <Row className={`${styled.line} py-3`}>
                              <Col xs={6} className="d-flex justify-content-center align-items-center">
                                <Image src={item.cinemaPoster} fluid />
                              </Col>
                              <Col xs={6} className="d-flex flex-column">
                                <h6 className={`${styled.cardTitle}`}>{item.cinema}</h6>
                                <p className={styled.cardSubtitle}>
                                    {item.address}
                                </p>
                              </Col>
                            </Row>
                            <Row className="mt-3">
                              <Col xs={12}>
                                <Row>
                                  {
                                    props.times.map((time, index) => (
                                      <Col xs={3} key={index}>
                                        {
                                          (item.time.indexOf(time.showTime) === -1) ? (
                                              <input type="radio" id={item.cinemaId.toString().concat(index)} className={styled.input} name={item.movieId} value={item.showTime} disabled/>
                                          ) : (
                                            <input type="radio" id={item.cinemaId.toString().concat(index)} className={styled.input} name={item.movieId} value={item.showTime} />
                                          )
                                        }
                                        <label htmlFor={item.cinemaId.toString().concat(index)} className={styled.time}>
                                          <Moment format="HH:mma">
                                            {`2021-01-26 ${time.showTime}`}
                                          </Moment>
                                        </label>
                                      </Col>
                                    ))                                  
                                  }
                                </Row>
                              </Col>
                              <Col lg={12} className="mt-4">
                                <Row>
                                  <Col xs={6}>
                                    <p className={styled.price}>Price</p>
                                  </Col>
                                  <Col xs={6} className="text-right">
                                    <p className={styled.priceText}>${item.pricePerSeat}/seat</p>
                                  </Col>
                                </Row>
                              </Col>
                              <Col lg={12} className="mt-3">
                                <Row>
                                  <Col xs={6}>
                                    <Button variant="primary" className={`${styled.shadow} py-2 px-4`}>
                                      Book Now
                                    </Button>
                                  </Col>
                                  <Col xs={6} className="text-right">
                                    <Button variant="outline-light" className="py-2 px-2">
                                      <span className="text-primary font-font-weight-bold"> 
                                        Add to chart
                                      </span>
                                    </Button>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))
                  ): (
                    <Fragment>
                      <h5>{props.message}</h5>
                    </Fragment>
                  )
                }
              </Row>
            </Col>
            <Col lg={12} className="mt-5">
              <Row>
                <Col xs={5}>
                  <hr />
                </Col>
                <Col xs={2} className={`${styled.view} text-center text-primary`}>
                  View All
                </Col>
                <Col xs={5}>
                  <hr />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  )
}
  
const mapStateToProps = state => {
  console.log('REDUCER')
  console.log(state.redux.times)
  return {
    success: state.redux.successShowtimes,
    results: state.redux.showTimes,
    message: state.redux.messageShowtimes,
    successTimes: state.redux.successTimes,
    times: state.redux.times,
    messageTimes: state.redux.messageTimes
  }
}

const mapDispatchToProps = {
  getShowTimes,
  getAllTimes
}

export const ShowTimes = connect(mapStateToProps, mapDispatchToProps)(ShowTimesComponent)