import React from 'react';
import { Backspace,
  Dashboard,
  Apartment,
  PhotoCamera,
  Loyalty,
  Receipt,
  Style,
  SupervisedUserCircle,
  Group,
  AccountCircle,
  Person,
  Settings,
  RoomService,
  NewReleases } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { PAGE_NAME, ROLE } from '../util/Constant';
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import RouteConstants from '../routes/RouteConstants';
import PageRouter from '../routes/PageRouter';
import Arrays from '../util/Arrays';
import { matchPath } from 'react-router-dom';


const LeftSideBar = ({ user }) => {

  const isActive = (path) => {
    return matchPath(PageRouter.currentPath(), { path });
  }

  const isDashboard = () => {
    return [RouteConstants.root, RouteConstants.dashBoard].includes(PageRouter.currentPath());
  }

  const { role, showroomId } = user;

  const renderDashboard = () => {
    return (
      <MenuItem active={isDashboard()} icon={<Dashboard />}>{PAGE_NAME.DASHBOARD} <Link to={RouteConstants.root} /></MenuItem>
    );
  }

  const isHRManagementOpen = () => {
    return [
      RouteConstants.manager,
      RouteConstants.managers,
      RouteConstants.consultants,
      RouteConstants.consultant,
    ].includes(PageRouter.currentPath());
  }

  const isPackageManagementOpen = () => {
    return [
      RouteConstants.packages,
    ].includes(PageRouter.currentPath());
  }

  const renderUserManagement = () => {
    return (
      <SubMenu title={PAGE_NAME.HR_MANAGEMENT} icon={<Group />} defaultOpen={isHRManagementOpen()}>
        {role === ROLE.ADMIN &&
          <MenuItem active={isActive(RouteConstants.managers) || isActive(RouteConstants.manager)} icon={<SupervisedUserCircle />}>{PAGE_NAME.MANAGER} <Link to={RouteConstants.managers} /></MenuItem>}
        <MenuItem active={isActive(RouteConstants.consultants)} icon={<AccountCircle />}>{PAGE_NAME.CONSULTANT}<Link to={RouteConstants.consultants} /></MenuItem>
      </SubMenu>
    );
  }


  const items = [
    ...Arrays.insertIf(role === ROLE.ADMIN, { name: PAGE_NAME.SHOWROOM_MANAGEMENT, icon: <Apartment />, link: RouteConstants.showrooms }),
    ...Arrays.insertIf(role === ROLE.MANAGER, { name: PAGE_NAME.SHOWROOM_MANAGEMENT, icon: <Apartment />, link: `${RouteConstants.showrooms}/${showroomId}` }),
    { name: PAGE_NAME.BOOKING_MANAGEMENT, icon: <Receipt />, link: RouteConstants.bookings },
    // ...Arrays.insertIf(role === ROLE.ADMIN, { name: PAGE_NAME.PACKAGE_MANAGEMENT, icon: <PhotoCamera />, link: RouteConstants.packages }),
    ...Arrays.insertIf(role === ROLE.ADMIN, { name: PAGE_NAME.STYLE_MANAGEMENT, icon: <Style />, link: RouteConstants.styles }),
    { name: PAGE_NAME.PROFILE, icon: <Person />, link: RouteConstants.profile },
    ...Arrays.insertIf(role === ROLE.ADMIN,{ name: PAGE_NAME.SETTING, icon: <Settings />, link: RouteConstants.setting }),
  ];


  const renderMenuItem = (item) => {
    return (
      <MenuItem key={item.link} icon={item.icon} active={isActive(item.link)}>{item.name} <Link to={item.link} /></MenuItem>
    )
  }

  const renderMenuItems = () => {
    return items.map(item => renderMenuItem(item));
  }

  const renderPackageManagement = () => {
    return (
      <SubMenu title={PAGE_NAME.SERVICE_MANAGEMENT} icon={<RoomService />} defaultOpen={isPackageManagementOpen()}>
        <MenuItem active={isActive(RouteConstants.packages) || isActive(RouteConstants.manager)} icon={<PhotoCamera />}>{PAGE_NAME.PACKAGE_MANAGEMENT} <Link to={RouteConstants.packages} /></MenuItem>
        <MenuItem active={isActive(RouteConstants.additionalItems)} icon={<NewReleases />}>{PAGE_NAME.ADDITIONAL_ITEM_MANAGEMENT}<Link to={RouteConstants.additionalItems} /></MenuItem>
      </SubMenu>
    );
  }

  const renderSideBarContent = () => {
    return (
      <Menu iconShape="square">
        {renderDashboard()}
        {renderUserManagement()}
        {role === ROLE.ADMIN && renderPackageManagement()}
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