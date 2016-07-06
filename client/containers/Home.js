import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Modal from 'boron/FlyModal'

import { increment } from '../actions/counterActions'

import HomePageHero from '../components/HomePageHero'

class Home extends Component {
    render() {
        const { count, plusOne } = this.props
        return (
            <div>
                <HomePageHero />
                { count }
                <button onClick={plusOne}>
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

const mapDispatchToProps = (dispatch) => {
    return {
        plusOne: bindActionCreators(increment, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
