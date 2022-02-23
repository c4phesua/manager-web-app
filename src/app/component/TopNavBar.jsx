import { IconButton, List, ListItem, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import DropDown from './DropDown';
import ProfileImage from './ProfileImage';

const TopNavBar = ({user}) => {
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

  const renderDropDownAvatar = () => {
    return (
      <DropDown renderAnchorElement={avatarButton} >
        <div className="top-right-dropdown">
          <List>
            <ListItem key="user" id="user">
              <div className="user-profile">
                <ProfileImage
                  diameter={36}
                  name={user.email}
                  url={avatar}
                />
                <b>{user.firstname} {user.lastname}</b>
                <div className="text-muted">{user.email}</div>
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