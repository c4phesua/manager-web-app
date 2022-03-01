import { get } from 'lodash';
import StatusSwitch from '../component/StatusSwitch';
import { STATUS } from './Constant';

export const idDecorator = (name, row, entity) => {
  const id = get(row, name, '');
  return (
    <div>
      <a color='primary' href={`/${entity}/${id}`}>{id}</a>
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

export const statusDecorator = (name, row, entity) => {
  const status = get(row, name, '');
  // const checked = status === STATUS.ENABLE;
  const onStatusChange = (val) => {
    console.log('call service', val);
  }
  return (
    <div>
      <StatusSwitch entity={entity} onStatusChange={onStatusChange} status={status} />
    </div>
  )
}