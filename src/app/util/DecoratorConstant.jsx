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

export const statusTextDecorator = (name, row) => {
  const status = get(row, name, '');
  console.log(renderStatusColor(status));
  return (
    <div className={renderStatusColor(status)}>
      {renderStatusLabel(status)}
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
    case STATUS.CANCELED:
      return 'Đã hủy'
    case STATUS.FINISH:
      return 'Đã hoàn thành'
    case STATUS.PROCESSING:
      return 'Đang xử lý'
    case STATUS.PENDING:
      return 'Đang chờ'
    case STATUS.ONBOARD:
      return 'Đang thực hiện'
    default:
      return;
  }
}

export const renderStatusColor = (status) => {
  switch (status) {
    case STATUS.UNCONFIRMED:
    case STATUS.CANCELED:
      return 'text-danger'
    case STATUS.DISABLE:
      return 'text-secondary'
    case STATUS.ENABLE:
    case STATUS.FINISH:
      return 'text-success'
    case STATUS.ONBOARD:
    case STATUS.PROCESSING:
      return 'text-primary'
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
export const viewProfile = (name, row, entity) => {
  const id = get(row, name, '');
  console.log('aaaa')
  console.log(row)
  return (
    <div>
      <a color='primary' href={`/${entity}/${row.id}`}>Thông tin</a>
    </div>
  )
}