// import all modules
import React, { Fragment } from 'react';

// Import react bootstrap components
import {
  Card,
  Container,
  Row,
  Col
} from 'react-bootstrap';

// import scss
import styled from './style.module.scss';

import cine from '../../assets/images/cine.png'

export function OrderSide(props) {
  return (
    <Fragment>
      <aside>
        <h3 className="fs-5 mb-4">Order Info</h3>
        <Card className={`${styled.card} w-100 pt-3`} style={{ height: '100%'}}>
          <Card.Body>
            <Container className="px-2" fluid>
              <Row>
                <Col lg={12} className="text-center mb-3">
                  <img className={`${styled.imgMovie} img-fluid`} alt="Movie" src={ cine }/>
                </Col>
                <Col lg={12} className="text-center">
                  <h5 className="fw-normal">
                    CineOne21 Cinema
                  </h5>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col sm={5} xs={5}>
                  <p className={`${styled.movieSelect} text-muted`}>Movie selected</p>
                </Col>
                <Col sm={7} xs={7}>
                  <p className={`${styled.movieSelect} text-muted font-weight-bold text-right`}>Spider-Man: Homecoming</p>
                </Col>
              </Row>
              <Row>
                <Col sm={6} xs={6}>
                  <p className={`${styled.movieSelect} text-muted`}>Tuesday, 07 July 2020</p>
                </Col>
                <Col sm={6} xs={6}>
                  <p className={`${styled.movieSelect} text-muted font-weight-bold text-right`}>02:00pm</p>
                </Col>
              </Row>
              <Row>
                <Col sm={6} xs={6}>
                  <p className={`${styled.movieSelect} text-muted`}>One ticket price</p>
                </Col>
                <Col sm={6} xs={6}>
                  <p className={`${styled.movieSelect} text-muted font-weight-bold text-right`}>$10</p>
                </Col>
              </Row>
              <Row>
                <Col sm={6} xs={6}>
                  <p className={`${styled.movieSelect} text-muted`}>Seat choosed</p>
                </Col>
                <Col sm={6} xs={6}>
                  <p className={`${styled.movieSelect} text-muted font-weight-bold text-right`}>A1, B1, C3</p>
                </Col>
              </Row>
            </Container>
          </Card.Body>
          <Card.Footer className={`${styled.cardFooter} pt-4`}>
            <Row>
              <Col sm={6} xs={6}>
                <p style={{
                  fontWeight: 'bold'
                }}> 
                  Total Payment
                </p>
              </Col>
              <Col sm={6} xs={6}>
                <p className="text-primary text-right font-weight-bold">
                  $30
                </p>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </aside>
    </Fragment>
  );
}