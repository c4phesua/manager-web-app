import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import MAuth from '../model/MAuth';
import RouteConstants from './RouteConstants';
import { ROLE } from '../util/Constant';

const AdmonRoute = ({ component: Component, ...rest }) => {


  // Add your own authentication on the below line.
  const isLoggedIn = MAuth.isLoggedIn();
  const user = JSON.parse(localStorage.getItem("User"));

  return (
    <>
      <Route
        {...rest}
        render={props =>
          isLoggedIn && user.role === ROLE.ADMIN ? (
            <Component {...props} user={user}/>
          ) : (
            <Redirect to={{ pathname: RouteConstants.logout, state: { from: props.location } }} />
          )
        }
      />
    </>
  )
}

export default AdmonRoute