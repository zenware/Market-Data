import axios from 'axios'

const axiosConfig = {
    baseURL: 'http://fixer.io/'
}

const getRatesSuccess = (payload) => {
    return { type: 'GET_CURRENCY_RATES', payload }
}

const getRatesFail = (error) => {
    return { type: 'GET_CURRENCY_RATES', error }
}

export const getRates = (symbol) => {
    const endPoint = `/latest?base=${symbol}`
}
