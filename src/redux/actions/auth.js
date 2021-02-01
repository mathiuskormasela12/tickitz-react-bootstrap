import auth from '../../services/AuthService'

export const register = (email, password, passwordConfirm) => {
    return async dispatch => {
        try {
            const formData = new FormData()
            formData.append('email', email)
            formData.append('password', password)
            formData.append('password_confirm', passwordConfirm)
            formData.append('role', 'user')
            
            const response = await auth.register(formData)
            dispatch({
                type: 'REGISTER',
                message: response.data.message
            })
        } catch(err) {
            dispatch({
                type: 'REGISTER',
                message: err.response.data.message
            })
        }
    }
}