import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'

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
      <Field id='email' type='email' title='Digite seu email' required autoFocus placeholder='Email' onChange={e => setEmail(e.target.value)} />
      <Field id='password' type='password' title='Digite sua senha' required placeholder='Senha' onChange={e => setPassword(e.target.value)} />
      <LinkStyled>
        <Link to='/register' >Criar uma conta</Link>
      </LinkStyled>
      <Button type='submit' >Entrar</Button>
    </Form>
  )
}

export default Login
