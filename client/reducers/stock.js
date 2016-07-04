const initialState = {
    quoteData: {}
}

const stock = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_STOCK_QUOTE_DATA':
            console.log(action)
            return Object.assign({}, state, {
                quoteData: action.payload
            })
        default:
            return state
    }
}

export default stock
