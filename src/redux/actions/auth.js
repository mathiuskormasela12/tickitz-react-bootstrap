import auth from '../../services/AuthService'

export const register = (email, password, passwordConfirm) => {
	return async dispatch => {
		dispatch({
			type: 'SET_LOADING',
		})
		try {
				const formData = new FormData()
				formData.append('email', email)
				formData.append('password', password)
				formData.append('password_confirm', passwordConfirm)
				formData.append('role', 'user')
				
				const response = await auth.register(formData)
				dispatch({
					type: 'SET_LOADING',
				})
				dispatch({
						type: 'REGISTER',
				})
				dispatch({
					type: 'SET_MESSAGE',
					message: response.data.message,
					success: true,
			})
		} catch(err) {
				dispatch({
					type: 'SET_LOADING',
				})
				dispatch({
					type: 'SET_MESSAGE',
					message: err.response.data.message,
					success: false,
			})
			setTimeout(() => {
				dispatch({
					type: 'RESET_MESSAGE'
				})
			}, 2000)
		}
	}
}

export const login = (email, password) => {
	return async dispatch => {
		dispatch({
			type: 'SET_LOADING',
		})
		try {
				const formData = new FormData()
				formData.append('email', email)
				formData.append('password', password)
				
				const response = await auth.login(formData)
				const {data} = await auth.getUserDetail(response.data.results.token)

				dispatch({
					type: 'SET_LOADING',
				})
				dispatch({
						type: 'LOGIN',
						token: response.data.results.token,
				})
				dispatch({
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
				dispatch({
						type: 'SET_MESSAGE',
						message: response.data.message,
						success: true,
				})
		} catch(err) {
				dispatch({
					type: 'SET_LOADING',
				})
				dispatch({
						type: 'LOGIN',
						token: null,
				})
				dispatch({
						type: 'SET_MESSAGE',
						message: err.response.data.message,
						success: false,
				})
				setTimeout(() => {
					dispatch({
						type: 'RESET_MESSAGE'
					})
				}, 2000)
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
				})
				dispatch({
						type: 'SET_MESSAGE',
						message: response.data.message,
						success: true,
				})
		} catch(err) {
			console.log(err)
				dispatch({
						type: 'ACTIVEACCOUNT',
				})
				dispatch({
					type: 'SET_MESSAGE',
					message: err.response.data.message,
					success: false,
			})
		}
	}
}

export const sendForgotPasswordLink = (email) => {
	return async dispatch => {
		dispatch({
			type: 'SET_LOADING',
		})
		try {	
				const response = await auth.sendForgotPasswordLink(email)
				dispatch({
					type: 'SET_LOADING',
				})
				dispatch({
						type: 'SET_MESSAGE',
						message: response.data.message,
						success: true,
				})
		} catch(err) {
			console.log(err)
				dispatch({
					type: 'SET_LOADING',
				})
				dispatch({
					type: 'SET_MESSAGE',
					message: err.response.data.message,
					success: false,
			})
		}
	}
}

export const editPassword = (id, email, password) => {
	return async dispatch => {
		dispatch({
			type: 'SET_LOADING',
		})
		try {	
				const response = await auth.editPassword(id, email, password)
				dispatch({
					type: 'SET_LOADING',
				})
				dispatch({
					type: 'SET_MESSAGE',
					message: response.data.message,
					success: true,
			})
		} catch(err) {
				dispatch({
					type: 'SET_LOADING',
				})
				dispatch({
					type: 'SET_MESSAGE',
					message: err.response.data.message,
					success: false,
			})
		}
	}
}

export const resetMessage = () => ({
	type: "RESET_MESSAGE"
})

export const logout = () => ({
	type: "LOGOUT"
})