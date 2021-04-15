// import all modules
import React, { Fragment, useEffect} from 'react';
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { getNowShowing } from '../../redux/actions/home'
import { setLoading } from '../../redux/actions/loading'

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

export function NowShowingComponent(props) {
  const history = useHistory()
  const { getNowShowing } = props

  useEffect(() => {
    getNowShowing()
  }, [getNowShowing])

  const handleDetail = (e, id) => {
    e.stopPropagation()
    history.push('/details/' + id)
  }

  return (
    <Fragment>
      <div className={`${styled.hero} pt-5`} id="now-showing">
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
                  props.isLoading ? (
                    <p>Please wait ...</p>
                  ) : (
                    props.movieShowing.length > 0 ? (
                      props.movieShowing.map((item, index) => {
                        return (
                          <Card className={`${styled.card} p-4 mr-4`} key={index}>
                            <Card.Img variant="top" src={item.poster} className={styled.imgCard} />
                            <Card.Body className={`${styled.cardBody} mt-4 text-center`}>
                              <Card.Title className={`${styled.title} font-weight-bold text-dark mb-4`}>{item.title}</Card.Title>
                              <Card.Text className={`${styled.subtitle} mb-4`}>
                                {item.genres}
                              </Card.Text>
                              <Button variant="outline-primary" className="w-100 mb-3" onClick={e => handleDetail(e, item.id)}>Details</Button>
                              <Button variant="primary" className="w-100">Book Now</Button>
                            </Card.Body>
                          </Card>
                        )
                      })
                    ) : (
                      <h5>There is not movie at this month</h5>
                    )
                  )
                }
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
}

const mapStateToProps = state => {
  return {
    movieShowing: state.redux.movieShowing,
    isLoading: state.redux.isLoading,
    success: state.redux.successNowShowing
  }
}

const mapDispatchToProps = {
  getNowShowing,
  setLoading
}

export const NowShowing = connect(mapStateToProps, mapDispatchToProps)(NowShowingComponent)
