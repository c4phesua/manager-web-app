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