import { Card, CardContent, InputAdornment, TextField } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { Search } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { STATUS } from '../../util/Constant';
import Service from '../../util/Services';
import Pagination from './Pagination';
import { renderStatusLabel } from '../../util/DecoratorConstant';

const DataLoader = ({
  entity,
  size,
  additionalParams,
  renderData,
  renderButton,
  filterOptions,
  getAll = false,
  useSearchText = false,
  usePagination = false,
  useFilter = false,
  noCard = false,
  ...props
}) => {

  const [data, setData] = useState();
  const [page, setPage] = useState(getAll ? undefined : 0);
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
        <div style={{ flex: 'none' }}>
          Trạng thái:
        </div>
        <select style={{ border: 'none' }} defaultValue={STATUS.ALL} variant='standard' onChange={onFilterChange}>
          <option value={STATUS.ALL}>Tất cả</option>
          {filterOptions && filterOptions.map((option) => <option value={option}>{renderStatusLabel(option)}</option>)}
        </select>
      </div>
    )
  }

  const renderSearchText = () => {
    return (
      <TextField
        className="bg-white"
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
          endAdornment: useFilter && renderFilter()
        }}
      />
    )
  }

  const onPageChange = (zeroBasedPage) => {
    setPage(zeroBasedPage.selected);
  }

  const showData = () => {
    return (
      <>
        {data.content.length > 0 ? renderData(data.content) : 'Chưa có dữ liệu'}
        {
          usePagination && <div className="d-flex justify-content-end">
            <Pagination store={data} onPageChange={onPageChange} />
          </div>
        }
      </>
    )

  }

  const render = () => {
    return (
      <>
        <div className={useSearchText && 'row mb-3'}>
          <div className='col'>
            {useSearchText && renderSearchText()}
          </div>
          {renderButton && <div className='col-sm col-sm-auto'>
            {renderButton()}
          </div>}
        </div>
        {
          data ? showData() : <Skeleton animation="wave" variant="rect" height={200}/>
        }

      </>
    )
  }

  const renderWithCard = () => {
    return (
      <Card>
        <CardContent>
          {render()}
        </CardContent>
      </Card>
    )
  }

  return noCard ? render() : renderWithCard();
}

export default DataLoader;