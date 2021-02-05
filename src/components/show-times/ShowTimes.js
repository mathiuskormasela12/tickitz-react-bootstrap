// import all modules
import React, { Fragment, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import http from '../../services/AuthService'

// import actions
import { getShowTimes, getMovieDetails, getAllTimes } from '../../redux/actions/movieDetails'
import { setOrder, selectTime } from '../../redux/actions/order'

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
  const history = useHistory()

  const [state, setState] = React.useState({
    showTimeDate: null,
    location: 'Jakarta',
    cities: []
  })

  useEffect(() => {
    async function getAllCities() {
      try {
        const response = await http.getAllCities()
        setState(current => ({
          ...current,
          cities: response.data.results
        }))
      } catch(err) {
        throw new Error(err)
      }
    }
    getShowTimes(id, state.showTimeDate, state.location)
    getAllTimes()
    getAllCities()
  }, [getShowTimes, getAllTimes, id, state.showTimeDate, state.location])

  const handleOrder = (index) => {
    props.setOrder(props.results[index])
    history.push('/order')
  }

  const handleForm = (e, prop) => {
    setState(current => ({
      ...current,
      [prop]: e.target.value
    }))
  }

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
                    <Form.Control type="date" className={`${styled.date} py-4`} onChange={e => handleForm(e, 'showTimeDate')}/>
                    <label className={styled.arrowDate}></label>
                  </Col>
                  <Col lg={3} className="position-relative">
                    <Form.Control as="select" id="select" className={`${styled.select}`} value={state.location} onChange={e => handleForm(e, 'location')}>
                      {
                        state.cities.map((item, index) => (
                          <Fragment key={index}>
                            <option value={item}>{item}</option>
                          </Fragment>
                        ))
                      }
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
                    props.results.map((item, indexShowTime) => (
                      <Col lg={4} key={String(indexShowTime)} className="mb-3">
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
                                              <input type="radio" id={item.cinemaId.toString().concat(index)} className={styled.input} name={item.movieId} value={time.showTime} disabled/>
                                          ) : (
                                            <input type="radio" id={item.cinemaId.toString().concat(index)} className={styled.input} name={item.movieId} value={time.showTime} 
                                            onChange={e => props.selectTime(e.target.value)}
                                            />
                                          )
                                        }
                                        <label htmlFor={item.cinemaId.toString().concat(index)} className={styled.time}>
                                          <Moment format="HH:mma">
                                            {`2021-01-26T${time.showTime}`}
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
                                    {
                                      props.order.ticketTime ? (
                                        <Button variant="primary" onClick={() => handleOrder(indexShowTime)} className={`${styled.shadow} py-2 px-4`}>
                                          Book Now
                                        </Button>
                                      ) : (
                                        <Button variant="primary" className={`${styled.shadow} py-2 px-4`} disabled>
                                          Book Now
                                        </Button>
                                      )
                                    }
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
    messageTimes: state.redux.messageTimes,
    order: state.order,
    successMovieDetails: state.redux.successMovieDetails,
    resultsMovieDetails: state.redux.movieDetails
  }
}

const mapDispatchToProps = {
  getShowTimes,
  getAllTimes,
  setOrder,
  getMovieDetails,
  selectTime
}

export const ShowTimes = connect(mapStateToProps, mapDispatchToProps)(ShowTimesComponent)