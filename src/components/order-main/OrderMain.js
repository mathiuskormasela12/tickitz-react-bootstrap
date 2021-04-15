// import all modules
import React, { Fragment, useState } from 'react';
import http from '../../services/AuthService'
import { connect } from 'react-redux'
import { 
  selectSeat, 
  setTicketCount, 
  setTotalPayment 
} from '../../redux/actions/order'

// Import react bootstrap components
import {
  Container,
  Row,
  Col,
  Card
} from 'react-bootstrap';

// import scss
import styled from './style.module.scss';

function OrderMainComponent(props) {
  const seatNum = [1, 2, 3, 4, 5, 6, 7];
  const seatNumRight = ['8', '9', '10', '11', '12', '13', '14'];
  const seatAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  const [soldSeat, setSoldSeat] = useState([])
  
  React.useEffect(() => {
    const getSoldSeat = async () => {
      try {
        const response = await http.getSoldSeat(
          props.token, 
          props.results.showTimeId,
        )
        setSoldSeat(response.data.results)
      } catch(err) {
        setSoldSeat([])
      }
    }
    getSoldSeat()
  }, [props.results.showTimeId, props.token])

  // const [userSeat, setUserSeat] = useState([]);

  // const selectSeat = e => {
  //   const isSameSeat = userSeat.some(item => item === e.target.value);

  //   if(!isSameSeat) {
  //     setUserSeat(currentState => ([
  //       ...currentState,
  //       e.target.value
  //     ]));
  //   } else {
  //     setUserSeat(currentState => {
  //       currentState = currentState.map((item, index) => {
  //         if(item === e.target.value) {
  //           return '';
  //         } else {
  //           return item
  //         }
  //       });
  //       return [
  //         ...currentState
  //       ];
  //     });
  //   }
    
  // }

  const selectSeat = e => {
    const values = (e.target.value.toLowerCase() === 'f10,f11') ? e.target.value.split(',') : e.target.value 
    if(typeof values === 'string') {
      if(props.results.seats.indexOf(values) === -1) {
        props.selectSeat([...props.results.seats, e.target.value])
      } else {
        const prevSeats = [...props.results.seats]
        prevSeats.splice(prevSeats.indexOf(e.target.value), 1)
        props.selectSeat([...prevSeats])
      }
    } else {
      if(props.results.seats.indexOf(values[0]) === -1 && props.results.seats.indexOf(values[1]) === -1) {
        props.selectSeat([...props.results.seats, ...values])
      } else {
        const values = e.target.value.split(',')
        const prevSeats = [...props.results.seats]
        values.forEach(item => {
          prevSeats.splice(prevSeats.indexOf(item), 1)
        })
        props.selectSeat([...prevSeats])
      }
    }

    props.setTicketCount()
    props.setTotalPayment()
  }

  return (
    <Fragment>
      <main className={`${styled.main} mt-5`}>
        <h3 className="mb-4">Choose Your Seat</h3>
        <Card className={styled.card}>
          <Container>
            <p className="text-muted text-center">Screen</p>
            <Row className="justify-content-center mt-4">
              <Col xl={5} lg={6} md={5} sm={12} xs={12} className="d-flex flex-wrap position-relative">
                {
                  seatAlphabet.map((row, rowIndex) => (
                    <Fragment key={ rowIndex }>
                      { seatNum.map((col, colIndex) => (
                        <Fragment key={ colIndex }>
                          {
                            (soldSeat.some((item) => item === `${row}${col}`)) ? (
                              <Fragment>
                                <input type="checkbox" id={row + '-' + col} value={row + col} disabled />
                                <label htmlFor={row + '-' + col} className={styled.normal}></label>
                              </Fragment>
                            ) : (!props.results.seats.some((item) => item === `${row}${col}`)) ?(
                              (
                                <Fragment>
                                  <input type="checkbox" id={row + '-' + col} value={row + col} onChange={ selectSeat } />
                                  <label htmlFor={row + '-' + col} className={styled.normal}></label>
                                </Fragment>
                              )
                            ) : (
                              <Fragment>
                                <input type="checkbox" id={row + '-' + col} value={row + col} onChange={ selectSeat } defaultChecked />
                                <label htmlFor={row + '-' + col} className={styled.normal}></label>
                              </Fragment>
                            )
                          }
                        </Fragment>
                      ))}
                    </Fragment>
                  ))
                }
                <div className={`${styled.alphabet} position-absolute`}>
                  {
                    seatAlphabet.map((item, index) => (
                      <Fragment key={ index }>
                        <p>{ item }</p>
                      </Fragment>
                    ))
                  }
                </div>
                <div className={`${styled.numeric} position-absolute d-flex`}>
                  {
                    seatNum.map((item, index) => (
                      <Fragment key={ index }>
                        <p>{ item }</p>
                      </Fragment>
                    ))
                  }
                </div>
              </Col>
              <Col xl={5} lg={6} md={5} sm={12} xs={12} className="mt-5 mt-md-0 mt-lg-0 d-flex flex-wrap position-relative">
              {
                  seatAlphabet.map((row, rowIndex) => (
                    <Fragment key={ rowIndex }>
                      { seatNumRight.map((col, colIndex) => (
                        <Fragment key={ colIndex }>
                          {(row === 'F' && Number(col) === 10) ? (
                            <Fragment>
                              {
                                (soldSeat.some((item) => item === `${row}${col}`)) ? (
                                  <Fragment>
                                    <input type="checkbox" id={row + '-' + col} value={`${row + col},${row + (Number(col) + 1)}`} disabled />
                                    <label htmlFor={row + '-' + col} style={{ width: '3.5rem'}} className={styled.loveNest}></label>
                                  </Fragment>
                                ) : (!props.results.seats.some((item) => item === `${row}${col}`)) ? (
                                  <Fragment>
                                    <input type="checkbox" id={row + '-' + col} value={`${row + col},${row + (Number(col) + 1)}`} onChange={ selectSeat } />
                                    <label htmlFor={row + '-' + col} style={{ width: '3.5rem'}} className={styled.loveNest}></label>
                                  </Fragment>
                                ) : (
                                  <Fragment>
                                    <input type="checkbox" id={row + '-' + col} value={`${row + col},${row + (Number(col) + 1)}`} onChange={ selectSeat } defaultChecked />
                                    <label htmlFor={row + '-' + col} style={{ width: '3.5rem'}} className={styled.loveNest}></label>
                                  </Fragment>
                                ) 
                              }
                            </Fragment>
                          ): (row === 'F' && Number(col) === 11) ? null: (
                            <Fragment>
                              {
                                (soldSeat.some((item) => item === `${row}${col}`)) ? (
                                  <Fragment>
                                    <input type="checkbox" id={row + '-' + col} value={row + col} disabled/>
                                    <label htmlFor={row + '-' + col} className={styled.normal}></label>
                                  </Fragment>
                                ) : (!props.results.seats.some((item) => item === `${row}${col}`)) ? (
                                  <Fragment>
                                    <input type="checkbox" id={row + '-' + col} value={row + col} onChange={ selectSeat } />
                                    <label htmlFor={row + '-' + col} className={styled.normal}></label>
                                  </Fragment>
                                ) : (
                                  <Fragment>
                                    <input type="checkbox" id={row + '-' + col} value={row + col} onChange={ selectSeat } defaultChecked />
                                    <label htmlFor={row + '-' + col} className={styled.normal}></label>
                                  </Fragment>
                                )
                              }
                            </Fragment>
                          )}
                        </Fragment>
                      ))}
                    </Fragment>
                  ))
                }
                <div className={`${styled.numeric} position-absolute d-flex`}>
                  {
                    seatNumRight.map((item, index) => (
                      <Fragment key={ index }>
                        <p>{ item }</p>
                      </Fragment>
                    ))
                  }
                </div>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col lg={12}>
                <h5 style={{ fontWeight: 'normal'}}>Seating key</h5>
              </Col>
              <Col lg={12} className="mt-3">
                <div className="d-lg-flex justify-content-around">
                  <div className="d-flex align-items-center mb-3 mb-lg-0">
                    <p className="text-muted">Available</p>
                  </div>
                  <div className="d-flex align-items-center mb-3 mb-lg-0">
                    <span className={`d-inline-block mr-3 bg-primary ${styled.box}`}></span>
                    <span className="text-muted">Selected</span>
                  </div>
                  <div className="d-flex align-items-center mb-3 mb-lg-0">
                    <span className={`d-inline-block mr-3 ${styled.loveNest} ${styled.box}`}></span>
                    <span className="text-muted">Love Nest</span>
                  </div>
                  <div className="d-flex align-items-center mb-3 mb-lg-0">
                    <span className={`d-inline-block mr-3 ${styled.box}`} style={{ backgroundColor: ' #6E7191'}}></span>
                    <span className="text-muted">Sold</span>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Card>
      </main>
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  results: state.order,
  token: state.auth.token,
})

const mapDispatchToProps = {
  selectSeat,
  setTicketCount,
  setTotalPayment
}

export const OrderMain = connect(mapStateToProps, mapDispatchToProps)(OrderMainComponent)