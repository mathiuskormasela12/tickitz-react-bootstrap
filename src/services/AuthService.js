import http from './http'

class AuthService {
    register(data) {
        return http(null).post('/auth/register', data)
    }

    login(data) {
        return http(null).post('/auth/login', data)
    }

    activeAccount(id, email) {
        return http(null).patch(`/auth/active?id=${id}&email=${email}`)
    }

    sendForgotPasswordLink(email) {
        return http(null).post(`/auth/password`, {
            email
        })
    }

    editPassword(id, email, password) {
        return http(null).patch(`/auth/password/${id}/${email}`, { password })
    }

    getNowShowing() {
        return http(null).get(`/showing`)
    }

    getUpcoming(month) {
        return http(null).get(`/movies/month/${month}`)
    }

    addMoviegoers(email) {
        return http(null).post('/moviegoers', email)
    }

    getMovieDetails(id) {
        return http(null).get(`/movies/${id}`)
    }

    getShowTimes(token,id) {
        return http(token).get(`/ticket/${id}`)
    }

    getAllTimes(token) {
        return http(token).get('/times')
    }
}

export default new AuthService()
