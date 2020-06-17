import React from 'react'

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Menu from './components/Menu'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import CreateTask from './pages/CreateTask'
import NotFound from './pages/NotFound'

const App = () => {
  const PrivateRoute = props => {
    if(localStorage.getItem('token')) 
      return (
        <>
          <Menu/>
          <Route {...props} />
        </>
      )
    else return <Redirect to='/login'/>
  }

  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <PrivateRoute exact path='/register' component={Register} />
        <PrivateRoute exact path='/create-task' component={CreateTask} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
