import React, { useState } from "react";

function TaskTwo() {
  const [inputValue, setInputValue] = useState("");
  const [numberArray, setNumberArray] = useState([]);
  const [stringArray, setStringArray] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    const value = inputValue.trim();
    if (value !== "") {
      if (!isNaN(value)) {
        setNumberArray([...numberArray, parseFloat(value)]);
      } else {
        setStringArray([...stringArray, value]);
      }
      setInputValue("");
    }
  };

  return (
    <div>
      <input type="text" onChange={handleChange} value={inputValue} />
      <button onClick={handleSubmit}>Add</button>
      <div>
        <h1>Number Array</h1>
          {numberArray.map((ele, index) => (
            <li key={index}>{ele}</li>
          ))}
      </div>
      <div>
        <h1>String Array</h1>
          {stringArray.map((ele, index) => (
            <li key={index}>{ele}</li>
          ))}
      </div>
    </div>
  );
}

export default TaskTwo;