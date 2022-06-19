import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';
import UsersList from './components/UsersList';
import useCrud from './hooks/useCrud';

function App() {
  const [users, createUser, updateUser, deleteUser] = useCrud();
  const [showModal, setShowModal] = useState(false);
  const [userToUpdate, setUserToUpdate] = useState();

  return (
    <div className="App">
      <header className='header'>
        <div className="container mb-2 mb-md-3 rounded-2">
          <div className="row text-center justify-content-center align-items-center">
            <div className="col-md-6 text-md-start"><h1 className='fw-bold'>Usuarios</h1></div>
            <div className="col-md-6 text-md-end" >
              <button className="btn btn-create" onClick={() => { setShowModal(true), setUserToUpdate() }}>Crear nuevo usuario</button>
            </div>
          </div>
        </div>
      </header>
      <main>
        {showModal && (
          <Modal setShowModal={setShowModal} createUser={createUser} userToUpdate={userToUpdate} updateUser={updateUser} />
        )}
        <div className="container">

          <UsersList users={users} setUserToUpdate={setUserToUpdate} setShowModal={setShowModal} deleteUser={deleteUser} />
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
