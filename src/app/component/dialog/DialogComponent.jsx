import React from 'react';
import { Dialog } from '@material-ui/core';
import PropTypes from 'prop-types';

export default function DialogComponent({ id, isOpen, children, maxWidth = 'xs' }) {
  return (
    <Dialog
      id={id}
      maxWidth={maxWidth}
      fullWidth
      open={isOpen}
      className="dialog-popup"
    >
      {children}
    </Dialog>
  );
}

DialogComponent.propTypes = {
  id: PropTypes.string,
  isOpen: PropTypes.bool,
  children: PropTypes.element,
  maxWidth: PropTypes.string,
};

