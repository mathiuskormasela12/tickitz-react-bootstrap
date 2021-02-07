import http from '../../services/AuthService'

export const getNowShowing = () => {
    return dispatch => {
        http.getNowShowing()
            // .finally(() => {
            //     dispatch({
            //         type: 'SET_LOADING'
            //     })
            // })
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
        http.getUpcoming(month)
            // .finally(() => {
            //     dispatch({
            //         type: 'SET_LOADING'
            //     })
            // })
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