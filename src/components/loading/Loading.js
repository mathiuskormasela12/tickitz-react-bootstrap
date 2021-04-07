// ===== Loading
import React, {Fragment} from 'react';
import {useSelector} from 'react-redux';

// import react bootstrap component
import {Spinner} from 'react-bootstrap'

import styled from './style.module.scss';

export default function Loading(props) {
  const loading = useSelector(state => state.loading.loading)

  return (
    <Fragment>
      {
        loading ? (
        <div className={props.left ? styled.loadingLeft : styled.loading}>
          <Spinner animation="border" variant="primary" />
        </div>) : (
          props.children
        )
      }
    </Fragment>
  )
}
