import React, { Fragment } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'

// import actions
import { autoLogin } from './redux/actions/auth'

function ProtectedRoutesComponent(props) {
		const Component = props.protectedComponent;
		
		return (
			<Fragment>
				<Route {...props} render={({ location, ...rest}) => {
					if(props.isLogin) {
						return (
							<Component {...rest} />
						)
					} else if(localStorage.getItem('token')) {
						props.autoLogin()

						return (
							<Component {...rest} />
						)
					} else {
						return (
							<Redirect
								to={{
									pathname: '/login',
									state: {
										from: location
									}
								}} 
							/>
						)
					}
				}} />
			</Fragment>
		)
}

const mapStateToProps = state => ({
    isLogin: state.redux.isLogin
})

const mapDispatchToProps = {
	autoLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoutesComponent)