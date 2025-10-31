import { useState } from "react";

function UseForms() {
  const [formData, setFormData] = useState({
    name: "",
    age: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target; 
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="name">Name: {formData.name}</label>
        <input
          type="text"
          id="name"
          className="form-content"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="age">Age: {formData.age}</label>
        <input
          type="number"
          id="age"
          className="form-content"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default UseForms;