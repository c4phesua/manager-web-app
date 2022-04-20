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
  ALL: 'ALL',
}

export const MESSAGE = {
  NOT_FOUND: 'Không tìm thấy trang',
  PERMISSION_DENIED: 'Bạn không có quyền truy cập vào trang này.',
  USER_DENIED: 'Chỉ có Admin và người quản lý showroom mới có thể đăng nhập vào trang web này.',
  SHOWROOM_UNASSIGNED: 'Bạn hiện tại chưa quản lý chi nhánh nào để có thể nhìn thấy các nhân viên hỗ trợ.',
  UNCONFIRMED_DENIED: (user) => `Tài khoản chưa được kích hoạt, vui lòng đến địa chỉ email: ${user.email} để kích hoạt tài khoản.`,
  DISABLE_DENIED: (user) => `Tài khoản : ${user.email} đã ngưng hoạt động.`,
};

export const PAGE_NAME = {
  DASHBOARD: 'Bảng điều khiển',
  HR_MANAGEMENT: 'Quản lý nhân sự',
  MANAGER: 'Nhân viên quản lý',
  CONSULTANT: 'Nhân viên hỗ trợ',
  SHOWROOM_MANAGEMENT: 'Quản lý chi nhánh',
  BOOKING_MANAGEMENT: 'Quản lý đặt lịch',
  SERVICE_MANAGEMENT: 'Quản lý dịch vụ',
  PACKAGE_MANAGEMENT: 'Gói chụp ảnh',
  ADDITIONAL_ITEM_MANAGEMENT: 'Dịch vụ đi kèm',
  PROMOTION_MANAGEMENT: 'Quản lý khuyến mãi',
  STYLE_MANAGEMENT: 'Quản lý kiểu trang điểm',
  PROFILE: 'Trang cá nhân',
  SETTING: 'Cài đặt',
}

export const USER_STATUS = {
  ENABLE: 'ENABLE',
  DISABLE: 'DISABLE',
  UNCONFIRMED: 'UNCONFIRMED',
}

export const USER_GENDER = {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
}

export const ENTITY = {
  MANAGER: 'manager',
  CONSULTANT: 'consultant',
  SHOWROOM: 'showroom',
  PACKAGE: 'package',
  BOOKING: 'booking',
  STYLE: 'style',
}