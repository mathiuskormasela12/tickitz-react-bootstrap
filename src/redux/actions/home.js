import http from '../../services/AuthService'

export const getNowShowing = () => {
    return dispatch => {
        dispatch({
          type: 'SET_LOADING_REDUCER'
        });
        http.getNowShowing()
            .then(response => {
                dispatch({
                    type: 'SHOW_NOW_SHOWING',
                    results: response.data.results,
                    isLoading: false,
                    success: response.data.success,
                    message: response.data.message
                })
            })
            .catch(err => {
                dispatch({
                    type: 'SHOW_NOW_SHOWING',
                    message: err.response.data.message,
                    isLoading: false,
                    results: [],
                    success: false
                })
            })
    }
}

export const getUpcomingMovies = (month) => {
    return dispatch => {
        dispatch({
          type: 'SET_LOADING_REDUCER'
        });
        http.getUpcoming(month)
            .then(response => {
                dispatch({
                    type: 'SHOW_UPCOMING',
                    results: response.data.results,
                    isLoading: false,
                    success: response.data.success,
                    message: response.data.message
                })
            })
            .catch(err => {
                dispatch({
                    type: 'SHOW_UPCOMING',
                    message: err.response.data.message,
                    isLoading: false,
                    results: [],
                    success: false
                })
            })
    }
}