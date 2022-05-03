import { Button, DialogActions, DialogContent } from '@material-ui/core';
import { Label, Form, FormGroup, Input } from 'reactstrap';
import React from 'react';
import { useState } from 'react';
import CloseableDialogComponent from './CloseableDialogComponent';
import { getInitialItemForm } from './FormHelper';
import Services from '../../util/Services';
import Notification from '../../util/Toast';

const CreateAdditionalItemDialog = ({ open, handleClose, onCreateSuccess, ...props }) => {

  const [newAdditionalItem, setNewAdditionalItem] = useState(getInitialItemForm);

  const onDialogSubmit = (e) => {
    e.preventDefault();
    Services.createAdditionalItem(newAdditionalItem).then((response) => {
      console.log(response);
      if (onCreateSuccess) {
        onCreateSuccess();
      }
      Notification.pushSuccess(`Tạo mới thành công`);
      handleClose();
    })
  }

  const handleOnChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setNewAdditionalItem({
      ...newAdditionalItem,
      [name]: value,
    });
  }

  return (
    <CloseableDialogComponent title='Thêm dịch vụ đi kèm' maxWidth='lg' isOpen={open} handleClose={handleClose} {...props}>
      <Form onSubmit={onDialogSubmit}>
        <DialogContent>
          <FormGroup>
            <Label for='itemName' >Tên</Label>
            <Input required name='itemName' onChange={handleOnChange} />
          </FormGroup>
          <FormGroup>
            <Label for='price' >Giá</Label>
            <Input required name='price' type='number' onChange={handleOnChange} />
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

export default CreateAdditionalItemDialog;