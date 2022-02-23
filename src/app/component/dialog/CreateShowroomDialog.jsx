import { Button, DialogActions, DialogContent } from '@material-ui/core';
import { Label, Form, FormGroup, Input } from 'reactstrap';
import React from 'react';
import { useState } from 'react';
import CloseableDialogComponent from './CloseableDialogComponent';
import { getInitialUserForm, getIntitialShowroomForm } from './NewUserHelper';
import Services from '../../util/Services';
import Notification from '../../util/Toast';

const CreateShowroomDialog = ({ open, handleClose, onCreateSuccess, ...props }) => {

  const [newShowroom, setNewShowroom] = useState(getIntitialShowroomForm());

  const onDialogSubmit = (e) => {
    e.preventDefault();
    Services.createShowroom(newShowroom).then((response) => {
      console.log(response);
      if(onCreateSuccess) {
        console.log('oncreatesuccess');
        onCreateSuccess();
      }
      Notification.pushSuccess(`Tạo mới chi nhánh ${response?.data?.name} thành công`);
      handleClose();
    })
  }

  const handleOnChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setNewShowroom({
      ...newShowroom,
      [name]: value,
    });
  }

  return (
    <CloseableDialogComponent title='Thêm quản lý' maxWidth='lg' isOpen={open} handleClose={handleClose} {...props}>
      <Form onSubmit={onDialogSubmit}>
        <DialogContent>
          {/* <FormGroup>
            <Label for='firstname' >Họ</Label>
            <Input required name='firstname' onChange={handleOnChange} />
          </FormGroup>
          <FormGroup>
            <Label for='lastname' >Tên</Label>
            <Input required name='lastname' onChange={handleOnChange} />
          </FormGroup>
          <FormGroup>
            <Label for='email'>Email</Label>
            <Input required name='email' onChange={handleOnChange} />
          </FormGroup>
          <FormGroup>
            <Label for='phoneNumber'>Số điện thoại</Label>
            <Input required name='phoneNumber' type='number' onChange={handleOnChange} />
          </FormGroup>
          <FormGroup>
            <Label for='address'>Địa chỉ</Label>
            <Input required name='address' onChange={handleOnChange} />
          </FormGroup>
          <FormGroup>
            <Label for='birthday'>Ngày sinh</Label>
            <Input required type='date' name='birthday' onChange={handleOnChange} />
          </FormGroup> */}
        </DialogContent>
        <DialogActions>
          <Button color='inherit' variant='contained' onClick={handleClose}>Huỷ</Button>
          <Button type='submit' color='primary' variant='contained'>Tạo</Button>
        </DialogActions>
      </Form>
    </CloseableDialogComponent>

  );
}

export default CreateShowroomDialog;