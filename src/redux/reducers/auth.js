const initialState = {
  token: null,
	firstName: null,
	lastName: null,
	phoneNumber: null,
	email: null,
	picture: null,
  loading: false,
}

const auth = (state = initialState, action) => {
  switch (action.type) {
		case "REGISTER": {
				return {
						...state,
						message: action.message,
						success: action.success,
				}
		}

		case "LOGIN": {
				return {
					...state,
					message: action.message,
					token: action.token,
					success: action.success,
				}
		}

		case "SET_USER_DATA": {
			return {
				...state,
				firstName: action.payload.firstName,
				lastName: action.payload.lastName,
				email: action.payload.email,
				picture: action.payload.picture,
				phoneNumber: action.payload.phoneNumber,
			}
		}

		case "LOGOUT": {
				return {
						...state,
						token: null,
						success: false,
						firstName: null,
						lastName: null,
						email: null,
						picture: null,
						phoneNumber: null,
				}
		}

		default: {
			return {
					...state
			}
		}
  }
}

export default auth;

