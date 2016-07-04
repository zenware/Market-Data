import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getStockQuote } from '../actions/stockActions'

import StockForm from '../components/StockForm'
import StockDetails from '../components/StockDetails'

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: true,
            stockSymbol: ''
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps) {
            this.setState({
                isLoading: false
            })
        }
    }
    handleChange = (e) => {
        this.setState({
            stockSymbol: e.target.value
        })
    }
    handleSubmit = (e) => {
        const { stockSymbol } = this.state
        const { dispatch } = this.props
        const symbol = stockSymbol.toUpperCase()
        e.preventDefault()

        dispatch(getStockQuote(symbol))
        this.setState({
            stockSymbol: ''
        })
    }
    render() {
        const { isLoading, stockSymbol } = this.state
        const { quoteData } = this.props

        return (
            <div>
                <h3>Stock Data</h3>
                <StockForm onSubmit={this.handleSubmit}
                    onChange={this.handleChange} value={stockSymbol} />
                { isLoading ? '' : <StockDetails {...quoteData} /> }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { quoteData } = state.stock
    return { quoteData }
}

export default connect(mapStateToProps)(Dashboard)
