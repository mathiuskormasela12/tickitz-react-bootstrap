import http from './http'

class AuthService {
    register(data) {
        return http.post('/auth/register', data)
    }
}

export default new AuthService()