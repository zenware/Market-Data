import React from 'react'

const StockDetails = (props) => {
    return (
        <div>
            <span>
                <h5>{ props.Symbol }  {props.Name}</h5>
            </span>
            <span>
                <h6>{ props.LastPrice } &nbsp; { props.Change }</h6>
            </span>
            <span>
                <a onClick={props.onBuy}>Buy</a>
                &nbsp;
                <a onClick={props.onSell}>Sell</a>
                &nbsp;
                <a onClick={props.onWatch}>Watch</a>
            </span>
        </div>
    )
}

export default StockDetails
