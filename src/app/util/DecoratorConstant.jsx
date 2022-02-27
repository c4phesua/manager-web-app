import { Button, Switch } from '@material-ui/core';
import { get } from 'lodash';
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



const renderStatusLabel = (status) => {
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

const renderStatusColor = (status) => {
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
    checked = e.target.checked;
    console.log('checked', checked);
  }
  return (
    <div>
      <Switch
        checked={checked}
        onChange={onStatusChange}
        name={`${entity}-status`}
        disabled={status === STATUS.UNCONFIRMED}
      />
      <span className={renderStatusColor(status)}>
        {statusLabel}
      </span>
    </div>
  )
}