import React from 'react';
import {get} from 'lodash';

export default class TableColumnDataMapping {
  constructor(
    headerCaption,
    fieldName,
    decorate = (name, row) => <div className="text-wrap">{get(row, name, '')}</div>,
    className = '',
    width = '',
  ) {
    this.headerCaption = headerCaption;
    this.fieldName = fieldName;
    this.decorate = decorate;
    this.className = className;
    this.width = width;
  }
}
