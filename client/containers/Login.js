import React, { Component } from 'react'

import LoginForm from '../components/LoginForm'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
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
            <div>
                <LoginForm onChange={this.handleInputChange} />
            </div>
        )
    }
}

export default Login
