import { Typography } from '@material-ui/core';
import React from 'react';
import { PAGE_NAME } from '../util/Constant';

const Profile = (props) => {

  document.title = PAGE_NAME.PROFILE;

  const { user } = props;
  return (
    <div>
      <Typography variant='h3' align='left'>{PAGE_NAME.PROFILE}</Typography>
    </div>
  );
}

export default Profile;