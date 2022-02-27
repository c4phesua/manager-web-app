import React, { useState } from 'react';
import { Switch } from '@material-ui/core';
import { STATUS } from '../util/Constant';
import { renderStatusColor, renderStatusLabel } from '../util/DecoratorConstant';

const StatusSwitch = ({status, entity, onStatusChange}) => {
  const [statusLabel, setStatusLabel] = useState(renderStatusLabel(status));
  const [checked, setChecked] = useState(status === STATUS.ENABLE);
  const [statusColor, setStatusColor] = useState(renderStatusColor(status));
  const handleOnChange = (e) => {
    setChecked(e.target.checked);
    if (e.target.checked) {
      setStatusLabel(renderStatusLabel(STATUS.ENABLE))
      setStatusColor(renderStatusColor(STATUS.ENABLE))
    } else if (!e.target.checked) {
      setStatusLabel(renderStatusLabel(STATUS.DISABLE))
      setStatusColor(renderStatusColor(STATUS.DISABLE))
    }
    if (onStatusChange) {
      onStatusChange();
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