import { IconButton, Toolbar } from '@material-ui/core';
import { Notifications } from '@material-ui/icons'
import React from 'react';

const TopNavBar = (props) => {
  return (
    <Toolbar>
      <IconButton color={"inherit"} size={"small"}>
        <Notifications />
      </IconButton>
    </Toolbar>
  );
}

export default TopNavBar;