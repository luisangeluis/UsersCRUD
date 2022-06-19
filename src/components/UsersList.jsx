import React from 'react';
import User from './User';

const UsersList = ({ users,setUserToUpdate,setShowModal,deleteUser}) => {
  return (
    <div className="user-list row">
      {users &&
        users.map((user) => (
          <User
            user={user}
            key={user.id}
            setUserToUpdate={setUserToUpdate}  
            setShowModal={setShowModal}  
            deleteUser={deleteUser}        
          />
        ))}
    </div>
  );
};
export default UsersList;
