import { Button, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import CreatePackageDialog from '../component/dialog/CreatePackageDialog';
import DataTable from '../component/table/DataTable';
import TableColumnDataMapping from '../component/table/TableColumnMapping';
import { ENTITY, PAGE_NAME, STATUS } from '../util/Constant';
import { next } from '../util/Count';
import { idDecorator, statusDecorator } from '../util/DecoratorConstant';

const PackageManagement = (props) => {

  document.title = PAGE_NAME.PACKAGE_MANAGEMENT;

  const [createPackageDialogOpen, setCreatePackageDialogOpen] = useState(false);

  const handleCloseCreatePackageDialog = () => {
    setCreatePackageDialogOpen(false);
  }

  const handleOpenCreatePackageDialog = () => {
    setCreatePackageDialogOpen(true);
  }

  const renderCreatePackageButton = () => {
    return (
      <Button color='primary' variant="contained" onClick={handleOpenCreatePackageDialog}>
        Thêm gói dịch vụ
      </Button>
    )
  }

  const entity = ENTITY.PACKAGE;

  const columnMapping = [
    new TableColumnDataMapping('ID', 'id', (name, row) => idDecorator(name, row, entity), 'text-center'),
    new TableColumnDataMapping('Tên', 'name'),
    new TableColumnDataMapping('Địa điểm', 'location'),
    new TableColumnDataMapping('Giá dự tính', 'price', undefined, 'text-center'),
    new TableColumnDataMapping('Trạng thái', 'status', (name, row) => statusDecorator(name, row, entity)),
  ]

  const filterOptions = [
    STATUS.ENABLE,
    STATUS.DISABLE,
  ]

  return (
    <div>
      <Typography variant='h3' align='left'>{PAGE_NAME.PACKAGE_MANAGEMENT}</Typography>
      <DataTable
        key={next()}
        renderButton={renderCreatePackageButton}
        useSearchText
        entity={entity}
        size={5}
        columnMapping={columnMapping} 
        usePagination
        filterOptions={filterOptions}
        useFilter
      />
      {createPackageDialogOpen && <CreatePackageDialog handleClose={handleCloseCreatePackageDialog} open={createPackageDialogOpen}/>}
    </div>
  );
}

export default PackageManagement;