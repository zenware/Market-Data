import React from 'react'

import Btn from '../atoms/Btn'

const StockForm = (props) => {
    return (
        <div>
            <form onSubmit={props.onSubmit}>
                <input type='text' onChange={props.onChange}
                    value={props.value} />
                <Btn text='Search' />
            </form>
        </div>
    )
}

export default StockForm
