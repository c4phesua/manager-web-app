import { Button, DialogActions, DialogContent } from '@material-ui/core';
import { Label, Form, FormGroup, Input, FormFeedback } from 'reactstrap';
import React from 'react';
import { useState } from 'react';
import CloseableDialogComponent from './CloseableDialogComponent';
import { getInitialUserForm, validateEmail } from './FormHelper';
import Services from '../../util/Services';
import Notification from '../../util/Toast';

const CreateManagerDialog = ({ open, handleClose, onCreateSuccess, ...props }) => {

  const [newManager, setNewManager] = useState(getInitialUserForm());
  const [validEmail, setValidEmail] = useState();

  const onDialogSubmit = (e) => {
    e.preventDefault();
    Services.createManager(newManager).then((response) => {
      console.log(response);
      if (onCreateSuccess) {
        console.log('oncreatesuccess');
        onCreateSuccess();
      }
      Notification.pushSuccess(`Tạo tài khoản ${response?.data?.email} thành công`);
      handleClose();
    })
  }

  const handleOnChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    if (name === 'email') {
      if (validateEmail(value)) {
        setValidEmail(true)
      } 
      else (setValidEmail(false))
    }
    setNewManager({
      ...newManager,
      [name]: value,
    });
  }

  console.log(validEmail, 'validEmail');

  return (
    <CloseableDialogComponent title='Thêm quản lý' maxWidth='lg' isOpen={open} handleClose={handleClose} {...props}>
      <Form onSubmit={onDialogSubmit}>
        <DialogContent>
          <FormGroup>
            <Label for='firstname' >Họ</Label>
            <Input required name='firstname' onChange={handleOnChange} />
          </FormGroup>
          <FormGroup>
            <Label for='lastname' >Tên</Label>
            <Input required name='lastname' onChange={handleOnChange} />
          </FormGroup>
          <FormGroup>
            <Label for='email'>Email</Label>
            <Input required type='email' invalid={newManager.email && !validEmail} valid={validEmail} name='email' onChange={handleOnChange} />
            {newManager.email && <FormFeedback>
              Email không hợp lệ
            </FormFeedback>}
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
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button color='inherit' variant='contained' onClick={handleClose}>Huỷ</Button>
          <Button type='submit' color='primary' variant='contained'>Tạo</Button>
        </DialogActions>
      </Form>
    </CloseableDialogComponent>

  );
}

export default CreateManagerDialog;