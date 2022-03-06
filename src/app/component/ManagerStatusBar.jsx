import React from 'react';
import { ENTITY } from '../util/Constant';
import { countUserStatus, next } from '../util/Count';
import DataLoader from './table/DataLoader';
import { Typography } from '@material-ui/core';
import { renderProgressColor, renderStatusColor, renderStatusLabel } from '../util/DecoratorConstant'
import { Badge, Progress, UncontrolledTooltip } from 'reactstrap';

function ManagerStatusBar(props) {

  const renderItem = (item) => {
    return (
      <div className='mr-5'>
        <div>
          <Typography variant='h6'>{item.value}</Typography>
        </div>
        <div>
          <Typography variant='body2'>{renderStatusLabel(item.label)}</Typography>
        </div>
      </div>
    )
  }

  const renderProgressItem = (item, data) => {
    return (
      <Progress className={`progress-bar progress-${item.label}`} bar color={renderProgressColor(item.label)} value={item.value * 100 / data.length} >
        <UncontrolledTooltip placement="top" target={`.progress-${item.label}`} fade>
          {item.value}
        </UncontrolledTooltip>
      </Progress>
    )
  }

  const renderData = (data) => {
    const status = countUserStatus(data);
    return (
      <>
        <Typography align='left' variant='h5'>Thống kê</Typography>
        <div className="d-flex">
          {status.map(renderItem)}
          <div className='flex-grow-1'>
            <Progress multi>
              {status.map((item) => renderProgressItem(item, data))}
            </Progress>
          </div>
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