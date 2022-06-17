import { useEffect, useState } from 'react';
import readUsers from '../helpers/readUsers.js';
const useCrud = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    readUsers(setUsers);
  }, []);

  return [users];
};
export default useCrud;
