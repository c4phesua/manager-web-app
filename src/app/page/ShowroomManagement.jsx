import { Button, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import CreateShowroomDialog from '../component/dialog/CreateShowroomDialog';
import DataTable from '../component/table/DataTable';
import TableColumnDataMapping from '../component/table/TableColumnMapping';
import { ENTITY, PAGE_NAME, ROLE } from '../util/Constant';
import { next } from '../util/Count';
import { idDecorator, statusDecorator } from '../util/DecoratorConstant';
import Error from './Error';

const ShowroomManagement = (props) => {

  document.title = PAGE_NAME.SHOWROOM_MANAGEMENT;

  const [createShowroomDialogOpen, setCreateShowroomDialogOpen] = useState(false);


  const { user } = props;
  const entity = ENTITY.SHOWROOM;

  const columnMapping = [
    new TableColumnDataMapping('ID', 'id', (name, row) => idDecorator(name, row, entity), 'text-center'),
    new TableColumnDataMapping('Tên', 'name'),
    new TableColumnDataMapping('Số điện thoại', 'phoneNumber'),
    new TableColumnDataMapping('Địa chỉ', 'address'),
    new TableColumnDataMapping('Id người quản lý', 'managerId'),
    new TableColumnDataMapping('Trạng thái', 'status', (name, row) => statusDecorator(name, row, entity)),
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

  const handleCloseCreateShowroomDialog = () => {
    setCreateShowroomDialogOpen(false);
  }

  const handleOpenCreateManagerDialog = () => {
    setCreateShowroomDialogOpen(true);
  }

  const renderCreateShowroomButton = () => {
    return (
      <Button color='primary' variant="contained" onClick={handleOpenCreateManagerDialog}>
        Thêm chi nhánh
      </Button>
    )
  }

  return (
    <div>
      <Typography variant='h3' align='left'>
        {PAGE_NAME.SHOWROOM_MANAGEMENT}
      </Typography>
      <DataTable
        key={next()}
        renderButton={renderCreateShowroomButton}
        useSearchText
        entity={entity}
        size={5}
        columnMapping={columnMapping} 
        useFilter
      />
      {createShowroomDialogOpen && <CreateShowroomDialog handleClose={handleCloseCreateShowroomDialog} open={createShowroomDialogOpen}/>}
    </div>
  );
}

export default ShowroomManagement;