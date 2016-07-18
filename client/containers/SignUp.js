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
                <SignUpForm onSubmit={this.handleSubmit}
                    onChange={this.handleInputChange}/>
                <span>
                    Already have an account?
                    <Link to='/login'>Log In</Link>
                </span>
            </div>
        )
    }
}

export default SignUp
