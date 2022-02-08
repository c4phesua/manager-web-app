import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import MAuth from '../model/MAuth';
import Error from '../page/Error';
import { MESSAGE, ROLE } from '../util/Constant';
import RouteConstants from './RouteConstants';

const CommonAuthenticatedRoute = ({ component: Component, ...rest }) => {

  const isLoggedIn = MAuth.isLoggedIn();
  const user = JSON.parse(localStorage.getItem("User"));


  return (
    <>
      <Route
        {...rest}
        render={props =>
          isLoggedIn ? (user.role === ROLE.ADMIN || user.role === ROLE.MANAGER) ? (
            <Component {...props} user={user}/>
          ) : (
            <Error message={MESSAGE.CONSULTANT_DENIED} />
          ) : (
            <Redirect to={{ pathname: RouteConstants.logout, state: { from: props.location } }} />
          ) 
        }
      />
    </>
  )
}

export default CommonAuthenticatedRoute