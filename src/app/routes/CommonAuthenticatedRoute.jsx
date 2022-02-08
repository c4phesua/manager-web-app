import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import MAuth from '../model/MAuth';
import RouteConstants from './RouteConstants';

const CommonAuthenticatedRoute = ({ component: Component, ...rest }) => {

  const isLoggedIn = MAuth.isLoggedIn();

  return (
    <>
      <Route
        {...rest}
        render={props =>
          isLoggedIn ? (
            <Component {...props} />
          ) : (
            <Redirect to={{ pathname: RouteConstants.logout, state: { from: props.location } }} />
          )
        }
      />
    </>
  )
}

export default CommonAuthenticatedRoute