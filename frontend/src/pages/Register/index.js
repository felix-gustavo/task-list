import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import api from '../../services/api'

import { Form, Title, Field, LinkStyled, Button, Row } from './styles.js'

const Register = () => {
  const history = useHistory()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    try{
      await api.post('/user', {name, email, password})
      alert('Usuário cadastrado')
      history.push('/login')
    } catch({response}) {
      alert(response.data.error)
    }
  }

  return(
    <Form onSubmit={handleSubmit}>
      <Title>Cadastro</Title>
      <Field type='text' title='Digite seu nome' required value={name} autoFocus onChange={e => setName(e.target.value)} placeholder='Nome' />
      <Field type='email' title='Digite seu email' required value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' />
      <Field type='password' title='Digite sua senha' required placeholder='Senha' onChange={e => setPassword(e.target.value)} />
      <LinkStyled>
        <Link to='/login'>Já tenho uma conta</Link>
      </LinkStyled>
      <Button type='submit'>Enviar</Button>
    </Form>
  )
}

export default Register
