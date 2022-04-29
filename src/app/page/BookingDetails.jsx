import React, { useEffect, useState } from 'react';
import { ENTITY } from '../util/Constant';
import Services from '../util/Services';
import Carousel from 'react-bootstrap/Carousel';

function BookingDetails(props) {
  const { params: { id } } = props.match;
  const [booking, setBooking] = useState({});
  const entity = ENTITY.BOOKING;

  const getBooking = () => {
    Services.searchEntity(entity, id)
    .then(({data}) => setBooking(data));
  }

  useEffect(() => {
    getBooking();
  }, [])

  console.log(booking);


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
                <h4 class="text-right">Thông tin đặt lịch</h4>
              </div>
              <div class="row mt-4 text-left">
                <div class="col-md-12"><label class="labels">Tên gói :</label><input type="text" class="form-control" placeholder="Tên gói" value={booking.package.name} disabled /></div>
              </div>

              <div class="row mt-8 text-left">
                <div class="col-md-12"><label class="labels">Tổng tiền : </label><input type="number" class="form-control"  value={booking.totalPrice}  disabled/></div>
                <div class="col-md-12"><label class="labels">Tổng đã trả : </label><input type="number" class="form-control"  value={booking.paid}  disabled/></div>
                <div class="col-md-12"><label class="labels">Phương thức thanh toán : </label><input type="number" class="form-control"  value=""  disabled/></div>
                <div class="col-md-12"><label class="labels">Ngày đi chụp : </label><input type="number" class="form-control"  value=""  disabled/></div>
                <div class="col-md-12"><label class="labels">Ngày nhận ảnh : </label><input type="number" class="form-control"  value=""  disabled/></div>
                <div class="col-md-12"><label class="labels">Ngày thử đồ : </label><input type="number" class="form-control"  value=""  disabled/></div>
                <div class="col-md-12"><label class="labels">Dịch vụ thêm : </label>
                <input type="number" class="form-control"  value=""  disabled/>
                <input type="number" class="form-control"  value=""  disabled/>
                </div>
                <div class="col-md-12"><label class="labels">Địa chỉ : </label><input type="text" class="form-control"  value="" disabled /></div>
                <div class="col-md-12"><label class="labels">Chi nhánh thực hiện : </label><input type="text" class="form-control"  value="" disabled /></div>
              </div>
              <div class="row mt-12" style={{height:"50px"}}>
              </div>

              <div class="col-md-12"><label class="labels">Trạng thái : </label> {booking.status}</div>
              
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

export default BookingDetails;