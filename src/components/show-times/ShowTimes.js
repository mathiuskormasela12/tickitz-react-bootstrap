// import all modules
import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import moment from 'moment'
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
  Image,
} from 'react-bootstrap'

// import SCSS
import styled from './style.module.scss'

// import all components
import {
  ShowTimesCard
} from '../'

// import all assets
import arrow from '../../assets/images/forward.svg';
import calendar from '../../assets/images/calendar.svg';

function ShowTimesComponent(props) {
  const { getShowTimes, id } = props

  const [state, setState] = React.useState({
    showTimeDate: moment().format('YYYY-MM-DD'),
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
    getAllCities()
  }, [getShowTimes, id, state.showTimeDate, state.location])

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
                    <label htmlFor="input-date" className={styled.date}>
                      <div className={styled.dateCol}>
                        <Image src={calendar} alt="Calendar" className={styled.calendar} />
                      </div>
                      <div className={styled.dateCol}>
                        <Moment format="YYYY-MM-DD">
                          { state.showTimeDate }
                        </Moment>
                      </div>
                      <div className={styled.dateCol}>
                        <Image src={arrow} alt="Forward" className={styled.forward} />
                      </div>
                    </label>
                    <Form.Control type="date" id="input-date" className={`${styled.dates}`} onChange={e => handleForm(e, 'showTimeDate')}/>
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
                  props.results.length > 0 ? (
                    props.results.map((item, indexShowTime) => (
                      <Col lg={4} key={String(indexShowTime)} className="mb-3">
                        <ShowTimesCard item={item} indexShowTime={indexShowTime} />
                      </Col>
                    ))
                  ): (
                    <Fragment>
                      <h5>Show Time Not Avaliable</h5>
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