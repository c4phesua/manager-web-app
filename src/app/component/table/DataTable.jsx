import React, { useEffect, useState } from 'react';
import TableCore from './TableCore';
import Service from '../../util/Services';

const DataTable = ({entity, size, additionalParams, ...props}) => {

  const [data, setData] = useState();
  const [page, setPage] = useState(0);
  const [searchText, setSearchText] = useState();

  const params = {
    page,
    size,
    searchText,
    ...additionalParams //status, showroomId, etc
  }

  console.log(params);

  const searchEntity = () => {
    Service.search(entity, params)
      .then(({data}) => setData(data.content));
  }

  const refreshData = () => {
    searchEntity();
  }

  useEffect(() => {
    refreshData();
  }, []);

  const renderData = (data) => {
    console.log(props);
    return (
      <TableCore data={data} {...props} />
    );
  }

  console.log(data);

  return data ? renderData(data) : null;
}

export default DataTable;