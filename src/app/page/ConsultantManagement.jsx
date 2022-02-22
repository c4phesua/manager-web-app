import React from 'react';
import { PAGE_NAME, ROLE } from '../util/Constant';
import TableColumnDataMapping from '../component/table/TableColumnMapping';
import DataTable from '../component/table/DataTable';
import { Typography } from '@material-ui/core';
import Error from './Error';


const ConsultantManagement = (props) => {

  const {user} = props;

  document.title = PAGE_NAME.HR_MANAGEMENT;

  const columnMapping = [
    new TableColumnDataMapping('ID', 'id'),
    new TableColumnDataMapping('Họ', 'firstname'),
    new TableColumnDataMapping('Tên', 'lastname'),
    new TableColumnDataMapping('Email', 'email'),
    new TableColumnDataMapping('Số điện thoại', 'phoneNumber'),
    new TableColumnDataMapping('Email', 'email'),
    new TableColumnDataMapping('Giới tính', 'gender'),
    new TableColumnDataMapping('Trạng thái', 'status'),
  ]

  const additionalParams = {
    showroomId: user?.showroomId || '',
  }

  if (user.role === ROLE.MANAGER && !user.showroomId) {
    return (
      <Error message='Bạn hiện tại chưa quản lý chi nhánh nào để có thể nhìn thấy các nhân viên hỗ trợ.' />
    )
  }

  return (
    <div>
      <Typography variant='h3' align='left'>
        {PAGE_NAME.CONSULTANT}
      </Typography>
      <DataTable useSearchText entity="consultant" additionalParams={additionalParams} size={5} columnMapping={columnMapping} />
    </div>
  );
}

export default ConsultantManagement;