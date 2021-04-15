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

    getShowTimes(token,id, showTimeDate, location) {
        return http(token).get(`/ticket/${id}?location=${location}${showTimeDate ? `&showTimeDate=${showTimeDate}` : ''}`)
    }

    getAllTimes(token) {
        return http(token).get('/times')
    }

    getSoldSeat(token, id) {
      return http(token).get(`/soldseats/${id}`);
    }

    getAllCities() {
        return http().get('/cities')
    }

    getUserDetail(token) {
        return http(token).get('/auth/user')
    }

    getOrderHistory(token) {
      return http(token).get('/transaction/history')
    }

    editUser(token, data) {
      return http(token).patch('/auth/user', data)
    }

    uploadPhoto(token, data) {
      return http(token).patch('/auth/user/upload', data)
    }

    getAllMovies(data) {
      return http(null).get(
        `/movies/?limit=4&by=${data.by}&sort=${data.sort}&page=${data.page}&search=${data.search}`,
      );
    }

    getSelectedShowTimeId(showTimeDate, movieId, timeId, cinemaId) {
      return http().get(
        `/selectedShowTime/${showTimeDate}/${movieId}/${timeId}/${cinemaId}`,
      );
    }

    buyTicket(token, data) {
      return http(token).post('/transaction', data);
    }
}

export default new AuthService()
