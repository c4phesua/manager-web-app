import React from 'react';
const Error = ({ message = '404 not found'}) => {
  document.title = 'Error';
  return (
    <div>
      {message}
    </div>
  )
};

export default Error;