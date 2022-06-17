import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';
import UsersList from './components/UsersList';
import useCrud from './hooks/useCrud';

function App() {
  const [users] = useCrud();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <header></header>
      <main>
        <div className="container">
          <div className="row">
            <button onClick={() => setShowModal(!showModal)}>
              +Crear nuevo usuario
            </button>
          </div>
          {showModal && <Modal setShowModal={setShowModal} />}
          <UsersList users={users} />
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
