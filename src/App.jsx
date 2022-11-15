import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import GenericModal from './components/GenericModal';
import Modal from './components/Modal';
import ModalMessage from './components/ModalMessage';
import SearchByName from './components/SearchByName';
import SwitchView from './components/SwitchView';
import UsersList from './components/UsersList';
import useCrud from './hooks/useCrud';

import { setLoader } from './store/slices/loader.slice';

// Documentation api
// https://users-crud1.herokuapp.com/swagger/

function App() {
  const dispatch = useDispatch();
  //Custom hook
  const [users, createUser, updateUser, deleteUser] = useCrud();
  const [usersToShow, setUsersToShow] = useState();
  const [showModal, setShowModal] = useState(false);
  const [userToUpdate, setUserToUpdate] = useState();
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [userToDelete, setUserToDelete] = useState();
  //Message for the generic GenericModal
  const [modalMessage, setModalMessage] = useState();
  //Change view
  const [view, setView] = useState('detail');

  useEffect(() => {
    dispatch(setLoader(false));
    if (users) {
      setUsersToShow(users);
    }
  }, [users]);

  const getUsersByName = (name) => {
    let nameValue = name.trim();
    if (users) {
      const usersFound = users.filter((user) => {
        let completedName = `${user.first_name} ${user.last_name}`;
        console.log(completedName);

        // return user.first_name.includes(name) || user.last_name.includes(name)
        return completedName.includes(nameValue.toLowerCase());
      });
      console.log(usersFound);

      setUsersToShow(usersFound);
    }
  };

  return (
    //Generic Modal
    <div className="App">
      {modalMessage && (
        <GenericModal
          modalMessage={modalMessage}
          setModalMessage={setModalMessage}
        />
      )}

      <header className="header">
        <div className="container mb-2 mb-md-3 rounded-2  py-2 py-md-3">
          <div className="row text-center justify-content-start align-items-center">
            <div className="col-md-6 text-md-start">
              <h1 className="fw-bold text-white">Users</h1>
            </div>
            <div className="col-md-6 text-md-end">
              <button
                className="btn btn-create"
                onClick={() => {
                  setShowModal(true), setUserToUpdate();
                }}
              >
                Create new user
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
        {/* {showModalDelete && (
          <ModalMessage
            setShowModalDelete={setShowModalDelete}
            userToDelete={userToDelete}
          />
        )} */}
        <div className="container">
          <div className="row filters">
            <SearchByName getUsersByName={getUsersByName} />
            <SwitchView setView={setView} view={view} />
          </div>
          {users && (
            <UsersList
              usersToShow={usersToShow}
              setUserToUpdate={setUserToUpdate}
              setShowModal={setShowModal}
              deleteUser={deleteUser}
              setShowModalDelete={setShowModalDelete}
              setUserToDelete={setUserToDelete}
              setModalMessage={setModalMessage}
              view={view}
            />
          )}
        </div>
      </main>
      {/* <footer></footer> */}
    </div>
  );
}

export default App;
