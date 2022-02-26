import { Typography } from '@material-ui/core';
import React from 'react';
import { PAGE_NAME } from '../util/Constant';

const Dashboard = (props) => {

  document.title = PAGE_NAME.DASHBOARD;

  return (
    <div>
      <Typography variant='h3' align='left'>{PAGE_NAME.DASHBOARD}</Typography>
    </div>
  );
}

export default Dashboard;
