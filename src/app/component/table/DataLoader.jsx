import { InputAdornment, Select, TextField } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { STATUS } from '../../util/Constant';
import Service from '../../util/Services';
import Pagination from './Pagination';

const DataLoader = ({
  entity,
  size,
  additionalParams,
  renderData,
  renderButton,
  useSearchText = false,
  usePagination = false,
  useFilter = false,
  ...props
}) => {

  const [data, setData] = useState();
  const [page, setPage] = useState(0);
  const [searchText, setSearchText] = useState();
  const [status, setStatus] = useState();

  const params = {
    page,
    size,
    searchText,
    status,
    ...additionalParams //  showroomId, etc
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
  }, [page, status]);

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      refreshData();
    }
  }

  const handleChange = (e) => {
    setSearchText(e.target.value);
  }

  const onFilterChange = (e) => {
    let value = e.target.value;
    if (value === STATUS.ALL) {
      value = null;
    }
    setStatus(value);
  }

  const renderFilter = () => {
    return (
      <div className='d-flex align-items-center mr-5'>
        <div style={{flex: 'none'}}>
          Trạng thái:
        </div>
        <select style={{border: 'none'}} defaultValue={STATUS.ALL} variant='standard' onChange={onFilterChange}>
          <option value={STATUS.ALL}>Tất cả</option>
          <option value={STATUS.DISABLE}>Vô hiệu hoá</option>
          <option value={STATUS.ENABLE}>Đã kích hoạt</option>
          <option value={STATUS.UNCONFIRMED}>Chưa kích hoạt</option>
        </select>
      </div>
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