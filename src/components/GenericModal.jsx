import React from 'react';

const GenericModal = ({ modalMessage, setModalMessage }) => {
  return (
    <div className="generic-modal_container">
      <section className="generic-modal rounded-3">
        <p>{modalMessage.message}</p>
        <article className="generic-modal_body">
          <button
            className="btn btn-primary mx-1 mx-md-2"
            onClick={modalMessage.action}
          >
            Yes
          </button>
          <button
            className="btn btn-secondary mx-1 mx-md-2"
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
