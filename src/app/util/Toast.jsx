import toastr from 'toastr';

toastr.options = {
  tapToDismiss: false,
  closeButton: true,
  closeOnHover: false,
  debug: false,
  newestOnTop: true,
  progressBar: false,
  positionClass: 'toast-top-right',
  preventDuplicates: false,
  onclick: null,
  showDuration: '200',
  hideDuration: '500',
  timeOut: 0,
  extendedTimeOut: 0,
  showEasing: 'swing',
  hideEasing: 'linear',
  showMethod: 'fadeIn',
  hideMethod: 'fadeOut',
  escapeHtml: false,
};

export default class Notification {

  static pushSuccess(msg, title) {
      if (!title) {
        title = 'Hoàn tất!';
      }
      toastr.success(msg, title, { timeOut: 2000 });
  }

  static pushSuccessPermanent(msg, title) {
    if (!title) {
      title = 'Hoàn tất!';
    }
    toastr.success(msg, title);
  }

  static pushError(msg, title) {
    toastr.error(msg, title);
  }

  static remove() {
    toastr.remove();
  }

  static pushInfo(msg, timeout) {
    toastr.info(msg, '', {
      iconClass: 'toast-informing',
      timeOut: timeout
    });
  }
}
