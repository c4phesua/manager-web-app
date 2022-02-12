import React from 'react';
import { Backspace, Dashboard, Apartment, PhotoCamera, Loyalty, Receipt, Style, SupervisedUserCircle, Group, AccountCircle } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { ROLE } from '../util/Constant';
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import RouteConstants from '../routes/RouteConstants';
import PageRouter from '../routes/PageRouter';


const LeftSideBar = ({ user }) => {

  const isActive = (path) => {
    return PageRouter.currentPath() === path;
  }

  const isDashboard = () => {
    return isActive(RouteConstants.root) || isActive(RouteConstants.dashBoard);
  }

  const { role } = user;

  const renderDashboard = () => {
    return (
      <MenuItem active={isDashboard()} icon={<Dashboard />}>Bảng điều khiển <Link to={RouteConstants.root} /></MenuItem>
    );
  }

  const renderUserManagement = () => {
    return (
      <SubMenu title="Quản lý nhân sự" icon={<Group />}>
        {role === ROLE.ADMIN &&
          <MenuItem active={isActive(RouteConstants.managers)} icon={<SupervisedUserCircle />}>Nhân viên quản lý <Link to={RouteConstants.managers} /></MenuItem>}
        <MenuItem active={isActive(RouteConstants.consultants)} icon={<AccountCircle />}>Chuyên viên hỗ trợ<Link to={RouteConstants.consultants} /></MenuItem>
      </SubMenu>
    );
  }


  const items = [
    { name: 'Quản lý chi nhánh', icon: <Apartment />, link: RouteConstants.showrooms },
    { name: 'Quản lý đặt lịch', icon: <Receipt />, link: RouteConstants.bookings },
    role === ROLE.ADMIN && { name: 'Quản lý gói dịch vụ', icon: <PhotoCamera />, link: RouteConstants.packages },
    role === ROLE.ADMIN && { name: 'Quản lý khuyến mãi', icon: <Loyalty />, link: RouteConstants.promotions },
    role === ROLE.ADMIN && { name: 'Quản lý kiểu trang điểm', icon: <Style />, link: RouteConstants.styles },
  ].filter(item => item !== false);


  const renderMenuItem = (item) => {
    return (
      <MenuItem key={item.link} icon={item.icon} active={isActive(item.link)}>{item.name} <Link to={item.link} /></MenuItem>
    )
  }

  const renderMenuItems = () => {
    return items.map(item => renderMenuItem(item));
  }

  const renderSideBarContent = () => {
    return (
      <Menu iconShape="square">
        {renderDashboard()}
        {renderUserManagement()}
        {renderMenuItems()}
      </Menu>
    );
  }

  return (
    <div className='left-side-bar'>
      <ProSidebar>
        <SidebarHeader>
          <Menu iconShape="square">
            <MenuItem icon={<SupervisedUserCircle />}>Hệ thống quản trị <Link to={RouteConstants.root} /></MenuItem>
          </Menu>
        </SidebarHeader>
        <SidebarContent>
          {renderSideBarContent()}
        </SidebarContent>
        <SidebarFooter>
          <Menu iconShape="square">
            <MenuItem icon={<Backspace />}>Đăng xuất <Link to={RouteConstants.logout} /></MenuItem>
          </Menu>
        </SidebarFooter>
      </ProSidebar>
    </div>

  );
}

export default LeftSideBar;