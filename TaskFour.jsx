import React, { useState } from "react";



function TaskFour() {
  const [productName, setproductName] = useState("");
  const [productPrice, setproductPrice] = useState("");
  const [productsList, setproductsList] = useState([]);
  const [totalPrice, settotalPrice] = useState(0);

  const handleChangeOne = (e) => {
    setproductName(e.target.value);
  };
  const handleChangeTwo = (e) => {
    setproductPrice(e.target.value);
  };
  const handleSubmit = () => {
    if (productName.trim() !== "" && !isNaN(productPrice)) {
      const newProduct = {
        name: productName,
        price: parseFloat(productPrice),
      };
      setproductsList([...productsList, newProduct]);
      settotalPrice(totalPrice + parseFloat(productPrice));
      setproductName("");
      setproductPrice("");
    }
  };
  return (
    <div>
      <input type="text" value={productName} onChange={handleChangeOne} />
      <input type="text" value={productPrice} onChange={handleChangeTwo} />
      <button onClick={handleSubmit}>Add</button>
      {productsList.map((ele, index) => (
        <h4 key={index}>
        {`  Product : ${ele.name} | Price : ${ele.price}`}
        </h4>
      ))}
      <h4>Total Price : {totalPrice}</h4>
    </div>
  );
}

export default TaskFour;
