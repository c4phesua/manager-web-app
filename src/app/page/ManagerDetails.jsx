import React, { useEffect, useState } from 'react';
import { ENTITY } from '../util/Constant';
import Services from '../util/Services';

const ManagerDetails = (props) => {

  const { params: { id } } = props.match;

  const [manager, setManager] = useState({});
  const [showroom, setShowroom] = useState({});
  const entity = ENTITY.MANAGER;

  const getShowroom = (id) => {
    Services.searchEntity(ENTITY.SHOWROOM, id)
    .then(({data}) => setShowroom(data));
  }


  const getManager = () => {
    Services.searchEntity(entity, id)
    .then(({data}) => {
      setManager(data);
      return data;
    })
    .then((data) => {
      getShowroom(data.showroomId)
    })
  }

  useEffect(() => {
    getManager();
  }, [])

  console.log(manager);
  console.log(showroom);

  return (
    <div>
      <div class="container rounded bg-white mt-12 mb-12">
        <div class="row">
          <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
              <img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" />
              <span class="font-weight-bold">{manager.firstname} {manager.lastname}</span>
              <span class="text-black-50">{manager.email}</span>
            </div>
          </div>
          <div class="col-md-8 border-right">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-center align-items-center mb-3">
                <h4 class="text-right">Thông tin nhân viên quản lý</h4>
              </div>
              <div class="row mt-4 text-left">
                <div class="col-md-6"><label class="labels">Họ :</label><input type="text" class="form-control" placeholder="first name" value={manager.firstname} disabled /></div>
                <div class="col-md-6"><label class="labels">Tên :</label><input type="text" class="form-control" placeholder="first name" value={manager.lastname} disabled /></div>
              </div>

              <div class="row mt-8 text-left">
                <div class="col-md-12"><label class="labels">số điện thoại</label><input type="text" class="form-control" placeholder="enter phone number" value={manager.phoneNumber} disabled /></div>
                <div class="col-md-12"><label class="labels">Địa chỉ</label><input type="text" class="form-control" placeholder="enter address line 1" value={manager.address} disabled /></div>
                <div class="col-md-12"><label class="labels">Email</label><input type="text" class="form-control" placeholder="enter address line 2" value={manager.email} disabled /></div>
              </div>
              <div class="row mt-2 justify-content-between text-left">
                <div class="col-md-12 "><label class="labels text-left">Showroom quản lý :</label>
                  <select class="form-select form-select-sm" aria-label=".form-select-lg example" disabled>
                    <option selected>{showroom.name}</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManagerDetails;