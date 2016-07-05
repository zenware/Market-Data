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
    handleUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    handlePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()

        console.log(this.state)
    }
    render() {
        return (
            <div>
                <LoginForm />
            </div>
        )
    }
}

export default Login
