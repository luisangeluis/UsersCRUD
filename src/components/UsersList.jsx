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
  view,
}) => {
  return (
    <div className="user-list row">
      {usersToShow && view !== 'list' ? (
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
      ) : (
        <UsersListTable
          usersToShow={usersToShow}
          deleteUser={deleteUser}
          setModalMessage={setModalMessage}
          setUserToUpdate={setUserToUpdate}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
};
export default UsersList;
