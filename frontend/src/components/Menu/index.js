import React from 'react'
import { useHistory } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'
import profile from '../../assets/images/profile.svg'
import './styles.css'

const Menu = () => {
  const history = useHistory()
  
  const handleExit = () => {
    localStorage.removeItem('token')
    history.push('/')
  }

  return (
    <div className='content'>
      <img src={logo} className='logo' onClick={() => history.push('/')}></img>
      <img src={profile} className='exit' onClick={handleExit}></img>
    </div>
  )
}

export default Menu
