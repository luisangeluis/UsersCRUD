import React from 'react';

const User = ({
  user,
  setUserToUpdate,
  setShowModal,
  deleteUser,
  setShowModalDelete,
  setUserToDelete,
  setModalMessage,
  setShowGenericModal,
}) => {
  const makeSetUserToUpdate = () => {
    setUserToUpdate(user);
    setShowModal(true);
  };

  const makeSetUserToDelete = () => {
    const messageObject = {
      message: 'Are you sure to delete user',
      action: () => {
        deleteUser(user.id);
        setModalMessage(undefined);
      },
    };
    // setShowGenericModal(true);
    setModalMessage(messageObject);
    // setUserToDelete(user);
    // setShowModalDelete(true);
    // deleteUser(user.id);
  };

  return (
    <div className="col-md-6 col-lg-4 my-2 my-md-3">
      <div className="card p-2 p-md-3 rounded-2">
        <img src="" alt="" />
        <div className="card-body d-flex flex-column align-items-start justify-content-start">
          <div className="title">
            Name:<b> {`${user.first_name} ${user.last_name}`}</b>
          </div>
          <div className="text">
            Email <b>{user.email}</b>
          </div>
          <div className="text">
            Birthday <b>{user.birthday}</b>
          </div>
        </div>
        <div className="card-fotter text-end">
          <button
            onClick={() => {
              makeSetUserToDelete();
            }}
            className="rounded-2 mx-2 p-1 btn btn-danger"
          >
            <i className="fa-solid fa-trash-can"></i>
          </button>
          <button
            onClick={makeSetUserToUpdate}
            className="rounded-2 p-1 btn btn-outline-secondary"
          >
            <i className="fa-solid fa-pencil"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
