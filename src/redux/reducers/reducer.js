const initialState = {
    showPassword: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SHOWPASSWORD": {
            return {
                ...state,
                showPassword: !state.showPassword
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