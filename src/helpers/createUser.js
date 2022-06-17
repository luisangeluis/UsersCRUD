import axios from 'axios';

const createUser = (data) => {
  console.log(data);
  console.log('metodo create');
  axios
    .post('https://users-crud1.herokuapp.com/users/', data)
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
};

export default createUser;
