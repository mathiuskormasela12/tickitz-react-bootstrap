// import all modules
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import barcode from '../../assets/images/barcode.svg';
import download from '../../assets/images/download.svg';
import printer from '../../assets/images/printer.svg';
import tickitz from '../../assets/images/tickitz.svg';

// import react bootstrap component
import {
  Row,
  Col,
  Button,
  Container,
  Card,
  Image
} from 'react-bootstrap'

import styled from './style.module.scss'

function TicketComponent(props) {
  return (
    <Fragment>
      <div className={styled.proof}>
        <main className="py-5">
          <Container className={styled.container}>
            <Card className={`${styled.card} bg-light py-4 w-100`}>
              <Card.Body className={`${styled.cardBody} position-relative`}>
                <h5 className="text-center text-dark font-weight-bold">
                  Proof of Payment
                </h5>
                <span className={`${styled.circle} bg-light position-absolute`}></span>
                <Row className="justify-content-center mt-4">
                  <Col xs={8} sm={8}>
                    <Card className={`${styled.card} w-100 border-4 bg-light`}>
                      <Card.Body className={styled.cardBody}>
                        <Row className={`bg-primary ${styled.cardTicket} ${styled.row} px-3`}>
                          <Col xs={8} sm={8} className="position-relative d-flex align-items-center">
                            <Image className={`${styled.imgCard} ml-5`} src={ tickitz } alt="Tickitz" fluid/>
                            <p className={`text-light font-weight-normal text-center position-absolute ${styled.admitText}`}>Admit One</p>
                          </Col>
                          <Col xs={4} sm={4} className={`${styled.headBorder} d-flex justify-content-center`}>
                            <Image className={`${styled.imgCard}`} src={ tickitz } alt="Tickitz" fluid/>
                          </Col>
                        </Row>
                        <Row className={`${styled.borderBody} px-3`}>
                          <Col xs={8} sm={8} className="my-3">
                            <Row>
                              <Col xs={12} sm={12}>
                                <small style={{ color: '#AAAAAA' }}>
                                  Movie
                                </small>
                                <p style={{ color: '#14142B', textTransform: 'capitalize' }}>
                                  {props.order.movieTile}
                                </p>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs={4} sm={4}>
                                <small style={{ color: '#AAAAAA' }}>
                                  Date
                                </small>
                                <p style={{ color: '#14142B' }}>
                                  <Moment format="DD MMMM">
                                    {props.order.showTimeDate}
                                  </Moment>
                                </p>
                              </Col>
                              <Col xs={4} sm={4}>
                                <small style={{ color: '#AAAAAA' }}>
                                  Time
                                </small>
                                <p style={{ color: '#14142B' }}>
                                  <Moment format="HH:mma">
                                    {`2021 09 01 ${props.order.ticketTime}`}
                                  </Moment>
                                </p>
                              </Col>
                              <Col xs={4} sm={4}>
                                <small style={{ color: '#AAAAAA' }}>
                                  Category
                                </small>
                                <p style={{ color: '#14142B', textTransform: 'capitalize' }}>
                                  {props.order.category}
                                </p>
                              </Col>
                              <Col xs={4} sm={4}>
                                <small style={{ color: '#AAAAAA' }}>
                                  Count
                                </small>
                                <p style={{ color: '#14142B' }}>
                                  {props.order.ticketCount} pieces
                                </p>
                              </Col>
                              <Col xs={4} sm={4}>
                                <small style={{ color: '#AAAAAA' }}>
                                  Seats
                                </small>
                                <p style={{ color: '#14142B' }}>
                                  {props.order.seats.join(', ')}
                                </p>
                              </Col>
                              <Col xs={4} sm={4}>
                                <small style={{ color: '#AAAAAA' }}>
                                  Price
                                </small>
                                <p style={{ color: '#14142B' }} className="fs-5">
                                  ${props.order.totalPayment}
                                </p>
                              </Col>
                            </Row>
                          </Col>
                          <Col xs={4} sm={4} className={`${styled.headBorder} d-flex justify-content-center`}>
                            <img className="img-barcode" src={barcode} alt="Barcode" />
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <Row className="justify-content-center mt-5">
                  <Col xs={2} sm={2} className="ms-2">
                    <Button type="button" className={`${styled.btnOutlineProof} w-100`}>
                      <Image className="mr-2" src={download} alt="Download" />
                      Download
                    </Button>
                  </Col>
                  <Col xs={2} sm={2}>
                    <Button type="button" className={`${styled.btnOutlineProof} w-100`}>
                      <Image className="mr-2" src={printer} alt="Printer" />
                      Print
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Container>
        </main>
      </div>
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  order: state.order
})

const mapDispatchToProps = {
  
}

export const Ticket = connect(mapStateToProps, mapDispatchToProps)(TicketComponent)