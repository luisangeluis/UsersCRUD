import axios from 'axios';

const readUsers = (setUsers) => {
  axios
    .get('https://users-crud1.herokuapp.com/users/')
    .then((res) => {
      console.log(res.data);
      setUsers(res.data);
    })
    .catch((error) => console.log(error));
};

export default readUsers;
