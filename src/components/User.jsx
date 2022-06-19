import React from 'react';

const User = ({ user,setUserToUpdate,setShowModal,deleteUser}) => {

  const makeSetUserToUpdate=()=>{
    setUserToUpdate(user)
    setShowModal(true);
  }

  // const 
  return (
    <div className="col-md-4 my-2 my-md-3">
      <div className="card p-2 p-md-3 rounded-2">
        <img src="" alt="" />
        <div className="card-body">
          <div className="title">{`${user.first_name} ${user.last_name}`}</div>
          <div className="text">CORREO {user.email}</div>
          <div className="text">CUMPLEAÑOS {user.birthday}</div>
        </div>
        <div className="card-fotter text-end">
          <button onClick={()=>deleteUser(user.id)} className="rounded-2 mx-2 p-1 btn btn-danger"><i className="fa-solid fa-trash-can"></i></button>
          <button onClick={makeSetUserToUpdate} className="rounded-2 p-1 btn btn-outline-secondary"><i className="fa-solid fa-pencil"></i></button>
        </div>
      </div>
    </div>
  );
};

export default User;
