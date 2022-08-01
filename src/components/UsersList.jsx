import React, { useState } from 'react';
import User from './User';
import UsersListTable from './UsersListTable';

const UsersList = ({
  usersToShow,
  setUserToUpdate,
  setShowModal,
  deleteUser,
  setShowModalDelete,
  setUserToDelete,
  setModalMessage,
}) => {

  const [showAsTable,setShowAsTable] =useState(true);
  
  return (
    <div className="user-list row">
      {
        usersToShow && !showAsTable
        ?
        usersToShow.map((user) => (
          <User
            user={user}
            key={user.id}
            setUserToUpdate={setUserToUpdate}
            setShowModal={setShowModal}
            deleteUser={deleteUser}
            setShowModalDelete={setShowModalDelete}
            setUserToDelete={setUserToDelete}
            setModalMessage={setModalMessage}
          />
        ))
        :<UsersListTable usersToShow={usersToShow}/>
      }
      
    </div>
  );
};
export default UsersList;
