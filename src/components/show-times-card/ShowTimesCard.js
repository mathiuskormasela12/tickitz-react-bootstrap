// import all modules
import React, { Fragment, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import Swal from 'sweetalert2'
import http from '../../services/AuthService'
import moment from 'moment'

// import actions
import { getAllTimes } from '../../redux/actions/movieDetails'
import { setOrder, selectTime } from '../../redux/actions/order'

// import react bootstrap component
import { 
  Row,
  Col,
  Card,
  Image,
  Button
} from 'react-bootstrap'

// import SCSS
import styled from './style.module.scss'

// import all components

function ShowTimesCardComponent(props) {
  const { getAllTimes } = props 
  const history = useHistory()

  useEffect(() => {
    getAllTimes(props.token)
  }, [getAllTimes, props.token])

  const handleOrder = async (index) => {
    if(!props.order.ticketTime) {
      return Swal.fire({
        title: "You can't buy ticket",
        text: 'Please select your show time',
        icon: 'warning',
      })
    } else {
      try {
        const {data} = await http.getSelectedShowTimeId(
          props.selectedDate,
          props.movieId,
          props.order.timeId,
          props.cinemaId
        )
        
        props.setOrder({
          ...props.results[index],
          showTimeId: data.results.showTimeId,
          cinemaCity: props.item.city,
          showTimeDate: moment(props.results[index].showTimeDate).format('YYYY-MM-DD'),
        })
        history.push('/order')
      } catch (err) {
        console.log(err)
        return Swal.fire({
          title: "Server Error",
          text: 'Please contact the developer',
          icon: 'danger',
        })
      }
    } 
  }

  const selectTime = (e, id) => {
    props.selectTime(e.target.value, id)
  }

  return (
    <Fragment>
      <Card className={`${styled.card}`}>
        <Card.Body>
          <Row className={`${styled.line} py-3`}>
            <Col xs={6} className="d-flex justify-content-center align-items-center">
              <Image src={props.item.cinemaPoster} fluid />
            </Col>
            <Col xs={6} className="d-flex flex-column">
              <h6 className={`${styled.cardTitle}`}>{props.item.cinema}</h6>
              <p className={styled.cardSubtitle}>
                  {props.item.address}
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
                        (props.item.time.indexOf(time.showTime) === -1) ? (
                            <input type="radio" id={props.item.cinemaId.toString().concat(index)} className={styled.input} name={props.item.movieId} value={time.showTime} disabled/>
                        ) : (
                          <input type="radio" id={props.item.cinemaId.toString().concat(index)} className={styled.input} name={props.item.movieId} value={time.showTime} 
                          onChange={e => selectTime(e, time.id)}
                          />
                        )
                      }
                      <label htmlFor={props.item.cinemaId.toString().concat(index)} className={styled.time}>
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
                  <p className={styled.priceText}>${props.item.pricePerSeat}/seat</p>
                </Col>
              </Row>
            </Col>
            <Col lg={12} className="mt-3">
              <Row>
                <Col xs={6}>
                  <Button variant="primary" onClick={() => handleOrder(props.indexShowTime)} className={`${styled.shadow} py-2 px-4`}>
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
    </Fragment>
  )
}
  
const mapStateToProps = state => {
  return {
    successTimes: state.redux.successTimes,
    times: state.redux.times,
    messageTimes: state.redux.messageTimes,
    order: state.order,
    results: state.redux.showTimes,
    token: state.auth.token,
  }
}

const mapDispatchToProps = {
  getAllTimes,
  setOrder,
  selectTime
}

export const ShowTimesCard = connect(mapStateToProps, mapDispatchToProps)(ShowTimesCardComponent)