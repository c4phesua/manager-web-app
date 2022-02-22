import React from 'react';
import DataTable from '../component/table/DataTable';
import TableColumnDataMapping from '../component/table/TableColumnMapping';
import { PAGE_NAME, ROLE } from '../util/Constant';
import Error from './Error';

const ShowroomManagement = (props) => {

  document.title = PAGE_NAME.SHOWROOM_MANAGEMENT;

  const { user } = props;

  const columnMapping = [
    new TableColumnDataMapping('ID', 'id'),
    new TableColumnDataMapping('Tên', 'name'),
    new TableColumnDataMapping('Số điện thoại', 'phoneNumber'),
    new TableColumnDataMapping('Địa chỉ', 'address'),
    new TableColumnDataMapping('Id người quản lý', 'managerId'),
    new TableColumnDataMapping('Trạng thái', 'status'),
  ]

  if (user.role === ROLE.MANAGER) {
    if (!user.showroomId) {
      return (
        <Error message='Bạn hiện tại chưa quản lý chi nhánh nào.' />
      )
    }
    return (
      <div>
        showroom

      </div>
    )
  }

  return (
    <div>
      showroom
      <DataTable useSearchText entity="showroom" size={5} columnMapping={columnMapping} />

    </div>
  );
}

export default ShowroomManagement;