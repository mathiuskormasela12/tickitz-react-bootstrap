const initialState = {
    showPassword: false,
    message: '',
    token: null,
    role: null,
    success: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SHOWPASSWORD": {
            return {
                ...state,
                showPassword: !state.showPassword
            }
        }

        case "CLOSE_ALERT": {
            return {
                ...state,
                message: ''
            }
        }

        case "REGISTER": {
            return {
                ...state,
                message: action.message,
                success: action.success
            }
        }

        case "LOGIN": {
            return {
                ...state,
                message: action.message,
                token: action.token,
                success: action.success
            }
        }

        case "ACTIVEACCOUNT": {
            return {
                ...state,
                message: action.message,
                success: action.success
            }
        }

        case "SEND_FORGOT_PASSWORD_LINK": {
            return {
                ...state,
                message: action.message,
                success: action.success
            }
        }

        case "EDIT_PASSWORD": {
            return {
                ...state,
                message: action.message,
                success: action.success
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
}

export default reducer

