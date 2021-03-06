import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const Modal = ({ setShowModal, createUser, userToUpdate, updateUser }) => {
  const { register, handleSubmit } = useForm();

  const sendInfo = (data) => {
    console.log(data);

    if (userToUpdate) {
      updateUser(userToUpdate.id, data);
    } else {
      createUser(data);
    }
    setShowModal(false);
  };

  return (
    <div className="my-modal">
      <div className="container d-flex flex-column justify-content-center mx-auto">
        <button
          onClick={() => setShowModal(false)}
          className="btn align-self-end my-3 btn-create"
        >
          X Cancelar
        </button>
        <div className="card w-50 mx-auto">
          <div className="card-body">
            <form
              className="text-dark text-start"
              onSubmit={handleSubmit(sendInfo)}
            >
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={userToUpdate?.first_name}
                  {...register('first_name', { required: true })}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Apellidos
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={userToUpdate?.last_name}
                  {...register('last_name', { required: true })}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Correo
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={userToUpdate?.email}
                  {...register('email', { required: true })}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Contrase??a
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={userToUpdate?.password}
                  {...register('password', { required: true })}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Cumplea??os
                </label>
                <input
                  type="date"
                  className="form-control"
                  defaultValue={userToUpdate?.birthday}
                  {...register('birthday', { required: true })}
                />
              </div>
              <button className="btn btn-create">
                {userToUpdate ? 'Actualizar usuario' : 'Crear usuario'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
