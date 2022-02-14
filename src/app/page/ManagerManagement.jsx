import React, { useEffect, useState } from 'react';
import DataTable from '../component/table/DataTable';
import TableColumnDataMapping from '../component/table/TableColumnMapping';
import { PAGE_NAME } from '../util/Constant';

const ManagerManagement = (props) => {

  document.title = PAGE_NAME.HR_MANAGEMENT;

  const columnMapping = [
    new TableColumnDataMapping('ID', 'id'),
    new TableColumnDataMapping('Họ', 'firstname'),
    new TableColumnDataMapping('Tên', 'firstname'),
    new TableColumnDataMapping('Email', 'email'),
    new TableColumnDataMapping('Số điện thoại', 'phoneNumber'),
    new TableColumnDataMapping('Email', 'email'),
    new TableColumnDataMapping('Giới tính', 'gender'),
    new TableColumnDataMapping('Trạng thái', 'status'),
  ]

  return (
    <div>
      manager
      <DataTable useSearchText entity="manager" size={5} columnMapping={columnMapping} />
    </div>
  );
}

export default ManagerManagement;