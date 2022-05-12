import { useState } from "react";

const AddNinja = ({ addNinja }) => {
  const [ninja, setNinja] = useState({ name: null, age: null, belt: null });
  const handleChange = (e) => {
    // console.log(e.target.id, e.target.value);
    setNinja({ ...ninja, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addNinja(ninja);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" onChange={handleChange} />
        <label htmlFor="age">Age:</label>
        <input type="text" id="age" onChange={handleChange} />
        <label htmlFor="belt">Belt:</label>
        <input type="text" id="belt" onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddNinja;
