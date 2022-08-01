import React from 'react';

const BtnUpdateUser = ({ setUserToUpdate, setShowModal, user }) => {
  const makeSetUserToUpdate = () => {
    setUserToUpdate(user);
    setShowModal(true);
  };
  return (
    <button className="btn btn-primary mx-1" onClick={makeSetUserToUpdate}>
      <i className="fa-solid fa-pencil"></i>
    </button>
  );
};

export default BtnUpdateUser;
