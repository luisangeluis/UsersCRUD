import React from 'react';

const Modal = ({ setShowModal }) => {
  return (
    <div className="my-modal">
      <div className="container">MODAL</div>
      <button onClick={() => setShowModal(false)}>Cerrar</button>
    </div>
  );
};

export default Modal;
