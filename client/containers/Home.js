import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { increment } from '../actions/counterActions'

class Home extends Component {
    render() {
        const { count, plusOne } = this.props
        return (
            <div>
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
