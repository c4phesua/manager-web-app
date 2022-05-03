import { STATUS, USER_GENDER } from "../../util/Constant"

export const getInitialUserForm = () => {
  return {
    firstname: '',
    lastname: '',
    email: '',
    phoneNumber: '',
    address: '',
    gender: USER_GENDER.MALE,
    birthday: ''
  }
}

export const getInitialShowroomForm = () => {
  return {
    name: '',
    phoneNumber: '',
    address: '',
    description: '',
    avatar: '',
    managerId: '',
  }
}

export const getInitialPackageForm = () => {
  return {
    name: '',
    duration: 0,
    description: '',
    location: '',
    images: [],
  }
}

export const getInitialStyleForm = () => {
  return {
    name: '',
    description: '',
    imageUrl: '',
    status: STATUS.ENABLE
  }
}

export const getInitialItemForm = () => {
  return {
    itemName: '',
    price: '',
    status: STATUS.ENABLE
  }
}

export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};