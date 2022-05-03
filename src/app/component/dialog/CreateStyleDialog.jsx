import { Button, DialogActions, DialogContent, Grid } from '@material-ui/core';
import { Label, Form, FormGroup, Input } from 'reactstrap';
import React from 'react';
import { useState } from 'react';
import CloseableDialogComponent from './CloseableDialogComponent';
import {  getInitialStyleForm } from './FormHelper';
import Services from '../../util/Services';
import Notification from '../../util/Toast';
import StylePreview from '../StylePreview';

const CreateStyleDialog = ({ open, handleClose, onCreateSuccess, ...props }) => {

  const [newStyle, setNewStyle] = useState(getInitialStyleForm());

  const onDialogSubmit = (e) => {
    e.preventDefault();
    Services.uploadFile(newStyle.file)
      .then(({ data: { fileUrl } }) => {
        return fileUrl;
      })
      .then((fileUrl) => {
        console.log(fileUrl);
        Services.createStyle({...newStyle, imageUrl: fileUrl}).then((response) => {
          console.log(response);
          if (onCreateSuccess) {
            onCreateSuccess();
          }
          Notification.pushSuccess(`Tạo mới kiểu trang điểm ${response?.data?.name} thành công`);
          handleClose();
        })
      })
  }

  const handleOnChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setNewStyle({
      ...newStyle,
      [name]: value,
    });
  }

  const onAvatarChange = (e) => {
    const files = e.target.files;
    if (files && files[0]) {
      const temporaryAvatar = URL.createObjectURL(files[0])
      console.log(files[0]);
      setNewStyle({
        ...newStyle,
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
              lg={6}
              md={6}
              xs={12}
            >
              <StylePreview style={newStyle} />
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              xs={12}
            >
              <FormGroup>
                <Label for='name' >Tên</Label>
                <Input required name='name' onChange={handleOnChange} />
              </FormGroup>
              <FormGroup>
                <Label for='description'>Mô tả</Label>
                <Input required type='textarea' name='description' onChange={handleOnChange} />
              </FormGroup>
              <FormGroup>
                <Label for='temporaryFile'>Ảnh tham chiếu</Label>
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

export default CreateStyleDialog;