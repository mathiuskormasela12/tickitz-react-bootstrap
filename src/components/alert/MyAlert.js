import React from 'react'
import { connect } from 'react-redux'
import { closeAlert } from '../../redux/actions/alert'
import { Alert } from 'react-bootstrap'

function MyAlert(props) {

  if (props.message) {
    return (
      <Alert variant={props.variant} onClose={() => props.closeAlert()} dismissible>
        {props.message}
      </Alert>
    );
  } else {
    return null
  }
}
  
const mapDispatchToProps = {
  closeAlert
}

export default connect(null, mapDispatchToProps)(MyAlert)