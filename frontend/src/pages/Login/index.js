import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api'
import './styles.css'

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
    <form onSubmit={handleSubmit} className='form'>
      <h1 className='title'>Login</h1>
      <div className='field'>
        <label>Email</label>
        <input type='email' required autoFocus placeholder='Digite seu email' onChange={e => setEmail(e.target.value)} />
      </div>
      <div className='field'>
        <label>Senha</label>
        <input type='password' required placeholder='Digite sua senha' onChange={e => setPassword(e.target.value)} />
      </div>
      <div>
        <Link to='/register' className='link-create-account'>Criar uma conta</Link>
      </div>
      <button type='submit' className='btn'>Entrar</button>
    </form>
  )
}

export default Login
