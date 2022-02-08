import React from 'react';
const ManagerPageTest = ({ user }) => {
  document.title = 'Manager page test';
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

export default ManagerPageTest;