export const ROLE = {
  MANAGER: 'MANAGER',
  ADMIN: 'ADMIN',
  COMMON_AUTHENTICATED: 'COMMON_AUTHENTICATED',
  CONSULTANT: 'CONSULTANT',
  CUSTOMER: 'CUSTOMER',
};

export const STATUS = {
  ENABLE: 'ENABLE',
  DISABLE: 'DISABLE',
  UNCONFIRMED: 'UNCONFIRMED',
}

export const MESSAGE = {
  NOT_FOUND: '404 not found',
  PERMISSION_DENIED: 'Bạn không có quyền truy cập vào trang này.',
  USER_DENIED: 'Chỉ có Admin và người quản lý showroom mới có thể đăng nhập vào trang web này.',
  UNCONFIRMED_DENIED: (user) => `Tài khoản chưa được kích hoạt, vui lòng đến địa chỉ email: ${user.email} để kích hoạt tài khoản.`,
  DISABLE_DENIED: (user) => `Tài khoản : ${user.email} đã ngưng hoạt động.`,
};