import React from 'react';
import queryString from 'query-string';
const ActiveAccount = (props) => {
  const query = queryString.parse(props.location.search);
  const { token } = query;
  return (
    <div>

    </div>
  );
}

export default ActiveAccount;