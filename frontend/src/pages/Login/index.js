import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api'

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
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div>
        <label>Email</label>
        <input type='email' required autoFocus placeholder='Ex.: email@gmail.com' onChange={e => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Senha</label>
        <input type='password' required placeholder='********' onChange={e => setPassword(e.target.value)} />
      </div>
      <div>
        <Link to='/register'>Criar uma conta</Link>
      </div>
      <button type='submit'>Entrar</button>
    </form>
  )
}

export default Login
