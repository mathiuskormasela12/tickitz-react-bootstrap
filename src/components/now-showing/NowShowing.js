// import all modules
import React, { Fragment } from 'react';

// Import react bootstrap components
import { 
  Container,
  Row,
  Col,
  Card,
  Button
} from 'react-bootstrap';

// import scss
import styled from './style.module.scss';

import img from '../../assets/images/heroes2.png';

export function NowShowing() {
  const handleDetail = (e) => {
    e.stopPropagation()
  }

  return (
    <Fragment>
      <div className={`${styled.hero} pt-5`}>
        <Container>
          <Row>
            <Col lg={12}>
              <h5 className={`${styled.titleHeroContent} text-primary`}>
                Now Showing
              </h5>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col lg={12} className={styled.hideScroll}>
              <div className={styled.movieWrapper}>
                {
                  [1,2,3,4,5,6,7,8,9,10,].map((item, index) => {
                    return (
                      <Card className={`${styled.card} p-4 mr-4`} key={index}>
                        <Card.Img variant="top" src={img} className={styled.imgCard} />
                        <Card.Body className={`${styled.cardBody} mt-4 text-center`}>
                          <Card.Title className="font-weight-bold text-dark">Spider-Man:Homecoming</Card.Title>
                          <Card.Text>
                            Acion, Adventure, Sci-FI
                          </Card.Text>
                          <Button variant="outline-primary" className="w-100 mb-3" onClick={handleDetail}>Details</Button>
                          <Button variant="primary" className="w-100">Book Now</Button>
                        </Card.Body>
                      </Card>
                    )
                  })
                }
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
}