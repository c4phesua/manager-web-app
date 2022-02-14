import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, Paper, TableContainer, Box } from '@material-ui/core';
import { next } from '../../util/Count';

class TableCore extends React.Component {

  renderRows(headers, rows) {
    return (
      rows.length > 0
        ? rows
        : null
    );
  }

  renderData(data) {
    const { transform, className } = this.props;
    let { columnMapping } = this.props;

    if (transform) {
      [data, columnMapping] = transform(data, columnMapping);
    }

    const rows = data.slice().map((row) => {
      const cols = columnMapping.map((col) => (
        <TableCell className={col.className} key={next()}>{col.decorate(col.fieldName, row)}</TableCell>
      ));
      return <TableRow hover key={next()}>{cols}</TableRow>;
    });
    const headers = columnMapping.map((header) =>
      <TableCell key={next()} className={header.className}>{header.headerCaption}</TableCell>);
    return (
      <>
        <TableContainer component={Paper}>
          <Table responsive hover className={`${className || 'table'}`} aria-label="customized table">
            <TableHead>
              <TableRow>
                {headers}
              </TableRow>
            </TableHead>
            <TableBody>
              {this.renderRows(headers, rows)}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  }

  render() {
    const { data } = this.props;
    return this.renderData(data);
  }

}

export default TableCore;