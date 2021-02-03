// import all modules
import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'

// import actions
import { getMovieDetails } from '../../redux/actions/movieDetails'

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

// import all components

function MovieDetailComponent(props) {
  const { getMovieDetails } = props
  useEffect(() => {
    getMovieDetails(props.id)
  }, [getMovieDetails, props.id])
  console.log(props)
  return (
    <Fragment>
      <div className={`${styled.hero} py-5`}>
        <Container>
          <Row>
            <Col lg={3}>
              <Card className={`${styled.card} p-3`}>
                <Card.Body className={styled.cardBody}>
                  <Image src={props.results.poster} className={styled.img} alt={props.results.title}/>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={8} className="ml-3">
              <Row>
                <Col xs={12} className={`mb-3`}>
                  <h3 className={`${styled.title} text-dark`}>{props.results.title}</h3>
                  <p className={`${styled.genre} mt-3`}>{props.results.genres}</p>
                </Col>
                <Col xs={12} className={`${styled.rowLine} py-3 mb-3`}>
                  <Row>
                    <Col xs={5} className={styled.movieDesc}>
                      <p>Release Date</p>
                      <p>{props.results.releaseDate}</p>
                    </Col>
                    <Col xs={5} className={styled.movieDesc}>
                      <p>Directed by</p>
                      <p>{props.results.direct}</p>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col xs={5} className={styled.movieDesc}>
                      <p>Duration</p>
                      <p>{props.results.duration}</p>
                    </Col>
                    <Col xs={5} className={styled.movieDesc}>
                      <p>Casts</p>
                      <p>{props.results.casts}</p>
                    </Col>
                  </Row>
                </Col>
                <Col xs={12}>
                  <h4 className={`${styled.synopsis} text-dark mt-2 mb-3`}>Synopsis</h4>
                  <p className={styled.text}>
                  {props.results.synopsis}
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
  
const mapStateToProps = state => {
  console.log('INI')
  console.log(state)
  return {
    success: state.redux.successMovieDetails,
    results: state.redux.movieDetails
  }
}

const mapDispatchToProps = {
  getMovieDetails
}

export const MovieDetail = connect(mapStateToProps, mapDispatchToProps)(MovieDetailComponent)