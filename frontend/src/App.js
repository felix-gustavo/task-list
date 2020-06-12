import React from 'react'

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'

const App = () => {
  //{ exact, path, component }
  const PrivateRoute = props => {
    return localStorage.getItem('token') ?
    <Route render={() => <props.component token={localStorage.getItem('token')} /> } /> : <Redirect to='/login'/>
  }

  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
