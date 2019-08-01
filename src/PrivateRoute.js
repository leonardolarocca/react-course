import React from 'react'
import { isAuthenticated } from './auth'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route { ...rest } render= { props => (
    isAuthenticated() ? (
      <Component { ...props }></Component>
    ) : (
      <Redirect to={{ pathname: '/', state: props.location }}></Redirect>
    )
  ) } ></Route>
)

export default PrivateRoute;