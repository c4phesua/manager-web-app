import React, { useState } from 'react';
import { Switch } from '@material-ui/core';
import { STATUS } from '../util/Constant';
import { renderStatusColor, renderStatusLabel } from '../util/DecoratorConstant';

const StatusSwitch = ({status, entity, onStatusChange}) => {
  const [statusLabel, setStatusLabel] = useState(renderStatusLabel(status));
  const [checked, setChecked] = useState(status === STATUS.ENABLE);
  const [statusColor, setStatusColor] = useState(renderStatusColor(status));
  const handleOnChange = (e) => {
    const value = e.target.checked;
    setChecked(value);
    if (value) {
      setStatusLabel(renderStatusLabel(STATUS.ENABLE))
      setStatusColor(renderStatusColor(STATUS.ENABLE))
    } else if (!value) {
      setStatusLabel(renderStatusLabel(STATUS.DISABLE))
      setStatusColor(renderStatusColor(STATUS.DISABLE))
    }
    if (onStatusChange) {
      onStatusChange(value);
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