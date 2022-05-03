import { Button, DialogActions, DialogContent, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import Services from '../../util/Services';
import Notification from '../../util/Toast';
import PackageProfile from '../PackageProfile';
import CloseableDialogComponent from './CloseableDialogComponent';
import { getInitialPackageForm } from './FormHelper';

function CreatePackageDialog({ open, handleClose, onCreateSuccess, ...props }) {

  const [newPackage, setNewPackage] = useState(getInitialPackageForm());

  const handleOnChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setNewPackage({
      ...newPackage,
      [name]: value,
    });
  }

  const onFileChange = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      console.log(files);
      let temporaryImages = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const tempImg = URL.createObjectURL(file);
        temporaryImages = temporaryImages.concat(tempImg);
      }
      console.log(temporaryImages);
      setNewPackage({
        ...newPackage,
        files: files,
        temporaryImages: temporaryImages,
      })
    }

  }

  const onDialogSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    const { files } = newPackage;
    for (let i = 0; i < files.length; i++) {
      formData.append('file', files[i])
    }
    Services.uploadBatchFile(formData)
    .then(({data}) => {
      return data.content;
    })
    .then((links) => {
      const urls = links.map(link => {
        return {
          imageUrl: link
        }
      })
      console.log(urls)
      Services.createPackage({...newPackage, images: urls})
      .then(() => {
        Notification.pushSuccess(`Tạo mới gói dịch vụ thành công`);
        handleClose();
      })
    })
    

  }

  return (
    <CloseableDialogComponent title='Thêm gói dịch vụ' maxWidth='lg' isOpen={open} handleClose={handleClose} {...props}>
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
              <PackageProfile pkg={newPackage} />
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
                <Label for='location'>Địa điểm</Label>
                <Input required name='location' onChange={handleOnChange} />
              </FormGroup>
              <FormGroup>
                <Label for='duration'>Thời gian thực hiện</Label>
                <Input required name='duration' type='number' onChange={handleOnChange} />
              </FormGroup>
              <FormGroup>
                <Label for='price'>Giá ước tính</Label>
                <Input required name='price' type='number' onChange={handleOnChange} />
              </FormGroup>
              <FormGroup>
                <Label for='description'>Mô tả</Label>
                <Input required type='textarea' name='description' onChange={handleOnChange} />
              </FormGroup>
              <FormGroup>
                <Label for='temporaryFile'>Thêm ảnh</Label>
                <Input type='file' multiple name='temporaryFile' onChange={onFileChange} />
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

export default CreatePackageDialog;