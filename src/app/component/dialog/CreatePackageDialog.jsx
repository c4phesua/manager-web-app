import { Button, DialogActions, DialogContent, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';
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

  }

  const onDialogSubmit = (e) => {

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
              {/* <ShowroomProfile showroom={newShowroom} /> */}
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
                <Input type='file' name='temporaryFile' onChange={onFileChange} />
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