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
}

export default new AuthService()