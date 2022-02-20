import React from 'react';
import { Backspace, Dashboard, Apartment, PhotoCamera, Loyalty, Receipt, Style, SupervisedUserCircle, Group, AccountCircle, Person } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { PAGE_NAME, ROLE } from '../util/Constant';
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import RouteConstants from '../routes/RouteConstants';
import PageRouter from '../routes/PageRouter';
import Arrays from '../util/Arrays';


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
      <MenuItem active={isDashboard()} icon={<Dashboard />}>{PAGE_NAME.DASHBOARD} <Link to={RouteConstants.root} /></MenuItem>
    );
  }

  const renderUserManagement = () => {
    return (
      <SubMenu title={PAGE_NAME.HR_MANAGEMENT} icon={<Group />}>
        {role === ROLE.ADMIN &&
          <MenuItem active={isActive(RouteConstants.managers)} icon={<SupervisedUserCircle />}>{PAGE_NAME.MANAGER} <Link to={RouteConstants.managers} /></MenuItem>}
        <MenuItem active={isActive(RouteConstants.consultants)} icon={<AccountCircle />}>{PAGE_NAME.CONSULTANT}<Link to={RouteConstants.consultants} /></MenuItem>
      </SubMenu>
    );
  }


  const items = [
    { name: PAGE_NAME.SHOWROOM_MANAGEMENT, icon: <Apartment />, link: RouteConstants.showrooms },
    { name: PAGE_NAME.BOOKING_MANAGEMENT, icon: <Receipt />, link: RouteConstants.bookings },
    ...Arrays.insertIf(role === ROLE.ADMIN, { name: PAGE_NAME.PACKAGE_MANAGEMENT, icon: <PhotoCamera />, link: RouteConstants.packages }) ,
    ...Arrays.insertIf(role === ROLE.ADMIN, { name: PAGE_NAME.PROMOTION_MANAGEMENT, icon: <Loyalty />, link: RouteConstants.promotions }),
    ...Arrays.insertIf(role === ROLE.ADMIN, { name: PAGE_NAME.STYLE_MANAGEMENT, icon: <Style />, link: RouteConstants.styles }),
    { name: PAGE_NAME.PROFILE, icon: <Person />, link: RouteConstants.profile },
  ];


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