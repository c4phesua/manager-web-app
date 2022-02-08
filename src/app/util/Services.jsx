import http from './http';
import Apis from './Apis';
const URL_PERFIX = process.env.REACT_APP_API;
const Services = {
  getMe() {
    return http.get(URL_PERFIX + Apis.userMe);
  },

  login(user) {
    return http.post(URL_PERFIX + Apis.login, user);
  }
};

export default Services;