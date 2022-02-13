import http from './http';
import Apis from './Apis';
import { Search } from '@material-ui/icons';
const URL_PERFIX = process.env.REACT_APP_API;
const Services = {
  getMe() {
    return http.get(URL_PERFIX + Apis.userMe);
  },

  login(user) {
    return http.post(URL_PERFIX + Apis.login, user);
  },

  search(entity, params) {
    return http.get(`${URL_PERFIX}/${entity}`, null, params);
  }
};

export default Services;