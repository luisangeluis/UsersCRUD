import React from 'react';

const User = ({ user, setShowModal, setUserToUpdate }) => {
  const makeUserToUpdate = () => {
    const object = {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      password: user.password,
      birthday: user.birthday,
    };

    console.log(object);
    setUserToUpdate(object);
  };

  return (
    <div className="col-md-4">
      <div className="card">
        <img src="" alt="" />
        <div className="card-body">
          <div className="title">{`${user.first_name} ${user.last_name}`}</div>
          <div className="text">CORREO {user.email}</div>
          <div className="text">CUMPLEAÑOS {user.birthday}</div>
        </div>
        <div className="card-fotter">
          <button
            onClick={() => {
              setShowModal(true), makeUserToUpdate();
            }}
          >
            Editar
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
