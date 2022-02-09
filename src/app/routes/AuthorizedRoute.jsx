import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import MAuth from '../model/MAuth';
import Error from '../page/Error';
import { MESSAGE, ROLE } from '../util/Constant';
import RouteConstants from './RouteConstants';

const AuthorizedRoute = ({ component: Component, role = ROLE.COMMON_AUTHENTICATED, ...rest }) => {


  // Add your own authentication on the below line.
  const isLoggedIn = MAuth.isLoggedIn();
  const user = JSON.parse(localStorage.getItem("User"));

  const renderComponent = (props) => {
    if (isLoggedIn) {
      if (user.role === ROLE.CONSULTANT) {
        return (<Error message={MESSAGE.CONSULTANT_DENIED} />);
      }
      if (role === ROLE.COMMON_AUTHENTICATED) {
        return (<Component {...props} user={user}/>);
      } else if (role === user.role) {
        return (<Component {...props} user={user}/>);
      } 
      return (<Error message={MESSAGE.PERMISSION_DENIED} />);
    }
    return (<Redirect to={{ pathname: RouteConstants.logout, state: { from: props.location } }} />)
  }

  return (
    <>
      <Route
        {...rest}
        render={props => renderComponent(props)}
      />
    </>
  )
}

export default AuthorizedRoute;