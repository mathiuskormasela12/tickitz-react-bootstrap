import auth from '../../services/AuthService'

export const register = (email, password, passwordConfirm) => {
	return async dispatch => {
		try {
				const formData = new FormData()
				formData.append('email', email)
				formData.append('password', password)
				formData.append('password_confirm', passwordConfirm)
				formData.append('role', 'user')
				
				const response = await auth.register(formData)
				dispatch({
						type: 'REGISTER',
						message: response.data.message,
						success: response.data.success
				})
		} catch(err) {
				dispatch({
						type: 'REGISTER',
						message: err.response.data.message,
						success: false
				})
		}
	}
}

export const login = (email, password) => {
	return async dispatch => {
		try {
				const formData = new FormData()
				formData.append('email', email)
				formData.append('password', password)
				
				const response = await auth.login(formData)
				localStorage.setItem('token', response.data.results.token)
				dispatch({
						type: 'LOGIN',
						message: response.data.message,
						success: response.data.success,
						token: response.data.results.token
				})
		} catch(err) {
				dispatch({
						type: 'LOGIN',
						message: err.response.data.message,
						success: false,
						token: null
				})
		}
	}
}

export const activeAccount = ({ id,email }) => {
	return async dispatch => {
		try {	
				const response = await auth.activeAccount(id, email)
				console.log('response data', response)
				dispatch({
						type: 'ACTIVEACCOUNT',
						message: response.data.message,
						success: response.data.success
				})
		} catch(err) {
			console.log(err)
				dispatch({
						type: 'ACTIVEACCOUNT',
						message: err.response.data.message,
						success: false
				})
		}
	}
}

export const sendForgotPasswordLink = (email) => {
	return async dispatch => {
		try {	
				const response = await auth.sendForgotPasswordLink(email)
				console.log('response data', response)
				dispatch({
						type: 'SEND_FORGOT_PASSWORD_LINK',
						message: response.data.message,
						success: response.data.success
				})
		} catch(err) {
			console.log(err)
				dispatch({
						type: 'SEND_FORGOT_PASSWORD_LINK',
						message: err.response.data.message,
						success: false
				})
		}
	}
}