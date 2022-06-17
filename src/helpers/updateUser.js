import axios from 'axios';
import React from 'react';

const updateUser = (id, data) => {
  console.log('metodo update');

  axios
    .put(`https://users-crud1.herokuapp.com/users/${id}/`, data)
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
};

export default updateUser;
