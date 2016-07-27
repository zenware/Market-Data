import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import { connect } from 'react-redux'

import NewsLetterForm from '../components/NewsLetterForm'

import Style from '../styles/containers/ComingSoon'

class ComingSoon extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: ''
        }
    }
    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()

        console.log(this.state)
    }
    render() {
        return (
            <div styleName='root'>
                <div styleName='container'>
                    <div styleName='avatar' draggable={false} />
                    <div styleName='text-container'>
                        <h1 styleName='header'>In Construction...</h1>
                        <p styleName='description'>(coming soon)</p>
                    </div>
                </div>
                <NewsLetterForm onSubmit={this.handleSubmit}
                    onChange={this.handleInputChange} />
            </div>
        )
    }
}

export default connect()(CSSModules(ComingSoon, Style))
