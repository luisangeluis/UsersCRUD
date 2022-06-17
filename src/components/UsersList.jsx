import React from 'react';
import User from './User';

const UsersList = ({ users, setShowModal, setUserToUpdate }) => {
  return (
    <div className="user-list row">
      {users &&
        users.map((user) => (
          <User
            user={user}
            key={user.id}
            setShowModal={setShowModal}
            setUserToUpdate={setUserToUpdate}
          />
        ))}
    </div>
  );
};
export default UsersList;
