import { Typography } from '@material-ui/core';
import React from 'react';
import DataTable from '../component/table/DataTable';
import TableColumnDataMapping from '../component/table/TableColumnMapping';
import { ENTITY, PAGE_NAME } from '../util/Constant';
import { next } from '../util/Count';
import { idDecorator, imageDecorator, statusDecorator } from '../util/DecoratorConstant';

const StyleManagement = (props) => {

  document.title = PAGE_NAME.STYLE_MANAGEMENT

  const entity = ENTITY.STYLE;

  const columnMapping = [
    new TableColumnDataMapping('ID', 'id', (name, row) => idDecorator(name, row, entity), 'text-center'),
    new TableColumnDataMapping('Tên', 'name'),
    new TableColumnDataMapping('Ảnh minh họa', 'imageUrl', (name, row) => imageDecorator(name, row)),
    new TableColumnDataMapping('Trạng thái', 'status', (name, row) => statusDecorator(name, row, entity)),
  ]

  return (
    <div>
      <Typography variant='h3' align='left'>{PAGE_NAME.STYLE_MANAGEMENT}</Typography>
      <DataTable
        key={next()}
        // renderButton={renderCreatePackageButton}
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

export default StyleManagement;