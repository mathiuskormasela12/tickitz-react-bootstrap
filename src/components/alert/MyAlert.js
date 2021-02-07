import React from 'react'
import { connect } from 'react-redux'
import { closeAlert } from '../../redux/actions/alert'
import { Alert } from 'react-bootstrap'

function MyAlert(props) {

  if (props.message.length > 0) {
    return (
      <Alert variant={props.variant} onClose={() => props.closeAlert()} dismissible>
        {props.message}
      </Alert>
    );
  } else {
    return null
  }
}
  
const mapStateToProps = state => {
  return {
    message: state.redux.message
  }
}

const mapDispatchToProps = {
  closeAlert
}

export default connect(mapStateToProps, mapDispatchToProps)(MyAlert)