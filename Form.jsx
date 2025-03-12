import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const FormPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/response");
  };
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setSelectedOptions((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  return (
    <div className="main-content">
      <h2>Fill the Form</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <textarea
          placeholder="Enter details..."
          className="text-area"
          required
        ></textarea>

        <div className="button-group">
          <button type="button" className="btn reset-btn">
            Clear
          </button>
          <button type="button" className="btn primary-btn">
            Select All
          </button>
        </div>

        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              value="option1"
              onChange={handleCheckboxChange}
            />
            Option 1
          </label>
          <label>
            <input
              type="checkbox"
              value="option2"
              onChange={handleCheckboxChange}
            />
            Option 2
          </label>
          <label>
            <input
              type="checkbox"
              value="option3"
              onChange={handleCheckboxChange}
            />
            Option 3
          </label>
          <label>
            <input
              type="checkbox"
              value="option4"
              onChange={handleCheckboxChange}
            />
            Option 4
          </label>
          <label>
            <input
              type="checkbox"
              value="option5"
              onChange={handleCheckboxChange}
            />
            Option 5
          </label>
        </div>

        <button type="submit" className="btn full-btn">
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default FormPage;
