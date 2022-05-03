import { Button, DialogActions, DialogContent } from '@material-ui/core';
import { Label, Form, FormGroup, Input, FormFeedback } from 'reactstrap';
import React from 'react';
import { useState } from 'react';
import CloseableDialogComponent from './CloseableDialogComponent';
import { getInitialUserForm, validateEmail } from './FormHelper';
import Services from '../../util/Services';
import Notification from '../../util/Toast';

const CreateConsultantDialog = ({ open, handleClose, onCreateSuccess, ...props }) => {

  const [newConsultant, setNewConsultant] = useState(getInitialUserForm());
  const [validEmail, setValidEmail] = useState();

  const onDialogSubmit = (e) => {
    e.preventDefault();
    Services.createConsultant(newConsultant).then((response) => {
      console.log(response);
      if(onCreateSuccess) {
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
    setNewConsultant({
      ...newConsultant,
      [name]: value,
    });
  }

  return (
    <CloseableDialogComponent title='Thêm nhân viên hỗ trợ' maxWidth='lg' isOpen={open} handleClose={handleClose} {...props}>
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
            <Input type='email' invalid={newConsultant.email && !validEmail} valid={validEmail} required name='email' onChange={handleOnChange} />
            {newConsultant.email && <FormFeedback>
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

export default CreateConsultantDialog;