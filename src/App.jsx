import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';
import UsersList from './components/UsersList';
import useCrud from './hooks/useCrud';

function App() {
  const [users] = useCrud();
  const [showModal, setShowModal] = useState(false);
  const [userToUpdate, setUserToUpdate] = useState();

  return (
    <div className="App">
      <header></header>
      <main>
        <div className="container">
          <div className="row">
            <button
              onClick={() => setShowModal(true)}
              className="btn btn-primary w-25"
            >
              +Crear nuevo usuario
            </button>
          </div>
          {showModal && (
            <Modal setShowModal={setShowModal} userToUpdate={userToUpdate} />
          )}
          <UsersList
            users={users}
            setShowModal={setShowModal}
            setUserToUpdate={setUserToUpdate}
          />
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
