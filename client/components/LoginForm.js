import React from 'react'

import Form from '../atoms/Form'
import Input from '../atoms/Input'
import Btn from '../atoms/Btn'

const LoginForm = (props) => {
    return (
        <Form onSubmit={props.onSubmit}>
            <Input type='text' placeholder='Username'
                onChange={props.onUsername} />
            <Input type='password' placeholder='Password'
                onChange={props.onPassword} />
            <Btn text='Log In' />
        </Form>
    )
}

export default LoginForm
