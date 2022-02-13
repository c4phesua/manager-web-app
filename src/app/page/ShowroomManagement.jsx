import React from 'react';
import DataTable from '../component/table/DataTable';
import TableColumnDataMapping from '../component/table/TableColumnMapping';
import { PAGE_NAME } from '../util/Constant';

const ShowroomManagement = (props) => {

  document.title = PAGE_NAME.SHOWROOM_MANAGEMENT;

  const columnMapping = [
    new TableColumnDataMapping('ID', 'id'),
    new TableColumnDataMapping('Tên', 'name'),
    new TableColumnDataMapping('Số điện thoại', 'phoneNumber'),
    new TableColumnDataMapping('Địa chỉ', 'address'),
    new TableColumnDataMapping('Id người quản lý', 'managerId'),
    new TableColumnDataMapping('Trạng thái', 'status'),
  ]

  return (
    <div>
      showroom
      <DataTable entity="showroom" size={5} columnMapping={columnMapping} />

    </div>
  );
}

export default ShowroomManagement;