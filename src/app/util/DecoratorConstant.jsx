import { Button, Switch } from '@material-ui/core';
import { get } from 'lodash';
import StatusSwitch from '../component/StatusSwitch';
import { STATUS } from './Constant';
import Services from './Services';

export const idDecorator = (name, row, entity) => {
  const id = get(row, name, '');
  return (
    <div>
      <Button color='primary' href={`/${entity}/${id}`}>{id}</Button>
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