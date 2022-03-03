import { Typography } from '@material-ui/core';
import React from 'react';
import DataTable from '../component/table/DataTable';
import TableColumnDataMapping from '../component/table/TableColumnMapping';
import { ENTITY, PAGE_NAME } from '../util/Constant';
import { next } from '../util/Count';
import { idDecorator, statusDecorator } from '../util/DecoratorConstant';

const PackageManagement = (props) => {

  document.title = PAGE_NAME.PACKAGE_MANAGEMENT;

  const entity = ENTITY.PACKAGE;

  const columnMapping = [
    new TableColumnDataMapping('ID', 'id', (name, row) => idDecorator(name, row, entity), 'text-center'),
    new TableColumnDataMapping('Tên', 'name'),
    new TableColumnDataMapping('Địa điểm', 'location'),
    new TableColumnDataMapping('Giá dự tính', 'price'),
    new TableColumnDataMapping('Trạng thái', 'status', (name, row) => statusDecorator(name, row, entity)),
  ]

  return (
    <div>
      <Typography variant='h3' align='left'>{PAGE_NAME.PACKAGE_MANAGEMENT}</Typography>
      <DataTable
        key={next()}
        // renderButton={renderCreateShowroomButton}
        useSearchText
        entity={entity}
        size={5}
        columnMapping={columnMapping} 
        usePagination
        useFilter
      />
    </div>
  );
}

export default PackageManagement;