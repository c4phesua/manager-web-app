import React from 'react';

function ShowroomDetails(props) {

  const { params: { id } } = props.match;

  return (
    <div>
      <div class="container rounded bg-white mt-12 mb-12">
        <div class="row">
          <div class="col-md-6 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
              <img class="img-fluid" alt="Responsive image" width="500px" src="https://fpt-sba-images.s3.ap-southeast-2.amazonaws.com/e0c833a82dfd4a37990dc49c15f77535"/>
            </div>
          </div>
          <div class="col-md-6 border-right">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-center align-items-center mb-3">
                <h4 class="text-right">Thông tin chi nhánh</h4>
              </div>
              <div class="row mt-4 text-left">
                <div class="col-md-12"><label class="labels">Tên chi nhánh :</label><input type="text" class="form-control" placeholder="Tên chi nhánh" value="" disabled /></div>
               </div>

              <div class="row mt-8 text-left">
                <div class="col-md-12"><label class="labels">số điện thoại</label><input type="text" class="form-control" placeholder="Nhập số điện thoại" value=""  /></div>
                <div class="col-md-12"><label class="labels">Địa chỉ</label><input type="text" class="form-control" placeholder="Nhập địa chỉ" value=""  /></div>
                <div class="col-md-12"><label class="labels">Thông tin chi tiết</label><textarea type="text" class="form-control" placeholder="Nhập thông tin chi tiết" value=""  /></div>
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