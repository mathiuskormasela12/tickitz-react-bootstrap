const initialState = {
  token: null,
  id: null,
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
        id: action.payload.id,
				firstName: action.payload.firstName,
				lastName: action.payload.lastName ? action.payload.lastName : '',
				email: action.payload.email,
				picture: action.payload.picture.split('/').pop() === 'null' ? null : action.payload.picture,
				phoneNumber: action.payload.phoneNumber ? action.payload.phoneNumber : '',
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

