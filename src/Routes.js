import React from 'react';
import PrivateRoute from './PrivateRoute'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component= { () => <h1>Mamacita</h1>} />
      <PrivateRoute path='/app' component={ () => <h2>You are logged</h2> }></PrivateRoute>
    </Switch>
  </BrowserRouter>
)

export default Routes;