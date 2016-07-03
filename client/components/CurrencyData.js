import React from 'react'

const CurrencyData = (props) => {
    return (
        <div>
            <h3>Currency Data</h3>
            <span>{ props.symbol }</span>
            <span>{ props.price }</span>
        </div>
    )
}

export default CurrencyData
