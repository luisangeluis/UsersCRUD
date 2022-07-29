import { useEffect, useState } from 'react';
import './App.css';
import GenericModal from './components/GenericModal';
import Modal from './components/Modal';
import ModalMessage from './components/ModalMessage';
import UsersList from './components/UsersList';
import useCrud from './hooks/useCrud';

function App() {
  const [users, createUser, updateUser, deleteUser] = useCrud();
  const [showModal, setShowModal] = useState(false);
  const [userToUpdate, setUserToUpdate] = useState();
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [userToDelete, setUserToDelete] = useState();
  //Message for the generic GenericModal
  const [modalMessage, setModalMessage] = useState();
  //Generic Generic GenericModal
  // const [showGenericModal, setShowGenericModal] = useState(false);
  return (
    <div className="App">
      {modalMessage && (
        <GenericModal
          modalMessage={modalMessage}
          setModalMessage={setModalMessage}
        />
      )}

      <header className="header">
        <div className="container   mb-2 mb-md-3 rounded-2  py-2 py-md-3">
          <div className="row text-center justify-content-center align-items-center">
            <div className="col-md-6 text-md-start">
              <h1 className="fw-bold text-white">Usuarios</h1>
            </div>
            <div className="col-md-6 text-md-end">
              <button
                className="btn btn-create"
                onClick={() => {
                  setShowModal(true), setUserToUpdate();
                }}
              >
                Crear nuevo usuario
              </button>
            </div>
          </div>
        </div>
      </header>
      <main>
        {showModal && (
          <Modal
            setShowModal={setShowModal}
            createUser={createUser}
            userToUpdate={userToUpdate}
            updateUser={updateUser}
          />
        )}
        {showModalDelete && (
          <ModalMessage
            setShowModalDelete={setShowModalDelete}
            userToDelete={userToDelete}
          />
        )}
        <div className="container">
          <UsersList
            users={users}
            setUserToUpdate={setUserToUpdate}
            setShowModal={setShowModal}
            deleteUser={deleteUser}
            setShowModalDelete={setShowModalDelete}
            setUserToDelete={setUserToDelete}
            setModalMessage={setModalMessage}
            // setShowGenericModal={setShowGenericModal}
          />
        </div>
      </main>
      {/* <footer></footer> */}
    </div>
  );
}

export default App;
