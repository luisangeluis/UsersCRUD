import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const Modal = ({ setShowModal, createUser, userToUpdate, updateUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <button
          onClick={() => setShowModal(false)}
          className="btn my-3 btn-create align-self-end"
        >
          X Cancel
        </button>
        <div className="card w-50 mx-auto">
          <div className="card-body">
            <form
              className="text-dark text-start"
              onSubmit={handleSubmit(sendInfo)}
            >
              <div className="mb-3 position-relative">
                <label htmlFor="" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={userToUpdate?.first_name}
                  {...register('first_name', {
                    required: 'This field is required',
                  })}
                />
                {errors.first_name && (
                  <p className="alert alert-warning position-absolute">
                    {errors.first_name.message}
                  </p>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Last name
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={userToUpdate?.last_name}
                  {...register('last_name', {
                    required: 'This field is required',
                  })}
                />
                {errors.last_name && (
                  <p className="alert alert-warning position-absolute">
                    {errors.last_name.message}
                  </p>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={userToUpdate?.email}
                  {...register('email', { required: 'This field is required' })}
                />
                {errors.email && (
                  <p className="alert alert-warning position-absolute">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Password
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={userToUpdate?.password}
                  {...register('password', {
                    required: 'This field is required',
                  })}
                />
                {errors.password && (
                  <p className="alert alert-warning position-absolute">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Birthday
                </label>
                <input
                  type="date"
                  className="form-control"
                  defaultValue={userToUpdate?.birthday}
                  {...register('birthday', {
                    required: 'This field is required',
                  })}
                />
                {errors.birthday && (
                  <p className="alert alert-warning position-absolute">
                    {errors.birthday.message}
                  </p>
                )}
              </div>
              <button className="btn btn-create">
                {userToUpdate ? 'Update user' : 'Create user'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
