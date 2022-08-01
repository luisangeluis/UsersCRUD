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
    <section className="col-12">
      <table className="table table-responsive text-center my-2 my-md-3">
        <thead className="table-dark">
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
              <td className="">{user.first_name}</td>
              <td className="">{user.last_name}</td>
              <td className="">{user.email}</td>
              <td className="">{user.birthday}</td>
              <td className="">
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
