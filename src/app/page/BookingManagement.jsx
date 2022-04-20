import { Typography } from '@material-ui/core';
import React from 'react';
import DataTable from '../component/table/DataTable';
import TableColumnDataMapping from '../component/table/TableColumnMapping';
import { ENTITY, PAGE_NAME } from '../util/Constant';
import { next } from '../util/Count';
import { idDecorator } from '../util/DecoratorConstant';

const BookingManagement = (props) => {

  document.title = PAGE_NAME.BOOKING_MANAGEMENT;

  const entity = ENTITY.BOOKING;

  const columnMapping = [
    new TableColumnDataMapping('ID', 'id', (name, row) => idDecorator(name, row, entity), 'text-center'),
    new TableColumnDataMapping('Dịch vụ', 'package.name'),
    new TableColumnDataMapping('Giá tiền', 'price', undefined, 'text-center'),
    new TableColumnDataMapping('Tổng giá tiền', 'totalPrice', undefined, 'text-center'),
    new TableColumnDataMapping('Đã trả', 'paid'),
    new TableColumnDataMapping('Phương thức thanh toán', 'paymentType'),
    new TableColumnDataMapping('Trạng thái', 'status'),
  ]

  return (
    <div>
      <Typography variant='h3' align='left'>
        {PAGE_NAME.BOOKING_MANAGEMENT}
      </Typography>
      <DataTable
        key={next()}
        // renderButton={renderCreatePackageButton}
        useSearchText
        entity={entity}
        size={5}
        columnMapping={columnMapping} 
        usePagination
        useFilter
      />
    </div>
  );
}

export default BookingManagement;