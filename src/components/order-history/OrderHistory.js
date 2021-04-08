// ===== OrderHistory
// import all modules
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import http from '../../services/AuthService';

// import react bootstrap component
import {
  Row,
  Col,
  Card, 
  Container,
  Image,
  Button,
} from 'react-bootstrap';

// import styled
import styled from './style.module.scss';

class OrderHistoryComponent extends Component {
  state = {
    history: [],
    loading: false,
    message: null,
  }

  componentDidMount() {
    this.fetchHistory()
  }

  fetchHistory = async () => {
    this.setState({
      loading: true,
    })
    try {
      const {data} = await http.getOrderHistory(this.props.auth.token)
      this.setState({
        loading: false,
        message: null,
        history: data.results,
      })
      console.log(data.results)
    } catch (err) {
      this.setState({
        loading: false,
        message: err.response.data.message,
        history: [],
      })
    }
  }

  render() {
    return (
      <Fragment>
        <Row noGuuters>
          {
            this.state.loading ? (
              <Col md={12}>
                <p>Loading ...</p>
              </Col>
            ) : this.state.history.length < 1 ? (
              <Col md={12}>
                <p>{this.state.message}</p>
              </Col>
            ) : (
              this.state.history.map((item, index) => (
                <Col md={12} className="mb-4" key={String(index)}>
                  <Card className={styled.card}>
                    <Card.Header className={`${styled.cardHeader} py-4`}>
                      <Container>
                        <Row>
                          <Col md={6}>
                            <p className={`${styled.time} text-muted`}>
                              <Moment format="dddd, DD MMMM YYYY">
                                {item.showTimeDate}
                              </Moment>
                              {' '}
                              <Moment format="hh:mma">
                                {new Date(
                                  2021,
                                  4,
                                  1,
                                  item.ticketTime.split(':')[0],
                                  item.ticketTime.split(':')[1],
                                  item.ticketTime.split(':')[2],
                                )}
                              </Moment>
                            </p>
                            <h5 className={styled.title}>{item.movieTitle}</h5>
                          </Col>
                          <Col md={6} className="d-flex justify-content-end align-items-center">
                            <Image fluid src={item.cinemaPoster} alt={item.movieTitle} className={styled.img} />
                          </Col>
                        </Row>
                      </Container>
                    </Card.Header>
                    <Card.Body>
                      <Container>
                        <Row>
                          {
                            new Date(item.showTimeDate).getTime() < Date.now() ? (
                              <Col>tn
                                <Button variant="success" disabled className={`${styled.btn} px-4`}>Tickit used</Button>
                              </Col>
                            ) : (
                              <Col>
                                <Button variant="success" className={`${styled.btn} px-4`}>Tickit in active</Button>
                              </Col>
                            )
                          }
                        </Row>
                      </Container>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            )
          }
        </Row>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
})

export const OrderHistory = connect(mapStateToProps, null)(OrderHistoryComponent)