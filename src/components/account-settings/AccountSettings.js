// ===== AccountSettings
// import all modules
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Swal from 'sweetalert2'
import http from '../../services/AuthService';

// import react bootstrap component
import {
  Card,
  Form,
  Col,
  Button,
  InputGroup,
  FormControl,
  Row,
} from 'react-bootstrap';

// import all components
import Loading from '../loading-customize/LoadingCustomize';

// import styled 
import styled from './style.module.scss';

class AccountSettingsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: this.props.auth.firstName,
      lastName: this.props.auth.lastName,
      email: this.props.auth.email,
      phoneNumber: this.props.auth.phoneNumber,
      password: '',
      repeatPassword: '',
      passwordMessage: null,
      repeatPasswordMessage: null,
      emailMessage: null,
      phoneNumberMessage: null,
      show: false,
      showSecond: false,
      firstLoading: false,
      lastLoading: false,
    }

    this.handleInput = this.handleInput.bind(this);
    this.showPassword = this.showPassword.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
    this.setLoading = this.setLoading.bind(this);
  }

  setLoading(name) {
    this.setState(currentState => ({
      ...currentState,
      [name]: !currentState[name],
    }))
  }

  async saveChanges(e, name) {
    e.preventDefault();
    
    switch (name) {
      case 'ACCOUNT_SETTINGS':
        const form = new URLSearchParams();
        form.append('first_name', this.state.firstName)
        form.append('last_name', this.state.lastName)
        form.append('email', this.state.email)
        form.append('phone', this.state.phoneNumber)

        this.setLoading('firstLoading');

        try {
          const {data: {message}} = await http.editUser(this.props.auth.token, form)
          const {data} = await http.getUserDetail(this.props.auth.token)

          this.props.dispatch({
            type: 'SET_USER_DATA',
            payload: {
              id: data.results.id,
              firstName: data.results.first_name,
              lastName: data.results.last_name,
              email: data.results.email,
              phoneNumber: data.results.phone,
              picture: data.results.poster,
            },
          })
          this.setLoading('firstLoading');
          Swal.fire({
            title: 'Success',
            text: message,
            icon: 'success'
          })
        } catch (err) {
          this.setLoading('firstLoading');

          Swal.fire({
            title: 'Failed',
            text: err.response.data.message,
            icon: 'error'
          })
        }
        break;
        
      case 'EDIT_PASSWORD': 
        this.setLoading('lastLoading');

        try {
          const {data: {message}} = await http.editPassword(this.props.auth.id, this.props.auth.email, this.state.password)

          this.setLoading('lastLoading');
          Swal.fire({
            title: 'Success',
            text: message,
            icon: 'success'
          })
        } catch (err) {
          this.setLoading('lastLoading');

          Swal.fire({
            title: 'Failed',
            text: err.response.data.message,
            icon: 'error'
          })
        }
      break;

      default:
        break;
    }
  }

  showPassword(name) {
    if(name === 'first') {
      this.setState((currentState) => ({
        ...currentState,
        show: !currentState.show
      }))
    } else {
      this.setState((currentState) => ({
        ...currentState,
        showSecond: !currentState.showSecond,
      }))
    }
  }

  handleInput(e, prop) {
    if(prop === 'phoneNumber') {
      if(e.target.value.match(/\D/gi) !== null) {
        this.setState((currentState) => ({
          ...currentState,
          phoneNumberMessage: 'Incorrect phone number',
        }))
      } else {
        this.setState((currentState) => ({
          ...currentState,
          phoneNumberMessage: null,
        }))
      }
    } else if(prop === 'email') {
      if ( 
        e.target.value.match(/[^@$a-z0-9.]/gi) ||
        !e.target.value.match(/@\b/g) ||
        e.target.value.match(/\s/) ||
        e.target.value.match(/\b[0-9]/) ||
        !e.target.value.split('@').pop().includes('.')
      ) {
        this.setState((currentState) => ({
          ...currentState,
          emailMessage: 'Incorrect email',
        }))
      } else {
        this.setState((currenState) => ({
          ...currenState,
          emailMessage: null,
        }))
      }
    } else if(prop === 'password') {
      if (
        e.target.value.length > 15 ||
        e.target.value.length < 5
      ) {
        this.setState((currentState) => ({
          ...currentState,
          passwordMessage: 'Password min 5 character and max 15 character',
        }))
      } else if (
        e.target.value.match(/[a-z]/g) === null ||
        e.target.value.match(/\d/g) === null ||
        e.target.value.match(/[A-Z]/g) === null ||
        e.target.value.match(/[^a-z0-9]/gi) === null
      ) {
        this.setState((currentState) => ({
          ...currentState,
          passwordMessage: 'Password must include lower case and uppercase letters, numbers and symbol',
        }))
    
      } else {
        this.setState((currenState) => ({
          ...currenState,
          passwordMessage: null,
        }))
      }
    } else if(prop === 'repeatPassword') {
      if (
        e.target.value.length > 15 ||
        e.target.value.length < 5
      ) {
        this.setState((currentState) => ({
          ...currentState,
          repeatPasswordMessage: 'Repeat password min 5 character and max 15 character',
        }))
      } else if (
        e.target.value.match(/[a-z]/g) === null ||
        e.target.value.match(/\d/g) === null ||
        e.target.value.match(/[A-Z]/g) === null ||
        e.target.value.match(/[^a-z0-9]/gi) === null
      ) {
        this.setState((currentState) => ({
          ...currentState,
          repeatPasswordMessage: 'Repeat password must include lower case and uppercase letters, numbers and symbol',
        }))
    
      } else if(this.state.password !== e.target.value) {
        this.setState((currentState) => ({
          ...currentState,
          repeatPasswordMessage: 'Password does not match',
        }))
      } else {
        this.setState((currenState) => ({
          ...currenState,
          repeatPasswordMessage: null,
        }))
      }
    }
    this.setState(currentState => ({
      ...currentState,
      [prop]: e.target.value
    }))
  }

  render() {
    return (
      <Fragment>
        <Row>
          <Col md={12} className="mb-4">
            <Card className={`${styled.card} px-2 py-3 mt-4`}>
              <Card.Body>
                <header className={`${styled.cardHeader}`}>
                  <p className={styled.headerTitle}>Details Information</p>
                </header>
                <main className="mt-3">
                <Form>
                  <Form.Row className="justify-content-between mb-4">
                    <Col md={6}>
                      <Form.Label className="mb-3" htmlFor="firstname">First Name</Form.Label>
                      <Form.Control 
                        type="text" id="firstname" 
                        className={`${styled.controlSize} ${this.state.firstName && `is-${!this.state.firstNameMessage ? 'valid' : 'invalid'}`}`}  
                        placeholder="Enter your first name" 
                        value={this.state.firstName} 
                        onChange={(e) => this.handleInput(e, 'firstName')}
                      />
                    </Col>
                    <Col md={6}>
                      <Form.Label className="mb-3" htmlFor="lastname">Last Name</Form.Label>
                      <Form.Control 
                        type="text" 
                        id="lastname" 
                        className={`${styled.controlSize} ${this.state.lastName && `is-${!this.state.lastNameMessage ? 'valid' : 'invalid'}`}`} 
                        placeholder="Enter your last name" 
                        value={this.state.lastName} 
                        onChange={(e) => this.handleInput(e, 'lastName')}
                      />
                    </Col>
                  </Form.Row>
                  <Form.Row className="justify-content-between">
                    <Col md={6}>
                      <Form.Label className="mb-3" htmlFor="email">Email</Form.Label>
                      <Form.Control 
                        type="email" 
                        id="email" 
                        className={`${styled.controlSize} ${this.state.email && `is-${!this.state.emailMessage ? 'valid' : 'invalid'}`}`} 
                        placeholder="Enter your email" 
                        value={this.state.email} 
                        onChange={(e) => this.handleInput(e, 'email')}
                      />
                      {
                        (this.state.emailMessage) && (
                          <div className="invalid-feedback">
                            {this.state.emailMessage}
                          </div>
                        )
                      }
                    </Col>
                    <Col md={6}>
                      <Form.Label className="mb-3" htmlFor="phoneNumber">Phone Number</Form.Label>
                      <InputGroup className="mb-2">
                        <InputGroup.Prepend>
                          <InputGroup.Text className={`${styled.hideAppend} ${this.state.phoneNumber && `${!this.state.phoneNumberMessage ? `${styled.hideAppendValid}` : `${styled.hideAppendInvalid}`}`}`}>+62</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl 
                          id="phoneNumber" 
                          className={`${styled.controlSize} ${this.state.phoneNumber && `is-${!this.state.phoneNumberMessage ? 'valid' : 'invalid'}`}`} 
                          placeholder="Enter your phone number" 
                          value={this.state.phoneNumber} 
                          onChange={(e) => this.handleInput(e, 'phoneNumber')}
                        />
                        {
                        (this.state.phoneNumberMessage) && (
                          <div className="invalid-feedback">
                            {this.state.phoneNumberMessage}
                          </div>
                        )
                      }
                      </InputGroup>
                    </Col>
                  </Form.Row>
                  <Loading left={true} loading={this.state.firstLoading}>
                    {
                      !this.state.emailMessage && this.state.email !== '' && this.state.phoneNumber !== '' && !this.state.phoneNumberMessage && this.state.firstName !== '' ? (
                        <Button variant="primary" onClick={(e) => this.saveChanges(e, 'ACCOUNT_SETTINGS')} type="submit" className={`${styled.controlSize} mt-3`}>
                          Save Changes
                        </Button>
                      ) : (
                        <Button variant="primary" disabled type="submit" className={`${styled.controlSize} mt-3`}>
                          Save Changes
                        </Button>
                      )
                    }
                  </Loading>
                </Form>
                </main>
              </Card.Body>
            </Card>
          </Col>
          <Col md={12}>
            <Card className={`${styled.card} px-2 py-3 mt-4`}>
              <Card.Body>
                <header className={`${styled.cardHeader}`}>
                  <p className={styled.headerTitle}>Account and Privacy</p>
                </header>
                <main className="mt-3">
                <Form>
                  <Form.Row className="justify-content-between mb-4">
                    <Col md={6}>
                      <Form.Label className="mb-3">Password</Form.Label>
                      <InputGroup className="mb-3" hasValidation>
                        <FormControl
                          type={ this.state.show ? 'text' : 'password'}
                          className={`${styled.controlSize} ${styled.hideBorderLeft} ${this.state.password && `is-${!this.state.passwordMessage ? 'valid' : 'invalid'}`}`}
                          placeholder="Enter your password"
                          onChange={e => this.handleInput(e, 'password')}
                          required
                          value={this.state.password}
                        />
                        <InputGroup.Prepend>
                          <InputGroup.Text id="basic-addon2" 
                            className={`${styled.hideAppendPassword} ${this.state.password && `${!this.state.passwordMessage ? `${styled.hideAppendPasswordValid}` : `${styled.hideAppendPasswordInvalid}`}`}`}>
                            {
                              this.state.show ? (
                                <Fragment>
                                  <div onClick={() => this.showPassword('first')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#5F2EEA" className={`bi bi-eye-slash ${styled.eye}`} viewBox="0 0 16 16">
                                      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
                                      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299l.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
                                      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884l-12-12 .708-.708 12 12-.708.708z"/>
                                    </svg>
                                  </div>
                                </Fragment>
                              ) : (
                                <Fragment>
                                  <div onClick={() => this.showPassword('first')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#A0A3BD" className={`bi bi-eye ${styled.eye}`} viewBox="0 0 16 16">
                                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                                    </svg>
                                  </div>     
                                </Fragment>
                              )
                            }
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        {
                          (this.state.passwordMessage) && (
                            <div className="invalid-feedback">
                              {this.state.passwordMessage}
                            </div>
                          )
                        }
                      </InputGroup>
                    </Col>
                    <Col md={6}>
                      <Form.Label className="mb-3">Repeat Password</Form.Label>
                      <InputGroup className="mb-3" hasValidation>
                        <FormControl
                          type={ this.state.showSecond ? 'text' : 'password'}
                          className={`${styled.controlSize} ${styled.hideBorderLeft} ${this.state.repeatPassword && `is-${!this.state.repeatPasswordMessage ? 'valid' : 'invalid'}`}`}
                          placeholder="Enter your repeat password"
                          onChange={e => this.handleInput(e, 'repeatPassword')}
                          required
                          value={this.state.repeatPassword}
                        />
                        <InputGroup.Prepend>
                          <InputGroup.Text id="basic-addon2" 
                            className={`${styled.hideAppendPassword} ${this.state.repeatPassword && `${!this.state.repeatPasswordMessage ? `${styled.hideAppendrepeatPasswordValid}` : `${styled.hideAppendRepeatPasswordInvalid}`}`}`}>
                            {
                              this.state.showSecond ? (
                                <Fragment>
                                  <div onClick={() => this.showPassword('last')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#5F2EEA" className={`bi bi-eye-slash ${styled.eye}`} viewBox="0 0 16 16">
                                      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
                                      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299l.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
                                      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884l-12-12 .708-.708 12 12-.708.708z"/>
                                    </svg>
                                  </div>
                                </Fragment>
                              ) : (
                                <Fragment>
                                  <div onClick={() => this.showPassword('last')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#A0A3BD" className={`bi bi-eye ${styled.eye}`} viewBox="0 0 16 16">
                                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                                    </svg>
                                  </div>     
                                </Fragment>
                              )
                            }
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        {
                          (this.state.repeatPasswordMessage) && (
                            <div className="invalid-feedback">
                              {this.state.repeatPasswordMessage}
                            </div>
                          )
                        }
                      </InputGroup>
                    </Col>
                  </Form.Row>
                  <Loading left={true} loading={this.state.lastLoading}>
                    {
                      !this.state.passwordMessage && this.state.password !== '' && !this.state.repeatPasswordMessage && this.state.repeatPassword !== '' ? (
                        <Button variant="primary" onClick={(e) => this.saveChanges(e, 'EDIT_PASSWORD')} type="submit" className={`${styled.controlSize} mt-3`}>
                          Save Changes
                        </Button>
                      ) : (
                        <Button variant="primary" disabled type="submit" className={`${styled.controlSize} mt-3`}>
                          Save Changes
                        </Button>
                      )
                    }
                  </Loading>
                  
                </Form>
                </main>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
})

const mapDispatchToProps = (dispatch) => ({
  dispatch,
})

export const AccountSettings = connect(mapStateToProps, mapDispatchToProps)(AccountSettingsComponent)