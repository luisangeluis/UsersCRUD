import React from 'react';

const BtnUpdateUser = ({ setUserToUpdate, setShowModal, user }) => {
  const makeSetUserToUpdate = () => {
    setUserToUpdate(user);
    setShowModal(true);
  };
  return (
    <button
      className="btn btn-light p-1 rounded-2"
      onClick={makeSetUserToUpdate}
    >
      <i className="fa-solid fa-pencil"></i>
    </button>
  );
};

export default BtnUpdateUser;
