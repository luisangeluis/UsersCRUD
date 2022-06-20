import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const ModalMessage = ({ setShowModalDelete, userToDelete }) => {
  const { register, handleSubmit } = useForm();

  return (
    <div className="my-modal">
      <div className="container d-flex flex-column justify-content-center mx-auto">
        <div className="card text-center w-50 mx-auto">
          <div className="card-body">
            <div className="card-title">{`El usuario ${userToDelete?.first_name} ${userToDelete?.last_name} se ha eliminado`}</div>
            <button
              onClick={() => setShowModalDelete(false)}
              className="btn btn-primary align-self-center"
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalMessage;
