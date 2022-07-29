import React from 'react';
import User from './User';

const UsersList = ({
  users,
  setUserToUpdate,
  setShowModal,
  deleteUser,
  setShowModalDelete,
  setUserToDelete,
  setModalMessage,
}) => {
  return (
    <div className="user-list row my-2 my-md-3 m-1">
      {users &&
        users.map((user) => (
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
        ))}
    </div>
  );
};
export default UsersList;
