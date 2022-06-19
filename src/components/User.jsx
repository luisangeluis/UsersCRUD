import React from 'react';

const User = ({ user,setUserToUpdate,setShowModal,deleteUser}) => {

  const makeSetUserToUpdate=()=>{
    setUserToUpdate(user)
    setShowModal(true);
  }

  // const 
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
          <button onClick={()=>deleteUser(user.id)}>Borrar</button>
          <button onClick={makeSetUserToUpdate}>Editar</button>
        </div>
      </div>
    </div>
  );
};

export default User;
