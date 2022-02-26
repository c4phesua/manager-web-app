import { Button, Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import CreateManagerDialog from '../component/dialog/CreateManagerDialog';
import DataTable from '../component/table/DataTable';
import TableColumnDataMapping from '../component/table/TableColumnMapping';
import { PAGE_NAME } from '../util/Constant';
import { next } from '../util/Count';

const ManagerManagement = (props) => {

  document.title = PAGE_NAME.HR_MANAGEMENT;

  const [createManagerDialogOpen, setCreateManagerDialogOpen] = useState(false);

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

  const renderAddManagerButton = () => {
    return (
      <Button color='primary' variant="contained" onClick={handleOpenCreateManagerDialog}>
        Thêm quản lý
      </Button>
    )
  }

  const handleCloseCreateManagerDialog = () => {
    setCreateManagerDialogOpen(false);
  }

  const handleOpenCreateManagerDialog = () => {
    setCreateManagerDialogOpen(true);
  }

  return (
    <div className="content-layout">
      <Typography variant='h3' align='left'>
        {PAGE_NAME.MANAGER}
      </Typography>
      <DataTable
        key={next()}
        renderButton={renderAddManagerButton}
        useSearchText
        entity="manager"
        size={5} 
        columnMapping={columnMapping} 
        usePagination
        useFilter
      />
      {createManagerDialogOpen && <CreateManagerDialog handleClose={handleCloseCreateManagerDialog} open={createManagerDialogOpen} />}
    </div>
  );
}

export default ManagerManagement;