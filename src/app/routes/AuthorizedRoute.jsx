import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import MAuth from '../model/MAuth';
import Error from '../page/Error';
import { MESSAGE } from '../util/Constant';
import RouteConstants from './RouteConstants';

const AuthorizedRoute = ({ component: Component, role, ...rest }) => {


  // Add your own authentication on the below line.
  const isLoggedIn = MAuth.isLoggedIn();
  const user = JSON.parse(localStorage.getItem("User"));

  return (
    <>
      <Route
        {...rest}
        render={props =>
          isLoggedIn ? user.role === role ? (
            <Component {...props} user={user}/>
          ) : (
            <Error message={MESSAGE.PERMISSION_DENIED} />
          ) : (
            <Redirect to={{ pathname: RouteConstants.logout, state: { from: props.location } }} />
          ) 
        }
      />
    </>
  )
}

export default AuthorizedRoute;