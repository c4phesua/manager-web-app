import { Button, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import CreateAdditionalItemDialog from '../component/dialog/CreateAdditionalItemDialog';
import CreatePackageDialog from '../component/dialog/CreatePackageDialog';
import DataTable from '../component/table/DataTable';
import TableColumnDataMapping from '../component/table/TableColumnMapping';
import { ENTITY, PAGE_NAME, SIMPLE_FILTER_OPTIONS } from '../util/Constant';
import { next } from '../util/Count';
import { currencyDecorator, idDecorator, statusDecorator } from '../util/DecoratorConstant';

const AdditionalItems = (props) => {

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
        Thêm dịch vụ
      </Button>
    )
  }

  const entity = ENTITY.ADDITIONAL_ITEM;

  const columnMapping = [
    new TableColumnDataMapping('ID', 'id', (name, row) => idDecorator(name, row, entity), 'text-center'),
    new TableColumnDataMapping('Tên', 'itemName'),
    new TableColumnDataMapping('Giá dự tính', 'price', (name, row) => currencyDecorator(name, row), 'text-center'),
    new TableColumnDataMapping('Trạng thái', 'status', (name, row) => statusDecorator(name, row, entity)),
  ]

  return (
    <div>
      <Typography variant='h3' align='left'>{PAGE_NAME.ADDITIONAL_ITEM_MANAGEMENT}</Typography>
      <DataTable
        key={next()}
        renderButton={renderCreatePackageButton}
        useSearchText
        entity={entity}
        size={5}
        columnMapping={columnMapping} 
        usePagination
        useFilter
        filterOptions={SIMPLE_FILTER_OPTIONS}
      />
      {createPackageDialogOpen && <CreateAdditionalItemDialog handleClose={handleCloseCreatePackageDialog} open={createPackageDialogOpen}/>}
    </div>
  );
}

export default AdditionalItems;