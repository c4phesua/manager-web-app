import http from './http';
import Apis from './Apis';
const URL_PERFIX = process.env.REACT_APP_API;
const Services = {
  getMe() {
    return http.get({ url: URL_PERFIX + Apis.userMe });
  },

  login(user) {
    return http.post({ url: URL_PERFIX + Apis.login, data: user, params: { entity: 'STAFF' } });
  },

  search(entity, params) {
    return http.get({ url: `${URL_PERFIX}/${entity}`, params });
  },

  createManager(manager) {
    return http.post({ url: URL_PERFIX + Apis.manager, data: manager });
  },

  createConsultant(consultant) {
    return http.post({ url: URL_PERFIX + Apis.consultant, data: consultant });
  },

  createShowroom(showroom) {
    return http.post({ url: URL_PERFIX + Apis.showroom, data: showroom });
  },

  createPackage(packAge) {
    return http.post({ url: URL_PERFIX + Apis.packAge, data: packAge });
  },

  uploadFile(file) {
    return http.post({ url: URL_PERFIX + Apis.uploadFile, data: file, headers: { 'Content-Type': 'image/jpg' } })
  },

  getShowroom(showroomId) {
    return http.get({ url: URL_PERFIX + Apis.showroom + `/${showroomId}` });
  },

  updateStatus(entity, id, status) {
    return http.patch({ url: `${URL_PERFIX}/${entity}/${id}`, params: { status } })
  }
};

export default Services;