import { Button, DialogActions, DialogContent, Grid } from '@material-ui/core';
import { Label, Form, FormGroup, Input } from 'reactstrap';
import React from 'react';
import { useState } from 'react';
import CloseableDialogComponent from './CloseableDialogComponent';
import { getIntitialShowroomForm } from './FormHelper';
import Services from '../../util/Services';
import Notification from '../../util/Toast';
import ShowroomProfile from '../ShowroomProfile';

const CreateShowroomDialog = ({ open, handleClose, onCreateSuccess, ...props }) => {

  const [newShowroom, setNewShowroom] = useState(getIntitialShowroomForm());

  const onDialogSubmit = (e) => {
    e.preventDefault();
    Services.uploadFile(newShowroom.file)
      .then(({ data: { fileUrl } }) => {
        setNewShowroom({
          ...newShowroom,
          avatar: fileUrl
        })
        return fileUrl;
      })
      .then((fileUrl) => {
        Services.createShowroom(newShowroom).then((response) => {
          console.log(response);
          if (onCreateSuccess) {
            console.log('oncreatesuccess');
            onCreateSuccess();
          }
          Notification.pushSuccess(`Tạo mới chi nhánh ${response?.data?.name} thành công`);
          handleClose();
        })
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

  const onAvatarChange = (e) => {
    const files = e.target.files;
    if (files && files[0]) {
      const temporaryAvatar = URL.createObjectURL(files[0])
      console.log(files[0]);
      setNewShowroom({
        ...newShowroom,
        temporaryAvatar,
        file: files[0]
      })
    }
  }

  return (
    <CloseableDialogComponent title='Thêm chi nhánh' maxWidth='lg' isOpen={open} handleClose={handleClose} {...props}>
      <Form onSubmit={onDialogSubmit}>
        <DialogContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              lg={4}
              md={6}
              xs={12}
            >
              <ShowroomProfile showroom={newShowroom} />
            </Grid>
            <Grid
              item
              lg={8}
              md={6}
              xs={12}
            >
              <FormGroup>
                <Label for='name' >Tên</Label>
                <Input required name='name' onChange={handleOnChange} />
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
                <Label for='description'>Mô tả</Label>
                <Input required type='textarea' name='description' onChange={handleOnChange} />
              </FormGroup>
              <FormGroup>
                <Label for='temporaryFile'>Ảnh đại diện</Label>
                <Input type='file' name='temporaryFile' onChange={onAvatarChange} />
              </FormGroup>
            </Grid>
          </Grid>
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