// import all modules
import React, { Fragment } from 'react'

// import react bootstrap component
import { 
  Row,
  Col,
  Card,
  Image,
  Container
} from 'react-bootstrap'

// import SCSS
import styled from './style.module.scss'

// import images
import img from '../../assets/images/heroes1.png'

// import all components

export function MovieDetail() {
  return (
    <Fragment>
      <div className={`${styled.hero} py-5`}>
        <Container>
          <Row>
            <Col lg={3}>
              <Card className={`${styled.card} p-3`}>
                <Card.Body className={styled.cardBody}>
                  <Image src={img} className={styled.img} />
                </Card.Body>
              </Card>
            </Col>
            <Col lg={8} className="ml-3">
              <Row>
                <Col xs={12} className={`mb-3`}>
                  <h3 className={`${styled.title} text-dark`}>Spider-Man: Homecoming</h3>
                  <p className={`${styled.genre} mt-3`}>Adventure, Action, Sci-Fi</p>
                </Col>
                <Col xs={12} className={`${styled.rowLine} py-3 mb-3`}>
                  <Row>
                    <Col xs={5} className={styled.movieDesc}>
                      <p>Release Date</p>
                      <p>June 28, 2017</p>
                    </Col>
                    <Col xs={5} className={styled.movieDesc}>
                      <p>Directed by</p>
                      <p>Jon Watss</p>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col xs={5} className={styled.movieDesc}>
                      <p>Duration</p>
                      <p>2 hours 13 minutes</p>
                    </Col>
                    <Col xs={5} className={styled.movieDesc}>
                      <p>Casts</p>
                      <p>Tom Holland, Michael Keaton, Robert Downey Jr., ...</p>
                    </Col>
                  </Row>
                </Col>
                <Col xs={12}>
                  <h4 className={`${styled.synopsis} text-dark mt-2 mb-3`}>Synopsis</h4>
                  <p className={styled.text}>
                    Thrilled by his experience with the Avengers, 
                    Peter returns home, where he lives with his Aunt May, 
                    under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened. 
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  )
}
  