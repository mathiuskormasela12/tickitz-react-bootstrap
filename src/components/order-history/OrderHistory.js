// ===== OrderHistory
// import all modules
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class OrderHistoryComponent extends Component {
  render() {
    return (
      <Fragment>
        <h1>OrderHistory</h1>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
})

export const OrderHistory = connect(mapStateToProps, null)(OrderHistoryComponent)