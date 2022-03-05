import React from 'react';
import { ENTITY } from '../util/Constant';
import { countUserStatus, next } from '../util/Count';
import DataLoader from './table/DataLoader';
import { Typography, Chip } from '@material-ui/core';
import { renderProgressColor, renderStatusColor, renderStatusLabel } from '../util/DecoratorConstant'
import { Progress } from 'reactstrap';

function ManagerStatusBar(props) {

  const renderItem = (item) => {
    return (
      <div className='mr-3'>
        <div>
          <Typography variant='h6'>{item.value}</Typography>
        </div>
        <div>
          <Typography variant='body2'>{renderStatusLabel(item.label)}</Typography>
        </div>
      </div>
    )
  }

  const renderProgressItem = (item) => {
    console.log(item);
    return (
      <Progress bar color={renderProgressColor(item.label)} value={item.value} />
    )
  }

  const renderData = (data) => {
    const status = countUserStatus(data);
    return (
      <>
        <Typography align='left' variant='h5'>Thống kê</Typography>
        <div className="d-flex">
          {status.map(renderItem)}
          <Progress multi>
            {status.map(renderProgressItem)}
          </Progress>
        </div>
      </>
    )
  }

  return (
    <DataLoader
      entity={ENTITY.MANAGER}
      getAll
      renderData={renderData}
      key={next()}
    />
  );
}

export default ManagerStatusBar;