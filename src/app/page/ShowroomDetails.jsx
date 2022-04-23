import React, { useEffect, useState } from 'react';
import { ENTITY } from '../util/Constant';
import Services from '../util/Services';

function ShowroomDetails(props) {

  const { params: { id } } = props.match;
  const [showroom, setShowroom] = useState({});
  const entity = ENTITY.SHOWROOM;

  const getShowroom = () => {
    Services.searchEntity(entity, id)
    .then(({data}) => setShowroom(data));
  }

  useEffect(() => {
    getShowroom();
  }, [])

  console.log(showroom);

  return (
    <div>
      <div class="container rounded bg-white mt-12 mb-12">
        <div class="row">
          <div class="col-md-6 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
              <img class="img-fluid" alt={showroom.name} width="500px" src={showroom.avatar} />
            </div>
          </div>
          <div class="col-md-6 border-right">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-center align-items-center mb-3">
                <h4 class="text-right">Thông tin chi nhánh</h4>
              </div>
              <div class="row mt-4 text-left">
                <div class="col-md-12"><label class="labels">Tên chi nhánh :</label><input type="text" class="form-control" placeholder="Tên chi nhánh" value={showroom.name} disabled /></div>
               </div>

              <div class="row mt-8 text-left">
                <div class="col-md-12"><label class="labels">Số điện thoại</label><input type="text" class="form-control" placeholder="Nhập số điện thoại" value={showroom.phoneNumber}  /></div>
                <div class="col-md-12"><label class="labels">Địa chỉ</label><input type="text" class="form-control" placeholder="Nhập địa chỉ" value={showroom.address}  /></div>
                <div class="col-md-12"><label class="labels">Thông tin chi tiết</label><textarea type="text" class="form-control" placeholder="Nhập thông tin chi tiết" value={showroom.description}  /></div>
              </div>
              <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Lưu thông tin</button></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ShowroomDetails;