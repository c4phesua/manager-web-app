import { Card, Typography } from '@material-ui/core';
import React from 'react';
import { ENTITY } from '../util/Constant';
import DataLoader from './table/DataLoader';
import { renderStatusLabel } from '../util/DecoratorConstant'

function BookingStatusStatistic({ status }) {

  const renderCount = (count) => {
    return (
      <>
        <Typography variant='h6'>{renderStatusLabel(status)}</Typography>
        <Typography variant='h6'>{count}</Typography>
      </>
    )
  }

  console.log(status);

  return (
    <Card>
      <DataLoader entity={ENTITY.BOOKING} getAll renderCount={renderCount} additionalParams={{status}} />
    </Card>
  );
}

export default BookingStatusStatistic;