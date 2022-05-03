import { Phonelink } from '@material-ui/icons';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { ENTITY } from '../util/Constant';
import Services from '../util/Services';
import Notification from '../util/Toast';

function PackageDetails(props) {
  const { params: { id } } = props.match;
  const entity = ENTITY.PACKAGE;

  const [pkg, setPkg] = useState({});

  const getPackage = () => {
    Services.searchEntity(entity, id)
      .then(({ data }) => setPkg(data));
  }

  useEffect(() => {
    getPackage();
  }, [])

  console.log(pkg);

  const handleOnChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setPkg({
      ...pkg,
      [name]: value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    Services.updatePackage(pkg, pkg.id)
    .then(() => {
      Notification.pushSuccess("Cập nhật thành công");
    })
  }

  return (
    <div>
      <div class="container rounded bg-white mt-12 mb-12">
        <div class="row">
          <div class="col-md-4">
            <div style={{ height: "100px" }}></div>
            <Carousel>
              {
                pkg.images && pkg.images.map(({ imageUrl }) => (
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={imageUrl}
                      alt="First slide"
                    />
                  </Carousel.Item>
                ))
              }
            </Carousel>
          </div>
          <div class="col-md-8 border">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-center align-items-center mb-3">
                <h4 class="text-right">Thông tin gói dịch vụ</h4>
              </div>
              <div class="row mt-8 text-left">
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Label for='name' >Tên</Label>
                    <Input required name='name' value={pkg.name} onChange={handleOnChange} />
                  </FormGroup>
                  <FormGroup>
                    <Label for='location'>Địa điểm</Label>
                    <Input required name='location' value={pkg.location} onChange={handleOnChange} />
                  </FormGroup>
                  <FormGroup>
                    <Label for='duration'>Thời gian thực hiện</Label>
                    <Input required name='duration' type='number' value={pkg.duration} onChange={handleOnChange} />
                  </FormGroup>
                  <FormGroup>
                    <Label for='price'>Giá ước tính</Label>
                    <Input required name='price' type='number' value={pkg.price} onChange={handleOnChange} />
                  </FormGroup>
                  <FormGroup>
                    <Label for='description'>Mô tả</Label>
                    <Input required type='textarea' name='description' value={pkg.description} onChange={handleOnChange} />
                  </FormGroup>
                  <div class="row mt-12" style={{ height: "50px" }}>
                  </div>
                  <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="submit">Lưu thông tin</button></div>
                </Form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default PackageDetails;