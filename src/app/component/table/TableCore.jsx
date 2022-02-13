import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
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
      return <TableRow key={next()}>{cols}</TableRow>;
    });
    const headers = columnMapping.map((header) =>
      <TableCell key={next()} className={header.className}>{header.headerCaption}</TableCell>);
    return (
      <>
        <Table responsive hover className={`${className || 'table'}`}>
          <TableHead>
            <TableRow>
              {headers}
            </TableRow>
          </TableHead>
          <TableBody>
            {this.renderRows(headers, rows)}
          </TableBody>
        </Table>
      </>
    );
  }

  render() {
    const { data } = this.props;
    return this.renderData(data);
  }

}

export default TableCore;