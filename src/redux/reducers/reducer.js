const initialState = {
    showPassword: false,
    message: '',
    messageShowtimes: '',
    messageTimes: '',
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

        case "SET_LOADING_REDUCER": {
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
                messageShowtimes: action.message,
                isLoading: false,
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

        default: {
            return {
                ...state
            }
        }
    }
}

export default reducer

