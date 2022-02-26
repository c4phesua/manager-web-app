import { Typography } from '@material-ui/core';
import React from 'react';
import { PAGE_NAME } from '../util/Constant';

const PromotionManagement = (props) => {

  document.title = PAGE_NAME.PROMOTION_MANAGEMENT;

  return (
    <div>
      <Typography variant='h3' align='left'>{PAGE_NAME.PROMOTION_MANAGEMENT}</Typography>
    </div>
  );
}

export default PromotionManagement;