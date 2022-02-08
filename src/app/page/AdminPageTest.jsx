import React from 'react';
const AdminPageTest = ({ user }) => {
  document.title = 'Admin page test';
  return (
    <>
      <div>
        Hello, {user.firstname} {user.lastname}
      </div>
      <div>
        Role, {user.role}
      </div>
    </>
  )
};

export default AdminPageTest;