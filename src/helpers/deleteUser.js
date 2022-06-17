import axios from 'axios';
import React from 'react';

const deleteUser = (id) => {
  axios
    .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};
export default deleteUser;
