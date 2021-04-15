import http from '../../services/AuthService'

export const getMovieDetails = (id) => {
    return dispatch => {
        http.getMovieDetails(id)
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

export const getShowTimes = (id, showTimeDate, location, token) => {
    return dispatch => {
        dispatch({
          type: 'SET_LOADING_REDUCER',
        })
        http.getShowTimes(token, id, showTimeDate, location)
            .then(response => {
                dispatch({
                  type: 'GET_SHOW_TIMES',
                  results: response.data.results,
                  success: response.data.success,
                  message: response.data.message
                })
            })
            .catch(err => {
                dispatch({
                    type: 'GET_SHOW_TIMES',
                    message: err.response.data.message,
                    results: [],
                    success: false
                })
            })
    }
}

export const getAllTimes = (token) => {
    return dispatch => {
        http.getAllTimes(token)
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