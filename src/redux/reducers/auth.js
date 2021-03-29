const initialState = {
  token: null,
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

		case "LOGOUT": {
				return {
						...state,
						token: null,
						success: false,
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

