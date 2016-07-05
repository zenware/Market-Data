import React from 'react'

import Form from '../atoms/Form'
import Input from '../atoms/Input'
import Btn from '../atoms/Btn'

const SignUpForm = (props) => {
    return (
        <Form onSubmit={props.onSubmit}>
            <Input type='text' placeholder='Username'
                onChange={props.onUsername} />
            <Input type='email' placeholder='Email'
                onChange={props.onEmail} />
            <Input type='password' placeholder='Password'
                onChange={props.onPassword} />
            <Btn text='Sign Up' />
        </Form>
    )
}

export default SignUpForm
