import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from 'boron/FlyModal'

import { increment } from '../actions/counterActions'

import HomePageHero from '../components/HomePageHero'

class Home extends Component {
    render() {
        const { count, dispatch } = this.props

        return (
            <div>
                <HomePageHero />
                { count }
                <button onClick={() => dispatch(increment())}>
                    Click
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { count } = state.counter
    return { count }
}

export default connect(mapStateToProps)(Home)
