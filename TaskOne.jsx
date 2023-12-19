import React, { useState } from "react";

function TaskOne() {
  const [inputValue, setInputValue] = useState("");
  const [evenArray, setEvenArray] = useState([]);
  const [oddArray, setOddArray] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = () => {
    const number = parseInt(inputValue);
    if (number) {
      if (number % 2 === 0) {
        setEvenArray([...evenArray, number]);
      } else {
        setOddArray([...oddArray, number]);
      }
      setInputValue("")
    }
  };
  return (
    <div>
      <input type="text" onChange={handleChange} value={inputValue} />
      <button onClick={handleSubmit}>Add</button>
      <h1>Even Numbers</h1>
      {evenArray.map((ele, index) => (
        
          <li key={index}>{ele}</li>
        
      ))}
      <h1>Odd Numbers</h1>
      {oddArray.map((ele, index) => (
        
          <li key={index}>{ele}</li>
      ))}
    </div>
  );
}

export default TaskOne;
