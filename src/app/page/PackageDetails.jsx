import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function PackageDetails(props) {
  const { params: { id } } = props.match;

  return (
    <div>
      <div class="container rounded bg-white mt-12 mb-12">
        <div class="row">
        <div class="col-md-4">
              <div style={{height:"100px"}}></div>
              <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://fpt-sba-images.s3.ap-southeast-2.amazonaws.com/e0c833a82dfd4a37990dc49c15f77535"
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://fpt-sba-images.s3.ap-southeast-2.amazonaws.com/f336c04555c04a1b8b4c24008ca90da0"
                      alt="Second slide"
                    />

                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://fpt-sba-images.s3.ap-southeast-2.amazonaws.com/066b42f55e9a494d91b2c6cb0553c5ad"
                      alt="Third slide"
                    />

                  </Carousel.Item>
                </Carousel>
                <div style={{height:"50px"}}></div>
                <input class="form-control" type="file" id="formFileMultiple" multiple />
              
              </div>
          <div class="col-md-8 border">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-center align-items-center mb-3">
                <h4 class="text-right">Thông tin gói dịch vụ</h4>
              </div>
              <div class="row mt-4 text-left">
                <div class="col-md-12"><label class="labels">Tên gói :</label><input type="text" class="form-control" placeholder="Tên gói" value=""  /></div>
              </div>

              <div class="row mt-8 text-left">
                <div class="col-md-12"><label class="labels">Số tiền : </label><input type="number" class="form-control" placeholder="Nhập số tiền" value=""  /></div>
                <div class="col-md-12"><label class="labels">Địa chỉ : </label><input type="text" class="form-control" placeholder="Nhập địa chỉ" value=""  /></div>
                <div class="col-md-12"><label class="labels">Tổng thời gian chụp : </label><input type="text" class="form-control" placeholder="Nhập tổng thời gian chụp" value=""  /></div>
              </div>
              <div class="row mt-12" style={{height:"50px"}}>
              </div>

              
              <div class="row mt-12" style={{height:"50px"}}>
              </div>
              
              <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Lưu thông tin</button></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default PackageDetails;