import axios from 'axios'

function http(token) {
    const headers = token && {
        'authorization': token
    }
    
    return axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        headers
    })
}

export default http;