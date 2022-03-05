import { USER_STATUS } from "./Constant";

let count = 0;

export function next() {
  return count++;
}

export function countUserStatus(items) {
  let enable = 0;
  let disable = 0;
  let unconfirmed = 0;
  if (items.length > 0) {
    items.forEach(item => {
      if (item.status === USER_STATUS.UNCONFIRMED) {
        unconfirmed++;
      }
      if (item.status === USER_STATUS.DISABLE) {
        disable++;
      }
      if (item.status === USER_STATUS.ENABLE) {
        enable++;
      }
    })
  }
  return [ 
    {label: USER_STATUS.ENABLE, value: enable},
    {label: USER_STATUS.DISABLE, value: disable},
    {label: USER_STATUS.UNCONFIRMED, value: unconfirmed},
  ];
}