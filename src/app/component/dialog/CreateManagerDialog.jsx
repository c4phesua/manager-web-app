import { Button, DialogActions, DialogContent, TextField, Typography } from '@material-ui/core';
import { Label, Form, FormGroup, Input } from 'reactstrap';
import React from 'react';
import { useState } from 'react';
import CloseableDialogComponent from './CloseableDialogComponent';
import { getInitialUserForm } from './NewUserHelper';

const CreateManagerDialog = ({ open, handleClose, ...props }) => {

  const [newManager, setNewManager] = useState(getInitialUserForm());

  const onDialogSubmit = (e) => {
    e.preventDefault();
    console.log('new manager', newManager);
  }

  const handleOnChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    console.log(name)
    setNewManager({
      ...newManager,
      [name]: value,
    });
  }

  return (
    <CloseableDialogComponent title='Thêm quản lý' maxWidth='lg' isOpen={open}  {...props}>
      <Form onSubmit={onDialogSubmit}>
        <DialogContent>
          <FormGroup>
            <Label for='firstname' >Họ</Label>
            <Input name='firstname' onChange={handleOnChange} />
          </FormGroup>
          <FormGroup>
            <Label for='lastname' >Tên</Label>
            <Input name='lastname' onChange={handleOnChange} />
          </FormGroup>
          <FormGroup>
            <Label for='email'>Email</Label>
            <Input name='email' onChange={handleOnChange} />
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button type='submit' color='inherit' variant='contained' onClick={handleClose}>Huỷ</Button>
          <Button type='submit' color='primary' variant='contained'>Tạo</Button>
        </DialogActions>
      </Form>
    </CloseableDialogComponent>

  );
}

export default CreateManagerDialog;