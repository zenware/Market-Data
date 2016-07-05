import React, { Component } from 'react'
import { Link } from 'react-router'

import SignUpForm from '../components/SignUpForm'

class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }
    handleUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    handleEmail = (e) => {
        this.setState({
            email: e.target.value
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
                <SignUpForm onSubmit={this.handleSubmit}
                    onUsername={this.handleUsername}
                    onEmail={this.handleEmail}
                    onPassword={this.handlePassword} />
                <span>
                    Already have an account?
                    <Link to='/login'>Log In</Link>
                </span>
            </div>
        )
    }
}

export default SignUp
