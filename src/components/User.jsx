import React from 'react';

const User = ({ user }) => {
  return (
    <div className="col">
      <div className="card">
        <img src="" alt="" />
        <div className="card-body">
          <div className="title">{`${user.first_name} ${user.last_name}`}</div>
          <div className="text">CORREO {user.email}</div>
          <div className="text">CUMPLEAÑOS {user.birthday}</div>
        </div>
        <div className="card-fotter"></div>
      </div>
    </div>
  );
};

export default User;
