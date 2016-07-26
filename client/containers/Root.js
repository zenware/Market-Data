import React from 'react'

import NavBar from '../components/NavBar'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Root = (props) => {
    return (
        <div>
            <NavBar />
            { props.children }
            <Footer />
        </div>
    )
}

export default Root
