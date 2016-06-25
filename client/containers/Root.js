import React from 'react'

import NavBar from '../components/NavBar'

const Root = (props) => {
    return (
        <div>
            <NavBar />
            { props.children }
        </div>
    )
}

export default Root
