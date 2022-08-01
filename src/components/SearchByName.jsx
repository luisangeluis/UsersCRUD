import React from 'react';
const SearchByName = ({ getUsersByName }) => {
  const onChange = (data) => {
    console.log(data.target.value);
    let value = data.target.value;
    getUsersByName(value);
  };
  return (
    <section className="form-search row">
      <div className="col-md-6">
        <form className="">
          <div className="mb-3 d-flex">
            <input type="text" className="form-control" onChange={onChange} placeholder="Type a name"/>
            <button className="btn btn-sm mx-2">Search</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchByName;
