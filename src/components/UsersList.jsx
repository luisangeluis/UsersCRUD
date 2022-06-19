import React from 'react';
import User from './User';

const UsersList = ({ users,setUserToUpdate,setShowModal}) => {
  return (
    <div className="user-list row">
      {users &&
        users.map((user) => (
          <User
            user={user}
            key={user.id}
            setUserToUpdate={setUserToUpdate}  
            setShowModal={setShowModal}          
          />
        ))}
    </div>
  );
};
export default UsersList;
