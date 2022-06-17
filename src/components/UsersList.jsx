import React from 'react';
import User from './User';

const UsersList = ({ users }) => {
  return (
    <div className="user-list row row-cols-lg-3">
      {users && users.map((user) => <User user={user} key={user.id} />)}
    </div>
  );
};
export default UsersList;
