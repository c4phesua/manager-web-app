import { Typography } from '@material-ui/core';
import React from 'react';
import { PAGE_NAME } from '../util/Constant';

const StyleManagement = (props) => {

  document.title = PAGE_NAME.STYLE_MANAGEMENT

  return (
    <div>
      <Typography variant='h3' align='left'>{PAGE_NAME.STYLE_MANAGEMENT}</Typography>
    </div>
  );
}

export default StyleManagement;