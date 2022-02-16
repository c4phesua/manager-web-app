import { Button, DialogActions, DialogContent, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import CloseableDialogComponent from './CloseableDialogComponent';

const CreateManagerDialog = ({ open, handleClose, ...props }) => {

  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [address, setAddress] = useState();
  const [gender, setGender] = useState();
  const [birthday, setBirtdDay] = useState();

  const onDialogSubmit = (e) => {
    e.preventDefault();
    alert('hello')
  }

  return (
    <CloseableDialogComponent title='Thêm quản lý' maxWidth='lg' isOpen={open}  {...props}>
      <form onSubmit={onDialogSubmit}>
        <DialogContent>
          <Typography variant='h6'>Họ</Typography>
          <TextField variant='outlined' size='small'/>
        </DialogContent>
        <DialogActions>
          <Button type='submit' color='inherit' variant='contained' onClick={handleClose}>Huỷ</Button>
          <Button type='submit' color='primary' variant='contained'>Tạo</Button>
        </DialogActions>
      </form>
    </CloseableDialogComponent>

  );
}

export default CreateManagerDialog;