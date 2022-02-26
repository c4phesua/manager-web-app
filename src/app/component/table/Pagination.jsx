import React from 'react';
import ReactPaginate from 'react-paginate';
import { ArrowForward, ArrowBack } from '@material-ui/icons'

const Pagination = ({ store, onPageChange }) => {

  console.log(store);

  return (
    <ReactPaginate
      previousLabel={
        <ArrowBack />
      }
      nextLabel={
        <ArrowForward />
      }
      breakLabel="..."
      pageCount={store.totalPages}
      forcePage={store.page}
      onPageChange={onPageChange}
      containerClassName={store.totalPages > 1 ? 'pagination' : 'd-none'}
      subContainerClassName="pages pagination"
      activeClassName="active"
    />
  );
};

export default Pagination;
