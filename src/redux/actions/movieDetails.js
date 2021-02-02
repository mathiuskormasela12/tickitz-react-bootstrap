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
                console.log(response)
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