// import all modules
import React, { Fragment, useState } from 'react'
import { useHistory } from 'react-router-dom'

// import SCSS
import styled from './style.module.scss'

// import all components

// import all images
import tickitz from '../../assets/images/tickitz2.svg';

// import bootstrap components
import {
	Navbar,
	Nav,
  NavDropdown,
  Container,
  Form,
  FormControl,
  Button
} from 'react-bootstrap'

export function MyNavbar(props) {
  const history = useHistory()
  const [show, setShow] = useState(false)

  const handleLogin = () => history.push('/register')

  const push = page => history.push(page)

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
              <Nav.Link href="#home" className={styled.link} onClick={() => push('/')}>Movies</Nav.Link>
              <Nav.Link href="#link" className={styled.link}>Cinemas</Nav.Link>
              <Nav.Link href="#link" className={styled.link}>Buy Ticket</Nav.Link>
            </Nav>
            <NavDropdown title="Locations" id="basic-nav-dropdown" className={`${styled.dropdown} mr-3`}>
              <NavDropdown.Item href="#action/3.1">Jakarta</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Bandung</NavDropdown.Item>
            </NavDropdown>
            { show ? (
              <Form inline>
                <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
              </Form>
            ) : null }
            <div className={`${styled.search} ml-3 ${show ? '' : 'mr-4'}`} onClick={() => setShow(show => !show)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </div>
            <Button variant="primary" className="ml-4 px-4" onClick={handleLogin}>
              Sign Up
            </Button>
          </Navbar.Collapse>
        </Container>
			</Navbar>
		</Fragment>
	)
}

