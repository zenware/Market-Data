import axios from 'axios'

const axiosConfig = {
    baseURL: 'http://localhost:8080/'
}

const getRatesSuccess = (payload) => {
    return { type: 'GET_CURRENCY_RATES', payload }
}

const getRatesFail = (error) => {
    return { type: 'GET_CURRENCY_RATES', error }
}

export const getRates = (symbol) => {
    const endPoint = `/v1/currency/${symbol}`

    return dispatch => {
        axios.get(endPoint, axiosConfig)
            .then(response => dispatch(getRatesSuccess(response.data)))
            .catch(error => dispatch(getRatesFail(error.data)))
    }
}
