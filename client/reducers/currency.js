const initialState = {
    quoteData: {}
}

const currency = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CURRENCY_RATES':
            return Object.assign({}, state, {
                quoteData: action.payload
            })
        default:
            return state
    }
}

export default currency
