// import all modules
import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { getUpcomingMovies } from '../../redux/actions/home'

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

function UpcomingMovieComponent(props) {
  const months = ['September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August']
  const { getUpcomingMovies } = props
  const [month, setMonth] = useState('september')

  const handleDetail = (e) => {
    e.stopPropagation()
  }
  
  useEffect(() => {
    getUpcomingMovies(month)
  }, [getUpcomingMovies, month])

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
                      <Button variant="outline-primary" className="px-4 py-2 mr-3" value={item.toLowerCase()} onClick={(e) => setMonth(month => e.target.value)}>{item}</Button>
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
                  props.upcoming.map((item, index) => {
                    return (
                      <Card className={`${styled.card} p-4 mr-4`} key={index}>
                        <Card.Img variant="top" src={item.poster} className={styled.imgCard} />
                        <Card.Body className={`${styled.cardBody} mt-4 text-center`}>
                          <Card.Title className={`${styled.title} font-weight-bold text-dark mb-4`}>{item.title}</Card.Title>
                          <Card.Text className={`${styled.subtitle} mb-4`}>
                            {item.genres}
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

// const mapStateProps = state => ({
//   ...state
// })

const mapStateToProps = state => ({
  upcoming: state.redux.upcoming,
  isLoading: state.redux.isLoading,
  success: state.redux.success
})

const mapDispatchToProps = {
  getUpcomingMovies
}

export const Upcoming = connect(mapStateToProps, mapDispatchToProps)(UpcomingMovieComponent)