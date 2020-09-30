import axios from "axios";


export function registerUser(dataToSubmit) {
    const request = axios.post(`/api/auth/register`, dataToSubmit)
        .then(response => response.data);

    return {
        type: "REGISTER_USER",
        payload: request
    }
}

export function loginUser(dataToSubmit) {
    const request = axios.post('/api/auth/login', dataToSubmit)
    .then(response => response.data)

    return {
        type: "LOGIN_USER",
        payload: request
    }
}

export function auth () {
    const request = axios.get('/api/auth')
    .then(response => response.data)

    return {
        type: "AUTH_USER",
        payload: request
    }
}

export function signOut () {
    const request = axios.get('/api/auth/logout')
    .then(response => response.data)

    return {
        type: "LOGOUT_USER",
        payload: request
    }
}