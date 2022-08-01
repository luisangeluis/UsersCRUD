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
  const [showAsTable, setShowAsTable] = useState(false);

  return (
    <div className="user-list row">
      {usersToShow && !showAsTable ? (
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
          // user={user}
          setModalMessage={setModalMessage}
          setUserToUpdate={setUserToUpdate}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
};
export default UsersList;
