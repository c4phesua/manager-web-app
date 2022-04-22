import { get } from 'lodash';
import StatusSwitch from '../component/StatusSwitch';
import { MomoIcon, PaypalIcon } from '../images/Icon';
import { PAYMENT_TYPE, STATUS } from './Constant';
import Services from './Services';
import Notification from './Toast';

export const idDecorator = (name, row, entity) => {
  const id = get(row, name, '');
  return (
    <div>
      <a color='primary' href={`/${entity}/${id}`}>{id}</a>
    </div>
  )
}

export const imageDecorator = (name, row) => {
  const url = get(row, name, '');
  const alt = get(row, 'name', '');
  return (
   <div>
     <img className='table-image-decorator' alt={alt} src={url} title={alt} />
   </div>
  )
}

export const mailDecorator = (name, row) => {
  const email = get(row, name, '');
  return (
    <div title={`Gửi mail đến ${email}`}>
      <a href={`mailto:${email}`}>{email}</a>
    </div>
  )
}


export const renderStatusLabel = (status) => {
  switch (status) {
    case STATUS.UNCONFIRMED:
      return 'Chưa kích hoạt'
    case STATUS.DISABLE:
      return 'Ngưng hoạt động'
    case STATUS.ENABLE:
      return 'Đã kích hoạt'
    default:
      return;
  }
}

export const renderStatusColor = (status) => {
  switch (status) {
    case STATUS.UNCONFIRMED:
      return 'text-danger'
    case STATUS.DISABLE:
      return 'text-secondary'
    case STATUS.ENABLE:
      return 'text-success'
    default:
      return;
  }
}

export const renderProgressColor = (status) => {
  switch (status) {
    case STATUS.UNCONFIRMED:
      return 'danger'
    case STATUS.DISABLE:
      return 'info'
    case STATUS.ENABLE:
      return 'success'
    default:
      return;
  }
}

export const statusDecorator = (name, row, entity) => {
  const status = get(row, name, '');
  // const checked = status === STATUS.ENABLE;
  const id = get(row, 'id', '');
  const onStatusChange = (value) => {
    Services.updateStatus(entity, id, value)
    .then(() => {
      Notification.pushSuccess(`Cập nhật trạng thái thành công`);
    })
  }
  return (
    <div>
      <StatusSwitch entity={entity} onStatusChange={onStatusChange} status={status} />
    </div>
  )
}

const iconByPayment = (paymentType) => {
  if (paymentType === PAYMENT_TYPE.MOMO) {
    return <MomoIcon style={{width: 80, height: 40}} />
  }
  if (paymentType === PAYMENT_TYPE.PAYPAL) {
    return <PaypalIcon style={{width: 80, height: 40}}/>
  }
  return <PaypalIcon style={{width: 80, height: 40}}/>
}

export const paymentTypeDecorator = (name, row) => {
  const paymentType = get(row, name);
  const icon = iconByPayment(paymentType);
  return (
    <div>
      {icon}
    </div>
  )
}

export const currencyDecorator = (name, row) => {
  const price = get(row, name);
  const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
  const currency = formatter.format(price);
  return (
    <div>
      {currency}
    </div>
  )
}