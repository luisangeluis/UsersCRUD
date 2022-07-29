import React from 'react';
const SearchByName = ({ getUsersByName }) => {
  const onChange = (data) => {
    console.log(data.target.value);
    let value = data.target.value;
    getUsersByName(value);
  };
  return (
    <section className="row">
      <div className="col-12">
        <form className="">
          <div className="mb-3">
            <input type="text" className="" onChange={onChange} />
            <button className="btn btn-primary">Search</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchByName;
