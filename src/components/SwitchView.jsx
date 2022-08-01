import React, { useRef } from 'react';

const SwitchView = ({ setView, view }) => {
  const views = ['detail', 'list'];

  const getValueSwitch = (e) => {
    console.log(e.target.value);
    setView(e.target.value);
  };

  return (
    <div className="switch-users col-md-6 bg-light rounded d-flex justify-content-center align-items-center">
      {views.map((v) => (
        <>
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
            {v}
          </label>
        </>
      ))}
    </div>
  );
};

export default SwitchView;
