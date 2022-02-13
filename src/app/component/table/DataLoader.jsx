import React, { useEffect, useState } from 'react';
import TableCore from './TableCore';
import Service from '../../util/Services';

const DataTable = ({entity, size, additionalParams, renderData, ...props}) => {

  const [data, setData] = useState();
  const [page, setPage] = useState(0);
  const [searchText, setSearchText] = useState();

  const params = {
    page,
    size,
    searchText,
    ...additionalParams //status, showroomId, etc
  }

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

  console.log(data);

  return data ? renderData(data) : null;
}

export default DataTable;