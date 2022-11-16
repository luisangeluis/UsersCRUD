import React, { useRef } from 'react';

const SwitchView = ({ setView, view }) => {
  const views = ['detail', 'list'];

  const getValueSwitch = (e) => {
    console.log(e.target.value);
    setView(e.target.value);
  };

  return (
    <div className="switch-users col-md-6 rounded d-flex justify-content-center align-items-center mx-auto my-2 my-md-3">
      <p className="text-light fw-bold my-auto">CHANGE VIEW</p>
      {views.map((v) => (
        <section className="form-check mx-1 mx-md-2">
          <input
            className="form-check-input"
            type="radio"
            name="views"
            id={v}
            value={v}
            onChange={(e) => getValueSwitch(e)}
            checked={v === view}
          />
          <label className="form-check-label" htmlFor={v}>
            {v.toLocaleUpperCase()}
          </label>
        </section>
      ))}
    </div>
  );
};

export default SwitchView;
