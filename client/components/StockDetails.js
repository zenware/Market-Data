import React from 'react'

const StockDetails = (props) => {
    return (
        <div>
            <span>
                <h5>{ props.symbol }</h5>
                <h5>{ props.name }</h5>
            </span>
            <span>
                <h6>{ props.lastPrice }</h6>
                <h6>{ props.change }</h6>
            </span>
        </div>
    )
}

export default StockDetails
