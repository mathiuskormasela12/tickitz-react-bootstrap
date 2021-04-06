// ===== Profile 
// import all modules
import React, { Component, Fragment } from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

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

// import all assets
import evamore from '../../assets/images/eva-more.svg';
import star from '../../assets/images/star.svg';

class ProfileContentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: true,
    }

    this.navigate = this.navigate.bind(this);
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
                          <input type="file" className={styled.inputUpload} id="upload" />
                        </label>
                      </Col>
                    </Row>
                  </Card.Header>
                  <Card.Body className={`${styled.cardBody} py-4`}>
                    <Container className="d-flex flex-column align-items-center">
                      <figure>
                        <Image 
                          src={this.props.auth.picture}
                          className={styled.img}
                        />
                      </figure>
                      <figcaption className={`${styled.title} mt-1`}>
                        Mathius
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

export const ProfileContent = withRouter(connect(mapStateToProps, null)(ProfileContentComponent))