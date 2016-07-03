import axios from 'axios'

const axiosConfig = {
    baseURL: 'http://localhost:8080/'
}

const getStockQuoteSuccess = (payload) => {
    return { type: 'GET_STOCK_QUOTE_DATA', payload }
}

const getStockQuoteFail = (error) => {
    return { type: 'GET_STOCK_QUOTE_DATA', error }
}

export const getStockQuote = (symbol) => {
    const endPoint = `/v1/stock/${symbol}`

    return dispatch => {
        axios.get(endPoint, axiosConfig)
            .then(response => dispatch(getStockQuoteSuccess(response.data)))
            .catch(error => dispatch(getStockQuoteFail(error.data)))
    }
}
