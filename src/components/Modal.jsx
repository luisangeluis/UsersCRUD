import React, { useEffect } from 'react';
import createUser from '../helpers/createUser';
import { useForm } from 'react-hook-form';
import updateUser from '../helpers/updateUser';

const Modal = ({ setShowModal, userToUpdate }) => {
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    console.log(userToUpdate);
  }, [userToUpdate]);

  const sendInfo = (data) => {
    if (userToUpdate) {
      let id = userToUpdate.id;
      updateUser(id, data);
    } else {
      createUser(data);
    }
  };

  return (
    <div className="my-modal">
      <div className="container d-flex   flex-column">
        <button
          onClick={() => setShowModal(false)}
          className="btn btn-primary align-self-end"
        >
          Cerrar
        </button>
        <div className="card w-50 mx-auto">
          <div className="card-body">
            <form
              className="text-dark text-start"
              onSubmit={handleSubmit(sendInfo)}
            >
              <div className="mb3">
                <label htmlFor="" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  value={userToUpdate && userToUpdate.first_name}
                  className="form-control"
                  {...register('first_name', { required: true })}
                />
              </div>
              <div className="mb3">
                <label htmlFor="" className="form-label">
                  Apellidos
                </label>
                <input
                  type="text"
                  value={userToUpdate && userToUpdate.last_name}
                  className="form-control"
                  {...register('last_name', { required: true })}
                />
              </div>
              <div className="mb3">
                <label htmlFor="" className="form-label">
                  Correo
                </label>
                <input
                  type="text"
                  value={userToUpdate && userToUpdate.email}
                  className="form-control"
                  {...register('email', { required: true })}
                />
              </div>
              <div className="mb3">
                <label htmlFor="" className="form-label">
                  Contraseña
                </label>
                <input
                  type="text"
                  value={userToUpdate && userToUpdate.password}
                  className="form-control"
                  {...register('password', { required: true })}
                />
              </div>
              <div className="mb3">
                <label htmlFor="" className="form-label">
                  Cumpleaños
                </label>
                <input
                  type="date"
                  value={userToUpdate && userToUpdate.birthday}
                  className="form-control"
                  {...register('birthday', { required: true })}
                />
              </div>
              <button className="btn btn-primary">
                {userToUpdate ? 'Actualizar usuario' : 'Crear nuevo usuario'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
