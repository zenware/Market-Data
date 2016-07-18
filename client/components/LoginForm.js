import React from 'react'

import Form from '../atoms/Form'
import Input from '../atoms/Input'
import Btn from '../atoms/Btn'

const LoginForm = (props) => {
    return (
        <Form onSubmit={props.onSubmit}>
            <Input type='text' placeholder='Username'
                name='username' onChange={props.onChange} />
            <Input type='password' placeholder='Password'
                name='password' onChange={props.onChange} />
            <Btn text='Log In' />
        </Form>
    )
}

export default LoginForm
