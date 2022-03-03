import { Typography } from '@material-ui/core';
import React from 'react';
import { PAGE_NAME } from '../util/Constant';

const BookingManagement = (props) => {

  document.title = PAGE_NAME.BOOKING_MANAGEMENT;

  return (
    <div>
      <Typography variant='h3' align='left'>
        {PAGE_NAME.BOOKING_MANAGEMENT}
      </Typography>
    </div>
  );
}

export default BookingManagement;