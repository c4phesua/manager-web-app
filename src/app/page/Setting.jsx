import { Card, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { CardBody } from 'reactstrap';
import { PAGE_NAME } from '../util/Constant';

const Setting = (props) => {
  document.title = PAGE_NAME.SETTING;
  return (
    <div>
      <Typography variant='h3' align='left'>{PAGE_NAME.SETTING}</Typography>
      <Card>
        <CardBody>
          <div className='d-flex'>
            <label className='mr-1'>Địa chỉ:</label>
            <input type="text"  placeholder="enter address line 1" value="" />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Setting;