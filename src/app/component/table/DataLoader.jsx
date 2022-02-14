import { InputAdornment, TextField } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import Service from '../../util/Services';

const DataLoader = ({ entity, size, additionalParams, renderData, useSearchText = false, ...props }) => {

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
      .then(({ data }) => setData(data.content));
  }

  const refreshData = () => {
    searchEntity();
  }

  useEffect(() => {
    refreshData();
  }, []);

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      refreshData();
    }
  }

  const handleChange = (e) => {
    setSearchText(e.target.value);
  }

  const renderSearchText = () => {
    return (
      <TextField 
        type="text"
        id='search-input'
        spellCheck="false"
        variant="outlined"
        size="small"
        placeholder='Tìm kiếm'
        fullWidth
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
      />
    )
  }

  return data ? (
    <>
      {useSearchText && renderSearchText()}
      {renderData(data)}
    </>
  ) : null;
}

export default DataLoader;