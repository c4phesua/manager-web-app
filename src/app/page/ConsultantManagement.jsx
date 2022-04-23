import React, { useState } from 'react';
import { ENTITY, MESSAGE, PAGE_NAME, ROLE, SIMPLE_FILTER_OPTIONS, STATUS } from '../util/Constant';
import TableColumnDataMapping from '../component/table/TableColumnMapping';
import DataTable from '../component/table/DataTable';
import { Button, Typography } from '@material-ui/core';
import Error from './Error';
import CreateConsultantDialog from '../component/dialog/CreateConsultantDialog';
import { next } from '../util/Count';
import { idDecorator, mailDecorator, statusDecorator } from '../util/DecoratorConstant';
import UserStatusBar from '../component/UserStatusBar';


const ConsultantManagement = (props) => {

  const { user } = props;

  document.title = PAGE_NAME.HR_MANAGEMENT;

  const [createConsultantDialogOpen, setCreateConsultantDialogOpen] = useState(false);
  const entity = ENTITY.CONSULTANT;

  const columnMapping = [
    new TableColumnDataMapping('ID', 'id', (name, row) => idDecorator(name, row, entity), 'text-center'),
    new TableColumnDataMapping('Họ', 'firstname'),
    new TableColumnDataMapping('Tên', 'lastname'),
    new TableColumnDataMapping('Email', 'email', mailDecorator),
    new TableColumnDataMapping('Số điện thoại', 'phoneNumber'),
    new TableColumnDataMapping('Địa chỉ', 'address'),
    new TableColumnDataMapping('Trạng thái', 'status', (name, row) => statusDecorator(name, row, entity)),
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
      <div className="mb-2">
        <UserStatusBar entity={entity} />
      </div>
      <DataTable
        key={next()}
        renderButton={renderAddConsultantButton}
        useSearchText
        entity={entity}
        usePagination
        additionalParams={additionalParams}
        size={10}
        columnMapping={columnMapping}
        useFilter
        filterOptions={SIMPLE_FILTER_OPTIONS}
      />
      {createConsultantDialogOpen && <CreateConsultantDialog handleClose={handleCloseCreateConsultantDialog} open={createConsultantDialogOpen} />}
    </div>
  );
}

export default ConsultantManagement;