import React from 'react';
const SearchByName = ({ getUsersByName }) => {
  const onChange = (data) => {
    console.log(data.target.value);
    let value = data.target.value;
    getUsersByName(value);
  };
  return (
    <section className="form-search col-md-6 d-flex justify-content-center align-items-center">
      <form className="d-flex align-items-center">
        <input
          type="text"
          className="form-control"
          onChange={onChange}
          placeholder="Type a name"
        />
        <button className="btn mx-2">Search</button>
      </form>
    </section>
  );
};

export default SearchByName;
