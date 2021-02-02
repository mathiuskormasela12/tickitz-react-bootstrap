// import all modules
import React, { Fragment } from 'react';

// Import react bootstrap components
import { 
  Container,
  Row,
  Col,
  Image
} from 'react-bootstrap';

// import scss
import styled from './style.module.scss';

import img from '../../assets/images/hero-img.png';

export function HomeHero() {
  return (
    <Fragment>
      <Container className={`${styled.hero} pt-lg-5 py-5`}>
        <Row className={`${styled.row} align-items-center`}>
          <Col lg={6} md={12} className="text-center text-lg-left mb-4 mb-lg-0">
            <h4 className={`${styled.subtitle} mb-3`}>
              Nearest Cinema, Newest Movie,
            </h4>
            <h2 className={`${styled.title} text-primary`}>
              Find out now!
            </h2>
          </Col>
          <Col lg={6} md={12} className="text-center mt-lg-5 text-lg-left">
            <Image src={img} className="ml-lg-5" fluid />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}