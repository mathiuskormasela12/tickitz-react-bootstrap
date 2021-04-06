// ===== AccountSettings
// import all modules
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class AccountSettingsComponent extends Component {
  render() {
    return (
      <Fragment>
        <h1>AccountSettings</h1>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
})

export const AccountSettings = connect(mapStateToProps, null)(AccountSettingsComponent)