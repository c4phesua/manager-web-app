import { Typography } from '@material-ui/core';
import React from 'react';
import DataTable from '../component/table/DataTable';
import TableColumnDataMapping from '../component/table/TableColumnMapping';
import { MomoIcon, PaypalIcon } from '../images/Icon';
import { ENTITY, PAGE_NAME, STATUS } from '../util/Constant';
import { next } from '../util/Count';
import { currencyDecorator, idDecorator, paymentTypeDecorator, statusTextDecorator,viewProfile } from '../util/DecoratorConstant';

const BookingManagement = (props) => {

  document.title = PAGE_NAME.BOOKING_MANAGEMENT;

  const entity = ENTITY.BOOKING;

  const columnMapping = [
    new TableColumnDataMapping('ID', 'id', (name, row) => idDecorator(name, row, entity), 'text-center'),
    new TableColumnDataMapping('Dịch vụ', 'package.name'),
    new TableColumnDataMapping('Giá tiền', 'price', currencyDecorator, 'text-center'),
    new TableColumnDataMapping('Tổng giá tiền', 'totalPrice', currencyDecorator, 'text-center'),
    new TableColumnDataMapping('Đã trả', 'paid', currencyDecorator),
    new TableColumnDataMapping('Phương thức thanh toán', 'paymentType', paymentTypeDecorator),
    new TableColumnDataMapping('Trạng thái', 'status', statusTextDecorator),
    new TableColumnDataMapping('Thông tin', 'profile', (name,row) => viewProfile(name,row,entity),'text-center' ),
  ]

  const filterOptions = [
    STATUS.PENDING,
    STATUS.PROCESSING,
    STATUS.ONBOARD,
    STATUS.FINISH,
    STATUS.CANCELED
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
        filterOptions={filterOptions}
      />
    </div>
  );
}

export default BookingManagement;