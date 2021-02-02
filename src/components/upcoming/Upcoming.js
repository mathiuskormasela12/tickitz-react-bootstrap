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

export function Upcoming() {
  const months = ['September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August']

  const handleDetail = (e) => {
    e.stopPropagation()
  }

  return (
    <Fragment>
      <div className={`${styled.hero} py-5`}>
        <Container>
          <Row>
            <Col lg={12}>
              <h5 className={`${styled.titleHeroContent}`}>
                Upcoming Movies
              </h5>
            </Col>
          </Row>
          <Row className={`${styled.btnContainer} my-4`}>
            <Col lg={12}>
              <div className={styled.btnWrapper}>
                {
                  months.map((item, index) => (
                    <div key={index}>
                      <Button variant="outline-primary" className="px-4 py-2 mr-3">{item}</Button>
                    </div>
                  ))
                }
              </div>
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
                          <Card.Title className={`${styled.title} font-weight-bold text-dark mb-4`}>Spider-Man:Homecoming</Card.Title>
                          <Card.Text className={`${styled.subtitle} mb-4`}>
                            Acion, Adventure, Sci-FI
                          </Card.Text>
                          <Button variant="outline-primary" className="w-100 mb-3 mt-2" onClick={handleDetail}>Details</Button>
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