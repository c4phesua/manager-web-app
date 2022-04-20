import React, { useState } from 'react';
import { Switch } from '@material-ui/core';
import { STATUS } from '../util/Constant';
import { renderStatusColor, renderStatusLabel } from '../util/DecoratorConstant';

const StatusSwitch = ({ status, entity, onStatusChange }) => {
  const [statusLabel, setStatusLabel] = useState(renderStatusLabel(status));
  const [checked, setChecked] = useState(status === STATUS.ENABLE);
  const [statusColor, setStatusColor] = useState(renderStatusColor(status));

  const getStatus = (value) => {
    return value ? STATUS.ENABLE : STATUS.DISABLE;
  }

  const handleOnChange = (e) => {
    const value = e.target.checked;
    const status = getStatus(value);
    setChecked(value);
    setStatusLabel(renderStatusLabel(status))
    setStatusColor(renderStatusColor(status))
    if (onStatusChange) {
      onStatusChange(status);
    }
  }
  return (
    <div>
      <Switch
        checked={checked}
        onChange={handleOnChange}
        name={`${entity}-status`}
        disabled={status === STATUS.UNCONFIRMED}
      />
      <span className={statusColor}>
        {statusLabel}
      </span>
    </div>
  )
}

export default StatusSwitch;