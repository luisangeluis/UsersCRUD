import React from 'react';

const GenericModal = ({ modalMessage, setModalMessage }) => {
  return (
    <div className="container generic-modal_container">
      <section className="generic-modal">
        <p>{modalMessage.message}</p>
        <article className="generic-modal_body">
          <button className="btn btn-primary" onClick={modalMessage.action}>
            Yes
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => setModalMessage(undefined)}
          >
            No
          </button>
        </article>
      </section>
    </div>
  );
};

export default GenericModal;
