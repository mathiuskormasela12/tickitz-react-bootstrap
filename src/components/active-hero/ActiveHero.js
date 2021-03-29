// import all modules
import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux'
import { activeAccount } from '../../redux/actions/auth'
import { useLocation, useHistory } from 'react-router-dom'
import Cryptr from 'cryptr'

// Import react bootstrap components
import { 
  Container
} from 'react-bootstrap';

// import scss
import styled from './style.module.scss';

const cryptr = new Cryptr(process.env.REACT_APP_SECRET)

function ActiveHeroComponent(props) {
  const query = new URLSearchParams(useLocation().search);
  const history = useHistory()

  useEffect(() => {
    if(query.get('id') && query.get('email')) {
      props.activeAccount({
        id: query.get('id'),
        email: cryptr.decrypt(query.get('email'))
      })
    } else {
      history.push('/login')
    }
  })
  return (
    <Fragment>
      <div>
        <Container fluid className={`${styled.hero} d-flex justify-content-center align-items-center`}>
          <h1 className="text-white">{!props.message ? 'Loading....' : props.message}</h1>
        </Container>
      </div>
    </Fragment>
  );
}

const mapStateToProps = state => {
  return {
    message: state.message.message
  }
}

const mapDispatchToProps = {
  activeAccount: activeAccount
}

const ActiveHero = connect(mapStateToProps, mapDispatchToProps)(ActiveHeroComponent)
export { ActiveHero };