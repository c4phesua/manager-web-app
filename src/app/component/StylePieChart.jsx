import { Card, colors, Typography } from '@material-ui/core';
import React from 'react';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { BASIC_COLOR, ENTITY } from '../util/Constant';
import DataLoader from './table/DataLoader';

function StylePieChart(props) {

  const renderData = (data) => {
    const COLORS = BASIC_COLOR;

    console.log(data);
    return (
      <ResponsiveContainer minWidth={200} minHeight={300} position="center">
        <PieChart>
          <Pie
            data={data}
            outerRadius="90%"
            dataKey="total"
            startAngle={90}
            endAngle={-270}
            fill="#8884d8"
          >
            {data.map((entry, index) => (
              <Cell name={entry.styleName} key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>

    )
  }

  return (
    <Card>
      <Typography className='m-3' variant='h5' align='left'>Kiểu trang điểm</Typography>
      <DataLoader entity={ENTITY.STYLE_STATISTIC} getAll renderData={renderData} />
    </Card>
  );
}

export default StylePieChart;