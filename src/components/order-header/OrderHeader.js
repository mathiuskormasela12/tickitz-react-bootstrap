// import all modules
import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

// Import react bootstrap components
import {
  Card
} from 'react-bootstrap';

// import scss
import styled from './style.module.scss';

function OrderHeaderComponent(props) {
  const history = useHistory()
  const back = () => history.push('/')

  return (
    <Fragment>
      <header className={styled.header}>
        <h3 className="mb-4">Movie Selected</h3>
        <Card className={styled.card}>
          <Card.Header className={styled.cardHeader}>
            <h4 className={`${styled.orderTitle}`}>
              {props.results.movieTitle}
            </h4>
            <button className={`${styled.btnOrder} btn`} onClick={back}>
              Change movie
            </button>
          </Card.Header>
        </Card>
      </header>
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  results: state.order
})

export const OrderHeader = connect(mapStateToProps, null)(OrderHeaderComponent)