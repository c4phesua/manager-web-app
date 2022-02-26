import React, { useState } from 'react';
import { MESSAGE, PAGE_NAME, ROLE } from '../util/Constant';
import TableColumnDataMapping from '../component/table/TableColumnMapping';
import DataTable from '../component/table/DataTable';
import { Button, Typography } from '@material-ui/core';
import Error from './Error';
import CreateConsultantDialog from '../component/dialog/CreateConsultantDialog';
import { next } from '../util/Count';


const ConsultantManagement = (props) => {

  const {user} = props;

  document.title = PAGE_NAME.HR_MANAGEMENT;

  const [createConsultantDialogOpen, setCreateConsultantDialogOpen] = useState(false);

  const columnMapping = [
    new TableColumnDataMapping('ID', 'id'),
    new TableColumnDataMapping('Họ', 'firstname'),
    new TableColumnDataMapping('Tên', 'lastname'),
    new TableColumnDataMapping('Email', 'email'),
    new TableColumnDataMapping('Số điện thoại', 'phoneNumber'),
    new TableColumnDataMapping('Email', 'email'),
    new TableColumnDataMapping('Địa chỉ', 'address'),
    new TableColumnDataMapping('Trạng thái', 'status'),
  ]

  const additionalParams = {
    showroomId: user?.showroomId || '',
  }

  if (user.role === ROLE.MANAGER && !user.showroomId) {
    return (
      <Error message={MESSAGE.SHOWROOM_UNASSIGNED} />
    )
  }

  const renderAddConsultantButton = () => {
    if (user.role !== ROLE.MANAGER) {
      return null;
    }
    return (
      <Button color='primary' variant="contained" onClick={handleOpenCreateConsultantDialog}>
        Thêm nhân viên
      </Button>
    );
  }

  const handleCloseCreateConsultantDialog = () => {
    setCreateConsultantDialogOpen(false);
  }

  const handleOpenCreateConsultantDialog = () => {
    setCreateConsultantDialogOpen(true);
  }

  return (
    <div>
      <Typography variant='h3' align='left'>
        {PAGE_NAME.CONSULTANT}
      </Typography>
      <DataTable
        key={next()}
        renderButton={renderAddConsultantButton}
        useSearchText entity="consultant"
        usePagination
        additionalParams={additionalParams}
        size={10}
        columnMapping={columnMapping}
        useFilter
      />
      {createConsultantDialogOpen && <CreateConsultantDialog handleClose={handleCloseCreateConsultantDialog} open={createConsultantDialogOpen} />}
    </div>
  );
}

export default ConsultantManagement;