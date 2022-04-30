import { Card, Container, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, CartesianGrid } from 'recharts';
import { ENTITY } from '../util/Constant';
import DataLoader from './table/DataLoader';

function IncomeChart(props) {

  const user = JSON.parse(localStorage.getItem('User'));
  console.log(user);


  const additionalParams = {
    showroomId: user.showroomId,
  }

  const renderData = (data) => {
    return (
      <ResponsiveContainer minWidth={200} minHeight={300} position="center">
        <LineChart
          margin={{
            top: 20,
            right: 20,
            bottom: 10,
            left: 0,
          }}
          data={data}
        >
          <Line type="monotone" dataKey="total" name='Thu nhập' />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="date" name="Ngày" />
          <Legend align='right' />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    )
  }

  return (
    <Card>
      <Typography className='m-3' variant='h6' align='left'>Thu nhập</Typography>
      <DataLoader entity={ENTITY.INCOME_STATISTIC} getAll renderData={renderData} additionalParams={additionalParams} />
    </Card>
  );
}

export default IncomeChart;