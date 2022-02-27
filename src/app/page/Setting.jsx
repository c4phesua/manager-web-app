import { Typography } from '@material-ui/core';
import React from 'react';
import { PAGE_NAME } from '../util/Constant';

const Setting = (props) => {
  document.title = PAGE_NAME.SETTING;
  return (
    <div>
      <Typography variant='h3' align='left'>{PAGE_NAME.SETTING}</Typography>
      
    </div>
  );
}

export default Setting;