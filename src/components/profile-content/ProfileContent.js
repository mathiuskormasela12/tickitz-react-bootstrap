// ===== Profile 
// import all modules
import React, { Component, Fragment } from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import Swal from 'sweetalert2'
import http from '../../services/AuthService';

// import all components 
import { HeroGray, OrderHistory, AccountSettings } from '../';

// import react bootstrap components
import { 
  Container,
  Row,
  Col,
  Card,
  Image,
  ProgressBar,
  Nav,
} from 'react-bootstrap';

// import styled 
import styled from './style.module.scss';

import Loading from '../loading-customize/LoadingCustomize';

// import all assets
import evamore from '../../assets/images/eva-more.svg';
import star from '../../assets/images/star.svg';
import user from '../../assets/images/user-big.png'

class ProfileContentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: true,
      picture: null,
      loading: false,
    }

    this.navigate = this.navigate.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.setLoading = this.setLoading.bind(this);
  }

  setLoading() {
    this.setState(currentState => ({
      ...currentState,
      loading: !currentState.loading,
    }))
  }

  navigate(name, page) {
    switch(name) {
      case 'profile': 
        this.setState({
          active: true,
        })
      break;

      default: 
        this.setState({
          active: false,
        })
    }
    this.props.history.push(page);
  }

  async handleUpload(e) {
    const form = new FormData();
    form.append('poster', e.target.files[0])
    
    if(!e.target.files[0].type.startsWith('image/')) {
      return Swal.fire({
        title: 'Failed',
        text: 'You only upload image file',
        icon: 'warning'
      })
    } else if((e.target.files[0].size / 1024 / 1024) > 3) {
      return Swal.fire({
        title: 'Failed',
        text: 'Your image too large',
        icon: 'warning'
      })
    }

    this.setLoading();

    try {
      const {data: {message}} = await http.uploadPhoto(this.props.auth.token, form)
      const {data} = await http.getUserDetail(this.props.auth.token)

      this.props.dispatch({
        type: 'SET_USER_DATA',
        payload: {
          id: data.results.id,
          firstName: data.results.first_name,
          lastName: data.results.last_name,
          email: data.results.email,
          phoneNumber: data.results.phone,
          picture: data.results.poster,
        },
      })

      this.setLoading();

      Swal.fire({
        title: 'Success',
        text: message,
        icon: 'success'
      })
    } catch (err) {
      this.setLoading();

      Swal.fire({
        title: 'Failed',
        text: err.response.data.message,
        icon: 'error'
      })
    }
  }

  render() {
    return (
      <Fragment>
        <HeroGray>
          <Container className={`${styled.hero} pt-lg-5 py-5`}>
            <Row noGutters>
              <Col lg={3}>
                <Card className={`${styled.card}`}>
                  <Card.Header className={`${styled.cardHeader} py-4 px-4`}>
                    <Row noGutters className="justify-content-between">
                      <Col md={5}>
                        <p className={styled.textInfo}>Info</p>
                      </Col>
                      <Col md={5} className="text-right">
                        <label className={styled.upload} htmlFor="upload">
                          <Image src={evamore} fluid alt="Upload Button" />
                        </label>
                        <input type="file" className={styled.inputUpload} id="upload" onChange={this.handleUpload} />
                      </Col>
                    </Row>
                  </Card.Header>
                  <Card.Body className={`${styled.cardBody} py-4`}>
                    <Container className="d-flex flex-column align-items-center">
                      <figure>
                        <Loading loading={this.state.loading}>
                          <Image 
                            src={this.props.auth.picture ? this.props.auth.picture : user}
                            className={styled.img}
                            fluid
                          />
                        </Loading>
                      </figure>
                      <figcaption className={`${styled.title} mt-1`}>
                        {
                          this.props.auth.firstName ? this.props.auth.lastName ? this.props.auth.firstName.concat(' ', this.props.auth.lastName) : this.props.auth.firstName : '-'
                        }
                      </figcaption>
                      <figcaption className={`${styled.subtitle} mt-1`}>
                        Moviegoers
                      </figcaption>
                    </Container>
                  </Card.Body>
                  <Card.Body className={`${styled.cardFooter} pt-4 pb-5`}>
                    <Row>
                      <Col md={12}>
                        <Row className="justify-content-center">
                          <Col lg={11}>
                            <p className={styled.loyaltyPoint}>Loyalty Points</p>
                          </Col>
                        </Row>
                        <Row className="justify-content-center">
                          <Col md={11}>
                            <Card className={`${styled.cardMovigoers} py-3 px-3 position-relative`}>
                              <Image src={star} fluid className={styled.star} />
                              <span className={`${styled.baloon} ${styled.first}`}></span>
                              <span className={`${styled.baloon} ${styled.last}`}></span>
                              <p className={styled.titleMovigoers}>Moviegoers</p>
                              <p className={styled.point}>
                                420
                                <span className={styled.pointText}>Points</span>
                              </p>
                            </Card>
                          </Col>
                        </Row>
                        <Row className="justify-content-center mt-4">
                          <Col lg={11}>
                            <p className={`${styled.progressText} text-muted text-center`}>180 points become a master</p>
                            <ProgressBar now={60} className={styled.progress} />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={9}>
                <Row noGutters className="pl-5">
                  <Col md={12}>
                    <Nav as="ul" className={`${styled.nav} px-2`}>
                      <Nav.Item as="li" className={`${this.state.active && styled.active} ${styled.item}`}>
                        <Nav.Link onClick={() => this.navigate('profile', '/profile')} className={`${styled.link} ${this.state.active && styled.active}`}>Account Settings</Nav.Link>
                      </Nav.Item> 
                      <Nav.Item as="li" className={`${!this.state.active && styled.active} ${styled.item}`}>
                        <Nav.Link onClick={() => this.navigate('order-history', '/profile/order-history')} className={`${styled.link} ${!this.state.active && styled.active}`}>Order History</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col md={12} className="mt-4">
                    <Switch>
                      <Route exact path="/profile"> 
                        <AccountSettings />
                      </Route>
                      <Route path="/profile/order-history"> 
                        <OrderHistory />
                      </Route>
                    </Switch>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </HeroGray>
      </Fragment>
    );
  }
}

const mapStateToProps = states => ({
  auth: states.auth,
})

const mapDispatchToProps = dispatch => ({
  dispatch
})

export const ProfileContent = withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileContentComponent))