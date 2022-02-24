import { Button, IconButton, List, ListItem, Toolbar } from '@material-ui/core';
import { Backspace } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import RouteConstants from '../routes/RouteConstants';
import DropDown from './DropDown';
import ProfileImage from './ProfileImage';

const TopNavBar = ({ user }) => {
  const avatar = user?.avatar || './static/images/defaultAvatar.png';

  const avatarButton = (props) => (
    <IconButton
      key="profile"
      title={user.email}
      {...props}
    >
      <ProfileImage
        diameter={36}
        name={user.email}
        url={avatar}
      />
    </IconButton>
  );

  const logoutButton = () => {
    return (
      <>
        <Link to={RouteConstants.logout} >Đăng Xuất </Link>
      </>
    )
  }

  const renderDropDownAvatar = () => {
    return (
      <DropDown renderAnchorElement={avatarButton} >
        <div className="top-right-dropdown">
          <List>
            <ListItem key="user" id="user">
              <div className="user-profile d-flex flex-column">
                <div className="align-self-center">
                  <ProfileImage
                    diameter={36}
                    name={user.email}
                    url={avatar}
                  />
                </div>
                <b>{user.firstname} {user.lastname}</b>
                <div className="text-muted">{user.email}</div>
                {logoutButton()}
              </div>
            </ListItem>
          </List>
        </div>
      </DropDown>
    )
  }
  return (
    <Toolbar>
      <div className='flex-grow-1'></div>
      {renderDropDownAvatar()}
    </Toolbar>
  );
}

export default TopNavBar;