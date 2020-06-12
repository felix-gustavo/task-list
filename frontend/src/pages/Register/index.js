import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import api from '../../services/api'

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
    <form onSubmit={handleSubmit}>
      <h2>Cadastro</h2>
      <div>
        <label>Nome</label>
        <input type='text' required placeholder='Ex.: Félix Gustavo' autoFocus onChange={e => setName(e.target.value)}></input>
      </div>
      <div>
        <label>Email</label>
        <input type='email' required onChange={e => setEmail(e.target.value)} placeholder='Ex.: gustavovieira1945@gmail.com'></input>
      </div>
      <div>
        <label>Senha</label>
        <input type='password' required placeholder='********' onChange={e => setPassword(e.target.value)}></input>
      </div>
      <div>
        <Link to='/login'>Já tenho uma conta</Link>
      </div>
      <button type='submit'>Enviar</button>
    </form>
  )
}

export default Register
