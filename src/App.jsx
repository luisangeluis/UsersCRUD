import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';
import UsersList from './components/UsersList';
import useCrud from './hooks/useCrud';

function App() {
  const [users,createUser,updateUser] = useCrud();
  const [showModal, setShowModal] = useState(false);
  const [userToUpdate,setUserToUpdate] = useState();

  return (
    <div className="App">
      <header></header>
      <main>
        <div className="container">
          <div className="row">
            <button onClick={()=>{setShowModal(true), setUserToUpdate()}}>Crear nuevo usuario</button>
          </div>
          {showModal && (
            <Modal setShowModal={setShowModal} createUser={createUser} userToUpdate={userToUpdate} updateUser={updateUser}/>
          )}
          <UsersList users={users} setUserToUpdate={setUserToUpdate} setShowModal={setShowModal}/>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
