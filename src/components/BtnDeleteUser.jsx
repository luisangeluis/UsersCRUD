import React from 'react';

const BtnDeleteUser = ({ deleteUser, user, setModalMessage }) => {
  const makeSetUserToDelete = () => {
    const messageObject = {
      message: 'Are you sure to delete user',
      action: () => {
        deleteUser(user.id);
        setModalMessage(undefined);
      },
    };
    setModalMessage(messageObject);
  };
  return (
    <button
      onClick={makeSetUserToDelete}
      className="rounded-2 p-1 btn btn-danger mx-2"
    >
      <i className="fa-solid fa-trash-can"></i>
    </button>
  );
};

export default BtnDeleteUser;
