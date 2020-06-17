import React from 'react'
import { useHistory } from 'react-router-dom'

const Menu = () => {
  const history = useHistory()
  
  const handleExit = () => {
    localStorage.removeItem('token')
    history.push('/')
  }

  return (
    <div>
      <label>LOGO</label>
      <button onClick={handleExit}>Sair</button>
    </div>
  )
}

export default Menu
