import { Card, IconButton, InputAdornment, Paper, TextField } from '@material-ui/core';
import { Filter, Filter2, FilterList, Search } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import Service from '../../util/Services';
import DropDown from '../DropDown';
import Pagination from './Pagination';

const DataLoader = ({ entity, size, additionalParams, renderData, renderButton, useSearchText = false, usePagination = false, ...props }) => {

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
      .then(({ data }) => setData(data));
  }

  const refreshData = () => {
    searchEntity();
  }

  useEffect(() => {
    refreshData();
  }, [page]);

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      refreshData();
    }
  }

  const handleChange = (e) => {
    setSearchText(e.target.value);
  }


  const renderOpenFilterButton = (props) => {
    return (
      <InputAdornment position="end" >
        <IconButton {...props}>
          <FilterList />
        </IconButton>
      </InputAdornment>
    )
  }

  const renderFilter = () => {
    return (
      <DropDown renderAnchorElement={renderOpenFilterButton}>
        <div className="top-right-dropdown">
          <div>clicked</div>
        </div>
      </DropDown>
    )
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
          endAdornment: renderFilter()
        }}
      />
    )
  }

  const onPageChange = (zeroBasedPage) => {
    setPage(zeroBasedPage.selected);
  }

  return data ? (
    <>
      <div className='row mb-3'>
        <div className='col'>
          {useSearchText && renderSearchText()}
        </div>
        {renderButton && <div className='col-sm col-sm-auto'>
          {renderButton()}
        </div>}
      </div>
      {renderData(data.content)}
      {usePagination && <Pagination store={data} onPageChange={onPageChange} />}
    </>
  ) : null;
}

export default DataLoader;