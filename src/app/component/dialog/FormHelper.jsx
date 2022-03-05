import { USER_GENDER } from "../../util/Constant"

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