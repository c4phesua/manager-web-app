import React, { useEffect, useState } from 'react';
import { ENTITY } from '../util/Constant';
import Services from '../util/Services';
import Notification from '../util/Toast';

function ShowroomDetails(props) {

  const { params: { id } } = props.match;
  const [showroom, setShowroom] = useState({});
  const [managers, setManagers] = useState([]);
  const [managerId, setManagerId] = useState();
  const entity = ENTITY.SHOWROOM;

  const getShowroom = () => {
    Services.searchEntity(entity, id)
      .then(({ data }) => setShowroom(data));
  }

  const getManagerList = () => {
    Services.search(ENTITY.MANAGER)
      .then(({ data }) => setManagers(data.content));
  }

  useEffect(() => {
    getShowroom();
    getManagerList();
  }, [])

  const updateShowroomManager = (e) => {
    e.preventDefault();
    Services.assignManager(showroom.id, managerId)
    .then(() => {
      Notification.pushSuccess("Cập nhật người quản lý thành công");
    })
  }

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
                <div class="col-md-12"><label class="labels">Số điện thoại</label><input type="text" disabled class="form-control" placeholder="Nhập số điện thoại" value={showroom.phoneNumber} /></div>
                <div class="col-md-12"><label class="labels">Địa chỉ</label><input type="text" disabled class="form-control" placeholder="Nhập địa chỉ" value={showroom.address} /></div>
                <div class="col-md-12"><label class="labels">Thông tin chi tiết</label><textarea disabled type="text" class="form-control" placeholder="Nhập thông tin chi tiết" value={showroom.description} /></div>
                <div class="col-md-12">
                  <label class="labels">Quản lý</label>
                  <select onChange={(e) => {setManagerId(e.target.value)}}>
                    <option value={""}>Chọn quản lý</option>
                    {
                      managers.length > 0 && 
                      managers.map((manager) => (
                        <option selected={manager.id === showroom.managerId} value={manager.id}>{manager.firstname} {manager.lastname}</option>
                      ))
                    }
                  </select>
                </div>
              </div>
              <div class="mt-5 text-center"><button disabled={showroom.managerId === managerId} onClick={updateShowroomManager} class="btn btn-primary profile-button" type="button">Lưu thông tin</button></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ShowroomDetails;