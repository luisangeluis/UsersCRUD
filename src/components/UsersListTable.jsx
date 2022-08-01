import React from 'react';
import BtnDeleteUser from './BtnDeleteUser';
import BtnUpdateUser from './BtnUpdateUser';

const UsersListTable = ({
  usersToShow,
  deleteUser,
  setModalMessage,
  setUserToUpdate,
  setShowModal,
}) => {
  console.log(usersToShow);
  return (
    <section className="col-12 table-responsive">
      <table className="table table-light table-striped text-center">
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Birthday</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {usersToShow?.map((user) => (
            <tr className="" key={user.id}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.birthday}</td>
              <td>
                <BtnDeleteUser
                  deleteUser={deleteUser}
                  user={user}
                  setModalMessage={setModalMessage}
                />
                <BtnUpdateUser
                  setUserToUpdate={setUserToUpdate}
                  setShowModal={setShowModal}
                  user={user}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default UsersListTable;
