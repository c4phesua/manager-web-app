import { Button, Switch } from '@material-ui/core';
import { get } from 'lodash';
import StatusSwitch from '../component/StatusSwitch';
import { STATUS } from './Constant';
import Services from './Services';

export const managerIdDecorator = (name, row) => {
  const id = get(row, name, '');
  return (
    <div>
      <Button color='primary' href={`/manager/${id}`}>{id}</Button>
    </div>
  )
}


export const renderStatusLabel = (status) => {
  switch (status) {
    case STATUS.UNCONFIRMED:
      return 'Chưa xác minh'
    case STATUS.DISABLE:
      return 'Ngưng hoạt động'
    case STATUS.ENABLE:
      return 'Đang hoạt động'
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
  const statusLabel = renderStatusLabel(status);
  // const checked = status === STATUS.ENABLE;
  let checked = status === STATUS.ENABLE;
  const onStatusChange = (e) => {
    //call service
    console.log('call service');
  }
  return (
    <div>
      <StatusSwitch entity={entity} onStatusChange={onStatusChange} status={status} />
    </div>
  )
}