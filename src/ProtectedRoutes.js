import React, { Fragment } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'

function ProtectedRoutesComponent(props) {
		const Component = props.protectedComponent;
		
		return (
			<Fragment>
				<Route {...props} render={({ location, ...rest}) => {
					if(props.token) {
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
    token: state.auth.token
})

export default connect(mapStateToProps, null)(ProtectedRoutesComponent)