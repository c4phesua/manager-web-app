import { Toolbar, Typography } from '@material-ui/core';
import React from 'react';

const TopNavBar = ({user}) => {
  return (
    <Toolbar>
      <div className='flex-grow-1'></div>
      {user && <Typography variant='h5'>Xin chào, {user.firstname} {user.lastname}</Typography>}
    </Toolbar>
  );
}

export default TopNavBar;