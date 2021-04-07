// ===== Loading
import React, {Fragment} from 'react';

// import react bootstrap component
import {Spinner} from 'react-bootstrap'

import styled from './style.module.scss';

export default function LoadingCustomize(props) {
  return (
    <Fragment>
      {
        props.loading ? (
        <div className={props.left ? styled.loadingLeft : styled.loading}>
          <Spinner animation="border" variant="primary" />
        </div>) : (
          props.children
        )
      }
    </Fragment>
  )
}
