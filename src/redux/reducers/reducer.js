const initialState = {
    showPassword: false,
    message: '',
    token: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SHOWPASSWORD": {
            return {
                ...state,
                showPassword: !state.showPassword
            }
        }

        case "REGISTER": {
            return {
                ...state,
                message: action.message,
                token: action.token
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