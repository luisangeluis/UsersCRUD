import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const Modal = ({ setShowModal, createUser, userToUpdate, updateUser }) => {
  const schema = yup.object().shape({
    first_name: yup.string().required('Name is required'),
    last_name: yup.string().required('Last name is required'),
    email: yup.string().required('Email is required').email('Email is invalid'),
    password: yup.string().required('Password is required'),
    birthday: yup.string().required('Birthday is required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

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
          <i class="fa-sharp fa-solid fa-xmark p-1"></i>
          Cancel
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
                  {...register('first_name')}
                />
                {errors.first_name && (
                  <p className="alert m-0 p-1 d-inline position-absolute text-light">
                    <i class="fa-solid fa-circle-exclamation color-red p-1"></i>
                    {errors.first_name?.message}
                  </p>
                )}
              </div>
              <div className="mb-3 position-relative">
                <label htmlFor="" className="form-label">
                  Last name
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={userToUpdate?.last_name}
                  {...register('last_name')}
                />
                {errors.last_name && (
                  <p className="alert text-light m-0 p-1 d-inline position-absolute">
                    <i class="fa-solid fa-circle-exclamation color-red p-1"></i>
                    {errors.last_name?.message}
                  </p>
                )}
              </div>
              <div className="mb-3 position-relative">
                <label htmlFor="" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  defaultValue={userToUpdate?.email}
                  {...register('email')}
                />
                {errors.email && (
                  <p className="alert text-light m-0 p-1 d-inline position-absolute">
                    <i class="fa-solid fa-circle-exclamation color-red p-1"></i>
                    {errors.email?.message}
                  </p>
                )}
              </div>
              <div className="mb-3 position-relative">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="password"
                  defaultValue={userToUpdate?.password}
                  {...register('password')}
                />
                {errors.password && (
                  <p className="alert text-light m-0 p-1 d-inline position-absolute">
                    <i class="fa-solid fa-circle-exclamation color-red p-1"></i>
                    {errors.password?.message}
                  </p>
                )}
              </div>
              <div className="mb-3 position-relative">
                <label htmlFor="" className="form-label">
                  Birthday
                </label>
                <input
                  type="date"
                  className="form-control"
                  defaultValue={userToUpdate?.birthday}
                  {...register('birthday')}
                />
                {errors.birthday && (
                  <p className="alert text-light m-0 p-1 d-inline position-absolute">
                    <i class="fa-solid fa-circle-exclamation color-red p-1"></i>
                    {errors.birthday?.message}
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
