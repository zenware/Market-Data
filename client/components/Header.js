import React from 'react'

const { header } = require('../assets/mockData.json')

const Header = (props) => {
    const changeColor = (value) => value === 'positive' ? '21D050' : 'DB2626'

    return (
        <marquee>
            { header.map(item =>
                <span>
                    { item.symbol + ' ' }
                    <font color={changeColor(item.value)}>
                        { item.change + ' ' }
                    </font>
                </span>
            ) }
        </marquee>
    )
}

export default Header
