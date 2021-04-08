// ===== Movies
// import all modules
import React, {Fragment, Component} from 'react';
import { 
  IoSearchOutline,
  IoArrowDownOutline,
  IoArrowUpOutline,
} from "react-icons/io5";
import http from '../../services/AuthService';

// import bootstrap components
import {
  Container,
  Row,
  Col,
  Form,
  Card,
  Button,
} from 'react-bootstrap';

// import styled
import styled from './style.module.scss';

export class Movies extends Component {
  state = {
    isASC: true,
    keyword: '',
    by: 'id',
    movies: [],
    loading: false,
    message: null,
    page: 1,
    prevLink: null,
    nextLink: null,
  }

  componentDidMount() {
    this.handleFetch()
  }

  handleInput = (name, e) => {
    this.setState({
      [name]: e.target.value,
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if(
        (this.state.isASC !== prevState.isASC) || 
        (this.state.keyword !== prevState.keyword) || 
        (this.state.by !== prevState.by) || 
        (this.state.page !== prevState.page)
      ) {
      this.handleFetch()
    }
  }

  handleASC = () => {
    this.setState(currentState => ({
      isASC: !currentState.isASC,
    }))
  }

  handleFetch = async () => {
    this.setState({
      loading: true,
    })

    try {
      const {data} = await http.getAllMovies({
        by: this.state.by,
        search: this.state.keyword,
        page: this.state.page,
        sort: this.state.isASC ? 'ASC' : 'DESC',
      })

      this.setState({
        message: null,
        loading: false,
        movies: data.results,
        prevLink: data.pageInfo.previousMovie,
        nextLink: data.pageInfo.nextMovie,
      })
    } catch (err) {
      this.setState({
        message: err.response.data.message,
        loading: false,
        movies: [],
        prevLink: null,
        nextLink: null,
      })
    }
  }

  handleDetail = (e, id) => {
    e.stopPropagation()
    this.props.history.push('/details/' + id)
  }

  handleNextPage = () => {
    this.setState((current) => ({
      ...current,
      page: Number(current.page) + 1,
    }));
  };

  handlePrevPage = () => {
    this.setState((current) => ({
      ...current,
      page: Number(current.page) - 1,
    }));
  };

  render() {
    return (
      <Fragment>
        <div className={`${styled.hero} py-5`}>
          <Container>
            <Row className="mb-4">
              <Col>
                <h1 className={`${styled.title} text-center`}>All Movies</h1>
              </Col>
            </Row>
            <Form  className="mb-2">
              <Row className="justify-content-center">
                <Col md={3}>
                  <Form.Group controlId="search" className="position-relative">
                    <Form.Control type="search" className={styled.input} placeholder="Search movie..." value={this.state.keyword} onChange={e => this.handleInput('keyword', e)} />
                    <IoSearchOutline className={styled.searchIcon} />
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group className="position-relative">
                    <Form.Control as="select" id="select" className={`${styled.select}`} onChange={e => this.handleInput('by', e)} value={this.state.by}>
                      <option value="id">ID</option>   
                      <option value="title">Movie Name</option>
                      <option value="releaseDate">Release Date</option>
                      <option value="duration">Duration</option>
                    </Form.Control>
                    {
                      this.state.isASC ? (
                        <IoArrowDownOutline className={styled.arrowIcon} onClick={this.handleASC} />
                      ) : (
                        <IoArrowUpOutline className={styled.arrowIcon} onClick={this.handleASC} />
                      )
                    }
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mt-5">
                {
                  this.state.loading ? (
                    <p>Loading...</p>
                  ) : this.state.movies.length > 0 ? (
                    this.state.movies.map((item, index) => (
                      <Col md={3} key={String(index)}>
                        <Card className={`${styled.card} p-4 mr-4`} key={index}>
                          <Card.Img variant="top" src={item.poster} className={styled.imgCard} />
                          <Card.Body className={`${styled.cardBody} mt-4 text-center`}>
                            <Card.Title className={`${styled.title} font-weight-bold text-dark mb-4`}>{item.title}</Card.Title>
                            <Card.Text className={`${styled.subtitle} text-capitalize mb-4`}>
                              {item.genres}
                            </Card.Text>
                            <Button variant="outline-primary" className="w-100 mb-3 mt-2" onClick={e => this.handleDetail(e, item.id)}>Details</Button>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))
                  ) : (
                    <p>{this.state.message}</p>
                  )
                }
              </Row>
            </Form>
            <Row className="mt-5">
              {
                this.state.prevLink && (
                  <Col md={12} className="mb-3">
                    <Row>
                      <Col xs={5}>
                        <hr />
                      </Col>
                      <Col xs={2} className={`${styled.view} text-center text-primary`} onClick={this.handlePrevPage}>
                        Previous Page
                      </Col>
                      <Col xs={5}>
                        <hr />
                      </Col>
                    </Row>
                  </Col>
                )
              }
              {
                this.state.nextLink && (
                  <Col md={12}>
                    <Row>
                      <Col xs={5}>
                        <hr />
                      </Col>
                      <Col xs={2} className={`${styled.view} text-center text-primary`} onClick={this.handleNextPage}>
                        Next Page
                      </Col>
                      <Col xs={5}>
                        <hr />
                      </Col>
                    </Row>
                  </Col>
                )
              }
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}