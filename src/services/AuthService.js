import http from './http'

class AuthService {
    register(data) {
        return http.post('/auth/register', data)
    }

    login(data) {
        return http.post('/auth/login', data)
    }

    activeAccount(id, email) {
        return http.patch(`/auth/active?id=${id}&email=${email}`)
    }

    sendForgotPasswordLink(email) {
        return http.post(`/auth/password`, {
            email
        })
    }

    editPassword(id, email, password) {
        return http.patch(`/auth/password/${id}/${email}`, { password })
    }
}

export default new AuthService()