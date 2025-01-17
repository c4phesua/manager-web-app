import { Button, Card, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { CardBody } from 'reactstrap';
import { PAGE_NAME } from '../util/Constant';
import Services from '../util/Services';
import Notification from '../util/Toast';

const CONFIG = {
  processingImageDates: 'processingImageDates',
  depositsPercentage: 'depositsPercentage',
  delayPhotoDay: 'delayPhotoDay',
  editableTime: 'editableTime',

}

const Setting = (props) => {
  document.title = PAGE_NAME.SETTING;

  const [processingImageDates, setProcessingImageDates] = useState();
  const [processingImageEnable, setProcessingImageEnable] = useState(false);
  const [depositsPercentage, setDepositsPercentage] = useState();
  const [depositsPercentageEnable, setDepositsPercentageEnable] = useState(false);
  const [delayPhotoDay, setDelayPhotoDay] = useState();
  const [delayPhotoDayEnable, setDelayPhotoDayEnable] = useState(false);
  const [editableTime, setEditableTime] = useState();
  const [editableTimeEnable, setEditableTimeEnable] = useState(false);

  useEffect(() => {
    Services.getConfiguration(CONFIG.processingImageDates)
    .then(({data}) => setProcessingImageDates(data.value));
    Services.getConfiguration(CONFIG.depositsPercentage)
    .then(({data}) => setDepositsPercentage(data.value));
    Services.getConfiguration(CONFIG.delayPhotoDay)
    .then(({data}) => setDelayPhotoDay(data.value));
    Services.getConfiguration(CONFIG.editableTime)
    .then(({data}) => setEditableTime(data.value));
  }, [])


  const onProcessingImageDatesChange = (e) => {
    const value = e.target.value;
    setProcessingImageDates(value);
    if (value !== '') {
      setProcessingImageEnable(true);
    } else {
      setProcessingImageEnable(false);
    }
  }

  const onDepositsPercentageChange = (e) => {
    const value = e.target.value;
    setDepositsPercentage(value);
    if (value !== '') {
      setDepositsPercentageEnable(true);
    } else {
      setDepositsPercentageEnable(false);
    }
  }

  const onDelayPhotoDayChange = (e) => {
    const value = e.target.value;
    setDelayPhotoDay(value);
    if (value !== '') {
      setDelayPhotoDayEnable(true);
    } else {
      setDelayPhotoDayEnable(false);
    }
  }
  
  const onEditableTimeChange = (e) => {
    const value = e.target.value;
    setEditableTime(value);
    if (value !== '') {
      setEditableTimeEnable(true);
    } else {
      setEditableTimeEnable(false);
    }
  }

  const onSaveProcessingImageDates = () => {
    Services.updateConfiguration(CONFIG.processingImageDates, processingImageDates)
    .then(() => {
      onSuccess();
      setProcessingImageEnable(false);
    })
  }

  const onSaveEditableTime = () => {
    Services.updateConfiguration(CONFIG.editableTime, editableTime)
    .then(() => {
      onSuccess();
      setEditableTimeEnable(false);
    })
  }

  const onSaveDepositPercentage = () => {
    Services.updateConfiguration(CONFIG.depositsPercentage, depositsPercentage)
    .then(() => {
      onSuccess();
      setDepositsPercentageEnable(false);
    })
  }

  const onSaveDelayPhotoDay = () => {
    Services.updateConfiguration(CONFIG.delayPhotoDay, delayPhotoDay)
    .then(() => {
      onSuccess();
      setDelayPhotoDayEnable(false);
    })
  }

  const onSuccess = () => {
    Notification.pushSuccess('Cập nhật thành công');
  }

  return (
    <div>
      <Typography variant='h3' align='left'>{PAGE_NAME.SETTING}</Typography>
      <Card>
        <CardBody>
              <div className='d-flex justify-content-between mb-5'>
                <label className='mr-1'>Thời gian xử lý ảnh (ngày):</label>
                <input onChange={onProcessingImageDatesChange} name='processingImageDates' className='flex-grow-1 text-right mr-3' type="number" value={processingImageDates} />
                <Button onClick={onSaveProcessingImageDates} color='primary' variant='contained' disabled={!processingImageEnable}>Lưu</Button>
              </div>
              <div className='d-flex justify-content-between mb-5' >
                <label className='mr-1'>Thời gian chỉnh sửa booking (giờ):</label>
                <input onChange={onEditableTimeChange} name='editableTime' className='flex-grow-1 text-right mr-3' type="number" value={editableTime} />
                <Button onClick={onSaveEditableTime} color='primary' variant='contained' disabled={!editableTimeEnable}>Lưu</Button>
              </div>
              <div className='d-flex justify-content-between mb-5'>
                <label className='mr-1'>Đặt cọc trước (%):</label>
                <input onChange={onDepositsPercentageChange} name='depositsPercentage' className='flex-grow-1 text-right mr-3' type="number" value={depositsPercentage} />
                <Button onClick={onSaveDepositPercentage} color='primary' variant='contained' disabled={!depositsPercentageEnable}>Lưu</Button>
              </div>
              <div className='d-flex justify-content-between mb-5'>
                <label className='mr-1'>Cho phép đặt lịch sau khoảng (ngày):</label>
                <input onChange={onDelayPhotoDayChange} name='delayPhotoDay' className='flex-grow-1 text-right mr-3' type="number" value={delayPhotoDay} />
                <Button onClick={onSaveDelayPhotoDay} color='primary' variant='contained'disabled={!delayPhotoDayEnable}>Lưu</Button>
              </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Setting;