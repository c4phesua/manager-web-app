import React from 'react';
import DataTable from '../component/table/DataTable';
import TableColumnDataMapping from '../component/table/TableColumnMapping';
import { PAGE_NAME } from '../util/Constant';

const PackageManagement = (props) => {

  document.title = PAGE_NAME.PACKAGE_MANAGEMENT;

  const columnMapping = [
    new TableColumnDataMapping('ID', 'id'),
  ]

  return (
    <div>
      packages
      <DataTable entity="package" size={5} columnMapping={columnMapping} />
    </div>
  );
}

export default PackageManagement;