import http from '../../services/AuthService'

export const getMovieDetails = (id) => {
    return dispatch => {
        http.getMovieDetails(id)
            // .finally(() => {
            //     dispatch({
            //         type: 'SET_LOADING'
            //     })
            // })
            .then(response => {
                dispatch({
                    type: 'SHOW_MOVIE_DETAIL',
                    results: response.data.results[0],
                    isLoading: false,
                    success: response.data.success,
                    message: response.data.message
                })
            })
            .catch(err => {
                dispatch({
                    type: 'SHOW_MOVIE_DETAIL',
                    message: err.response.data.message,
                    isLoading: false,
                    results: [],
                    success: false
                })
            })
    }
}

export const getShowTimes = (id, showTimeDate, location) => {
    return dispatch => {
        http.getShowTimes(localStorage.getItem('token'), id, showTimeDate, location)
            // .finally(() => {
            //     dispatch({
            //         type: 'SET_LOADING'
            //     })
            // })
            .then(response => {
                dispatch({
                    type: 'GET_SHOW_TIMES',
                    results: response.data.results,
                    isLoading: false,
                    success: response.data.success,
                    message: response.data.message
                })
            })
            .catch(err => {
                dispatch({
                    type: 'GET_SHOW_TIMES',
                    message: err.response.data.message,
                    isLoading: false,
                    results: [],
                    success: false
                })
            })
    }
}

export const getAllTimes = () => {
    return dispatch => {
        http.getAllTimes(localStorage.getItem('token'))
            // .finally(() => {
            //     dispatch({
            //         type: 'SET_LOADING'
            //     })
            // })
            .then(response => {
                dispatch({
                    type: 'GET_ALL_TIMES',
                    results: response.data.results,
                    isLoading: false,
                    success: response.data.success,
                    message: response.data.message
                })
            })
            .catch(err => {
                dispatch({
                    type: 'GET_ALL_TIMES',
                    message: err.response.data.message,
                    isLoading: false,
                    results: [],
                    success: false
                })
            })
    }
}