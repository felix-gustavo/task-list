import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import api from '../../services/api'

import { Form, Title, Field, LinkStyled, Button } from './styles'

const Login = () => {
  const history = useHistory()
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  
  const handleSubmit = async e => {
    e.preventDefault()
    try{
      const response = await api.post('/login', {email, password})
      localStorage.setItem('token', response.data.token)
      history.push('/')
    } catch({response}) {
      alert(response.data.error)
    }
  }

  return (
    <Form onSubmit={handleSubmit} >
      <Title>Login</Title>
      <Field>
        <label>Email</label>
        <input type='email' required autoFocus placeholder='Digite seu email' onChange={e => setEmail(e.target.value)} />
      </Field>
      <Field>
        <label>Senha</label>
        <input type='password' required placeholder='Digite sua senha' onChange={e => setPassword(e.target.value)} />
      </Field>
      <div>
        <LinkStyled to='/register' >Criar uma conta</LinkStyled>
      </div>
      <Button type='submit' >Entrar</Button>
    </Form>
  )
}

export default Login
