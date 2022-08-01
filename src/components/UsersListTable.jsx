import React from 'react';

const UsersListTable = ({ usersToShow }) => {

  console.log(usersToShow);
  return (
    <section className='col-12 table-responsive'>
      <table className='table table-light table-striped text-center'>
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
          {
            usersToShow?.map(user => (
              <tr className="">
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>{user.birthday}</td>
                <td>
                  <button className="btn btn-danger mx-1">
                    <i className="fa-solid fa-trash-can"></i>
                  </button>
                  <button className="btn btn-primary mx-1">
                    <i className="fa-solid fa-pencil"></i>
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>

        <tr></tr>
      </table>
    </section>
  )

}

export default UsersListTable;