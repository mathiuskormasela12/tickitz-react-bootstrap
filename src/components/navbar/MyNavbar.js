// import all modules
import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

// import SCSS
import styled from './style.module.scss'

// import actions
import { logout } from '../../redux/actions/auth';

// import all images
import tickitz from '../../assets/images/tickitz2.svg';
import user from '../../assets/images/user.png'

// import bootstrap components
import {
	Navbar,
	Nav,
  NavDropdown,
  Container,
  Button,
  Image
} from 'react-bootstrap'

function MyNavbarComponent(props) {
  const history = useHistory()

  const handleHistory = path => history.push(path)

  const push = page => history.push(page)
  
  const logout = () => {
    props.logout()
  }

	return (
		<Fragment>
			<Navbar bg="light" expand="lg" className={`${styled.nav} py-4 w-100 ${props.abs ? 'position-static' : ''}`}>
        <Container>
          <Navbar.Brand href="#home" className="mr-5">
            <img
              alt="Tickitz"
              src={tickitz}
              className={`${styled.brand} d-inline-block align-top`}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="ml-4">
            <Nav className="mr-auto">
              <Nav.Link className={styled.link} onClick={() => push('/')}>Home</Nav.Link>
              <Nav.Link className={styled.link} href="#now-showing">Movies</Nav.Link>
              <Nav.Link className={styled.link}>Buy Ticket</Nav.Link>
            </Nav>
            {
              props.token ? (
                <NavDropdown title={<Image src={user} fluid />} id="collasible-nav-dropdown" className={styled.dropdownArrow}>
                  <NavDropdown.Item onClick={() => handleHistory('/profile')}>Profile</NavDropdown.Item>
                  <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Button variant="primary" className="ml-4 px-4" onClick={() => handleHistory('/register')}>
                  Sign Up
                </Button>
              )
            }
          </Navbar.Collapse>
        </Container>
			</Navbar>
		</Fragment>
	)
}

const mapStateToprops = state => ({
  token: state.auth.token
})

const mapDispatchToProps = {
  logout,
}

export const MyNavbar = connect(mapStateToprops, mapDispatchToProps)(MyNavbarComponent)