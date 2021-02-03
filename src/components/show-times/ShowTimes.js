// import all modules
import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'

// import actions
import { getMovieDetails } from '../../redux/actions/movieDetails'

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

import img from '../../assets/images/hiflix.png'

// import all components

function ShowTimesComponent(props) {
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
                  [1,2,3,4,5,6].map((item, index) => (
                    <Col lg={4} key={String(index)} className="mb-3">
                      <Card className={`${styled.card}`}>
                        <Card.Body>
                          <Row className={`${styled.line} py-3`}>
                            <Col xs={5} className="d-flex justify-content-center align-items-center">
                              <Image src={img} fluid />
                            </Col>
                            <Col xs={7} className="d-flex flex-column">
                              <h6 className={`${styled.cardTitle}`}>CineOne21</h6>
                              <p className={styled.cardSubtitle}>
                                  Whatever street No.12, South Purwokerto
                              </p>
                            </Col>
                          </Row>
                          <Row className="mt-3">
                            <Col xs={12}>
                              <Row>
                                {
                                  [
                                    '8:30pm', 
                                    '10:30pm', 
                                    '12:00pm', 
                                    '02:00pm',
                                    '04:30pm',
                                    '07:00pm'
                                  ].map((item, index) => (
                                    <Col xs={3} key={index}>
                                      <input type="radio" id={`time-${index}`} className={styled.input} name="time" value={item} />
                                      <label htmlFor={`time-${index}`} className={styled.time}>
                                        {item}
                                      </label>
                                    </Col>
                                  ))                                  
                                }
                              </Row>
                            </Col>
                            <Col lg={12} className="mt-3">
                              <Row>
                                <Col xs={6}>
                                  <p className={styled.price}>Price</p>
                                </Col>
                                <Col xs={6} className="text-right">
                                  <p className={styled.priceText}>$10.00/seat</p>
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
  return {
    success: state.redux.successMovieDetails,
    results: state.redux.movieDetails
  }
}

const mapDispatchToProps = {
  getMovieDetails
}

export const ShowTimes = connect(mapStateToProps, mapDispatchToProps)(ShowTimesComponent)