import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import api from '../../services/api'

const CreateTask = () => {
  const history = useHistory()
  const  [ title, setTitle ] = useState('')
  const  [ description, setDescrition ] = useState('')
  const token = localStorage.getItem('token')

  const handleSubmit = async e => {
    e.preventDefault()
    
    try{ 
      const response = await api.post('/task', {
        title,
        description
      }, { headers: { token } })

      console.log(response)
      history.push('/')
    } catch ({response}) {
      alert(response.data.error)
    }
  }

  return (
    <div>
      <h2>Adicione sua tarefa</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título</label>
          <input required onChange={e => setTitle(e.target.value)} placeholder='Adicione um título...'/>
        </div>
        <div>
          <label>Descrição</label>
          <input required onChange={e => setDescrition(e.target.value)} placeholder='Descreva melhor essa tarefa...'/>
        </div>
        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}

export default CreateTask
