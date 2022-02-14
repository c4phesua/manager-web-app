import React from 'react';
import { Box, DialogTitle, IconButton } from '@material-ui/core';
import PropTypes from 'prop-types';
import DialogComponent from './DialogComponent';
import { Close } from '@material-ui/icons';

export default function CloseableDialogComponent({ id, isOpen, handleClose, children, title, headerStyle = '', maxWidth }) {
  return (
    <DialogComponent
      id={id}
      isOpen={isOpen}
      maxWidth={maxWidth}
    >
      <DialogTitle className={headerStyle}>
        <Box display="flex" alignItems="center">
          {title}
          <Box flexGrow={1} />
          <Box>
            <IconButton onClick={handleClose}>
              <Close />
            </IconButton>
          </Box>
        </Box>
      </DialogTitle>
      {children}
    </DialogComponent>
  );
}

CloseableDialogComponent.propTypes = {
  id: PropTypes.string,
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func,
  children: PropTypes.element,
  title: PropTypes.string,
  headerStyle: PropTypes.string,
  maxWidth: PropTypes.string,
};

