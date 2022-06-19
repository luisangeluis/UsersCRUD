import { useEffect, useState } from 'react';
import axios from 'axios';
const useCrud = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    readUsers();
  }, []);
  
  const readUsers = () => {
    axios
      .get('https://users-crud1.herokuapp.com/users/')
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((error) => console.log(error));
  };

  const createUser = (data) => {
    console.log(data);
    console.log('metodo create');
    axios
      .post('https://users-crud1.herokuapp.com/users/', data)
      .then((res) => console.log(res))
      .catch((error) => console.log(error))
      .finally(()=>readUsers());
  };

  const updateUser = (id, data) => {
    console.log('metodo update');
  
    axios
      .put(`https://users-crud1.herokuapp.com/users/${id}/`, data)
      .then((res) => console.log(res))
      .catch((error) => console.log(error))
      .finally(()=>readUsers());
      
  };

  const deleteUser = (id) => {
    axios
      .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(()=>readUsers());
      
  };

  return [users,createUser,updateUser,deleteUser];
};
export default useCrud;
