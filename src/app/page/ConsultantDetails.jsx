import React, { useEffect, useState } from 'react';
import { ENTITY } from '../util/Constant';
import Services from '../util/Services';

const ConsultantDetails = (props) => {

  const { params: { id } } = props.match;

  const entity = ENTITY.CONSULTANT;

  const [consultant, setConsultant] = useState({});

  const getConsultant = () => {
    Services.searchEntity(entity, id)
    .then(({data}) => setConsultant(data))
  }

  useEffect(() => {
    getConsultant();
  }, [])

  console.log(consultant);

  return (
    <div>
      <div class="container rounded bg-white mt-12 mb-12">
        <div class="row">
          <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
              <img alt='avatar' class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/>
              <span class="font-weight-bold">{consultant.firstname} {consultant.lastname}</span>
              <span class="text-black-50">{consultant.email}</span>
              {/* <span> </span> */}
            </div>
          </div>
          <div class="col-md-8 border-right">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-center align-items-center mb-3">
                <h4 class="text-right">Thông tin nhân viên hỗ trợ</h4>
              </div>
              <div class="row mt-4 text-left">
                <div class="col-md-6"><label class="labels">Họ :</label><input type="text" class="form-control" placeholder="first name" value={consultant.firstname} disabled /></div>
                <div class="col-md-6"><label class="labels">Tên :</label><input type="text" class="form-control" placeholder="first name" value={consultant.lastname} disabled /></div>
              </div>

              <div class="row mt-8 text-left">
                <div class="col-md-12"><label class="labels">số điện thoại</label><input type="text" class="form-control" placeholder="enter phone number" value={consultant.phoneNumber} disabled /></div>
                <div class="col-md-12"><label class="labels">Địa chỉ</label><input type="text" class="form-control" placeholder="enter address line 1" value={consultant.address} disabled /></div>
                <div class="col-md-12"><label class="labels">Email</label><input type="text" class="form-control" placeholder="enter address line 2" value={consultant.email} disabled /></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ConsultantDetails;