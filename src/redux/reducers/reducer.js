const initialState = {
    showPassword: false,
    message: '',
    messageShowtimes: '',
    messageTimes: '',
    token: null,
    isLogin: false,
    role: null,
    success: false,
    successNowShowing: false,
    successTimes: false,
    successShowtimes: false,
    successMovieDetails: false,
    successUpcoming: false,
    movieShowing: [],
    upcoming: [],
    isLoading: false,
    movieDetails: {},
    showTimes: [],
    times: []
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
                success: action.success,
                isLogin: action.login
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

        case "SHOW_NOW_SHOWING": {
            return {
                ...state,
                successNowShowing: action.success,
                movieShowing: action.results,
                isLoading: action.isLoading,
                message: action.message
            }
        }

        case "SHOW_UPCOMING": {
            return {
                ...state,
                successUpcoming: action.success,
                upcoming: action.results,
                isLoading: action.isLoading,
                message: action.message
            }
        }

        case "SHOW_MOVIE_DETAIL": {
            return {
                ...state,
                successMovieDetails: action.success,
                movieDetails: action.results
            }
        }

        case "SET_LOADING": {
            return {
                ...state,
                isLoading: true
            }
        }

        case "GET_SHOW_TIMES": {
            return {
                ...state,
                successShowtimes: action.success,
                showTimes: action.results,
                messageShowtimes: action.message
            }
        }

        case "GET_ALL_TIMES": {
            return {
                ...state,
                successTimes: action.success,
                times: action.results,
                messageTimes: action.message
            }
        }

        case "AUTO_LOGIN": {
            return {
                ...state,
                isLogin: true
            }
        }

        case "LOGOUT": {
            localStorage.removeItem('token')
            return {
                ...state,
                isLogin: false
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

