import { DialogActions, DialogContent } from '@material-ui/core';
import React from 'react';
import CloseableDialogComponent from './CloseableDialogComponent';

const CreateManagerDialog = ({open, ...props}) => {
  return (
    <CloseableDialogComponent title='Thêm quản lý' maxWidth='lg' isOpen={open} {...props}>
      <DialogContent>
        Hello
      </DialogContent>
      <DialogActions>

      </DialogActions>
    </CloseableDialogComponent>
      
  );
}

export default CreateManagerDialog;